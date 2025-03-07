// مدیریت اسکرول افقی
let isScrolling = false;
let currentPage = 0;
const pages = document.querySelectorAll('.page');

window.addEventListener('wheel', (e) => {
    if (!isScrolling) {
        isScrolling = true;
        
        if (e.deltaY > 0 && currentPage < pages.length - 1) {
            currentPage++;
        } else if (e.deltaY < 0 && currentPage > 0) {
            currentPage--;
        }
        
        window.scrollTo({
            top: pages[currentPage].offsetTop,
            behavior: 'smooth'
        });
        
        setTimeout(() => {
            isScrolling = false;
        }, 1000);
    }
});

// مدیریت تغییر تم
function updateTheme() {
    const themes = ['cafe', 'gamnet', 'puzzle'];
    document.body.className = `${themes[currentPage]}-theme`;
}

// مدیریت کلیک دکمه‌ها
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('این ویژگی به زودی اضافه خواهد شد!');
    });
});