class ToastNotification {
  constructor(toastSelector) {
    this.toast = document.querySelector(toastSelector);
  }

  showToast(message, duration = 1500) {
    this.toast.innerText = message;
    this.toast.style.display = 'block';
    setTimeout(() => {
      this.toast.style.display = 'none';
    }, duration);
  }

  showSuccessToast(message) {
    this.showToast(message);
  }

  showErrorToast(message) {
    this.showToast(message);
  }
}

class TextCopier {
  constructor(toastNotification, textSelector) {
    this.toastNotification = toastNotification;
    this.textElement = document.querySelector(textSelector);
  }

  copyText() {
    if (!navigator.clipboard) {
      this.toastNotification.showErrorToast('в браузере запрещено копирование');
      return;
    }

    const text = this.textElement.value;
    navigator.clipboard.writeText(text).then(() => {
      this.toastNotification.showSuccessToast('скопировано');
    }).catch((error) => {
      console.error('Ошибка при копировании текста:', error);
      this.toastNotification.showErrorToast('не получилось скопировать');
    });
  }

  init() {
    this.textElement.addEventListener('click', () => this.copyText());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const toastNotification = new ToastNotification('.toast');
  const textCopier = new TextCopier(toastNotification, '#copyText');
  textCopier.init();
});