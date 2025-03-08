// مدیریت نمایش بخش‌ها
function showSection(sectionId) {
    document.body.className = `${sectionId}-theme`;
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// مدیریت تب‌ها
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        const category = this.dataset.cat;
        const parentSection = this.closest('.section');
        
        parentSection.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        parentSection.querySelectorAll('.product').forEach(product => {
            product.style.display = (category === 'all' || product.dataset.cat === category) ? 'flex' : 'none';
        });
    });
});

// مدیریت جستجو
document.querySelectorAll('.search-bar').forEach(searchBar => {
    searchBar.addEventListener('input', function(e) {
        const term = e.target.value.toLowerCase();
        const parentSection = this.closest('.section');
        
        parentSection.querySelectorAll('.product').forEach(product => {
            const title = product.querySelector('h3').textContent.toLowerCase();
            product.style.display = title.includes(term) ? 'flex' : 'none';
        });
    });
});

// مدیریت touch برای هاور
// مدیریت تاچ برای محصولات
document.querySelectorAll('.product').forEach(product => {
    let startY = 0;
    
    product.addEventListener('touchstart', function(e) {
        startY = e.touches[0].clientY;
    }, { passive: true });
    
    product.addEventListener('touchmove', function(e) {
        const currentY = e.touches[0].clientY;
        const deltaY = currentY - startY;
        
        // اگر حرکت عمودی بیشتر از 10px بود اسکرول فعال شود
        if (Math.abs(deltaY) > 10) {
            window.scrollBy(0, -deltaY);
        }
    }, { passive: true });
});