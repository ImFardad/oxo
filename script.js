let currentPage = 1; // 0: puzzle, 1: cafe, 2: gamnet
const pagesContainer = document.querySelector('.pages-container');
const header = document.querySelector('header');

function updateTheme() {
    const themes = ['puzzle', 'cafe', 'gamnet'];
    document.body.className = `${themes[currentPage]}-theme`;
    
    // آپدیت هدر
    header.style.backgroundColor = getComputedStyle(document.documentElement)
        .getPropertyValue(`--${themes[currentPage]}-secondary`);
}

function movePage(direction) {
    if(direction === 'right' && currentPage < 2) currentPage++;
    if(direction === 'left' && currentPage > 0) currentPage--;
    
    pagesContainer.style.transform = `translateX(${-currentPage * 100}vw)`;
    updateTheme();
}

// مدیریت کلیک منو
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        currentPage = parseInt(e.target.dataset.page);
        movePage('');
    });
});

// مدیریت تب‌ها
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // حذف کلاس active از همه تب‌های هم‌سطح
        this.parentElement.querySelectorAll('.tab-btn').forEach(t => 
            t.classList.remove('active'));
        this.classList.add('active');
    });
});

// تنظیمات اولیه
updateTheme();