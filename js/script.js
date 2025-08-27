// 主题风格数据定义
const themeData = {
    // 视觉风格主题数据
    visualStyles: [
        {
            name: '极简主义',
            description: '留白多、元素少、线条干净、注重排版和留白',
            features: ['大量留白空间', '简洁的线条设计', '精致的排版布局', '去除多余装饰'],
            scene: '高端品牌、作品展示',
            demoStyle: 'minimalism'
        },
        {
            name: '扁平化设计',
            description: '无阴影/渐变，使用纯色块和清晰图标',
            features: ['纯色块设计', '清晰的图标', '无阴影效果', '简洁的界面'],
            scene: '移动应用、仪表盘',
            demoStyle: 'flat'
        },
        {
            name: '新拟物风格',
            description: '柔和阴影、浅浮雕效果、立体感强',
            features: ['柔和的阴影', '浅浮雕效果', '强烈立体感', '现代质感'],
            scene: '仿真实体按钮、创意类UI',
            demoStyle: 'neumorphism'
        },
        {
            name: '拟物化设计',
            description: '模拟真实物品材质/外观',
            features: ['真实材质模拟', '细腻的纹理', '逼真的光影', '物理质感'],
            scene: '老派设计、游戏、学习工具',
            demoStyle: 'skeuomorphism'
        },
        {
            name: '毛玻璃效果',
            description: '透明玻璃质感、模糊背景、高亮叠层',
            features: ['透明玻璃质感', '背景模糊效果', '高亮边框', '层次感强'],
            scene: '高级感界面、卡片式布局',
            demoStyle: 'glassmorphism'
        },
        {
            name: '粘土风格',
            description: '圆角极大、色块厚重、有立体厚度',
            features: ['极大圆角设计', '厚重色块', '立体厚度感', '可爱风格'],
            scene: '儿童产品、插画类页面',
            demoStyle: 'claymorphism'
        },
        {
            name: '网格系统',
            description: '强调对齐、栅格、模块化内容编排',
            features: ['严格对齐', '栅格布局', '模块化设计', '规整排版'],
            scene: '杂志风、博客、极简设计',
            demoStyle: 'grid'
        },
        {
            name: '暗黑模式',
            description: '黑灰基底、高对比、保护眼睛',
            features: ['深色背景', '高对比度', '护眼设计', '现代感强'],
            scene: '技术社区、应用工具类网站',
            demoStyle: 'dark'
        },
        {
            name: '亮白模式',
            description: '白底浅色调、明亮通透',
            features: ['明亮背景', '浅色调色', '通透感强', '清新简洁'],
            scene: '教育、电商、SaaS',
            demoStyle: 'light'
        }
    ],
    
    // 色彩主题数据
    colorThemes: [
        {
            name: '柔和色系',
            description: '轻盈温柔、饱和度低',
            features: ['低饱和度', '温柔质感', '轻盈感觉', '舒适视觉'],
            colors: ['#f8d7da', '#d1ecf1', '#d4edda', '#fff3cd'],
            demoStyle: 'pastel'
        },
        {
            name: '霓虹科技',
            description: '鲜艳荧光、高对比、夜景感',
            features: ['鲜艳荧光色', '高对比度', '夜景氛围', '科技感强'],
            colors: ['#ff0080', '#00ff80', '#8000ff', '#ff8000'],
            demoStyle: 'neon'
        },
        {
            name: '原色对比',
            description: '红蓝黄为主，具有教育感和强吸引力',
            features: ['原色搭配', '强烈对比', '教育感强', '吸引注意'],
            colors: ['#ff0000', '#0000ff', '#ffff00', '#00ff00'],
            demoStyle: 'primary'
        },
        {
            name: '暖色系',
            description: '橙红棕黄，传达温暖、活力',
            features: ['温暖感觉', '活力四射', '亲和力强', '积极向上'],
            colors: ['#ff6b35', '#f7931e', '#ffd23f', '#ee4b2b'],
            demoStyle: 'warm'
        },
        {
            name: '冷色系',
            description: '蓝绿紫，传达沉稳、专业',
            features: ['沉稳感觉', '专业形象', '冷静理性', '信任感强'],
            colors: ['#4a90e2', '#50c878', '#9370db', '#20b2aa'],
            demoStyle: 'cool'
        },
        {
            name: '单色系',
            description: '使用同一色系不同明暗变化',
            features: ['色彩统一', '层次丰富', '和谐感强', '简洁优雅'],
            colors: ['#1a1a1a', '#4a4a4a', '#7a7a7a', '#aaaaaa'],
            demoStyle: 'monochrome'
        },
        {
            name: '暗金主题',
            description: '黑底金字，高贵奢华感',
            features: ['高贵奢华', '金色点缀', '深色背景', '豪华感强'],
            colors: ['#000000', '#ffd700', '#b8860b', '#daa520'],
            demoStyle: 'darkgold'
        },
        {
            name: '自然色系',
            description: '木色、绿色、泥土色，天然舒适',
            features: ['自然舒适', '环保理念', '温馨感觉', '亲近自然'],
            colors: ['#8b4513', '#228b22', '#d2691e', '#a0522d'],
            demoStyle: 'organic'
        }
    ],
    
    // 排版风格数据
    typography: [
        {
            name: '大胆粗体',
            description: '字体粗大、视觉冲击强',
            features: ['粗体字重', '视觉冲击', '强调重点', '现代感强'],
            demoStyle: 'bold'
        },
        {
            name: '杂志排版',
            description: '多栏、多层级、注重留白',
            features: ['多栏布局', '层级清晰', '留白艺术', '专业排版'],
            demoStyle: 'editorial'
        },
        {
            name: '极简排版',
            description: '文字少、字号大、清晰直接',
            features: ['文字精简', '字号较大', '清晰易读', '直接表达'],
            demoStyle: 'minimal'
        },
        {
            name: '手写风格',
            description: '模拟笔迹，亲切自然',
            features: ['手写笔迹', '亲切自然', '个性化强', '温馨感觉'],
            demoStyle: 'handwritten'
        },
        {
            name: '工整现代',
            description: '使用无衬线体，适合现代产品',
            features: ['无衬线字体', '工整清晰', '现代简洁', '易于阅读'],
            demoStyle: 'modern'
        },
        {
            name: '复古字体',
            description: '复古海报风格，常用于潮流品牌',
            features: ['复古风格', '海报感觉', '潮流时尚', '个性鲜明'],
            demoStyle: 'retro'
        }
    ],
    
    // 布局组件数据
    layouts: [
        {
            name: '卡片式布局',
            description: '使用模块化卡片展示内容',
            features: ['模块化设计', '卡片容器', '内容分组', '易于扫描'],
            demoStyle: 'card'
        },
        {
            name: '瀑布流布局',
            description: '适合图片/作品展示，如Pinterest',
            features: ['不规则排列', '图片展示', '动态加载', '视觉丰富'],
            demoStyle: 'masonry'
        },
        {
            name: '折叠面板',
            description: '内容展开收起的交互风格',
            features: ['可折叠内容', '节省空间', '交互友好', '层级清晰'],
            demoStyle: 'accordion'
        },
        {
            name: '标签导航',
            description: '多类别切换常用布局',
            features: ['标签切换', '分类展示', '导航清晰', '操作简单'],
            demoStyle: 'tabs'
        },
        {
            name: '漂浮按钮',
            description: '悬浮在页面右下角或中部，突出CTA',
            features: ['悬浮设计', '突出显示', '快速操作', '视觉焦点'],
            demoStyle: 'floating'
        },
        {
            name: '滑动交互',
            description: '移动端常用滑动卡片或内容切换布局',
            features: ['滑动操作', '移动友好', '手势交互', '流畅体验'],
            demoStyle: 'swipe'
        },
        {
            name: '分屏布局',
            description: '左右/上下并列展示两个区域',
            features: ['分屏显示', '并列布局', '对比展示', '空间利用'],
            demoStyle: 'split'
        },
        {
            name: '长页面滚动',
            description: '故事化交互体验，页面随着滚动逐步展开',
            features: ['故事化设计', '滚动交互', '渐进展示', '沉浸体验'],
            demoStyle: 'scroll'
        }
    ],
    
    // 动画动效数据
    animations: [
        {
            name: '微交互',
            description: '鼠标悬停、点击反馈等细节动效',
            features: ['悬停效果', '点击反馈', '细节动画', '用户反馈'],
            demoStyle: 'micro'
        },
        {
            name: '滑动动画',
            description: '页面内容滑入/淡入效果',
            features: ['滑入效果', '淡入动画', '平滑过渡', '视觉连贯'],
            demoStyle: 'slide'
        },
        {
            name: '弹性动效',
            description: '元素弹跳感，增加趣味',
            features: ['弹跳效果', '趣味性强', '活泼感觉', '吸引注意'],
            demoStyle: 'spring'
        },
        {
            name: '自动背景动效',
            description: '粒子动画、渐变流动等',
            features: ['粒子效果', '渐变流动', '背景动画', '氛围营造'],
            demoStyle: 'background'
        },
        {
            name: '加载动画',
            description: '让等待过程不无聊',
            features: ['加载提示', '等待优化', '视觉反馈', '用户体验'],
            demoStyle: 'loading'
        },
        {
            name: '逐字渐显',
            description: '模拟打字机效果，常用于介绍语句',
            features: ['打字机效果', '逐字显示', '文字动画', '叙述感强'],
            demoStyle: 'typing'
        }
    ]
};

