const fs = require('fs');
const path = require('path');

const ICONS_ROOT = path.join(__dirname, '../Assets/Icons/Outline Icons');
const MISC_ROOT = path.join(__dirname, '../Assets/Misc Icons');
const COMPANY_ROOT = path.join(__dirname, '../Assets/Company logos');
const OUT_DIR = path.join(__dirname, '../src/components/icons');

// Clean output directory first
if (fs.existsSync(OUT_DIR)) {
    try {
        fs.rmSync(OUT_DIR, { recursive: true, force: true });
    } catch (e) {
        console.log('Error cleaning directory:', e);
    }
}
fs.mkdirSync(OUT_DIR, { recursive: true });

// Clean and prepare SVG content
function processSvg(content) {
    let svg = content
        .replace(/<\?xml.*?\?>/g, '')
        .replace(/<!--.*?-->/g, '')
        // Remove style attributes entirely to avoid parsing issues and syntax errors
        .replace(/style="[^"]*"/g, '')
        // Remove all xmlns attributes (namespaced or not) to avoid TS/React issues
        .replace(/xmlns(:[a-z]+)?="[^"]*"/g, '')
        .replace(/<svg([^>]*)>/, (match, attrs) => {
            // Add spread props
            return `<svg${attrs} {...props}>`;
        });

    // React attribute replacements
    const replacements = {
        'class=': 'className=',
        'stroke-width=': 'strokeWidth=',
        'stroke-linecap=': 'strokeLinecap=',
        'stroke-linejoin=': 'strokeLinejoin=',
        'fill-rule=': 'fillRule=',
        'clip-rule=': 'clipRule=',
        'clip-path=': 'clipPath=',
        'stroke-miterlimit=': 'strokeMiterlimit=',
        'stop-color=': 'stopColor=',
        'stop-opacity=': 'stopOpacity=',
        'font-family=': 'fontFamily=',
        'font-size=': 'fontSize=',
        'font-weight=': 'fontWeight=',
        'text-anchor=': 'textAnchor=',
        'xlink:href=': 'xlinkHref=',
        'xml:space=': 'xmlSpace=',
        'fill-opacity=': 'fillOpacity=',
        'flood-opacity=': 'floodOpacity=',
        'color-interpolation-filters=': 'colorInterpolationFilters=',
        'mask-type=': 'maskType=', // Some files use this content attribute
    };

    // Convert kebab to camel for most used attributes
    Object.keys(replacements).forEach(key => {
        const re = new RegExp(key, 'g');
        svg = svg.replace(re, replacements[key]);
    });

    // FORCE currentColor for stroke in Outline icons (usually black/#000)
    // This allows the icon to take the color of its parent or explicit CSS class
    svg = svg.replace(/stroke="black"/g, 'stroke="currentColor"');
    svg = svg.replace(/stroke="#[A-Fa-f0-9]{3,6}"/g, 'stroke="currentColor"');

    return svg;
}

function toPascalCase(str) {
    const pascal = str
        .replace(/[^a-zA-Z0-9]+/g, ' ')
        .trim()
        .split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join('');

    // Ensure it doesn't start with a number
    return /^\d/.test(pascal) ? `_${pascal}` : pascal;
}

// Ensure output structure
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const indexExports = [];

// 1. Process Outline Icons
if (fs.existsSync(ICONS_ROOT)) {
    const folders = fs.readdirSync(ICONS_ROOT);
    const outSubDir = path.join(OUT_DIR, 'outline');
    if (!fs.existsSync(outSubDir)) fs.mkdirSync(outSubDir, { recursive: true });

    folders.forEach(folder => {
        const folderPath = path.join(ICONS_ROOT, folder);
        if (fs.statSync(folderPath).isDirectory()) {
            const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.svg'));
            files.forEach(file => {
                const content = fs.readFileSync(path.join(folderPath, file), 'utf8');
                const processed = processSvg(content);
                const name = path.basename(file, '.svg');
                const componentName = toPascalCase(name);

                fs.writeFileSync(
                    path.join(outSubDir, `${componentName}.tsx`),
                    `import React from 'react';\nexport const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => (\n${processed}\n);\n`
                );
                indexExports.push(`export * from './outline/${componentName}';`);
            });
        }
    });
    console.log(`Processed Outline Icons`);
}

// 2. Process Misc Icons
if (fs.existsSync(MISC_ROOT)) {
    const folders = fs.readdirSync(MISC_ROOT);
    const outSubDir = path.join(OUT_DIR, 'misc');
    if (!fs.existsSync(outSubDir)) fs.mkdirSync(outSubDir, { recursive: true });

    folders.forEach(folder => {
        const folderPath = path.join(MISC_ROOT, folder);
        if (fs.statSync(folderPath).isDirectory()) {
            const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.svg'));
            files.forEach(file => {
                const content = fs.readFileSync(path.join(folderPath, file), 'utf8');
                const processed = processSvg(content);

                // Parse Name: "Platform=Facebook, Style=..." usually
                let rawName = path.basename(file, '.svg');
                // Simplifying parsing logic:
                // Remove keys like "Platform=", "Style=", "State="
                // Replace commas and equals with spaces
                const cleanName = rawName
                    .replace(/Platform=|Style=|State=|Company=|Dark mode=/gi, '')
                    .replace(/True/gi, 'Dark')
                    .replace(/False/gi, '')
                    .replace(/,/g, ' ');

                // Prefix with Folder category e.g. "SocialFacebook"
                const folderPrefix = folder.replace(' Icons', '').replace(' Icon', '');
                const componentName = toPascalCase(folderPrefix + ' ' + cleanName);

                fs.writeFileSync(
                    path.join(outSubDir, `${componentName}.tsx`),
                    `import React from 'react';\nexport const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => (\n${processed}\n);\n`
                );
                indexExports.push(`export * from './misc/${componentName}';`);
            });
        }
    });
    console.log(`Processed Misc Icons`);
}

// 3. Process Company Logos
if (fs.existsSync(COMPANY_ROOT)) {
    const files = fs.readdirSync(COMPANY_ROOT).filter(f => f.endsWith('.svg'));
    const outSubDir = path.join(OUT_DIR, 'company');
    if (!fs.existsSync(outSubDir)) fs.mkdirSync(outSubDir, { recursive: true });

    files.forEach(file => {
        const content = fs.readFileSync(path.join(COMPANY_ROOT, file), 'utf8');
        const processed = processSvg(content);

        // Similar parsing
        let rawName = path.basename(file, '.svg');
        const cleanName = rawName
            .replace(/Company=|Style=|Dark mode=/gi, '')
            .replace(/True/gi, 'Dark')
            .replace(/False/gi, '')
            .replace(/,/g, ' ');

        const componentName = toPascalCase(cleanName);

        fs.writeFileSync(
            path.join(outSubDir, `${componentName}.tsx`),
            `import React from 'react';\nexport const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => (\n${processed}\n);\n`
        );
        indexExports.push(`export * from './company/${componentName}';`);
    });
    console.log(`Processed Company Logos`);
}

// Generate Index
fs.writeFileSync(path.join(OUT_DIR, 'index.ts'), indexExports.join('\n'));
console.log('Done icon generation.');
