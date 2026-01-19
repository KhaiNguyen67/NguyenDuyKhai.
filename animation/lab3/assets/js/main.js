// --- Bài 1: Đổi nền ---
const bgBtn = document.getElementById('bg-toggle-btn');
bgBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// --- Bài 2 & 3: Xử lý cuộn trang ---
const sections = document.querySelectorAll('.content-section');
const navLinks = document.querySelectorAll('.nav-link');
const revealBoxes = document.querySelectorAll('.reveal-box');

window.addEventListener('scroll', () => {
    let current = "";

    // Bài 2: Highlight Menu
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });

    // Bài 3: Xuất hiện khi cuộn
    revealBoxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;
        if (boxTop < triggerPoint) {
            box.classList.add('show');
        }
    });
});

// --- Bài 4: Nút nhảy lên ---
const jumpBtn = document.getElementById('jump-btn');
jumpBtn.addEventListener('mouseover', () => {
    jumpBtn.classList.add('animate');
    // Xóa class sau khi animation xong để lần sau có thể kích hoạt lại
    setTimeout(() => {
        jumpBtn.classList.remove('animate');
    }, 400); 
});

// --- Bài 5: Hình tròn di chuyển theo chuột ---
const cursor = document.getElementById('cursor-circle');
window.addEventListener('mousemove', (e) => {
    // Trừ đi 15px để tâm hình tròn nằm đúng đầu chuột (30px / 2 = 15)
    cursor.style.left = `${e.clientX - 15}px`;
    cursor.style.top = `${e.clientY - 15}px`;
});