/**
 * Quick verification test for @boni/untitled-ui package
 * Run this with: node test-package.js
 */

// Import the built package
const tokens = require('./dist/index.js');

console.log('🧪 Testing @boni/untitled-ui package...\n');

try {
    // Test 1: Color tokens
    console.log('✅ Test 1: Color Tokens');
    console.log('   Brand Primary:', tokens.primitiveColors.brand[600]);
    console.log('   Text Primary:', tokens.colors.text.primary);
    console.log('   Background:', tokens.colors.background.primary);

    // Test 2: Typography
    console.log('\n✅ Test 2: Typography');
    console.log('   Font Family:', tokens.typography.fontFamily.body);
    console.log('   Font Size (lg):', tokens.typography.fontSize.lg);
    console.log('   Display XL Semibold:', JSON.stringify(tokens.typography.textStyles.displayXlSemibold, null, 2));

    // Test 3: Spacing
    console.log('\n✅ Test 3: Spacing & Layout');
    console.log('   Spacing XL:', tokens.spacing.xl);
    console.log('   Radius MD:', tokens.radius.md);
    console.log('   Container LG:', tokens.layout.container.lg);

    // Test 4: Effects
    console.log('\n✅ Test 4: Effects');
    console.log('   Shadow MD:', tokens.effects.shadow.md);
    console.log('   Transition Base:', tokens.effects.transition.base);

    // Test 5: Verify all exports exist
    console.log('\n✅ Test 5: Exported Modules');
    const requiredExports = [
        'primitiveColors',
        'colors',
        'typography',
        'spacing',
        'radius',
        'layout',
        'effects'
    ];

    requiredExports.forEach(exp => {
        if (!tokens[exp]) {
            throw new Error(`Missing export: ${exp}`);
        }
        console.log(`   ✓ ${exp}`);
    });

    console.log('\n🎉 All tests passed! Package is working correctly.\n');

} catch (error) {
    console.error('\n❌ Test failed:', error.message);
    process.exit(1);
}
