// 测试数据
const testResults = [
    { id: 1, model: 'GPT-4o', team: 'OpenAI', autogeeval: { pass1: 59.02, pass3: 63.62, pass5: 65.36 }, autogeevalpp: { pass1: null, pass3: null, pass5: null }, type: 'proprietary' },
    { id: 2, model: 'GPT-4o-mini', team: 'OpenAI', autogeeval: { pass1: 55.02, pass3: 60.68, pass5: 61.43 }, autogeevalpp: { pass1: null, pass3: null, pass5: null }, type: 'proprietary' },
    { id: 3, model: 'Claude3.7-Sonnet', team: 'Anthropic', autogeeval: { pass1: 63.92, pass3: 66.72, pass5: 67.92 }, autogeevalpp: { pass1: 70.35, pass3: 75.99, pass5: 77.27 }, type: 'proprietary' },
    { id: 4, model: 'Gemini-2.0-pro', team: 'Google', autogeeval: { pass1: 65.36, pass3: 75.09, pass5: 77.28 }, autogeevalpp: { pass1: null, pass3: null, pass5: null }, type: 'proprietary' },
    { id: 5, model: 'DeepSeek-V3-1226', team: 'DeepSeek', autogeeval: { pass1: 71.55, pass3: 75.25, pass5: 76.91 }, autogeevalpp: { pass1: 71.67, pass3: 79.07, pass5: 81.78 }, type: 'open-source' },
    { id: 6, model: 'DeepSeek-V3-0324', team: 'DeepSeek', autogeeval: { pass1: 65.28, pass3: 71.92, pass5: 73.51 }, autogeevalpp: { pass1: 70.25, pass3: 77.49, pass5: 79.76 }, type: 'open-source' },
    { id: 7, model: 'Qwen-2.5-3B', team: 'Alibaba', autogeeval: { pass1: 33.58, pass3: 39.32, pass5: 41.43 }, autogeevalpp: { pass1: 36.26, pass3: 47.65, pass5: 52.59 }, type: 'open-source' },
    { id: 8, model: 'Qwen-2.5-7B', team: 'Alibaba', autogeeval: { pass1: 49.36, pass3: 54.49, pass5: 56.38 }, autogeevalpp: { pass1: 49.58, pass3: 57.66, pass5: 60.57 }, type: 'open-source' },
    { id: 9, model: 'Qwen-2.5-32B', team: 'Alibaba', autogeeval: { pass1: 54.42, pass3: 60.00, pass5: 62.04 }, autogeevalpp: { pass1: 65.45, pass3: 70.91, pass5: 73.12 }, type: 'open-source' },
    { id: 10, model: 'o3-mini-medium', team: 'OpenAI', autogeeval: { pass1: 56.98, pass3: 68.91, pass5: 71.02 }, autogeevalpp: { pass1: null, pass3: null, pass5: null }, type: 'proprietary' },
    { id: 11, model: 'QwQ-32B', team: 'Alibaba', autogeeval: { pass1: 53.74, pass3: 64.83, pass5: 68.83 }, autogeevalpp: { pass1: 60.69, pass3: 74.74, pass5: 78.76 }, type: 'open-source' },
    { id: 12, model: 'DeepSeek-R1-0120', team: 'DeepSeek', autogeeval: { pass1: 60.23, pass3: 72.68, pass5: 76.68 }, autogeevalpp: { pass1: 60.42, pass3: 76.00, pass5: 80.74 }, type: 'open-source' },
    { id: 13, model: 'DeepSeek-Coder-V2-16B', team: 'DeepSeek', autogeeval: { pass1: 31.40, pass3: 38.11, pass5: 40.75 }, autogeevalpp: { pass1: 38.80, pass3: 48.01, pass5: 51.75 }, type: 'open-source' },
    { id: 14, model: 'Qwen2.5-Coder-3B', team: 'Alibaba', autogeeval: { pass1: 46.49, pass3: 54.34, pass5: 57.36 }, autogeevalpp: { pass1: 45.05, pass3: 57.74, pass5: 62.51 }, type: 'open-source' },
    { id: 15, model: 'Qwen2.5-Coder-7B', team: 'Alibaba', autogeeval: { pass1: 51.25, pass3: 57.66, pass5: 60.91 }, autogeevalpp: { pass1: 50.51, pass3: 58.40, pass5: 61.18 }, type: 'open-source' },
    { id: 16, model: 'Qwen2.5-Coder-32B', team: 'Alibaba', autogeeval: { pass1: 61.28, pass3: 64.08, pass5: 65.21 }, autogeevalpp: { pass1: 66.77, pass3: 71.67, pass5: 73.35 }, type: 'open-source' },
    { id: 17, model: 'Code-Llama-7B', team: 'Meta', autogeeval: { pass1: 56.98, pass3: 64.00, pass5: 66.42 }, autogeevalpp: { pass1: 44.80, pass3: 55.16, pass5: 59.89 }, type: 'open-source' },
    { id: 18, model: 'GeoCode-GPT-7B', team: 'Wuhan University', autogeeval: { pass1: 58.58, pass3: 65.34, pass5: 68.53 }, autogeevalpp: { pass1: 60.48, pass3: 74.59, pass5: 80.71 }, type: 'open-source' },
    { id: 19, model: 'GPT-4.1', team: 'OpenAI', autogeeval: { pass1: null, pass3: null, pass5: null }, autogeevalpp: { pass1: 70.93, pass3: 80.03, pass5: 81.88 }, type: 'proprietary' },
    { id: 20, model: 'GPT-4.1-mini', team: 'OpenAI', autogeeval: { pass1: null, pass3: null, pass5: null }, autogeevalpp: { pass1: 66.56, pass3: 77.91, pass5: 80.29 }, type: 'proprietary' },
    { id: 21, model: 'Gemini2.5-Flash-0520', team: 'Google', autogeeval: { pass1: null, pass3: null, pass5: null }, autogeevalpp: { pass1: 71.87, pass3: 78.06, pass5: 79.92 }, type: 'proprietary' },
    { id: 22, model: 'Qwen-3-4B', team: 'Alibaba', autogeeval: { pass1: null, pass3: null, pass5: null }, autogeevalpp: { pass1: 34.03, pass3: 40.20, pass5: 42.69 }, type: 'open-source' },
    { id: 23, model: 'Qwen-3-8B', team: 'Alibaba', autogeeval: { pass1: null, pass3: null, pass5: null }, autogeevalpp: { pass1: 48.35, pass3: 54.22, pass5: 56.31 }, type: 'open-source' },
    { id: 24, model: 'Qwen-3-32B', team: 'Alibaba', autogeeval: { pass1: null, pass3: null, pass5: null }, autogeevalpp: { pass1: 60.67, pass3: 65.78, pass5: 67.82 }, type: 'open-source' },
    { id: 25, model: 'o4-minii-medium', team: 'OpenAI', autogeeval: { pass1: null, pass3: null, pass5: null }, autogeevalpp: { pass1: 67.34, pass3: 78.96, pass5: 82.61 }, type: 'proprietary' },
    { id: 26, model: 'Qwen-3-4B-Thinking', team: 'Alibaba', autogeeval: { pass1: null, pass3: null, pass5: null }, autogeevalpp: { pass1: 33.13, pass3: 49.78, pass5: 57.19 }, type: 'open-source' },
    { id: 27, model: 'Qwen-3-8B-Thinking', team: 'Alibaba', autogeeval: { pass1: null, pass3: null, pass5: null }, autogeevalpp: { pass1: 38.93, pass3: 56.59, pass5: 63.22 }, type: 'open-source' },
    { id: 28, model: 'Qwen-3-32B-Thinking', team: 'Alibaba', autogeeval: { pass1: null, pass3: null, pass5: null }, autogeevalpp: { pass1: 56.31, pass3: 73.94, pass5: 78.91 }, type: 'open-source' }
];

