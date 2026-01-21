document.addEventListener("DOMContentLoaded", () => {
    // 1. Scroll Reveal Logic
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".scroll-reveal").forEach(el => observer.observe(el));

    // 2. Form Validation & Submitting
    const form = document.getElementById('registerForm');
    const btnSubmit = document.getElementById('btnSubmit');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Kiểm tra sơ bộ
        const email = document.getElementById('email').value;
        if(!email.includes('@')) {
            showToast("Email không hợp lệ!");
            return;
        }

        // Bật Loading
        btnSubmit.classList.add('loading');
        btnSubmit.disabled = true;

        setTimeout(() => {
            // Lưu LocalStorage
            const data = { fullname: document.getElementById('fullname').value };
            localStorage.setItem('lead', JSON.stringify(data));

            showToast("Đăng ký thành công! Chào " + data.fullname);
            
            btnSubmit.classList.remove('loading');
            btnSubmit.disabled = false;
            form.reset();
        }, 2000);
    });

    function showToast(msg) {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerText = msg;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
});

// Xử lý chuyển đổi Tab Pricing
function openTab(evt, tabName) {
    const tabContents = document.querySelectorAll(".tab-content");
    const tabButtons = document.querySelectorAll(".tab-btn");

    tabContents.forEach(content => content.classList.remove("active"));
    tabButtons.forEach(btn => btn.classList.remove("active"));

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Xử lý Gửi Form Liên Hệ (giả lập)
function handleFormSubmit(event) {
    event.preventDefault();
    const btn = event.target.querySelector('button');
    btn.classList.add('loading'); // Sử dụng class loading đã viết ở bài trước
    
    setTimeout(() => {
        alert("Cảm ơn bạn! Tin nhắn đã được gửi thành công.");
        btn.classList.remove('loading');
        event.target.reset();
    }, 2000);
}
// 1. Preloader
window.addEventListener("load", () => {
    document.getElementById("preloader").classList.add("loader-hidden");
});

// 2. Tab Pricing
function openTab(evt, tabName) {
    const tabContents = document.querySelectorAll(".tab-content");
    const tabButtons = document.querySelectorAll(".tab-btn");
    tabContents.forEach(content => content.classList.remove("active"));
    tabButtons.forEach(btn => btn.classList.remove("active"));
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// 3. Form Contact & Loading
function handleFormSubmit(event) {
    event.preventDefault();
    const btn = event.target.querySelector('button');
    btn.innerHTML = '<div class="spinner" style="width:20px; height:20px; border-width:2px;"></div>';
    
    setTimeout(() => {
        alert("Gửi tin nhắn thành công!");
        btn.innerHTML = "Gửi tin nhắn";
        event.target.reset();
    }, 2000);
}
// Highlight active menu
const currentPath = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        item.classList.toggle('active');
    });
});