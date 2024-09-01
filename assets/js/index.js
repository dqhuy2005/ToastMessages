function toast({ title = "", message = "", type = "ìnfo", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    // Auto remove toast
    const autoRemove = setTimeout(() => {
      main.removeChild(toast);
    }, duration);

    // Remove toast when clicked
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemove);
      }
    };

    const icons = {
      success: "fas fa-check-circle",
      info: "fas fa-info-circle",
      warning: "fas fa-exclamation-circle",
      error: "fas fa-exclamation-circle",
    };
    const icon = icons[type];

    toast.classList.add("toast", `toast--${type}`);
    const delay = (duration / 1000).toFixed(2);
    toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
    toast.innerHTML = `
        <div class="toast__icon">
          <i class="${icon}"></i>
        </div>
        <div class="toast__body">
          <h3 class="toast__title">${title}</h3>
          <p class="toast__message">
            ${message}
          </p>
        </div>
        <div class="toast__close">
          <i class="fas fa-times"></i>
        </div>
    `;
    main.appendChild(toast);
  }
}

function showSuccessToast() {
  toast({
    title: "Thành công!",
    message: "Đăng ký thành công!",
    type: "success",
    duration: 3000,
  });
}
function showErrorToast() {
  toast({
    title: "Thất bại!",
    message: "Đăng ký thất bại. Có lỗi xảy ra, kiểm tra lại thông tin!",
    type: "error",
    duration: 3000,
  });
}
