// FAQ Accordion Functionality
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-q');
    
    if (question) {
        question.addEventListener('click', () => {
            // Close other open items
            document.querySelectorAll('.faq-item.open').forEach(openItem => {
                if (openItem !== item) {
                    openItem.classList.remove('open');
                }
            });
            
            // Toggle current item
            item.classList.toggle('open');
        });
    }
});

// Copy Code Functionality
function copyCode() {
    navigator.clipboard.writeText('748CYI').then(() => {
        const toast = document.getElementById('copyToast');
        if (toast) {
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 2000);
        }
    }).catch(() => {
        alert('فشل النسخ. حاول مرة أخرى.');
    });
}

const copyButton = document.getElementById('copyMainCodeBtn');
if (copyButton) {
    copyButton.addEventListener('click', (e) => {
        e.preventDefault();
        copyCode();
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements on load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section, .faq-item, .glass-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(10px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});

// Mobile menu toggle (if needed)
console.log('Royal Agency - Professional Landing Page Loaded');

