// 思维导图生成器
const MindMapGenerator = {
    // 生成章节思维导图数据（包含全部内容）
    generateChapterMindMap: function(chapter) {
        if (!chapter) {
            return null;
        }

        const mindMapData = {
            id: 'mindmap-' + chapter.id,
            chapterId: chapter.id,
            chapterName: chapter.name,
            createdAt: new Date().toISOString(),
            root: {
                text: chapter.name,
                children: []
            }
        };

        // 添加章节基本信息节点
        const basicInfoNode = {
            id: 'basic-info',
            text: '章节信息',
            children: []
        };

        if (chapter.intro) {
            basicInfoNode.children.push({
                text: '章节概述',
                children: this.extractContentItems(chapter.intro)
            });
        }

        if (chapter.objectives) {
            basicInfoNode.children.push({
                text: '学习目标',
                children: this.extractContentItems(chapter.objectives)
            });
        }

        if (chapter.keypoints && chapter.keypoints.length > 0) {
            // 遍历所有知识点，生成思维导图节点
            chapter.keypoints.forEach((keypoint, index) => {
                const node = this.parseKeypointToNode(keypoint, index + 1);
                if (node) {
                    mindMapData.root.children.push(node);
                }
            });
        }

        // 添加基本信息节点（如果有内容）
        if (basicInfoNode.children.length > 0) {
            mindMapData.root.children.unshift(basicInfoNode);
        }

        return mindMapData;
    },

    // 解析知识点为思维导图节点
    parseKeypointToNode: function(keypoint, index) {
        if (!keypoint || !keypoint.content) {
            return null;
        }

        const node = {
            id: keypoint.id,
            text: keypoint.title || ('知识点' + index),
            level: keypoint.level || 'medium',
            children: []
        };

        // 解析内容，提取关键信息
        const content = keypoint.content;
        
        // 提取【】标记的标题作为子节点
        const sections = this.extractSections(content);
        sections.forEach(section => {
            const childNode = {
                text: section.title,
                children: section.items.map(item => ({
                    text: item
                }))
            };
            node.children.push(childNode);
        });

        return node;
    },

    // 提取内容中的章节结构
    extractSections: function(content) {
        const sections = [];
        
        // 按行分割
        const lines = content.split('\n');
        let currentSection = null;
        
        lines.forEach(line => {
            line = line.trim();
            if (!line) return;

            // 匹配【标题】格式
            const titleMatch = line.match(/【(.+?)】/);
            if (titleMatch) {
                if (currentSection) {
                    sections.push(currentSection);
                }
                currentSection = {
                    title: titleMatch[1],
                    items: []
                };
            } else if (currentSection) {
                // 清理行内容，移除序号和标记
                const cleanLine = line
                    .replace(/^\d+\.\s*/, '')
                    .replace(/^[-•]\s*/, '')
                    .replace(/^[A-Z]\.\s*/, '')
                    .trim();
                
                if (cleanLine && cleanLine.length > 2) {
                    currentSection.items.push(cleanLine);
                }
            }
        });

        if (currentSection) {
            sections.push(currentSection);
        }

        return sections;
    },

    // 提取内容项
    extractContentItems: function(content) {
        if (!content) return [];
        
        const items = [];
        const lines = content.split('\n');
        
        lines.forEach(line => {
            line = line.trim();
            if (!line) return;
            
            // 清理行内容
            const cleanLine = line
                .replace(/^\d+\.\s*/, '')
                .replace(/^[-•]\s*/, '')
                .replace(/^[A-Z]\.\s*/, '')
                .trim();
            
            if (cleanLine && cleanLine.length > 2) {
                items.push({ text: cleanLine });
            }
        });
        
        return items;
    },

    // 将思维导图转换为Markdown格式（用于笔记）
    toMarkdown: function(mindMapData) {
        if (!mindMapData) return '';

        let markdown = `# ${mindMapData.root.text} - 思维导图\n\n`;
        markdown += `> 生成时间：${new Date(mindMapData.createdAt).toLocaleString('zh-CN')}\n\n`;
        markdown += `---\n\n`;

        // 递归生成Markdown
        const generateNodeMarkdown = (node, level) => {
            const indent = '  '.repeat(level - 1);
            let result = '';

            if (level === 1) {
                result += `## ${node.text}\n\n`;
            } else {
                const prefix = level === 2 ? '###' : level === 3 ? '-' : '  -';
                result += `${indent}${prefix} ${node.text}\n`;
            }

            if (node.children && node.children.length > 0) {
                if (level === 1) result += '\n';
                node.children.forEach(child => {
                    result += generateNodeMarkdown(child, level + 1);
                });
                if (level === 1) result += '\n';
            }

            return result;
        };

        mindMapData.root.children.forEach(child => {
            markdown += generateNodeMarkdown(child, 1);
        });

        return markdown;
    },

    // 将思维导图转换为HTML可视化格式（符合用户要求的格式）
    toHTML: function(mindMapData) {
        if (!mindMapData) return '';

        // 生成符合要求的思维导图HTML
        const colors = ['#e11d48', '#3b82f6', '#eab308', '#8b5cf6', '#10b981'];
        
        const generateNodeHTML = (node, level, parentX, parentY, parentAngle, index, total) => {
            const nodeRadius = level === 0 ? 60 : 40;
            const nodeColor = colors[level % colors.length];
            const lineColor = colors[level % colors.length];
            
            // 计算位置
            const centerX = 600;
            const centerY = 200;
            const radius = 150 + (level * 120);
            const angle = (index / total) * Math.PI * 2;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            
            let html = '';
            
            // 绘制连接线
            if (level > 0) {
                html += `<svg class="mindmap-connector" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;">
                    <path d="M ${parentX} ${parentY} Q ${(parentX + x) / 2} ${(parentY + y) / 2} ${x} ${y}" 
                          stroke="${lineColor}" stroke-width="3" fill="none" />
                </svg>`;
            }
            
            // 绘制节点
            html += `<div class="mindmap-node" style="position: absolute; left: ${x - nodeRadius}px; top: ${y - nodeRadius/2}px; width: ${nodeRadius*2}px; text-align: center;">
                <div class="node-content" style="background-color: ${nodeColor}; color: white; border-radius: 50%; padding: 15px; display: inline-block;">
                    ${node.text}
                </div>
            </div>`;
            
            // 绘制子节点
            if (node.children && node.children.length > 0) {
                node.children.forEach((child, childIndex) => {
                    html += generateNodeHTML(child, level + 1, x, y, angle, childIndex, node.children.length);
                });
            }
            
            return html;
        };

        return `
            <div class="mindmap-container" style="position: relative; width: 1200px; height: 800px; background-color: #f8fafc; border-radius: 10px;">
                <div class="mindmap-root" style="position: absolute; left: 550px; top: 170px; background-color: #e11d48; color: white; border-radius: 50%; padding: 20px; font-size: 24px; font-weight: bold;">
                    ${mindMapData.root.text}
                </div>
                ${mindMapData.root.children.map((child, index) => 
                    generateNodeHTML(child, 1, 600, 200, 0, index, mindMapData.root.children.length)
                ).join('')}
            </div>
        `;
    },

    // 生成思维导图图片（使用Canvas）
    generateImage: function(mindMapData, callback) {
        // 创建一个离屏canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // 设置画布大小
        canvas.width = 1200;
        canvas.height = 800;
        
        // 背景色
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 绘制标题
        ctx.fillStyle = '#1f2937';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(mindMapData.root.text, canvas.width / 2, 40);
        
        // 绘制时间
        ctx.font = '14px Arial';
        ctx.fillStyle = '#6b7280';
        ctx.fillText('生成时间: ' + new Date(mindMapData.createdAt).toLocaleString('zh-CN'), canvas.width / 2, 65);
        
        // 简单的树状布局绘制
        const startX = 100;
        const startY = 120;
        const nodeHeight = 60;
        const nodeWidth = 200;
        const levelGap = 250;
        
        const drawNode = (node, x, y, level) => {
            // 绘制节点背景
            const colors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];
            ctx.fillStyle = colors[level % colors.length];
            ctx.fillRect(x, y, nodeWidth, 40);
            
            // 绘制节点文字
            ctx.fillStyle = '#ffffff';
            ctx.font = level === 0 ? 'bold 14px Arial' : '12px Arial';
            ctx.textAlign = 'left';
            
            // 文字截断
            let text = node.text;
            if (text.length > 15) {
                text = text.substring(0, 15) + '...';
            }
            ctx.fillText(text, x + 10, y + 25);
            
            // 绘制子节点
            if (node.children && node.children.length > 0) {
                let childY = y;
                node.children.forEach((child, index) => {
                    const childX = x + levelGap;
                    childY = y + (index * nodeHeight);
                    
                    // 绘制连接线
                    ctx.strokeStyle = '#cbd5e1';
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(x + nodeWidth, y + 20);
                    ctx.lineTo(childX, childY + 20);
                    ctx.stroke();
                    
                    drawNode(child, childX, childY, level + 1);
                });
            }
        };
        
        // 绘制所有根节点的子节点
        let currentY = startY;
        mindMapData.root.children.forEach((child, index) => {
            drawNode(child, startX, currentY, 0);
            currentY += nodeHeight * 2;
        });
        
        // 转换为图片数据
        const dataURL = canvas.toDataURL('image/png');
        if (callback) {
            callback(dataURL);
        }
        
        return dataURL;
    }
};

// 下载思维导图图片
window.downloadMindMap = function() {
    if (window.currentMindMapData) {
        MindMapGenerator.generateImage(window.currentMindMapData, function(dataURL) {
            // 创建下载链接
            var link = document.createElement('a');
            link.download = window.currentMindMapData.chapterName + '-思维导图.png';
            link.href = dataURL;
            link.click();
        });
    } else {
        alert('没有可下载的思维导图');
    }
};

// 全局变量已在文件顶部定义
