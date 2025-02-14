function showSuccessToast(message) {
  const toast = document.querySelector('.toast');
  toast.innerText = message;
  toast.style.display = 'block';
  setTimeout(function() {
      toast.style.display = 'none';
  }, 1500);
}

function showErrorToast(message) {
  const toast = document.querySelector('.toast');
  toast.innerText = message;
  toast.style.display = 'block';
  setTimeout(function() {
      toast.style.display = 'none';
  }, 1500);
}

function copyText() {
  if (!navigator.clipboard) {
    showErrorToast('в браузере запрещено копирование');
    return;
  }

  const text = document.querySelector('#copyText').value;
  navigator.clipboard.writeText(text).then(function() {
      showSuccessToast('скопировано');
  }).catch(function(error) {
      console.error('Ошибка при копировании текста:', error);
      showErrorToast('не получилось скопировать');
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const copyTextButton = document.getElementById("copyText");
  copyTextButton.addEventListener("click", copyText);
});