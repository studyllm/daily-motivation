# Daily Motivation - 每日励志语录 VSCode 扩展

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![VS Code Version](https://img.shields.io/badge/VS%20Code-1.74.0+-blue)](https://code.visualstudio.com/)

一个专为程序员设计的 VSCode 扩展，每天为你的编程之路提供励志语录和正能量！💪

## ✨ 功能特性

### 🌅 今日励志语录
- 基于日期算法，每天显示固定的励志语录
- 确保同一天内多次调用显示相同内容
- 包含15条精心挑选的编程相关励志名言

### 🎲 随机励志语录
- 随机从语录库中选择励志内容
- 每次调用都可能显示不同的语录
- 适合需要即时激励的时刻

### 📊 状态栏显示
- 在VSCode状态栏显示励志语录
- 一目了然的正能量提醒
- 不干扰正常编程工作流

### 🔧 调试功能
- 内置调试命令，方便开发和故障排查
- 详细的日志输出
- 命令注册状态检测

## 🚀 快速开始

### 安装要求
- Visual Studio Code 1.74.0 或更高版本
- 无其他外部依赖

### 使用方法

1. **获取今日励志语录**
   - 打开命令面板 (`Ctrl+Shift+P` 或 `Cmd+Shift+P`)
   - 输入 "Daily Motivation: 获取今日励志语录"
   - 或使用快捷命令 `daily-motivation.showMotivation`

2. **获取随机励志语录**
   - 打开命令面板
   - 输入 "Daily Motivation: 随机励志语录"
   - 或使用快捷命令 `daily-motivation.randomMotivation`

3. **状态栏显示**
   - 运行 "Daily Motivation: 在状态栏显示励志语录" 命令
   - 语录将显示在VSCode底部状态栏

## 💡 励志语录示例

我们精心收集了15条编程相关的励志语录，包括：

- "代码千万行，注释第一行。编程不规范，维护泪两行。"
- "今天的bug是明天的feature。"
- "写代码如写诗，每一行都要优雅。"
- "每一个优秀的程序员都曾是菜鸟。"
- "简洁的代码是最好的文档。"
- 还有更多...

## 📋 可用命令

| 命令 | 功能描述 |
|------|----------|
| `daily-motivation.showMotivation` | 显示今日固定的励志语录 |
| `daily-motivation.randomMotivation` | 显示随机励志语录 |
| `daily-motivation.showInStatusBar` | 在状态栏显示励志语录 |
| `daily-motivation.debug` | 显示调试信息和扩展状态 |

## 🛠️ 开发相关

### 项目结构
```
daily-motivation/
├── src/
│   ├── extension.ts      # 主扩展逻辑
│   └── test-commands.ts  # 测试和调试功能
├── package.json          # 扩展清单
├── tsconfig.json         # TypeScript配置
└── README.md            # 项目文档
```

### 本地开发
```bash
# 安装依赖
npm install

# 编译代码
npm run compile

# 监听模式编译
npm run watch

# 代码检查
npm run lint

# 运行测试
npm test
```

### 技术栈
- **语言**: TypeScript
- **框架**: VS Code Extension API
- **构建工具**: TypeScript Compiler
- **代码检查**: ESLint
- **测试**: Mocha + VS Code Test Framework

## 🎯 设计理念

这个扩展的设计遵循以下原则：

1. **简洁易用**: 最少的配置，最直观的操作
2. **非侵入性**: 不影响正常的开发工作流
3. **正能量**: 专注于为开发者提供积极的心理支持
4. **本土化**: 使用中文内容，贴近中国开发者

## 📝 更新日志

### 0.0.1 (初始版本)
- ✅ 实现今日励志语录功能
- ✅ 实现随机励志语录功能
- ✅ 添加状态栏显示功能
- ✅ 添加调试和测试功能
- ✅ 完整的中文本土化
- ✅ 详细的代码注释和文档

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

感谢所有为开源社区贡献力量的开发者们！

---

**让每一天的编程都充满正能量！** 🌟
