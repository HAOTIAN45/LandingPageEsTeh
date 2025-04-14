document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    menuToggle.addEventListener('click', function () {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });

    // Sticky Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Menu Filtering
    const categoryBtns = document.querySelectorAll('.category-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active class from all buttons
            categoryBtns.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            const category = this.dataset.category;

            // Filter menu items
            menuItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Form Submission
    const pesanForm = document.getElementById('pesanForm');
    if (pesanForm) {
        pesanForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const nama = document.getElementById('nama').value;
            const telepon = document.getElementById('telepon').value;
            const cabang = document.getElementById('cabang').value;
            const pesan = document.getElementById('pesan').value;

            // Here you would typically send the data to a server
            // For demo, we'll just show an alert
            alert(`Terima kasih ${nama}! Pesanan Anda di cabang ${cabang} telah kami terima. Kami akan menghubungi Anda di nomor ${telepon} segera.`);

            // Reset form
            this.reset();
        });
    }

    // Animation on Scroll
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.feature-item, .menu-item, .branch-card, .testimonial-card');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});