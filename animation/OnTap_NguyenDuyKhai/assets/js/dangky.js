const form = document.getElementById('registerForm');
const btnSubmit = document.getElementById('btnSubmit');

// 1. Validation Realtime
const inputs = form.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('input', () => {
        validateInput(input);
    });
});

function validateInput(input) {
    const group = input.parentElement;
    if (input.type === 'email') {
        const re = /\S+@\S+\.\S+/;
        const isValid = re.test(input.value);
        group.classList.toggle('error', !isValid);
        return isValid;
    }
    const isValid = input.value.trim().length > 0;
    group.classList.toggle('error', !isValid);
    return isValid;
}

// 2. Xử lý Submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Kiểm tra lại toàn bộ trước khi gửi
    let isAllValid = true;
    inputs.forEach(input => {
        if (!validateInput(input)) isAllValid = false;
    });

    if (isAllValid) {
        // Bật trạng thái Loading
        btnSubmit.classList.add('loading');
        btnSubmit.disabled = true;

        // Giả lập gửi dữ liệu lên Server (2 giây)
        setTimeout(() => {
            // 3. Lưu LocalStorage
            const userData = {
                fullname: document.getElementById('fullname').value,
                email: document.getElementById('email').value,
            };
            localStorage.setItem('userAccount', JSON.stringify(userData));

            // 4. Toast Thông báo
            showToast("Đăng ký thành công!");

            // Tắt Loading
            btnSubmit.classList.remove('loading');
            btnSubmit.disabled = false;
            form.reset();
        }, 2000);
    }
});

function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    container.appendChild(toast);

    // Tự động xóa toast sau 3 giây
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}