// 创建主题卡片的函数
function createThemeCard(theme, category) {
    const card = document.createElement('div');
    card.className = `theme-card ${theme.demoStyle}-demo`;
    
    // 创建卡片内容
    card.innerHTML = `
        <h3 class="card-title">${theme.name}</h3>
        <p class="card-description">${theme.description}</p>
        <ul class="card-features">
            ${theme.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        ${theme.scene ? `<p class="card-scene"><strong>适用场景：</strong>${theme.scene}</p>` : ''}
        ${theme.colors ? `
            <div class="color-palette">
                ${theme.colors.map(color => `<div class="color-swatch" style="background-color: ${color}"></div>`).join('')}
            </div>
        ` : ''}
        <div class="card-demo ${theme.demoStyle}-style">
            ${getDemoContent(theme.demoStyle, category)}
        </div>
    `;
    
    // 添加悬停效果
    card.addEventListener('mouseenter', () => {
        // 添加悬停时的粒子效果
        createHoverParticles(card);
        
        // 添加悬停时的光晕效果
        addGlowEffect(card, theme);
    });
    
    card.addEventListener('mouseleave', () => {
        // 移除粒子效果
        removeHoverParticles(card);
        
        // 移除光晕效果
        removeGlowEffect(card);
    });
    
    // 添加点击事件和涟漪效果
    card.addEventListener('click', (e) => {
        // 添加触觉反馈
        addHapticFeedback();
        
        // 创建涟漪效果
        createRippleEffect(e, card);
        
        // 添加点击动画
        card.style.transform = 'scale(0.95)';
        card.style.transition = 'transform 0.1s ease';
        
        // 添加点击时的爆炸效果
        createClickExplosion(e, card);
        
        // 延迟显示模态框，让用户看到点击效果
        setTimeout(() => {
            card.style.transform = '';
            card.style.transition = 'all 0.3s ease';
            showThemeModal(theme, category);
        }, 150);
    });
    
    // 添加悬停动效
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
        card.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '';
    });
    
    // 添加触摸设备支持
    card.addEventListener('touchstart', () => {
        card.style.transform = 'scale(0.98)';
    });
    
    card.addEventListener('touchend', () => {
        card.style.transform = '';
    });
    
    return card;
}

