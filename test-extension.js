// 简单的测试脚本，用于验证编译后的代码
const fs = require('fs');
const path = require('path');

console.log('🔍 检查扩展文件...');

// 检查关键文件是否存在
const filesToCheck = [
    'out/extension.js',
    'out/test-commands.js',
    'package.json'
];

filesToCheck.forEach(file => {
    const exists = fs.existsSync(file);
    console.log(`📁 ${file}: ${exists ? '✅ 存在' : '❌ 不存在'}`);
});

// 检查package.json配置
try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    console.log('\n📋 Package.json 配置:');
    console.log(`  名称: ${packageJson.name}`);
    console.log(`  版本: ${packageJson.version}`);
    console.log(`  激活事件: ${JSON.stringify(packageJson.activationEvents)}`);
    console.log(`  主入口: ${packageJson.main}`);
    console.log(`  命令数量: ${packageJson.contributes?.commands?.length || 0}`);
    
    if (packageJson.contributes?.commands) {
        console.log('  命令列表:');
        packageJson.contributes.commands.forEach(cmd => {
            console.log(`    - ${cmd.command}: ${cmd.title}`);
        });
    }
} catch (error) {
    console.error('❌ 读取package.json失败:', error);
}

// 检查编译后的文件内容
try {
    const extensionJs = fs.readFileSync('out/extension.js', 'utf8');
    const hasRegisterCommand = extensionJs.includes('registerCommand');
    const hasShowMotivation = extensionJs.includes('daily-motivation.showMotivation');
    const hasRandomMotivation = extensionJs.includes('daily-motivation.randomMotivation');
    
    console.log('\n🔧 编译后代码检查:');
    console.log(`  包含registerCommand: ${hasRegisterCommand ? '✅' : '❌'}`);
    console.log(`  包含showMotivation命令: ${hasShowMotivation ? '✅' : '❌'}`);
    console.log(`  包含randomMotivation命令: ${hasRandomMotivation ? '✅' : '❌'}`);
    
} catch (error) {
    console.error('❌ 读取编译文件失败:', error);
}

console.log('\n✨ 测试完成！');
console.log('\n📖 接下来的步骤:');
console.log('1. 在VSCode中按F5启动扩展调试');
console.log('2. 在新窗口中按Cmd+Shift+P打开命令面板');
console.log('3. 搜索"Daily Motivation"查看可用命令');
console.log('4. 使用开发者工具查看控制台日志'); 