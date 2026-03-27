# OpenClaw 网络搜索配置说明

## 问题诊断

### 当前状态
- Gateway状态: ? 正常运行
- 网络连接: ? 正常
- web_search工具: ? 已注册
- 搜索功能: ? 需要配置搜索引擎API

## 解决方案

### 方案1: 使用Brave Search API（推荐）

1. 注册Brave Search API: https://brave.com/search/api
2. 获取API密钥
3. 配置OpenClaw:
   openclaw config set tools.webSearch.providers brave
   openclaw config set tools.webSearch.providers.brave.apiKey YOUR_API_KEY

### 方案2: 使用其他搜索引擎

OpenClaw支持多种搜索引擎，可以配置Google、DuckDuckGo等。

### 方案3: 使用DuckDuckGo（无需API）

DuckDuckGo是隐私搜索引擎，不需要API密钥。

## 配置示例

`ash
# 配置Brave Search
openclaw config set tools.webSearch.providers brave
openclaw config set tools.webSearch.providers.brave.apiKey YOUR_BRIVE_API_KEY

# 重启Gateway使配置生效
openclaw gateway restart
`

## 验证配置

配置完成后，使用以下命令测试:

`ash
openclaw config get tools.webSearch
`

## 常见问题

### Q: 为什么web_search工具已注册但无法使用？
A: 因为搜索引擎需要API密钥才能工作。

### Q: 哪个搜索引擎最合适？
A: 根据需求选择：
- Brave: 快速、隐私保护
- DuckDuckGo: 无需API，隐私保护
- Google: 数据全面

创建时间：2026-03-28
