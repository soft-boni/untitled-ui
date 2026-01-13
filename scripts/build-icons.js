/**
 * Icon Build Script
 * 
 * Automatically processes SVG icons from Assets/Icons into public/icons
 * Creates a flattened structure for easy access:
 * 
 * Source: Assets/Icons/[Outline|Solid|Duotone|Duocolor] Icons/[Category]/[icon-name].svg
 * Output: public/icons/[outline|solid|duotone|duocolor]/[icon-name].svg
 * 
 * Also generates a manifest.json with icon metadata for autocomplete and tooling.
 */

const fs = require('fs');
const path = require('path');

// Configuration
const ASSETS_ICONS_DIR = './Assets/Icons';
const ASSETS_MISC_ICONS_DIR = './Assets/Misc Icons';
const PUBLIC_ICONS_DIR = './public/icons';

// Icon type mappings for main icon sets
const TYPE_MAPPINGS = {
    'Outline Icons': 'outline',
    'Solid Icons': 'solid',
    'Duotone Icons': 'duotone',
    'Duocolor Icons': 'duocolor',
};

// Misc icons mappings (File Type Icons and Folder Icons)
const MISC_TYPE_MAPPINGS = {
    'File Type Icons': 'file-type',
    'Folder Icons': 'folder',
    'Social Icons': 'social',
};

/**
 * Recursively find all SVG files in a directory
 */
function findSvgFiles(dir, fileList = []) {
    if (!fs.existsSync(dir)) {
        return fileList;
    }

    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            findSvgFiles(filePath, fileList);
        } else if (path.extname(file).toLowerCase() === '.svg') {
            fileList.push(filePath);
        }
    });

    return fileList;
}

/**
 * Process icons from source to destination
 */
function processIcons() {
    console.log('🎨 Processing icons...\n');

    // Create public icons directory
    if (!fs.existsSync(PUBLIC_ICONS_DIR)) {
        fs.mkdirSync(PUBLIC_ICONS_DIR, { recursive: true });
    }

    const manifest = {
        types: {},
        icons: [],
        generatedAt: new Date().toISOString(),
    };

    let totalIcons = 0;

    // Process each icon type
    Object.entries(TYPE_MAPPINGS).forEach(([sourceName, targetName]) => {
        const sourceDir = path.join(ASSETS_ICONS_DIR, sourceName);
        const targetDir = path.join(PUBLIC_ICONS_DIR, targetName);

        // Create target directory
        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
        }

        // Find all SVG files
        const svgFiles = findSvgFiles(sourceDir);

        console.log(`📁 ${sourceName}: Found ${svgFiles.length} icons`);

        manifest.types[targetName] = {
            count: svgFiles.length,
            icons: [],
        };

        // Copy and process each SVG
        svgFiles.forEach(svgPath => {
            const fileName = path.basename(svgPath);
            const iconName = path.basename(svgPath, '.svg');
            const targetPath = path.join(targetDir, fileName);

            // Copy SVG file
            fs.copyFileSync(svgPath, targetPath);

            // Add to manifest
            manifest.types[targetName].icons.push(iconName);
            manifest.icons.push({
                name: iconName,
                type: targetName,
                path: `/icons/${targetName}/${fileName}`,
            });

            totalIcons++;
        });
    });

    // Process Misc Icons (File Type and Folder Icons)
    Object.entries(MISC_TYPE_MAPPINGS).forEach(([sourceName, targetName]) => {
        const sourceDir = path.join(ASSETS_MISC_ICONS_DIR, sourceName);
        const targetDir = path.join(PUBLIC_ICONS_DIR, targetName);

        if (!fs.existsSync(sourceDir)) {
            console.log(`⚠️  ${sourceName}: Directory not found, skipping`);
            return;
        }

        // Create target directory
        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
        }

        // Find all SVG files
        const svgFiles = findSvgFiles(sourceDir);

        console.log(`📁 ${sourceName}: Found ${svgFiles.length} icons`);

        manifest.types[targetName] = {
            count: svgFiles.length,
            icons: [],
        };

        // Copy and process each SVG
        svgFiles.forEach(svgPath => {
            const fileName = path.basename(svgPath);
            // Normalize icon name from "PDF, Type=Default.svg" to "pdf-default"
            const rawName = path.basename(svgPath, '.svg');
            const iconName = rawName
                .replace(/,\s*Type=/i, '-')   // "PDF, Type=Default" -> "PDF-Default"
                .replace(/\s*\(.*?\)/g, '')    // Remove parentheses content
                .replace(/\s+/g, '-')          // Spaces to hyphens
                .toLowerCase();                // Lowercase

            const targetPath = path.join(targetDir, `${iconName}.svg`);

            // Copy SVG file with normalized name
            fs.copyFileSync(svgPath, targetPath);

            // Add to manifest
            manifest.types[targetName].icons.push(iconName);
            manifest.icons.push({
                name: iconName,
                type: targetName,
                originalName: rawName,
                path: `/icons/${targetName}/${iconName}.svg`,
            });

            totalIcons++;
        });
    });

    // Sort manifest icons alphabetically
    manifest.icons.sort((a, b) => a.name.localeCompare(b.name));
    Object.values(manifest.types).forEach(type => {
        type.icons.sort();
    });

    // Write manifest
    const manifestPath = path.join(PUBLIC_ICONS_DIR, 'manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

    console.log(`\n✅ Processed ${totalIcons} icons total`);
    console.log(`📄 Generated manifest: ${manifestPath}\n`);

    // Generate TypeScript types
    generateTypeScript(manifest);
}

/**
 * Generate TypeScript type definitions from manifest
 */
function generateTypeScript(manifest) {
    const iconNames = [...new Set(manifest.icons.map(icon => icon.name))];

    const typeContent = `/**
 * Auto-generated icon name types
 * Generated at: ${manifest.generatedAt}
 * Total icons: ${iconNames.length}
 */

export type IconName =
${iconNames.map(name => `  | '${name}'`).join('\n')};

export const iconNames: IconName[] = [
${iconNames.map(name => `  '${name}',`).join('\n')}
];
`;

    const typesPath = './src/components/Icon/icon-names.ts';
    fs.writeFileSync(typesPath, typeContent);
    console.log(`📝 Generated TypeScript types: ${typesPath}`);
}

// Run the script
try {
    processIcons();
} catch (error) {
    console.error('❌ Error processing icons:', error);
    process.exit(1);
}