// 应用状态
let currentTab = 'leaderboard';
let searchTerm = '';
let sortBy = 'autogeeval_pass1';
let sortOrder = 'desc';

// DOM 元素
const leaderboardTab = document.getElementById('leaderboard-tab');
const submitTab = document.getElementById('submit-tab');
const submitButtonHeader = document.getElementById('submit-button-header');
const leaderboardPanel = document.getElementById('leaderboard-panel');
const submissionPanel = document.getElementById('submission-panel');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');
const sortButton = document.getElementById('sort-button');
const sortOrderText = document.getElementById('sort-order-text');
const leaderboardTbody = document.getElementById('leaderboard-tbody');
const submissionForm = document.getElementById('submission-form');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    updateLeaderboard();
    
    // 事件监听器
    leaderboardTab.addEventListener('click', () => switchTab('leaderboard'));
    submitTab.addEventListener('click', () => switchTab('submit'));
    submitButtonHeader.addEventListener('click', () => switchTab('submit'));
    
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        updateLeaderboard();
    });
    
    sortSelect.addEventListener('change', (e) => {
        sortBy = e.target.value;
        updateLeaderboard();
    });
    
    sortButton.addEventListener('click', () => {
        sortOrder = sortOrder === 'desc' ? 'asc' : 'desc';
        sortOrderText.textContent = sortOrder === 'desc' ? 'Desc' : 'Asc';
        updateLeaderboard();
    });
    
    submissionForm.addEventListener('submit', handleSubmit);
});

