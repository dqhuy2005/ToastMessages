const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const btnSuccess = $(".btn--success");
const btnError = $(".btn--danger");
const btnInfo = $(".btn--info");
const btnWarning = $(".btn--warning");
const app = {
  toast: function ({ title = "", message = "", type = "", duration = 3000 }) {
    const main = $("#toast", `toast--${type}`);

    const icons = {
      success: "fas fa-check-circle",
      info: "fas fa-info-circle",
      warning: "fas fa-exclamation-circle",
      error: "fas fa-exclamation-circle",
    };
    const icon = icons[type];

    if (main) {
      const toast = document.createElement("toast");
      const delay = (duration / 1000).toFixed(2);

      toast.classList.add("toast");
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

      const autoRemoveToast = setTimeout(() => {
        main.removeChild(toast);
      }, duration + 1000);

      toast.onclick = (e) => {
        if (e.target.closest(".toast__close")) {
          main.removeChild(toast);
          clearTimeout(autoRemoveToast);
        }
      };
    }
  },

  handleEvent: function () {
    btnSuccess.onclick = () => {
      this.showSuccessToast();
    };
    btnError.onclick = () => {
      this.showErrorToast();
    };
    btnInfo.onclick = () => {
      this.showInfoToast();
    };
    btnWarning.onclick = () => {
      this.showWarningToast();
    };
  },

  showSuccessToast: function () {
    this.toast({
      title: "Thành công!",
      message: "Đăng ký thành công!",
      type: "success",
      duration: 3000,
    });
  },
  showErrorToast: function () {
    this.toast({
      title: "Thất bại!",
      message: "Đăng ký không thành công. Vui lòng thử lại!",
      type: "error",
      duration: 3000,
    });
  },
  showInfoToast: function () {
    this.toast({
      title: "Loading...",
      message: "Đăng ký không thành công. Vui lòng thử lại!",
      type: "info",
      duration: 3000,
    });
  },
  showWarningToast: function () {
    this.toast({
      title: "Warning!",
      message: "Có lỗi xảy ra.",
      type: "warning",
      duration: 3000,
    });
  },

  start: function () {
    this.handleEvent();
  },
};

// Run main
app.start();