// 从主题中提取颜色
function extractColorsFromTheme(theme) {
    const colorMap = {
        '柔和色系': ['#f8d7da', '#d1ecf1', '#d4edda', '#fff3cd'],
        '霓虹科技': ['#ff0080', '#00ff80', '#8000ff', '#ff8000'],
        '原色对比': ['#ff0000', '#0000ff', '#ffff00', '#00ff00'],
        '暖色系': ['#ff6b35', '#f7931e', '#ffd23f', '#ee4b2b'],
        '冷色系': ['#4a90e2', '#50c878', '#9370db', '#20b2aa'],
        '单色系': ['#1a1a1a', '#4a4a4a', '#7a7a7a', '#aaaaaa'],
        '暗金主题': ['#000000', '#ffd700', '#b8860b', '#daa520'],
        '自然色系': ['#8b4513', '#228b22', '#d2691e', '#a0522d']
    };
    
    return colorMap[theme.name] || ['#007bff', '#6c757d', '#28a745', '#dc3545'];
}

// 创建悬停粒子效果
function createHoverParticles(card) {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        overflow: hidden;
        border-radius: inherit;
    `;
    
    // 创建多个粒子
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'hover-particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--accent-color, #007bff);
            border-radius: 50%;
            opacity: 0;
            animation: particleFloat 2s ease-in-out infinite;
            animation-delay: ${i * 0.2}s;
        `;
        
        // 随机位置
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        particleContainer.appendChild(particle);
    }
    
    card.appendChild(particleContainer);
}

// 移除悬停粒子效果
function removeHoverParticles(card) {
    const particleContainer = card.querySelector('.particle-container');
    if (particleContainer) {
        particleContainer.remove();
    }
}

// 添加光晕效果
function addGlowEffect(card, theme) {
    const glowColor = getThemeAccentColor(theme);
    card.style.boxShadow = `0 0 20px ${glowColor}, 0 15px 35px rgba(0, 0, 0, 0.2)`;
    card.style.borderColor = glowColor;
}

// 移除光晕效果
function removeGlowEffect(card) {
    card.style.boxShadow = '';
    card.style.borderColor = '';
}

// 获取主题强调色
function getThemeAccentColor(theme) {
    const colorMap = {
        '暗黑模式': '#4a9eff',
        '亮白模式': '#007bff',
        '霓虹科技': '#00ff88',
        '柔和色系': '#ff6b9d',
        '玻璃态': '#667eea',
        '泥土态': '#ff6b6b'
    };
    
    return colorMap[theme.name] || '#007bff';
}

