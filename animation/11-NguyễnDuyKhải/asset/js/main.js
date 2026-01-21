
const btnDoiMau = document.getElementById('doimaunen');

btnDoiMau.addEventListener('click', () => {
   
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
        btnDoiMau.innerText = "Chế độ tối";
    } else {
        document.body.setAttribute('data-theme', 'dark');
        btnDoiMau.innerText = "Chế độ sáng";
    }
});


const chuot = document.querySelector('.chuot');

document.addEventListener('mousemove', (e) => {
  
    chuot.style.left = e.clientX + 'px';
    chuot.style.top = e.clientY + 'px';
});



const sections = document.querySelectorAll('section, header');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let currentSection = "";

   
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150; 

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
/*11-Nguyễn Duy Khải*/
   
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
    
        if (pageYOffset >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });

    navItems.forEach((item) => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(currentSection)) {
            item.classList.add('active');
        }
    });
});


window.addEventListener('DOMContentLoaded', () => {
    const fadeText = document.querySelector('.fade-in-text');
    if (fadeText) {
        fadeText.style.opacity = '1';
        fadeText.style.transform = 'translateY(0)';
    }
});
window.onscroll = () => {
 
    document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) el.classList.add('active');
    });

  /*11-Nguyễn Duy Khải*/
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    document.querySelectorAll('section, header').forEach(sec => {
        if (scrollPos >= sec.offsetTop - 100) {
            document.querySelectorAll('.nav-item').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === sec.id) link.classList.add('active');
            });
        }
    });
};