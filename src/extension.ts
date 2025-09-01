/**
 * Daily Motivation VSCode Extension
 * 
 * 这是一个为开发者提供每日励志语录的VSCode扩展
 * 功能包括：今日语录、随机语录、状态栏显示等
 * 
 * @author Wu
 * @version 0.0.1
 */

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { testCommandRegistration } from './test-commands';

/**
 * 励志语录数组
 * 包含各种编程相关的励志名言，用于激励开发者
 */
const motivationalQuotes = [
	"代码千万行，注释第一行。编程不规范，维护泪两行。",
	"今天的bug是明天的feature。",
	"写代码如写诗，每一行都要优雅。",
	"不要让昨天的bug影响今天的心情。",
	"每一个优秀的程序员都曾是菜鸟。",
	"调试代码的过程就是成长的过程。",
	"简洁的代码是最好的文档。",
	"测试驱动开发，让bug无处可藏。",
	"重构是代码进化的必经之路。",
	"学习新技术，保持技术热情。",
	"代码审查是团队成长的催化剂。",
	"持续集成，持续部署，持续进步。",
	"好的代码会说话，不需要过多解释。",
	"编程是一门艺术，也是一门科学。",
	"永远不要停止学习新的编程范式。"
];

/**
 * 获取今日语录（基于日期）
 * 
 * 根据当前日期计算一个固定的语录索引，确保每天显示相同的语录
 * 使用年内第几天对语录数量取模，实现循环显示
 * 
 * @returns {string} 今日的励志语录
 */
function getTodayQuote(): string {
	const today = new Date();
	// 计算今天是一年中的第几天
	const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
	// 使用取模运算确保索引在有效范围内
	const index = dayOfYear % motivationalQuotes.length;
	console.log(`[Daily Motivation] 今日语录索引: ${index}, 日期: ${today.toDateString()}`);
	return motivationalQuotes[index];
}

/**
 * 获取随机语录
 * 
 * 从励志语录数组中随机选择一条语录
 * 每次调用都会返回不同的语录（概率性）
 * 
 * @returns {string} 随机选择的励志语录
 */
function getRandomQuote(): string {
	// 生成0到语录数组长度-1之间的随机整数
	const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
	console.log(`[Daily Motivation] 随机语录索引: ${randomIndex}`);
	return motivationalQuotes[randomIndex];
}

/**
 * 扩展激活函数
 * 
 * 当扩展被激活时调用此函数，负责：
 * 1. 注册所有命令
 * 2. 初始化扩展状态
 * 3. 设置事件监听器
 * 4. 输出调试信息
 * 
 * @param context VSCode扩展上下文，包含扩展的生命周期管理
 */
