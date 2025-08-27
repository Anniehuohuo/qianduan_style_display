/**
 * 打字机效果模块 - 增强版打字机动画
 * Enhanced Typewriter Effect Module
 */

class TypewriterEffect {
    constructor(element, options = {}) {
        this.element = element;
        this.options = {
            speed: 80,              // 打字速度（毫秒）
            deleteSpeed: 40,        // 删除速度（毫秒）
            pauseTime: 1500,        // 暂停时间（毫秒）
            loop: true,             // 是否循环
            showCursor: true,       // 是否显示光标
            cursorChar: '|',        // 光标字符
            autoStart: true,        // 自动开始
            ...options
        };
        
        this.texts = [];
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.isRunning = false;
        this.timeoutId = null;
        
        this.init();
    }

    /**
     * 初始化打字机效果
     * Initialize typewriter effect
     */
    init() {
        if (!this.element) {
            console.error('打字机效果：未找到目标元素');
            return;
        }

        // 创建光标元素
        if (this.options.showCursor) {
            this.createCursor();
        }

        // 设置初始样式
        this.element.style.fontFamily = 'monospace, Consolas, "Courier New"';
        this.element.style.position = 'relative';
        
        // 如果自动开始，则开始动画
        if (this.options.autoStart && this.texts.length > 0) {
            this.start();
        }
    }

    /**
     * 创建光标元素
     * Create cursor element
     */
    createCursor() {
        this.cursor = document.createElement('span');
        this.cursor.className = 'typewriter-cursor';
        this.cursor.textContent = this.options.cursorChar;
        this.cursor.style.cssText = `
            animation: typewriter-blink 1s infinite;
            font-weight: normal;
            color: currentColor;
        `;

        // 添加光标动画样式
        if (!document.querySelector('#typewriter-styles')) {
            const style = document.createElement('style');
            style.id = 'typewriter-styles';
            style.textContent = `
                @keyframes typewriter-blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
                .typewriter-cursor {
                    display: inline-block;
                    margin-left: 2px;
                }
            `;
            document.head.appendChild(style);
        }
    }

    /**
     * 设置要打字的文本数组
     * Set texts to type
     * @param {Array|string} texts - 文本数组或单个文本
     */
    setTexts(texts) {
        this.texts = Array.isArray(texts) ? texts : [texts];
        return this;
    }

    /**
     * 开始打字机效果
     * Start typewriter effect
     */
    start() {
        if (this.texts.length === 0) {
            console.warn('打字机效果：没有设置文本内容');
            return;
        }

        this.isRunning = true;
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        
        this.type();
        return this;
    }

    /**
     * 停止打字机效果
     * Stop typewriter effect
     */
    stop() {
        this.isRunning = false;
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
        return this;
    }

    /**
     * 暂停打字机效果
     * Pause typewriter effect
     */
    pause() {
        this.isRunning = false;
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
        return this;
    }

    /**
     * 恢复打字机效果
     * Resume typewriter effect
     */
    resume() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.type();
        }
        return this;
    }

    /**
     * 核心打字逻辑
     * Core typing logic
     */
    type() {
        if (!this.isRunning) return;

        const currentText = this.texts[this.currentTextIndex];
        let displayText = '';

        if (this.isDeleting) {
            // 删除字符
            displayText = currentText.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
        } else {
            // 添加字符
            displayText = currentText.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
        }

        // 更新显示内容
        this.updateDisplay(displayText);

        // 计算下次执行的延迟时间
        let delay = this.isDeleting ? this.options.deleteSpeed : this.options.speed;
        
        // 添加随机性，让打字更自然
        delay += Math.random() * 50;

        // 判断是否需要切换状态
        if (!this.isDeleting && this.currentCharIndex === currentText.length) {
            // 完成当前文本的打字，暂停后开始删除
            delay = this.options.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            // 完成删除，切换到下一个文本
            this.isDeleting = false;
            this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
            
            // 如果不循环且已经是最后一个文本，则停止
            if (!this.options.loop && this.currentTextIndex === 0 && this.texts.length > 1) {
                this.stop();
                return;
            }
            
            delay = 500; // 切换文本的延迟
        }

        // 继续下一次打字
        this.timeoutId = setTimeout(() => this.type(), delay);
    }

    /**
     * 更新显示内容
     * Update display content
     * @param {string} text - 要显示的文本
     */
    updateDisplay(text) {
        this.element.textContent = text;
        
        // 添加光标
        if (this.options.showCursor && this.cursor) {
            this.element.appendChild(this.cursor);
        }
    }

    /**
     * 设置打字速度
     * Set typing speed
     * @param {number} speed - 速度（毫秒）
     */
    setSpeed(speed) {
        this.options.speed = speed;
        return this;
    }

    /**
     * 设置删除速度
     * Set delete speed
     * @param {number} speed - 删除速度（毫秒）
     */
    setDeleteSpeed(speed) {
        this.options.deleteSpeed = speed;
        return this;
    }

    /**
     * 销毁打字机效果
     * Destroy typewriter effect
     */
    destroy() {
        this.stop();
        if (this.cursor && this.cursor.parentNode) {
            this.cursor.parentNode.removeChild(this.cursor);
        }
        this.element = null;
        this.cursor = null;
    }
}

/**
 * 简化的打字机效果函数
 * Simplified typewriter effect function
 * @param {HTMLElement|string} element - 目标元素或选择器
 * @param {Array|string} texts - 文本数组或单个文本
 * @param {Object} options - 配置选项
 * @returns {TypewriterEffect} 打字机实例
 */
function createTypewriter(element, texts, options = {}) {
    const targetElement = typeof element === 'string' 
        ? document.querySelector(element) 
        : element;
    
    if (!targetElement) {
        console.error('打字机效果：未找到目标元素');
        return null;
    }

    const typewriter = new TypewriterEffect(targetElement, options);
    typewriter.setTexts(texts);
    
    if (options.autoStart !== false) {
        typewriter.start();
    }
    
    return typewriter;
}

/**
 * 初始化页面中所有的打字机效果
 * Initialize all typewriter effects on the page
 */
function initAllTypewriters() {
    // 查找所有带有 data-typewriter 属性的元素
    const elements = document.querySelectorAll('[data-typewriter]');
    
    elements.forEach(element => {
        const texts = element.getAttribute('data-typewriter').split('|');
        const speed = parseInt(element.getAttribute('data-speed')) || 80;
        const loop = element.getAttribute('data-loop') !== 'false';
        
        createTypewriter(element, texts, {
            speed,
            loop,
            autoStart: true
        });
    });
}

// 导出类和函数
if (typeof window !== 'undefined') {
    window.TypewriterEffect = TypewriterEffect;
    window.createTypewriter = createTypewriter;
    window.initAllTypewriters = initAllTypewriters;
}

// 模块导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        TypewriterEffect,
        createTypewriter,
        initAllTypewriters
    };
}