function showSection(sectionId) {
    // مخفی کردن تمام بخش‌ها
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // نمایش بخش مورد نظر
    document.getElementById(sectionId).classList.add('active');
    
    // تغییر تم
    document.body.className = `${sectionId}-theme`;
}

// مدیریت تب‌ها
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        const category = this.dataset.cat;
        const parentSection = this.closest('.section');
        
        // حذف کلاس active از همه تب‌ها
        parentSection.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // فیلتر محصولات
        parentSection.querySelectorAll('.product').forEach(product => {
            if (category === 'all') {
                product.style.display = 'flex';
            } else {
                product.style.display = product.dataset.cat === category ? 'flex' : 'none';
            }
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