// 切换选项卡
function switchTab(tab) {
    currentTab = tab;
    
    // 更新按钮状态
    leaderboardTab.classList.toggle('active', tab === 'leaderboard');
    submitTab.classList.toggle('active', tab === 'submit');
    
    // 显示/隐藏面板
    if (tab === 'leaderboard') {
        leaderboardPanel.style.display = 'flex';
        submissionPanel.style.display = 'none';
        document.querySelector('.papers-panel').style.display = 'flex';
        document.querySelector('.content-wrapper').classList.remove('submission-mode');
    } else {
        leaderboardPanel.style.display = 'none';
        submissionPanel.style.display = 'block';
        document.querySelector('.papers-panel').style.display = 'none';
        document.querySelector('.content-wrapper').classList.add('submission-mode');
    }
}

// 获取排序值
function getSortValue(result, sortKey) {
    const [dataset, metric] = sortKey.split('_');
    return result[dataset][metric] ?? -1;
}

// 过滤和排序结果
function getFilteredAndSortedResults() {
    let filtered = testResults.filter(result => 
        result.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        result.team.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => {
        const aValue = getSortValue(a, sortBy);
        const bValue = getSortValue(b, sortBy);
        
        if (sortOrder === 'asc') {
            return aValue > bValue ? 1 : -1;
        }
        return aValue < bValue ? 1 : -1;
    });
}

// 更新排行榜
function updateLeaderboard() {
    const results = getFilteredAndSortedResults();
    
    leaderboardTbody.innerHTML = '';
    
    results.forEach((result, index) => {
        const row = document.createElement('tr');
        row.className = 'table-row';
        
        row.innerHTML = `
            <td class="table-cell rank-cell">${index + 1}</td>
            <td class="table-cell">
                <div class="model-name">${result.model}</div>
            </td>
            <td class="table-cell">
                <div class="team-name">${result.team}</div>
            </td>
            <td class="table-cell center">
                <div class="score-cell ${result.autogeeval.pass1 === null ? 'score-na' : ''}">
                    ${result.autogeeval.pass1 ?? 'N/A'}
                </div>
            </td>
            <td class="table-cell center">
                <div class="score-cell ${result.autogeeval.pass3 === null ? 'score-na' : ''}">
                    ${result.autogeeval.pass3 ?? 'N/A'}
                </div>
            </td>
            <td class="table-cell center">
                <div class="score-cell ${result.autogeeval.pass5 === null ? 'score-na' : ''}">
                    ${result.autogeeval.pass5 ?? 'N/A'}
                </div>
            </td>
            <td class="table-cell center">
                <div class="score-cell ${result.autogeevalpp.pass1 === null ? 'score-na' : ''}">
                    ${result.autogeevalpp.pass1 ?? 'N/A'}
                </div>
            </td>
            <td class="table-cell center">
                <div class="score-cell ${result.autogeevalpp.pass3 === null ? 'score-na' : ''}">
                    ${result.autogeevalpp.pass3 ?? 'N/A'}
                </div>
            </td>
            <td class="table-cell center">
                <div class="score-cell ${result.autogeevalpp.pass5 === null ? 'score-na' : ''}">
                    ${result.autogeevalpp.pass5 ?? 'N/A'}
                </div>
            </td>
            <td class="table-cell">
                <span class="type-badge ${result.type === 'open-source' ? 'type-open-source' : 'type-proprietary'}">
                    ${result.type === 'open-source' ? 'Open Source' : 'Proprietary'}
                </span>
            </td>
        `;
        
        leaderboardTbody.appendChild(row);
    });
}

// 处理表单提交
function handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(submissionForm);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    // 简单的验证
    if (!data.modelName || !data.teamName || !data.contactEmail) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // 模拟提交成功
    alert('Submission successful! We will contact you soon.');
    
    // 重置表单
    submissionForm.reset();
    
    console.log('Submitted data:', data);
}

// 工具函数：创建SVG图标
function createSVGIcon(pathData, size = 16) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathData);
    svg.appendChild(path);
    
    return svg;
}
