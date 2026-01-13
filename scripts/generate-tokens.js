
const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '../Assets/Variables');
const STYLES_DIR = path.join(__dirname, '../src/styles');

// Output Maps: Category -> Array of CSS lines
const outputs = {
    colors: [],     // 'colors.css'
    numbers: [],    // 'numbers.css'
    effects: [],    // 'effects.css'
    typography: [], // 'typography.css'
};

const outputsDark = {
    colors: [],
    numbers: [],
    effects: [],
    typography: [],
};

// Map to store 'Path/To/Variable' -> '--path-to-variable'
const primitiveVarMap = new Map();

// Helper: Normalize variable names
function toCssVarName(pathParts) {
    return '--' + pathParts
        .map(p => p.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''))
        .join('-');
}

// Helper: Process a single token node
function processToken(obj, pathParts, collectFn) {
    const varName = toCssVarName(pathParts);
    const lookupKey = pathParts.join('/');
    primitiveVarMap.set(lookupKey, varName);

    let value = '';

    // 1. Color
    if (obj.$value.hex || obj.$value.colorSpace) {
        if (obj.$value.hex) {
            value = obj.$value.hex;
        } else if (obj.$value.colorSpace === 'srgb') {
            const [r, g, b] = obj.$value.components.map(c => Math.round(c * 255));
            const alpha = obj.$value.alpha !== undefined ? obj.$value.alpha : 1;
            value = alpha < 1 ? `rgba(${r}, ${g}, ${b}, ${alpha})` : `rgb(${r}, ${g}, ${b})`;
        }
    }
    // 2. Number (Spacing, Radius, Size, etc.)
    else if (obj.$type === 'number') {
        // Heuristic: If it looks like a semantic line-height unitless?
        // Usually design tokens for spacing/size are px.
        // Font sizes are px.
        // Line heights in Figma are usually px or %.
        // We will default to px unless we detect otherwise, or leave raw if it's very small?
        // Safest for "tokens" from Figma is often px for layout.
        value = `${obj.$value}px`;
    }
    // 3. String (Font family, Font weight, etc.)
    else if (obj.$type === 'string') {
        value = obj.$value;
        // Quote font families if needed? 
        // e.g. "Inter" -> Inter. 
    }
    // 4. Fallback
    else if (typeof obj.$value === 'string' || typeof obj.$value === 'number') {
        value = obj.$value.toString();
        if (typeof obj.$value === 'number') {
            // Only add px if not unitless property
            // But hard to know property from here.
            value += 'px';
        }
    }

    if (value) {
        collectFn(`  ${varName}: ${value};`);
    }
}

// Recursive traversals
function traverse(obj, pathParts, collectFn) {
    if (obj.$value !== undefined) {
        processToken(obj, pathParts, collectFn);
        return;
    }
    for (const key in obj) {
        if (key.startsWith('$') || key === 'com.figma.variableId') continue;
        traverse(obj[key], [...pathParts, key], collectFn);
    }
}

function traverseSemantic(obj, pathParts, collectFn) {
    if (obj.$value !== undefined) {
        const varName = toCssVarName(pathParts);
        let value = '';

        // Alias
        const aliasData = obj.$extensions?.['com.figma.aliasData'];
        if (aliasData && aliasData.targetVariableName) {
            const targetPath = aliasData.targetVariableName;
            if (primitiveVarMap.has(targetPath)) {
                value = `var(${primitiveVarMap.get(targetPath)})`;
            }
        }

        // Raw fallback
        if (!value) {
            processToken(obj, pathParts, (l) => { value = l.split(': ')[1].replace(';', ''); });
        }

        if (value) {
            collectFn(`  ${varName}: ${value};`);
        }
        return;
    }

    for (const key in obj) {
        if (key.startsWith('$')) continue;
        traverseSemantic(obj[key], [...pathParts, key], collectFn);
    }
}

// Determine Category based on File + Path
function getCategory(filename, pathParts) {
    const lowerFile = filename.toLowerCase();

    // Explicit files
    if (lowerFile.includes('spacing') ||
        lowerFile.includes('radius') ||
        lowerFile.includes('width') ||
        lowerFile.includes('container')) {
        return 'numbers';
    }
    if (lowerFile.includes('typography') || lowerFile.includes('typorgaphy')) {
        return 'typography';
    }

    // Primitives / Semantics (Colors/Effects)
    if (pathParts.some(p => p.toLowerCase() === 'effects' || p.toLowerCase().includes('shadow'))) {
        return 'effects';
    }

    // Default to colors for Primitives/Modes unless specified
    if (pathParts[0] === 'Colors' || lowerFile.includes('color')) {
        return 'colors';
    }

    // Fallback
    return 'numbers';
}

// MAIN
try {
    const files = fs.readdirSync(ASSETS_DIR);

    // We need to process Primitives FIRST to ensure map is populated for aliases
    const primitiveFiles = files.filter(f => f.endsWith('.json') && !f.includes('mode.tokens.json'));
    const semanticFiles = files.filter(f => f.endsWith('.json') && f.includes('mode.tokens.json'));

    // 1. Process Primitives
    primitiveFiles.forEach(file => {
        const content = JSON.parse(fs.readFileSync(path.join(ASSETS_DIR, file), 'utf8'));
        traverse(content, [], (line) => {
            // Extract varName to find path? traverse callbacks don't give clean path access easily unless we change signature.
            // Let's change traverse signature or just use the line logic?
            // Wait, traverse is generic.
            // I need to know the path inside traverse to categorize.
            // I will modify logic inside traverse to categorize on the fly.
        });
    });

    // Re-write traversal execution to handle categorization:

    function runTraversal(file, isSemantic) {
        const content = JSON.parse(fs.readFileSync(path.join(ASSETS_DIR, file), 'utf8'));
        const isDark = file.toLowerCase().includes('dark');

        const visitor = (obj, pathParts) => {
            if (obj.$value !== undefined) {
                const category = getCategory(file, pathParts);
                const targetObj = isDark ? outputsDark : outputs;

                if (isSemantic) {
                    traverseSemantic(obj, pathParts, (line) => targetObj[category].push(line));
                } else {
                    processToken(obj, pathParts, (line) => targetObj[category].push(line));
                }
                return; // Stop at token
            }

            for (const key in obj) {
                if (key.startsWith('$') || key === 'com.figma.variableId') continue;
                visitor(obj[key], [...pathParts, key]);
            }
        };

        visitor(content, []);
    }

    // Execute Primitives
    primitiveFiles.forEach(f => runTraversal(f, false));

    // Execute Semantic
    semanticFiles.forEach(f => runTraversal(f, true));

    // Write Files
    ['colors', 'numbers', 'effects', 'typography'].forEach(cat => {
        const lines = outputs[cat];
        const darkLines = outputsDark[cat];

        if (lines.length === 0 && darkLines.length === 0) return;

        let fileContent = `/* ${cat.toUpperCase()} TOKENS */\n:root {\n`;
        fileContent += lines.join('\n');
        fileContent += '\n}\n';

        if (darkLines.length > 0) {
            fileContent += '\n[data-theme="dark"] {\n';
            fileContent += darkLines.join('\n');
            fileContent += '\n}\n';
        }

        fs.writeFileSync(path.join(STYLES_DIR, `${cat}.css`), fileContent);
        console.log(`Generated ${cat}.css`);
    });

} catch (err) {
    console.error("Error:", err);
}
