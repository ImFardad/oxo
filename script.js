let currentPage = 1; // 0: puzzle, 1: cafe, 2: gamnet
const pages = document.querySelector('.container');
const header = document.getElementById('mainHeader');

function updateTheme() {
    const themes = {
        puzzle: { bg: '#F8F9FA', color: '#2B2B2B' },
        cafe: { bg: '#3E2723', color: '#FFF3E0' },
        gamnet: { bg: '#0A0A0A', color: '#00FF9D' }
    };
    
    const currentTheme = Object.values(themes)[currentPage];
    header.style.background = currentTheme.bg;
    header.style.color = currentTheme.color;
}

function movePage(direction) {
    if(direction === 'right' && currentPage < 2) currentPage++;
    if(direction === 'left' && currentPage > 0) currentPage--;
    
    pages.style.transform = `translateX(${-currentPage * 100}vw)`;
    updateTheme();
}

// مدیریت کلیک منو
document.querySelectorAll('.nav-links a').forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        currentPage = index;
        movePage('');
    });
});

// تنظیم اولیه
updateTheme();