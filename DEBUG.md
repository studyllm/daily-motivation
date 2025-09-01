# Daily Motivation 扩展调试指南

## 如何查看调试日志

### 方法1: 使用VSCode开发者工具
1. 按 `Cmd+Shift+P` (macOS) 或 `Ctrl+Shift+P` (Windows/Linux) 打开命令面板
2. 输入 `Developer: Toggle Developer Tools` 并执行
3. 在开发者工具中点击 `Console` 标签
4. 查找以 `[Daily Motivation]` 开头的日志信息

### 方法2: 使用输出面板
1. 按 `Cmd+Shift+U` (macOS) 或 `Ctrl+Shift+U` (Windows/Linux) 打开输出面板
2. 在下拉菜单中选择 `Log (Extension Host)`
3. 查找以 `[Daily Motivation]` 开头的日志信息

### 方法3: 在扩展开发模式下调试
1. 在VSCode中打开这个扩展项目
2. 按 `F5` 启动扩展调试
3. 在新打开的VSCode窗口中，按 `Cmd+Shift+P` 打开命令面板
4. 搜索 "Daily Motivation" 查看可用命令
5. 在原VSCode窗口的调试控制台中查看日志

## 调试命令

现在扩展包含一个专门的调试命令：
- `Daily Motivation: 调试信息` - 显示详细的命令注册信息

## 预期的日志输出

当扩展正常激活时，你应该看到类似以下的日志：

```
[Daily Motivation] 🚀 扩展开始激活...
[Daily Motivation] 扩展路径: /path/to/extension
[Daily Motivation] VSCode版本: x.x.x
[Daily Motivation] 扩展ID: daily-motivation
[Daily Motivation] 扩展是否激活: true
[Daily Motivation] 📋 扩展清单信息:
  - 名称: daily-motivation
  - 版本: 0.0.1
  - 激活事件: ["onStartupFinished"]
  - 贡献的命令: [...]
[Daily Motivation] 📝 正在注册今日励志语录命令...
[Daily Motivation] ✅ 今日励志语录命令注册成功
[Daily Motivation] 📝 正在注册随机励志语录命令...
[Daily Motivation] ✅ 随机励志语录命令注册成功
[Daily Motivation] 📝 正在注册调试命令...
[Daily Motivation] ✅ 调试命令注册成功
[Daily Motivation] 📋 命令已添加到订阅列表
[Daily Motivation] 订阅列表长度: 3
[Daily Motivation] 🔍 已注册的Daily Motivation命令: ["daily-motivation.showMotivation", "daily-motivation.randomMotivation", "daily-motivation.debug"]
[Daily Motivation] 找到命令数量: 3
[Daily Motivation] ✅ 命令注册验证成功
[Daily Motivation] 🎉 扩展激活完成！
```

## 常见问题排查

### 1. 命令没有出现在命令面板中
- 检查扩展是否已安装并启用
- 重新加载VSCode窗口 (`Developer: Reload Window`)
- 查看开发者控制台是否有错误信息

### 2. 扩展没有激活
- 检查 `activationEvents` 配置
- 确认VSCode版本满足要求
- 查看扩展是否在扩展列表中显示为已启用

### 3. 命令执行时出错
- 查看控制台中的错误日志
- 检查TypeScript编译是否成功
- 确认所有依赖都已正确安装 