// 创建点击爆炸效果
function createClickExplosion(event, card) {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // 创建爆炸容器
    const explosionContainer = document.createElement('div');
    explosionContainer.className = 'explosion-container';
    explosionContainer.style.cssText = `
        position: absolute;
        top: ${y}px;
        left: ${x}px;
        pointer-events: none;
        z-index: 10;
    `;
    
    // 创建爆炸粒子
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'explosion-particle';
        
        const angle = (i / 12) * Math.PI * 2;
        const distance = 50 + Math.random() * 30;
        const size = 3 + Math.random() * 4;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: var(--accent-color, #007bff);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            animation: explode 0.6s ease-out forwards;
            --end-x: ${Math.cos(angle) * distance}px;
            --end-y: ${Math.sin(angle) * distance}px;
        `;
        
        explosionContainer.appendChild(particle);
    }
    
    card.appendChild(explosionContainer);
    
    // 清理爆炸效果
    setTimeout(() => {
        if (explosionContainer.parentNode) {
            explosionContainer.remove();
        }
    }, 600);
}

// 创建涟漪效果函数
function createRippleEffect(event, element) {
    // 移除之前的涟漪效果
    const existingRipple = element.querySelector('.ripple');
    if (existingRipple) {
        existingRipple.remove();
    }
    
    // 创建涟漪元素
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    // 获取点击位置
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // 计算涟漪大小
    const size = Math.max(element.offsetWidth, element.offsetHeight);
    
    // 设置涟漪样式
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (x - size / 2) + 'px';
    ripple.style.top = (y - size / 2) + 'px';
    
    // 添加到元素中
    element.appendChild(ripple);
    
    // 自动移除涟漪效果
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.remove();
        }
    }, 600);
}

// 获取演示内容的函数
function getDemoContent(demoStyle, category) {
    const demoContents = {
        // 视觉风格演示内容
        minimalism: '<div class="demo-minimalism"><div class="min-header">简洁</div><div class="min-content">留白艺术</div><div class="min-button">按钮</div></div>',
        flat: '<div class="demo-flat"><div class="flat-icon">📱</div><div class="flat-button">扁平按钮</div><div class="flat-card">卡片设计</div></div>',
        neumorphism: '<div class="demo-neumorphism"><div class="neu-bg"></div><div class="neu-container"><div class="neu-button">🔘 按钮</div><div class="neu-input">📝 输入框</div><div class="neu-toggle"><div class="neu-switch"></div></div><div class="neu-card">💳 卡片</div></div></div>',
        skeuomorphism: '<div class="demo-skeuomorphism"><div class="skeu-bg"></div><div class="skeu-materials"><div class="skeu-wood"><div class="wood-grain"></div><div class="skeu-text">🌳 木质</div></div><div class="skeu-leather"><div class="leather-texture"></div><div class="skeu-text">🧳 皮革</div></div><div class="skeu-metal"><div class="metal-shine"></div><div class="skeu-text">⚙️ 金属</div></div></div></div>',
        glassmorphism: '<div class="demo-glassmorphism"><div class="glass-bg"></div><div class="glass-layers"><div class="glass-card glass-primary"><div class="glass-icon">🔮</div><div class="glass-title">毛玻璃</div></div><div class="glass-card glass-secondary"><div class="glass-content">透明层次</div></div><div class="glass-card glass-accent"><div class="glass-blur">模糊效果</div></div></div></div>',
        claymorphism: '<div class="demo-claymorphism"><div class="clay-button">按钮</div><div class="clay-toggle">开关</div><div class="clay-icon">🎨</div></div>',
        grid: '<div class="demo-grid"><div class="grid-header">📐 网格系统</div><div class="grid-container"><div class="grid-item grid-large">主要内容</div><div class="grid-item grid-small">侧栏</div><div class="grid-item grid-medium">卡片A</div><div class="grid-item grid-medium">卡片B</div><div class="grid-item grid-full">底部区域</div></div></div>',
        dark: '<div class="demo-dark"><div class="dark-header">🌙 暗黑模式</div><div class="dark-content">护眼设计</div><div class="dark-accent">高对比</div></div>',
        light: '<div class="demo-light"><div class="light-header">☀️ 亮白模式</div><div class="light-content">明亮通透</div><div class="light-accent">清新简洁</div></div>',
        
        // 色彩主题演示内容
        pastel: '<div class="demo-pastel"><div class="pastel-bg"></div><div class="pastel-content"><div class="pastel-palette"><span style="background:#ffb3ba" title="粉红"></span><span style="background:#bae1ff" title="天蓝"></span><span style="background:#baffc9" title="薄荷绿"></span><span style="background:#ffffba" title="柠檬黄"></span><span style="background:#e6ccff" title="薰衣草"></span></div><div class="pastel-text">🌸 柔和色系</div><div class="pastel-desc">温柔 · 舒缓 · 治愈</div></div></div>',
        neon: '<div class="demo-neon"><div class="neon-bg"></div><div class="neon-text">NEON</div><div class="neon-glow">🌈</div></div>',
        primary: '<div class="demo-primary"><div class="primary-red">R</div><div class="primary-blue">G</div><div class="primary-yellow">B</div></div>',
        warm: '<div class="demo-warm"><div class="warm-gradient"></div><div class="warm-text">🔥 暖色调</div></div>',
        cool: '<div class="demo-cool"><div class="cool-gradient"></div><div class="cool-text">❄️ 冷色调</div></div>',
        monochrome: '<div class="demo-monochrome"><div class="mono-bars"><span></span><span></span><span></span><span></span></div><div class="mono-text">单色系</div></div>',
        darkgold: '<div class="demo-darkgold"><div class="gold-accent">✨</div><div class="gold-text">LUXURY</div><div class="gold-border"></div></div>',
        organic: '<div class="demo-organic"><div class="organic-leaf">🍃</div><div class="organic-text">自然色系</div><div class="organic-earth">🌍</div></div>',
        
        // 排版风格演示内容
        bold: '<div style="font-weight: 900; font-size: 1.5rem; text-align: center;">粗体标题</div>',
        editorial: '<div style="columns: 2; gap: 1rem; text-align: justify; font-size: 0.9rem;">杂志式多栏排版展示文本内容</div>',
        minimal: '<div style="font-size: 1.2rem; text-align: center; letter-spacing: 2px;">极简文字</div>',
        handwritten: '<div style="font-family: \'Kalam\', cursive; font-size: 1.1rem;">手写风格文字</div>',
        modern: '<div style="font-family: \'Inter\', sans-serif; font-weight: 300;">现代无衬线字体</div>',
        retro: '<div style="font-family: serif; font-weight: bold; color: #8B4513;">复古字体风格</div>',
        
        // 布局组件演示内容
        card: '<div class="demo-card"><div class="card-layout"><div class="card-item card-primary"><div class="card-icon">📄</div><div class="card-title">主卡片</div></div><div class="card-item card-secondary"><div class="card-icon">🖼️</div><div class="card-title">图片卡</div></div><div class="card-item card-info"><div class="card-icon">📊</div><div class="card-title">数据卡</div></div><div class="card-item card-action"><div class="card-icon">⚡</div><div class="card-title">操作卡</div></div></div></div>',
        masonry: '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 5px;"><div style="background: #ddd; height: 40px;"></div><div style="background: #bbb; height: 60px;"></div><div style="background: #999; height: 30px;"></div><div style="background: #777; height: 50px;"></div></div>',
        accordion: '<div><div style="background: #f0f0f0; padding: 0.5rem; cursor: pointer;">▼ 可展开项目</div><div style="background: #fff; padding: 0.5rem; border-left: 3px solid #007bff;">展开的内容</div></div>',
        tabs: '<div><div style="display: flex; border-bottom: 1px solid #ddd;"><span style="padding: 0.5rem; background: #007bff; color: white;">标签1</span><span style="padding: 0.5rem; background: #f8f9fa;">标签2</span></div><div style="padding: 1rem;">标签内容</div></div>',
        floating: '<div style="position: relative; height: 60px;"><div style="position: absolute; bottom: 10px; right: 10px; background: #007bff; color: white; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;">+</div></div>',
        swipe: '<div style="display: flex; overflow: hidden;"><div style="min-width: 100%; background: #007bff; color: white; padding: 1rem; text-align: center;">滑动卡片1</div></div>',
        split: '<div style="display: flex; height: 60px;"><div style="flex: 1; background: #f8f9fa; padding: 0.5rem;">左侧内容</div><div style="flex: 1; background: #e9ecef; padding: 0.5rem;">右侧内容</div></div>',
        scroll: '<div style="background: linear-gradient(to bottom, #007bff, #28a745); color: white; padding: 1rem; text-align: center;">滚动故事</div>',
        
        // 动画效果演示内容
        micro: '<div class="hover-demo" style="background: #007bff; color: white; padding: 1rem; transition: all 0.3s; cursor: pointer;" onmouseover="this.style.transform=\'scale(1.05)\'" onmouseout="this.style.transform=\'scale(1)\'">悬停我</div>',
        slide: '<div class="slide-demo" style="background: #28a745; color: white; padding: 1rem; animation: slideIn 2s ease-in-out infinite;">滑入动画</div>',
        spring: '<div class="spring-demo" style="background: #ffc107; padding: 1rem; animation: bounce 2s ease-in-out infinite;">弹跳效果</div>',
        background: '<div style="background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1); background-size: 200% 200%; animation: gradientMove 3s ease infinite; padding: 1rem; color: white;">背景动效</div>',
        loading: '<div style="display: flex; align-items: center; justify-content: center; padding: 1rem;"><div style="width: 20px; height: 20px; border: 2px solid #f3f3f3; border-top: 2px solid #007bff; border-radius: 50%; animation: spin 1s linear infinite;"></div></div>',
        typing: '<div class="typing-demo" style="font-family: monospace; padding: 1rem;">打字机效果...</div>'
    };
    
    return demoContents[demoStyle] || '<div>演示效果</div>';
}

// 显示主题详情模态框的函数
function showThemeModal(theme, category) {
    // 显示加载状态
    const loader = showLoadingState();
    
    // 添加触觉反馈
    addHapticFeedback();
    
    // 模拟加载延迟（实际项目中可能是API调用）
    setTimeout(() => {
        hideLoadingState(loader);
        
        // 创建模态框
        const modal = document.createElement('div');
        modal.className = 'theme-modal';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content glass-effect';
    
    modalContent.innerHTML = `
        <span class="modal-close">&times;</span>
        <h2>${theme.name}</h2>
        <p class="modal-description">${theme.description}</p>
        <div class="modal-features">
            <h3>特点：</h3>
            <ul>
                ${theme.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        ${theme.scene ? `<p><strong>适用场景：</strong>${theme.scene}</p>` : ''}
        ${theme.colors ? `
            <div class="modal-colors">
                <h3>色彩搭配：</h3>
                <div class="color-palette">
                    ${theme.colors.map(color => `<div class="color-swatch large" style="background-color: ${color}" title="${color}"></div>`).join('')}
                </div>
            </div>
        ` : ''}
        <div class="modal-demo">
            <h3>效果预览：</h3>
            <div class="demo-container ${theme.demoStyle}-style">
                ${getDemoContent(theme.demoStyle, category)}
            </div>
        </div>
    `;
    
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    
        // 添加打开动画类
        modal.classList.add('modal-opening');
        modalContent.classList.add('modal-content-opening');
        
        // 显示动画
        requestAnimationFrame(() => {
            modal.style.opacity = '1';
            modalContent.style.transform = 'scale(1) translateY(0)';
            
            // 移除动画类
            setTimeout(() => {
                modal.classList.remove('modal-opening');
                modalContent.classList.remove('modal-content-opening');
            }, 400);
        });
    
        // 关闭事件
        const closeModal = () => {
            addHapticFeedback();
            modal.classList.add('modal-closing');
            modalContent.classList.add('modal-content-closing');
            
            modal.style.opacity = '0';
            modalContent.style.transform = 'scale(0.9) translateY(-20px)';
            
            setTimeout(() => {
                if (document.body.contains(modal)) {
                    document.body.removeChild(modal);
                }
            }, 300);
        };
        
        modalContent.querySelector('.modal-close').addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // ESC键关闭
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', handleEsc);
            }
        };
        document.addEventListener('keydown', handleEsc);
    }, 500);
}

// 渲染主题卡片的函数
function renderThemeCards() {
    // 渲染视觉风格
    const visualContainer = document.getElementById('visual-masonry');
    themeData.visualStyles.forEach(theme => {
        visualContainer.appendChild(createThemeCard(theme, 'visual'));
    });
    
    // 渲染色彩主题
    const colorContainer = document.getElementById('color-masonry');
    themeData.colorThemes.forEach(theme => {
        colorContainer.appendChild(createThemeCard(theme, 'color'));
    });
    
    // 渲染排版风格
    const typographyContainer = document.getElementById('typography-masonry');
    themeData.typography.forEach(theme => {
        typographyContainer.appendChild(createThemeCard(theme, 'typography'));
    });
    
    // 渲染布局组件
    const layoutContainer = document.getElementById('layout-masonry');
    themeData.layouts.forEach(theme => {
        layoutContainer.appendChild(createThemeCard(theme, 'layout'));
    });
    
    // 渲染动画效果
    const animationContainer = document.getElementById('animation-masonry');
    themeData.animations.forEach(theme => {
        animationContainer.appendChild(createThemeCard(theme, 'animation'));
    });
}

// 平滑滚动导航功能
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 添加滚动动画效果
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察所有主题卡片
    setTimeout(() => {
        const cards = document.querySelectorAll('.theme-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(card);
        });
    }, 100);
}

// CTA按钮功能
function initCTAButton() {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            document.querySelector('#visual-styles').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}

// 增强的打字机效果
function initTypingEffect() {
    // 初始化所有打字机效果
    const typingElements = document.querySelectorAll('.typing-demo');
    typingElements.forEach(element => {
        const texts = [
            '这是增强版打字机效果演示...',
            '支持多行文本切换显示',
            '具有更流畅的动画效果',
            '让您的网站更加生动有趣！'
        ];
        
        // 使用新的打字机效果类
        createTypewriter(element, texts, {
            speed: 60,
            deleteSpeed: 30,
            pauseTime: 2000,
            loop: true,
            showCursor: true,
            autoStart: true
        });
    });
    
    // 为英雄区域标题添加打字机效果
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        createTypewriter(heroTitle, [originalText], {
            speed: 100,
            loop: false,
            showCursor: false,
            autoStart: true
        });
    }
}

// 添加加载状态管理
function showLoadingState() {
    const loader = document.createElement('div');
    loader.className = 'loading-overlay';
    loader.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner"></div>
            <p>正在加载主题详情...</p>
        </div>
    `;
    document.body.appendChild(loader);
    return loader;
}

function hideLoadingState(loader) {
    if (loader && document.body.contains(loader)) {
        loader.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(loader);
        }, 300);
    }
}

