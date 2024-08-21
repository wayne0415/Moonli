document.querySelectorAll('.card .icon i').forEach(star => {
    star.addEventListener('click', function() {
        if (this.classList.contains('fa-regular')) {
            this.classList.remove('fa-regular');
            this.classList.add('fa-solid');
            this.style.color = 'var(--yellow)'; 
        } else {
            this.classList.remove('fa-solid');
            this.classList.add('fa-regular');
            this.style.color = ''; 
        }
    });
});