function showSection(sectionId) {
    // تغییر تم
    document.body.className = `${sectionId}-theme`;
    
    // مخفی کردن تمام بخش‌ها
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // نمایش بخش مورد نظر
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