// 添加触觉反馈（如果支持）
function addHapticFeedback() {
    if ('vibrate' in navigator) {
        navigator.vibrate(50); // 轻微震动50毫秒
    }
}



// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 渲染所有主题卡片
    renderThemeCards();
    
    // 初始化功能
    initSmoothScroll();
    initScrollAnimations();
    initCTAButton();
    
    // 延迟初始化打字机效果
    setTimeout(initTypingEffect, 1000);
    
    // 添加页面加载动画
    document.body.classList.add('loaded');
    
    // 添加滚动到顶部按钮
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.onclick = () => {
        addHapticFeedback();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    document.body.appendChild(scrollTopBtn);
    
    // 添加键盘导航支持
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
    
    console.log('主题风格展示网站已加载完成！');
});

// 添加额外的CSS动画样式
const additionalStyles = `
<style>
/* 涟漪效果样式 */
.theme-card {
    position: relative;
    overflow: hidden;
}

.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    transform: scale(0);
    animation: rippleEffect 0.6s ease-out;
    pointer-events: none;
    z-index: 1;
}

@keyframes rippleEffect {
    0% {
        transform: scale(0);
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        transform: scale(2);
        opacity: 0;
    }
}

/* 卡片点击动画增强 */
.theme-card {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.theme-card:active {
    transform: scale(0.95);
}

/* 模态框样式 */
.theme-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(248, 249, 250, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    opacity: 0;
    transition: opacity 0.3s ease;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

.modal-content {
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
    padding: 2rem;
    position: relative;
    transform: scale(0.8) translateY(20px);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-content-opening {
    animation: modalContentSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.modal-content-closing {
    animation: modalContentSlideOut 0.3s ease-in forwards;
}

@keyframes modalContentSlideIn {
    0% {
        transform: scale(0.8) translateY(20px);
        opacity: 0;
    }
    100% {
        transform: scale(1) translateY(0);
        opacity: 1;
    }
}

@keyframes modalContentSlideOut {
    0% {
        transform: scale(1) translateY(0);
        opacity: 1;
    }
    100% {
        transform: scale(0.9) translateY(-20px);
        opacity: 0;
    }
}

.modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    cursor: pointer;
    color: var(--text-secondary);
    transition: color 0.3s ease;
}

.modal-close:hover {
    color: var(--primary-color);
}

.modal-description {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    color: var(--text-secondary);
}

.modal-features ul {
    list-style: none;
    margin-bottom: 1.5rem;
}

.modal-features li {
    padding: 0.3rem 0;
    position: relative;
    padding-left: 1.5rem;
}

.modal-features li::before {
    content: '✨';
    position: absolute;
    left: 0;
}

/* 模态框中的h3标题样式 */
.modal-content h3 {
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--text-color);
    margin-bottom: 1rem;
    margin-top: 1.5rem;
}

.modal-content h2 {
    font-size: 2rem;
    font-weight: 800;
    color: var(--text-color);
    margin-bottom: 1rem;
}

.color-palette {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
}

.color-swatch {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transition: transform 0.3s ease;
}

.color-swatch:hover {
    transform: scale(1.2);
}

.color-swatch.large {
    width: 40px;
    height: 40px;
}

.demo-container {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 1rem;
    margin-top: 1rem;
}

/* 动画关键帧 */
@keyframes slideIn {
    0% { transform: translateX(-100%); }
    50% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
}

@keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* 加载状态样式 */
.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3000;
    transition: opacity 0.3s ease;
}

.loading-spinner {
    text-align: center;
    color: white;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid #007bff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 1rem;
}

/* 滚动到顶部按钮 */
.scroll-top-btn {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background: var(--primary-color);
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    z-index: 1000;
}

.scroll-top-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

/* 键盘导航样式 */
.keyboard-navigation *:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}

/* 页面加载动画 */
body:not(.loaded) {
    overflow: hidden;
}

body:not(.loaded)::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--bg-color);
    z-index: 9999;
    animation: fadeOut 0.5s ease 1s forwards;
}

@keyframes fadeOut {
    to {
        opacity: 0;
        visibility: hidden;
    }
}

/* 主题控制按钮样式 */
#theme-controls button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
}

#theme-controls button:disabled:hover {
    transform: none !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
}

/* 增强的主题演示样式 */
.demo-minimalism {
    background: #fff;
    padding: 1.5rem;
    text-align: center;
    border: 1px solid #f0f0f0;
}

.min-header {
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 1rem;
    letter-spacing: 2px;
}

.min-content {
    color: #666;
    margin-bottom: 1rem;
}

.min-button {
    background: #000;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    font-size: 0.9rem;
}

.demo-flat {
    background: #3498db;
    color: white;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.flat-icon {
    font-size: 1.5rem;
}

.flat-button {
    background: #2980b9;
    padding: 0.5rem;
    border-radius: 0;
}

.demo-neumorphism {
    background: #e0e0e0;
    padding: 1.5rem;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
}

.neu-button, .neu-input, .neu-card {
    background: #e0e0e0;
    padding: 0.5rem;
    border-radius: 15px;
    box-shadow: 6px 6px 12px #bebebe, -6px -6px 12px #ffffff;
    font-size: 0.8rem;
}

.demo-glassmorphism {
    position: relative;
    height: 80px;
    overflow: hidden;
    border-radius: 10px;
}

.glass-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
}

.glass-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255,255,255,0.2);
    backdrop-filter: blur(10px);
    padding: 1rem;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.3);
    color: white;
    text-align: center;
}

.demo-claymorphism {
    background: #ff6b6b;
    padding: 1.5rem;
    border-radius: 30px;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
}

.clay-button, .clay-toggle {
    background: #ff5252;
    padding: 0.5rem;
    border-radius: 20px;
    box-shadow: 0 8px 16px rgba(255,107,107,0.3);
    color: white;
    font-size: 0.8rem;
}

.clay-icon {
    font-size: 1.2rem;
}

.demo-neon {
    position: relative;
    background: #000;
    padding: 1rem;
    text-align: center;
    overflow: hidden;
}

.neon-text {
    color: #00ff80;
    font-weight: bold;
    text-shadow: 0 0 10px #00ff80, 0 0 20px #00ff80;
    animation: neonPulse 2s ease-in-out infinite alternate;
}

.neon-glow {
    margin-top: 0.5rem;
    filter: hue-rotate(90deg);
}

@keyframes neonPulse {
    from { text-shadow: 0 0 10px #00ff80, 0 0 20px #00ff80; }
    to { text-shadow: 0 0 5px #00ff80, 0 0 10px #00ff80, 0 0 15px #00ff80; }
}

.demo-pastel {
    background: #fef7f0;
    padding: 1rem;
    text-align: center;
}

.pastel-palette {
    display: flex;
    justify-content: center;
    gap: 0.3rem;
    margin-bottom: 0.5rem;
}

.pastel-palette span {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.8);
}

.demo-primary {
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    background: #fff;
}

.primary-red {
    background: #ff0000;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

.primary-blue {
    background: #0000ff;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

.primary-yellow {
    background: #ffff00;
    color: black;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

.demo-warm {
    position: relative;
    padding: 1rem;
    text-align: center;
    color: white;
}

.warm-gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #ff6b35, #f7931e);
    border-radius: inherit;
}

.warm-text {
    position: relative;
    z-index: 1;
}

.demo-cool {
    position: relative;
    padding: 1rem;
    text-align: center;
    color: white;
}

.cool-gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #4a90e2, #50c878);
    border-radius: inherit;
}

.cool-text {
    position: relative;
    z-index: 1;
}

.demo-dark {
    background: #1a1a1a;
    color: #fff;
    padding: 1rem;
    text-align: center;
}

.dark-header {
    margin-bottom: 0.5rem;
    font-weight: bold;
}

.dark-accent {
    color: #4a9eff;
    font-size: 0.9rem;
}

.demo-light {
    background: #ffffff;
    color: #333;
    padding: 1rem;
    text-align: center;
    border: 1px solid #eee;
}

.light-header {
    margin-bottom: 0.5rem;
    font-weight: bold;
}

.light-accent {
    color: #007bff;
    font-size: 0.9rem;
}

/* 响应式模态框 */
@media (max-width: 768px) {
    .modal-content {
        max-width: 90%;
        margin: 1rem;
        padding: 1.5rem;
    }
    
    .scroll-top-btn {
        bottom: 1rem;
        right: 1rem;
        width: 45px;
        height: 45px;
    }
    
    #theme-controls {
        bottom: 60px;
        right: 10px;
    }
    
    #theme-controls button {
        width: 40px;
        height: 40px;
    }
}
</style>`;

