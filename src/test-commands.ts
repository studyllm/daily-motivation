/**
 * 测试脚本：用于调试命令注册问题
 * 
 * 此模块提供测试函数来验证扩展命令是否正确注册
 * 主要用于开发阶段的调试和问题排查
 * 
 * @author Wu
 */
import * as vscode from 'vscode';

/**
 * 测试命令注册状态
 * 
 * 这个函数会检查所有Daily Motivation相关的命令是否已正确注册
 * 并尝试执行这些命令来验证功能是否正常
 * 
 * 测试内容包括：
 * 1. 获取所有VSCode命令列表
 * 2. 筛选出我们的命令
 * 3. 验证每个命令是否存在
 * 4. 尝试执行命令测试功能
 * 
 * @returns {Promise<void>} 异步函数，无返回值
 */
export async function testCommandRegistration() {
    console.log('[Debug] 🔍 开始测试命令注册...');
    
    try {
        // 获取VSCode中所有已注册的命令（包括内置和扩展命令）
        const allCommands = await vscode.commands.getCommands(true);
        console.log(`[Debug] 📊 总命令数量: ${allCommands.length}`);
        
        // 从所有命令中筛选出我们的Daily Motivation命令
        const dailyMotivationCommands = allCommands.filter(cmd => cmd.startsWith('daily-motivation'));
        console.log('[Debug] 🎯 Daily Motivation 相关命令:', dailyMotivationCommands);
        
        /**
         * 定义需要测试的核心命令列表
         * 这些是扩展的主要功能命令
         */
        const targetCommands = [
            'daily-motivation.showMotivation',    // 今日励志语录
            'daily-motivation.randomMotivation'   // 随机励志语录
        ];
        
        // 逐个检查每个命令的注册状态和执行能力
        for (const cmd of targetCommands) {
            // 检查命令是否在VSCode命令列表中
            const exists = allCommands.includes(cmd);
            console.log(`[Debug] 命令 "${cmd}" 是否存在: ${exists ? '✅' : '❌'}`);
            
            if (exists) {
                try {
                    // 尝试执行命令来验证功能是否正常
                    await vscode.commands.executeCommand(cmd);
                    console.log(`[Debug] 命令 "${cmd}" 执行成功 ✅`);
                } catch (error) {
                    console.error(`[Debug] 命令 "${cmd}" 执行失败:`, error);
                }
            }
        }
        
        // 向用户显示测试结果摘要
        vscode.window.showInformationMessage(
            `调试信息: 找到 ${dailyMotivationCommands.length} 个 Daily Motivation 命令`
        );
        
    } catch (error) {
        // 捕获并处理测试过程中的任何错误
        console.error('[Debug] 💥 测试命令注册失败:', error);
        vscode.window.showErrorMessage(`测试命令注册失败: ${error}`);
    }
} 