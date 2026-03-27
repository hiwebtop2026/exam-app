#!/bin/bash
echo "===================================="
echo "系统集成项目管理工程师备考系统"
echo "===================================="
echo ""
echo "正在启动应用..."
echo ""

# 尝试使用默认浏览器打开
if command -v xdg-open &> /dev/null; then
    xdg-open index.html
elif command -v open &> /dev/null; then
    open index.html
else
    echo "请手动在浏览器中打开 index.html 文件"
fi

echo ""
echo "应用已在浏览器中打开！"
echo ""
echo "提示："
echo "- 所有数据保存在浏览器本地"
echo "- 请勿清除浏览器数据"
echo "- 如有问题请查看 README.md"
echo ""
