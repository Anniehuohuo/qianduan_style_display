/**
 * 主题管理器 - 负责处理主题切换和样式应用
 * Theme Manager - Handles theme switching and style application
 */

class ThemeManager {
    constructor() {
        this.currentTheme = 'default';
        this.themeStyles = new Map();
        this.initializeThemes();
    }

    /**
     * 初始化所有主题样式
     * Initialize all theme styles
     */
    initializeThemes() {
        // 毛玻璃主题
        this.themeStyles.set('glassmorphism', {
            '--primary-bg': 'rgba(255, 255, 255, 0.15)',
            '--secondary-bg': 'rgba(255, 255, 255, 0.1)',
            '--text-color': '#333',
            '--accent-color': '#b8a9ff',
            '--border-color': 'rgba(255, 255, 255, 0.2)',
            '--shadow': '0 8px 32px rgba(0, 0, 0, 0.1)',
            '--backdrop-filter': 'blur(10px)',
            '--border-radius': '15px'
        });

        // 粘土风格主题
        this.themeStyles.set('claymorphism', {
            '--primary-bg': '#f0f0f0',
            '--secondary-bg': '#e8e8e8',
            '--text-color': '#2c2c2c',
            '--accent-color': '#ff6b6b',
            '--border-color': '#d0d0d0',
            '--shadow': '8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff',
            '--backdrop-filter': 'none',
            '--border-radius': '25px'
        });

        // 暗黑主题
        this.themeStyles.set('dark', {
            '--primary-bg': '#1a1a1a',
            '--secondary-bg': '#2d2d2d',
            '--text-color': '#ffffff',
            '--accent-color': '#00ff80',
            '--border-color': '#404040',
            '--shadow': '0 8px 32px rgba(0, 0, 0, 0.5)',
            '--backdrop-filter': 'none',
            '--border-radius': '8px'
        });

        // 亮白主题
        this.themeStyles.set('light', {
            '--primary-bg': '#ffffff',
            '--secondary-bg': '#f8f9fa',
            '--text-color': '#333333',
            '--accent-color': '#007bff',
            '--border-color': '#e9ecef',
            '--shadow': '0 2px 10px rgba(0, 0, 0, 0.1)',
            '--backdrop-filter': 'none',
            '--border-radius': '8px'
        });

        // 霓虹主题
        this.themeStyles.set('neon', {
            '--primary-bg': '#000000',
            '--secondary-bg': '#111111',
            '--text-color': '#00ff80',
            '--accent-color': '#ff0080',
            '--border-color': '#00ff80',
            '--shadow': '0 0 20px #00ff80, inset 0 0 20px rgba(0, 255, 128, 0.1)',
            '--backdrop-filter': 'none',
            '--border-radius': '0px'
        });

        // 柔和色彩主题
        this.themeStyles.set('pastel', {
            '--primary-bg': '#fef7f7',
            '--secondary-bg': '#f8f4ff',
            '--text-color': '#5a5a5a',
            '--accent-color': '#dda0dd',
            '--border-color': '#e8d5e8',
            '--shadow': '0 4px 20px rgba(221, 160, 221, 0.2)',
            '--backdrop-filter': 'none',
            '--border-radius': '12px'
        });
    }

    /**
     * 应用主题到页面
     * Apply theme to the page
     * @param {string} themeName - 主题名称
     */
    applyTheme(themeName) {
        const themeVars = this.themeStyles.get(themeName);
        if (!themeVars) {
            console.warn(`主题 "${themeName}" 不存在`);
            return;
        }

        // 添加过渡动画
        document.body.style.transition = 'all 0.5s ease';
        
        // 应用CSS变量
        const root = document.documentElement;
        Object.entries(themeVars).forEach(([property, value]) => {
            root.style.setProperty(property, value);
        });

        // 更新当前主题
        this.currentTheme = themeName;
        
        // 添加主题类名到body
        document.body.className = document.body.className.replace(/theme-\w+/g, '');
        document.body.classList.add(`theme-${themeName}`);

        // 触发主题切换事件
        this.dispatchThemeChangeEvent(themeName);
        
        // 显示主题切换提示
        this.showThemeNotification(themeName);

        console.log(`已切换到主题: ${themeName}`);
    }

    /**
     * 触发主题切换事件
     * Dispatch theme change event
     * @param {string} themeName - 主题名称
     */
    dispatchThemeChangeEvent(themeName) {
        const event = new CustomEvent('themeChanged', {
            detail: { themeName, themeVars: this.themeStyles.get(themeName) }
        });
        document.dispatchEvent(event);
    }

    /**
     * 显示主题切换通知
     * Show theme change notification
     * @param {string} themeName - 主题名称
     */
    showThemeNotification(themeName) {
        // 移除现有通知
        const existingNotification = document.querySelector('.theme-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // 创建新通知
        const notification = document.createElement('div');
        notification.className = 'theme-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">🎨</span>
                <span class="notification-text">已切换到 ${this.getThemeDisplayName(themeName)} 主题</span>
            </div>
        `;

        // 添加样式
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary-bg, rgba(255, 255, 255, 0.9));
            color: var(--text-color, #333);
            padding: 12px 20px;
            border-radius: var(--border-radius, 8px);
            box-shadow: var(--shadow, 0 4px 20px rgba(0, 0, 0, 0.1));
            backdrop-filter: var(--backdrop-filter, none);
            border: 1px solid var(--border-color, #e0e0e0);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            font-size: 14px;
            font-weight: 500;
        `;

        document.body.appendChild(notification);

        // 动画显示
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // 3秒后自动隐藏
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    /**
     * 获取主题显示名称
     * Get theme display name
     * @param {string} themeName - 主题名称
     * @returns {string} 显示名称
     */
    getThemeDisplayName(themeName) {
        const displayNames = {
            'glassmorphism': '毛玻璃',
            'claymorphism': '粘土风格',
            'dark': '暗黑模式',
            'light': '亮白模式',
            'neon': '霓虹风格',
            'pastel': '柔和色彩'
        };
        return displayNames[themeName] || themeName;
    }

    /**
     * 获取当前主题
     * Get current theme
     * @returns {string} 当前主题名称
     */
    getCurrentTheme() {
        return this.currentTheme;
    }

    /**
     * 获取所有可用主题
     * Get all available themes
     * @returns {Array} 主题名称数组
     */
    getAvailableThemes() {
        return Array.from(this.themeStyles.keys());
    }

    /**
     * 重置到默认主题
     * Reset to default theme
     */
    resetToDefault() {
        this.applyTheme('glassmorphism');
    }
}

// 创建全局主题管理器实例
window.themeManager = new ThemeManager();

// 导出主题管理器（如果使用模块系统）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ThemeManager;
}