// 定义不同语言的文本
const texts = {
    en: {
        title: 'Welcome',
        description: 'This is a simple language switch example. Here is a math formula:',
        formula: '\\( E = mc^2 \\)'
    },
    zh: {
        title: '欢迎',
        description: '这是一个简单的语言切换示例，这里展示一个数学公式：',
        formula: '\\( E = mc^2 \\)'
    }
};

// 获取DOM元素
const languageSelect = document.getElementById('languageSelect');
const content = document.getElementById('content');

// 当前语言
let currentLanguage = 'zh';

// 切换语言的函数
function switchLanguage() {
    currentLanguage = languageSelect.value;
    const text = texts[currentLanguage];
    content.innerHTML = `
        <h1>${text.title}</h1>
        <p>${text.description}</p>
        <p>${text.formula}</p>
    `;
    // 手动触发MathJax重新渲染
    MathJax.typesetPromise([content]).catch((err) => console.log('MathJax typesetPromise 错误: ', err));
}

// 为下拉选择框添加change事件
languageSelect.addEventListener('change', switchLanguage);