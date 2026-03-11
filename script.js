// Pastikan kode berjalan setelah semua elemen HTML dimuat
document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. LOGIKA MOBILE MENU (HAMBURGER) --- */
    const menuToggle = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            // Menambah/menghapus class 'active' pada menu
            navLinks.classList.toggle('active');
            
            // Animasi tambahan untuk hamburger (opsional)
            menuToggle.classList.toggle('is-active');
        });
    }

    // Menutup menu saat link diklik (agar tidak menutupi layar setelah pindah section)
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });


    /* --- 2. LOGIKA COUNTER ANGKA (DARI KODE SEBELUMNYA) --- */
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        counter.innerText = '0';
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;
            const increment = target / 200;
            if(c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });

});