// 将额外样式添加到页面
document.head.insertAdjacentHTML('beforeend', additionalStyles);

// 水墨轨迹效果
class InkTrail {
    constructor() {
        this.trails = [];
        this.maxTrails = 15;
        this.init();
    }

    init() {
        // 监听鼠标移动事件
        document.addEventListener('mousemove', (e) => {
            this.createInkDrop(e.clientX, e.clientY);
        });

        // 定期清理过期的轨迹
        setInterval(() => {
            this.cleanupTrails();
        }, 100);
    }

    createInkDrop(x, y) {
        // 限制轨迹数量
        if (this.trails.length >= this.maxTrails) {
            const oldTrail = this.trails.shift();
            if (oldTrail && oldTrail.element && oldTrail.element.parentNode) {
                oldTrail.element.parentNode.removeChild(oldTrail.element);
            }
        }

        // 创建水墨点
        const inkDrop = document.createElement('div');
        inkDrop.className = 'ink-drop';
        
        // 随机大小和透明度
        const size = Math.random() * 8 + 4;
        const opacity = Math.random() * 0.3 + 0.1;
        const rotation = Math.random() * 360;
        
        inkDrop.style.cssText = `
            position: fixed;
            left: ${x - size/2}px;
            top: ${y - size/2}px;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(44,44,44,${opacity}) 0%, rgba(44,44,44,${opacity*0.5}) 60%, transparent 100%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            transform: rotate(${rotation}deg);
            animation: inkFade 2s ease-out forwards;
        `;

        // 添加到页面
        document.body.appendChild(inkDrop);
        
        // 记录轨迹
        this.trails.push({
            element: inkDrop,
            timestamp: Date.now()
        });
    }

