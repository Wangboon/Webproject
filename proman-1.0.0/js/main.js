(function () {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            var spinnerElement = document.getElementById('spinner');
            if (spinnerElement) {
                spinnerElement.classList.remove('show');
            }
        }, 1);
    };
    spinner();

    // Initiate WOW.js
    new WOW().init();

    // Navbar on scrolling
    window.addEventListener('scroll', function () {
        var navbar = document.querySelector('.navbar');
        if (window.scrollY > 300) {
            navbar.style.display = 'flex'; // แสดง Navbar เมื่อ scroll ลงมากกว่า 300px
        } else {
            navbar.style.display = 'none'; // ซ่อน Navbar เมื่อ scroll ไม่ถึง 300px
        }
    });

    // Smooth scrolling on the navbar links
    document.querySelectorAll('.navbar-nav a').forEach(function (navbarLink) {
        navbarLink.addEventListener('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var target = document.querySelector(this.hash);
                window.scrollTo({
                    top: target.offsetTop - 45, // ปรับ offset ลงให้เหมาะสมกับ Navbar
                    behavior: 'smooth'
                });
                document.querySelector('.navbar-nav .active').classList.remove('active');
                this.closest('a').classList.add('active');
            }
        });
    });

    // Back to top button
    var backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block'; // แสดงปุ่ม "กลับไปด้านบน" เมื่อ scroll ลงมากกว่า 300px
        } else {
            backToTopButton.style.display = 'none'; // ซ่อนปุ่ม "กลับไปด้านบน" เมื่อ scroll ไม่ถึง 300px
        }
    });

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Typed Initiate
    if (document.querySelector('.typed-text-output')) {
        var typedStrings = document.querySelector('.typed-text').textContent.split(', ');
        var typed = new Typed('.typed-text-output', {
            strings: typedStrings,
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }

    // Skills
    document.querySelectorAll('.skill').forEach(function (skill) {
        var waypoint = new Waypoint({
            element: skill,
            handler: function () {
                skill.querySelectorAll('.progress .progress-bar').forEach(function (progressBar) {
                    progressBar.style.width = progressBar.getAttribute('aria-valuenow') + '%';
                });
            },
            offset: '80%'
        });
    });

    // Portfolio isotope and filter
    var portfolioIsotope = new Isotope('.portfolio-container', {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    document.querySelectorAll('#portfolio-flters li').forEach(function (filter) {
        filter.addEventListener('click', function () {
            document.querySelector('#portfolio-flters .active').classList.remove('active');
            this.classList.add('active');
            portfolioIsotope.arrange({ filter: this.getAttribute('data-filter') });
        });
    });

    // Testimonials carousel
    var testimonialCarousel = document.querySelector('.testimonial-carousel');
    if (testimonialCarousel) {
        new OwlCarousel(testimonialCarousel, {
            autoplay: true,
            smartSpeed: 1000,
            items: 1,
            dots: true,
            loop: true
        });
    }

})();
