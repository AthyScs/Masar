// Search functionality
const searchInput = document.getElementById('searchInput');
const resultsDropdown = document.getElementById('searchResults');

// Define all pages with their keywords
const pages = [
    { name: 'الرئيسية', url: 'index.html', keywords: ['الرئيسية', 'home', 'main'], icon: '🏠' },
    { name: 'المواد الأساسية', url: 'subjects.html', keywords: ['المواد', 'اساسية', 'subjects', 'basic subjects'], icon: '📚' },
    { name: 'اللغة العربية', url: 'arabic.html', keywords: ['العربية', 'عربي', 'arabic', 'لغة'], icon: '📖' },
    { name: 'اللغة الإنجليزية', url: 'english.html', keywords: ['الإنجليزية', 'انجليزي', 'english', 'انج'], icon: '🔤' },
    { name: 'التربية الإسلامية', url: 'islamic.html', keywords: ['الاسلامية', 'اسلام', 'islamic', 'دين'], icon: '🕌' },
    { name: 'الدراسات الإجتماعية', url: 'socials.html', keywords: ['اجتماعية', 'اجتماعي', 'social', 'دراسات'], icon: '🌍' },
    { name: 'الرياضيات', url: 'math.html', keywords: ['رياضيات', 'رياضي', 'math', 'mathematics'], icon: '➕' },
    { name: 'الرياضيات الأساسية', url: 'basic.html', keywords: ['اساسية', 'بسيطة', 'basic', 'مبتدئ'], icon: '🔢' },
    { name: 'الرياضيات المتقدمة', url: 'advanced.html', keywords: ['متقدمة', 'متقدم', 'advanced', 'صعبة'], icon: '📐' },
    { name: 'العلوم', url: 'science.html', keywords: ['علوم', 'علم', 'science'], icon: '🔬' },
    { name: 'الفيزياء', url: 'physics.html', keywords: ['فيزياء', 'physics'], icon: '⚡' },
    { name: 'الكيمياء', url: 'chemistry.html', keywords: ['كيمياء', 'chemistry', 'كيم'], icon: '🧪' },
    { name: 'الأحياء', url: 'biology.html', keywords: ['احياء', 'biology', 'biologie'], icon: '🧬' },
    { name: 'الدورات', url: 'courses.html', keywords: ['دورات', 'course', 'courses'], icon: '🎓' },
    { name: 'البرمجة', url: 'code.html', keywords: ['برمجة', 'programming', 'code', 'coding', 'كود'], icon: '💻' },
    { name: 'الذكاء الاصطناعي', url: 'AI.html', keywords: ['ذكاء', 'اصطناعي', 'ai', 'artificial intelligence'], icon: '🤖' },
    { name: 'المهارات الحياتية', url: 'life.html', keywords: ['حياتية', 'life skills', 'مهارات'], icon: '🌟' },
    { name: 'المهارات الاجتماعية', url: 'skills.html', keywords: ['اجتماعية', 'social skills', 'تواصل'], icon: '💬' },
    { name: 'اتصل بنا', url: 'contact.html', keywords: ['اتصل', 'تواصل', 'contact'], icon: '📞' },
    { name: 'الروابط', url: 'links.html', keywords: ['روابط', 'links', 'مفيدة'], icon: '🔗' },
    { name: 'التحديثات', url: 'updates.html', keywords: ['تحديثات', 'updates', 'جديد'], icon: '🔄' }
];

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        resultsDropdown.classList.remove('active');
        return;
    }
    
    // Search for matching pages
    let results = [];
    
    for (let page of pages) {
        if (page.name.toLowerCase().includes(searchTerm) || 
            page.keywords.some(keyword => keyword.includes(searchTerm))) {
            results.push(page);
        }
    }
    
    // Display results
    if (results.length > 0) {
        resultsDropdown.innerHTML = '';
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `
                <div class="search-result-icon">${result.icon}</div>
                <div class="search-result-title">${result.name}</div>
            `;
            resultItem.addEventListener('click', () => {
                window.location.href = result.url;
            });
            resultsDropdown.appendChild(resultItem);
        });
        resultsDropdown.classList.add('active');
    } else {
        resultsDropdown.innerHTML = '<div class="no-results">❌ لا توجد نتائج</div>';
        resultsDropdown.classList.add('active');
    }
}

// Event listeners
if (searchInput) {
    searchInput.addEventListener('input', performSearch);
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !resultsDropdown.contains(e.target)) {
            resultsDropdown.classList.remove('active');
        }
    });
    
    // Optional: Close on Escape key
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            resultsDropdown.classList.remove('active');
            searchInput.value = '';
        }
    });
}