export function activate(context: vscode.ExtensionContext) {
	console.log('恭喜，你的插件"daily-motivation"现在已经激活了！');
	// 输出扩展激活开始的诊断信息
	console.log('[Daily Motivation] 🚀 扩展开始激活...');
	console.log(`[Daily Motivation] 扩展路径: ${context.extensionPath}`);
	console.log(`[Daily Motivation] VSCode版本: ${vscode.version}`);
	console.log(`[Daily Motivation] 扩展ID: ${context.extension.id}`);
	console.log(`[Daily Motivation] 扩展是否激活: ${context.extension.isActive}`);

	// 读取并输出package.json配置信息，用于调试
	const packageJson = context.extension.packageJSON;
	console.log('[Daily Motivation] 📋 扩展清单信息:');
	console.log(`  - 名称: ${packageJson.name}`);
	console.log(`  - 版本: ${packageJson.version}`);
	console.log(`  - 激活事件: ${JSON.stringify(packageJson.activationEvents)}`);
	console.log(`  - 贡献的命令: ${JSON.stringify(packageJson.contributes?.commands)}`);

	try {
		/**
		 * 注册今日励志语录命令
		 * 命令ID: daily-motivation.showMotivation
		 * 功能: 显示基于当前日期的固定励志语录
		 */
		console.log('[Daily Motivation] 📝 正在注册今日励志语录命令...');
		const showMotivationCommand = vscode.commands.registerCommand('daily-motivation.showMotivation', () => {
			console.log('[Daily Motivation] 🎯 今日励志语录命令被执行');
			try {
				// 获取今日语录并显示给用户
				const todayQuote = getTodayQuote();
				console.log(`[Daily Motivation] 获取到今日语录: ${todayQuote}`);
				// 使用信息提示框显示语录
				vscode.window.showInformationMessage(`🌟 今日励志: ${todayQuote}`);
				console.log('[Daily Motivation] ✅ 今日励志语录显示成功');
			} catch (error) {
				console.error('[Daily Motivation] ❌ 今日励志语录执行失败:', error);
				vscode.window.showErrorMessage(`执行今日励志语录时出错: ${error}`);
			}
		});
		console.log('[Daily Motivation] ✅ 今日励志语录命令注册成功');

		/**
		 * 注册随机励志语录命令
		 * 命令ID: daily-motivation.randomMotivation
		 * 功能: 每次显示随机选择的励志语录
		 */
		console.log('[Daily Motivation] 📝 正在注册随机励志语录命令...');
		const randomMotivationCommand = vscode.commands.registerCommand('daily-motivation.randomMotivation', () => {
			console.log('[Daily Motivation] 🎯 随机励志语录命令被执行');
			try {
				// 获取随机语录并显示给用户
				const randomQuote = getRandomQuote();
				console.log(`[Daily Motivation] 获取到随机语录: ${randomQuote}`);
				// 使用信息提示框显示随机语录
				vscode.window.showInformationMessage(`💡 随机励志: ${randomQuote}`);
				console.log('[Daily Motivation] ✅ 随机励志语录显示成功');
			} catch (error) {
				console.error('[Daily Motivation] ❌ 随机励志语录执行失败:', error);
				vscode.window.showErrorMessage(`执行随机励志语录时出错: ${error}`);
			}
		});
		console.log('[Daily Motivation] ✅ 随机励志语录命令注册成功');

		/**
		 * 注册调试命令
		 * 命令ID: daily-motivation.debug
		 * 功能: 执行扩展调试测试，检查命令注册状态
		 */
		console.log('[Daily Motivation] 📝 正在注册调试命令...');
		const debugCommand = vscode.commands.registerCommand('daily-motivation.debug', async () => {
			console.log('[Daily Motivation] 🐛 调试命令被执行');
			// 调用测试函数检查命令注册状态
			await testCommandRegistration();
		});
		console.log('[Daily Motivation] ✅ 调试命令注册成功');

		/**
		 * 注册状态栏显示励志语录命令
		 * 命令ID: daily-motivation.showInStatusBar
		 * 功能: 在VSCode状态栏临时显示励志语录
		 * 特性: 
		 * - 显示语录前30个字符
		 * - 悬停显示完整内容
		 * - 点击可触发今日语录命令
		 * - 5秒后自动消失
		 */
		console.log('[Daily Motivation] 📝 正在注册状态栏显示命令...');
		const statusBarCommand = vscode.commands.registerCommand('daily-motivation.showInStatusBar', () => {
			console.log('[Daily Motivation] 📊 状态栏显示命令被执行');
			try {
				// 随机选择一条语录用于状态栏显示
				const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
				const selectedQuote = motivationalQuotes[randomIndex];
				console.log(`[Daily Motivation] 📝 状态栏显示语录: ${selectedQuote}`);
				
				// 创建状态栏项目并配置其属性
				const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
				statusBarItem.text = `💡 ${selectedQuote.substring(0, 30)}...`; // 显示前30个字符
				statusBarItem.tooltip = selectedQuote; // 悬停时显示完整语录
				statusBarItem.command = 'daily-motivation.showMotivation'; // 点击时执行今日语录命令
				statusBarItem.show(); // 显示状态栏项目
				
				console.log('[Daily Motivation] ✅ 状态栏项目已创建并显示');
				
				// 设置定时器，5秒后自动隐藏状态栏项目
				setTimeout(() => {
					statusBarItem.dispose();
					console.log('[Daily Motivation] 🕒 状态栏项目已自动隐藏');
				}, 5000);
			} catch (error) {
				console.error('[Daily Motivation] ❌ 状态栏显示执行失败:', error);
				vscode.window.showErrorMessage(`状态栏显示励志语录时出错: ${error}`);
			}
		});
		console.log('[Daily Motivation] ✅ 状态栏显示命令注册成功');

		/**
		 * 将所有注册的命令添加到扩展的订阅列表中
		 * 这确保了当扩展停用时，所有命令都会被正确清理
		 */
		context.subscriptions.push(showMotivationCommand, randomMotivationCommand, debugCommand, statusBarCommand);
		console.log('[Daily Motivation] 📋 命令已添加到订阅列表');
		console.log(`[Daily Motivation] 订阅列表长度: ${context.subscriptions.length}`);

		/**
		 * 验证命令注册状态
		 * 获取VSCode中所有已注册的命令，筛选出我们的命令进行验证
		 */
		vscode.commands.getCommands(true).then(commands => {
			// 筛选出以'daily-motivation'开头的命令
			const ourCommands = commands.filter(cmd => cmd.startsWith('daily-motivation'));
			console.log('[Daily Motivation] 🔍 已注册的Daily Motivation命令:', ourCommands);
			console.log(`[Daily Motivation] 找到命令数量: ${ourCommands.length}`);
			
			// 验证是否所有命令都已正确注册
			if (ourCommands.length === 0) {
				console.error('[Daily Motivation] ⚠️ 警告: 没有找到任何Daily Motivation命令！');
			} else {
				console.log('[Daily Motivation] ✅ 命令注册验证成功');
			}
		});

		/**
		 * 延迟执行测试
		 * 等待5秒确保所有命令都已完全注册到VSCode中
		 * 然后执行测试验证功能是否正常
		 */
		setTimeout(async () => {
			console.log('[Daily Motivation] ⏰ 5秒后执行命令注册测试...');
			await testCommandRegistration();
		}, 5000);

		console.log('[Daily Motivation] 🎉 扩展激活完成！');
		
		// 向用户显示扩展激活成功的消息，并提供使用提示
		vscode.window.showInformationMessage('Daily Motivation 扩展已激活！可以使用命令面板搜索 "Daily Motivation" 来使用功能。');

	} catch (error) {
		// 捕获并处理扩展激活过程中的任何错误
		console.error('[Daily Motivation] 💥 扩展激活失败:', error);
		vscode.window.showErrorMessage(`Daily Motivation 扩展激活失败: ${error}`);
	}
}

/**
 * 扩展停用函数
 * 
 * 当扩展被停用时调用此函数
 * VSCode会自动清理订阅列表中的所有资源
 * 这里主要用于输出调试信息和执行清理工作
 */
export function deactivate() {
	console.log('[Daily Motivation] 👋 扩展正在停用...');
}
