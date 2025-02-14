const divTouch = document.querySelectorAll('.bento-div.primary.clickable, .bento-div.case.clickable');

divTouch.forEach((div) => {
  div.addEventListener('touchstart', () => {
    div.style.transform = 'translateY(0px) scale(0.97)';
    div.classList.remove('hovered');
  });

  div.addEventListener('touchend', () => {
    div.style.transform = 'translateY(0px) scale(1.00)';
    div.classList.remove('hovered');
  });
});

const buttonTouch = document.querySelectorAll('.primary-button, .superellipse-icon-button');

buttonTouch.forEach((button) => {
  button.addEventListener('touchstart', () => {
    button.style.backgroundColor = 'rgba(38, 38, 38, 1)';
    button.classList.remove('hovered');
  });

  button.addEventListener('touchend', () => {
    button.style.backgroundColor = 'rgba(38, 38, 38, 0.7)';
    button.classList.remove('hovered');
  });
});

const divMouse = document.querySelectorAll('.bento-div.primary.clickable, .bento-div.case.clickable');

divMouse.forEach((div) => {
  div.addEventListener('mousedown', () => {
    div.style.transform = 'translateY(0px) scale(0.97)';
    div.classList.remove('hovered');
  });

  div.addEventListener('mouseup', () => {
    div.style.transform = 'translateY(0px) scale(1.00)';
    div.classList.remove('hovered');
  });
  div.addEventListener('mouseleave', () => {
    div.classList.remove('hovered');
  });
});

const buttonMouse = document.querySelectorAll('.primary-button, .superellipse-icon-button');

buttonMouse.forEach((button) => {
  button.addEventListener('mousedown', () => {
    button.style.backgroundColor = 'rgba(38, 38, 38, 1)';
    button.style.transform = 'translateY(0px) scale(0.97)';
    button.classList.remove('hovered');
  });

  button.addEventListener('mouseup', () => {
    button.style.backgroundColor = 'rgba(38, 38, 38, 0.7)';
    button.style.transform = 'translateY(0px) scale(1.00)';
    button.classList.remove('hovered');
  });
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(0px) scale(1.00)';
    button.classList.remove('hovered');
  });
});

const divHover = document.querySelectorAll('.bento-div.primary.clickable, .bento-div.case.clickable');

divHover.forEach((div) => {
  div.addEventListener('mouseover', () => {
    div.style.transform = 'translateY(0px) scale(1.03)';
    if (!div.classList.contains('hovered')) {
      div.classList.add('hovered');
    }
  });

  div.addEventListener('mouseout', () => {
    if (!div.classList.contains('clicked')) {
      div.style.transform = 'translateY(0px) scale(1.00)';
    }
    div.classList.remove('hovered');
  });
});

const buttonHover = document.querySelectorAll('.primary-button, .superellipse-icon-button');

buttonHover.forEach((button) => {
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'rgba(38, 38, 38, 1)';
    if (!button.classList.contains('hovered')) {
      button.classList.add('hovered');
    }
  });

  button.addEventListener('mouseout', () => {
    if (!button.classList.contains('clicked')) {
      button.style.backgroundColor = 'rgba(38, 38, 38, 0.7)';
    }
    button.classList.remove('hovered');
  });

  button.addEventListener('mouseenter', () => {
    if (!button.classList.contains('clicked')) {
      button.style.transform = 'translateY(0px) scale(1.00)';
    }
  });
});