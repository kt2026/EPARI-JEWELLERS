// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mainNav = document.querySelector('.main-nav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('mobile-active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Cart Functionality (Basic)
const cartBtn = document.querySelector('.cart-btn');
const cartCount = document.querySelector('.cart-count');
let cartItems = 0;

// Add to cart functionality (can be expanded)
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        cartItems++;
        if (cartCount) {
            cartCount.textContent = cartItems;
            cartCount.style.display = cartItems > 0 ? 'flex' : 'none';
        }
    });
});

// Dropdown Menu - Close on click outside
document.addEventListener('click', (e) => {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown && !dropdown.contains(e.target)) {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        if (dropdownMenu) {
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.visibility = 'hidden';
        }
    }
});

// Header Scroll Effect
let lastScroll = 0;
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Product Card Hover Effects
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Search Functionality (Basic)
const searchBtn = document.querySelector('.icon-btn[aria-label="Search"]');
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        // This can be expanded to show a search modal
        alert('Search functionality coming soon!');
    });
}

// Account Button
const accountBtn = document.querySelector('.icon-btn[aria-label="Account"]');
if (accountBtn) {
    accountBtn.addEventListener('click', () => {
        // This can be expanded to show account/login modal
        alert('Account functionality coming soon!');
    });
}

// Cart Button
if (cartBtn) {
    cartBtn.addEventListener('click', () => {
        // This can be expanded to show cart sidebar
        alert(`Cart: ${cartItems} item${cartItems !== 1 ? 's' : ''}`);
    });
}

// Prevent dropdown from closing when clicking inside
document.querySelectorAll('.dropdown-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});
