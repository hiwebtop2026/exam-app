# GitHub 上传指南

## 📦 需要上传的文件清单

### 必需文件
```
examapp/
├── index.html          # 主页面（必需）
├── styles.css          # 样式文件（必需）
├── readme.md           # 项目说明（必需）
├── LICENSE             # 开源许可证（建议）
├── .gitignore          # Git忽略文件（建议）
├── start.bat           # Windows启动脚本
├── start.sh            # Linux/Mac启动脚本
└── src/                # 源代码目录
    ├── app.js          # 应用主逻辑
    ├── db.js           # 数据库操作
    └── data/           # 数据目录
        ├── chapters.js    # 章节数据
        ├── formulas.js    # 公式数据
        └── questions.js   # 题库数据
```

### 不需要上传的文件
- `.DS_Store` - macOS系统文件
- `Thumbs.db` - Windows缩略图缓存
- `.vscode/` - VS Code配置（可选）
- `node_modules/` - 依赖目录（本项目没有）

---

## 🚀 上传步骤

### 方法一：使用 Git 命令行（推荐）

#### 1. 安装 Git
- Windows: https://git-scm.com/download/win
- Mac: `brew install git`
- Linux: `sudo apt install git`

#### 2. 配置 Git
```bash
git config --global user.name "你的用户名"
git config --global user.email "你的邮箱@example.com"
```

#### 3. 初始化仓库
```bash
# 进入项目目录
cd c:\Users\lhp\Documents\trae_projects\examapp

# 初始化 Git 仓库
git init
```

#### 4. 添加文件到仓库
```bash
# 添加所有文件
git add .

# 或者逐个添加
git add index.html
git add styles.css
git add readme.md
git add LICENSE
git add .gitignore
git add start.bat
git add start.sh
git add src/
```

#### 5. 提交更改
```bash
git commit -m "Initial commit: 系统集成项目管理工程师备考系统"
```

#### 6. 创建 GitHub 仓库
1. 访问 https://github.com
2. 登录你的账号
3. 点击右上角 "+" → "New repository"
4. 填写仓库信息：
   - Repository name: `exam-prep-app`（或其他名称）
   - Description: 系统集成项目管理工程师备考系统
   - 选择 "Public"（公开）或 "Private"（私有）
   - 不要勾选 "Initialize this repository with a README"
5. 点击 "Create repository"

#### 7. 关联远程仓库并推送
```bash
# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/exam-prep-app.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

---

### 方法二：使用 GitHub Desktop（图形界面）

#### 1. 下载安装
- 访问 https://desktop.github.com
- 下载并安装 GitHub Desktop

#### 2. 添加本地仓库
1. 打开 GitHub Desktop
2. 点击 "File" → "Add local repository"
3. 选择项目文件夹：`c:\Users\lhp\Documents\trae_projects\examapp`
4. 点击 "Add Repository"

#### 3. 提交更改
1. 在左侧填写提交信息：
   - Summary: `Initial commit`
   - Description: 系统集成项目管理工程师备考系统
2. 点击 "Commit to main"

#### 4. 发布到 GitHub
1. 点击 "Publish repository"
2. 填写仓库名称和描述
3. 选择公开或私有
4. 点击 "Publish Repository"

---

### 方法三：直接上传文件（最简单）

#### 1. 创建 GitHub 仓库
1. 访问 https://github.com
2. 登录并点击 "New repository"
3. 填写仓库信息
4. 点击 "Create repository"

#### 2. 上传文件
1. 在仓库页面点击 "uploading an existing file"
2. 拖拽或选择以下文件：
   - index.html
   - styles.css
   - readme.md
   - LICENSE
   - .gitignore
   - start.bat
   - start.sh
3. 创建 `src` 文件夹并上传其中的文件
4. 创建 `src/data` 文件夹并上传其中的文件
5. 填写提交信息
6. 点击 "Commit changes"

---

## ✅ 上传后验证

### 1. 检查文件是否完整
访问你的 GitHub 仓库，确认以下文件都存在：
- [ ] index.html
- [ ] styles.css
- [ ] readme.md
- [ ] LICENSE
- [ ] .gitignore
- [ ] src/app.js
- [ ] src/db.js
- [ ] src/data/chapters.js
- [ ] src/data/formulas.js
- [ ] src/data/questions.js

### 2. 启用 GitHub Pages（可选）
如果你想让项目可以直接在线访问：

1. 进入仓库 Settings
2. 左侧点击 "Pages"
3. Source 选择 "Deploy from a branch"
4. Branch 选择 "main" 和 "/ (root)"
5. 点击 "Save"
6. 等待几分钟后，会生成访问链接如：`https://你的用户名.github.io/exam-prep-app/`

---

## 🔄 后续更新

### 修改文件后更新
```bash
# 进入项目目录
cd c:\Users\lhp\Documents\trae_projects\examapp

# 查看更改
git status

# 添加更改的文件
git add 文件名

# 或添加所有更改
git add .

# 提交更改
git commit -m "描述你的更改"

# 推送到 GitHub
git push origin main
```

---

## 📋 快速命令参考

| 命令 | 说明 |
|------|------|
| `git init` | 初始化仓库 |
| `git add .` | 添加所有文件 |
| `git commit -m "消息"` | 提交更改 |
| `git push origin main` | 推送到 GitHub |
| `git pull origin main` | 从 GitHub 拉取 |
| `git status` | 查看状态 |
| `git log` | 查看提交历史 |

---

## ❓ 常见问题

### Q: 上传时出现 "Permission denied" 错误？
A: 需要配置 SSH 密钥或使用 HTTPS 链接
```bash
# 使用 HTTPS（需要输入密码）
git remote add origin https://github.com/用户名/仓库名.git

# 或使用 SSH（需要配置密钥）
git remote add origin git@github.com:用户名/仓库名.git
```

### Q: 如何更新已上传的文件？
A: 修改文件后，执行：
```bash
git add .
git commit -m "更新说明"
git push origin main
```

### Q: 如何删除 GitHub 上的文件？
A: 本地删除后提交推送，或使用 GitHub 网页直接删除

---

## 📞 需要帮助？

- GitHub 文档：https://docs.github.com/cn
- Git 文档：https://git-scm.com/doc
- 在 GitHub 上创建 Issue 提问
