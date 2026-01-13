/**
 * Script to parse Figma JSON exports and generate TypeScript token files
 * This ensures 100% accuracy with the Figma design system
 */

const fs = require('fs');
const path = require('path');

// Read JSON files
const primitives = JSON.parse(fs.readFileSync('./Assets/_Primitives/Style.tokens.json', 'utf8'));
const lightMode = JSON.parse(fs.readFileSync('./Assets/1. Color modes/Light mode.tokens.json', 'utf8'));
const darkMode = JSON.parse(fs.readFileSync('./Assets/1. Color modes/Dark mode.tokens.json', 'utf8'));
const radius = JSON.parse(fs.readFileSync('./Assets/2. Radius/Mode 1.tokens.json', 'utf8'));
const spacing = JSON.parse(fs.readFileSync('./Assets/3. Spacing/Mode 1.tokens.json', 'utf8'));
const widths = JSON.parse(fs.readFileSync('./Assets/4. Widths/Mode 1.tokens.json', 'utf8'));
const containers = JSON.parse(fs.readFileSync('./Assets/5. Containers/Value.tokens.json', 'utf8'));
const typography = JSON.parse(fs.readFileSync('./Assets/6. Typography/Value.tokens.json', 'utf8'));

// Helper to convert hex to lowercase for consistency
const normalizeHex = (hex) => hex.toUpperCase();

// Generate primitives.ts
function generatePrimitives() {
    let output = `/**
 * Primitive Design Tokens
 * 
 * Auto-generated from Figma JSON export.
 * These are the foundational values extracted directly from Figma.
 */

`;

    const colors = primitives.Colors;

    // Process each color group
    for (const [groupName, groupColors] of Object.entries(colors)) {
        const varName = groupName.toLowerCase().replace(/[^a-z0-9]/g, '');

        output += `// ============================================================================\n`;
        output += `// ${groupName.toUpperCase()}\n`;
        output += `// ============================================================================\n\n`;
        output += `export const ${varName} = {\n`;

        for (const [shade, data] of Object.entries(groupColors)) {
            if (shade === '$extensions') continue;
            const hex = data.$value.hex;
            output += `    ${shade}: '${normalizeHex(hex)}',\n`;
        }

        output += `} as const;\n\n`;
    }

    // Export all
    output += `export const primitiveColors = {\n`;
    for (const groupName of Object.keys(colors)) {
        const varName = groupName.toLowerCase().replace(/[^a-z0-9]/g, '');
        output += `    ${varName},\n`;
    }
    output += `} as const;\n`;

    return output;
}

console.log('Parsing JSON files and generating TypeScript...');
console.log('Generated primitives.ts');

const primitivesContent = generatePrimitives();
fs.writeFileSync('./src/tokens/primitives-generated.ts', primitivesContent);

console.log('✓ Complete! Check src/tokens/primitives-generated.ts');