    cleanupTrails() {
        const now = Date.now();
        this.trails = this.trails.filter(trail => {
            if (now - trail.timestamp > 2000) {
                if (trail.element && trail.element.parentNode) {
                    trail.element.parentNode.removeChild(trail.element);
                }
                return false;
            }
            return true;
        });
    }
}

// 水墨轨迹动画样式
const inkTrailStyles = `
<style>
@keyframes inkFade {
    0% {
        opacity: 1;
        transform: scale(1) rotate(var(--rotation, 0deg));
    }
    50% {
        opacity: 0.6;
        transform: scale(1.2) rotate(var(--rotation, 0deg));
    }
    100% {
        opacity: 0;
        transform: scale(0.8) rotate(var(--rotation, 0deg));
    }
}

.ink-drop {
    filter: blur(0.5px);
}

/* 水墨风格增强 */
.theme-card {
    background: rgba(248, 248, 240, 0.9);
    border: 1px solid rgba(44, 44, 44, 0.1);
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.theme-card:hover {
    background: rgba(240, 240, 232, 0.95);
    box-shadow: 
        0 12px 40px rgba(0, 0, 0, 0.12),
        inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

.card-title {
    color: #2c2c2c;
    font-family: 'Kalam', sans-serif;
    font-weight: 700;
}

.section-title {
    color: #2c2c2c;
    font-family: 'Kalam', sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar {
    background: rgba(248, 248, 240, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(44, 44, 44, 0.1);
}

.cta-button {
    background: linear-gradient(135deg, #4a4a4a 0%, #2c2c2c 100%);
    color: #f8f8f0;
    border: 1px solid rgba(44, 44, 44, 0.2);
    font-family: 'Kalam', sans-serif;
    font-weight: 600;
}

.cta-button:hover {
    background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}
</style>
`;

// 添加水墨轨迹样式
document.head.insertAdjacentHTML('beforeend', inkTrailStyles);

// 初始化水墨轨迹效果
const inkTrail = new InkTrail();