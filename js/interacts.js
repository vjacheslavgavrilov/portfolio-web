const divTouch = document.querySelectorAll('.bento-div.primary.clickable, .bento-div.case.clickable');

divTouch.forEach(function(div) {
  div.addEventListener('touchstart', function() {
    div.style.transform = 'translateY(0px) scale(0.97)';
    div.classList.remove('hovered');
  });

  div.addEventListener('touchend', function() {
    div.style.transform = 'translateY(0px) scale(1.00)';
    div.classList.remove('hovered');
  });
});

const buttonTouch = document.querySelectorAll('.primary-button, .superellipse-icon-button');

buttonTouch.forEach(function(button) {
  button.addEventListener('touchstart', function() {
    button.style.backgroundColor = 'rgba(38, 38, 38, 1)';
    button.classList.remove('hovered');
  });

  button.addEventListener('touchend', function() {
    button.style.backgroundColor = 'rgba(38, 38, 38, 0.7)';
    button.classList.remove('hovered');
  });
});

const divMouse = document.querySelectorAll('.bento-div.primary.clickable, .bento-div.case.clickable');

divMouse.forEach(function(div) {
  div.addEventListener('mousedown', function() {
    div.style.transform = 'translateY(0px) scale(0.97)';
    div.classList.remove('hovered');
  });

  div.addEventListener('mouseup', function() {
    div.style.transform = 'translateY(0px) scale(1.00)';
    div.classList.remove('hovered');
  });
  div.addEventListener('mouseleave', function() {
    div.classList.remove('hovered');
  });
});

const buttonMouse = document.querySelectorAll('.primary-button, .superellipse-icon-button');

buttonMouse.forEach(function(button) {
  button.addEventListener('mousedown', function() {
    button.style.backgroundColor = 'rgba(38, 38, 38, 1)';
    button.style.transform = 'translateY(0px) scale(0.97)';
    button.classList.remove('hovered');
  });

  button.addEventListener('mouseup', function() {
    button.style.backgroundColor = 'rgba(38, 38, 38, 0.7)';
    button.style.transform = 'translateY(0px) scale(1.00)';
    button.classList.remove('hovered');
  });
  button.addEventListener('mouseleave', function() {
    button.style.transform = 'translateY(0px) scale(1.00)';
    button.classList.remove('hovered');
  });
});

const divHover = document.querySelectorAll('.bento-div.primary.clickable, .bento-div.case.clickable');

divHover.forEach(function(div) {
  div.addEventListener('mouseover', function() {
    div.style.transform = 'translateY(0px) scale(1.03)';
    if (!div.classList.contains('hovered')) {
      div.classList.add('hovered');
    }
  });

  div.addEventListener('mouseout', function() {
    if (!div.classList.contains('clicked')) {
      div.style.transform = 'translateY(0px) scale(1.00)';
    }
    div.classList.remove('hovered');
  });
});

const buttonHover = document.querySelectorAll('.primary-button, .superellipse-icon-button');

buttonHover.forEach(function(button) {
  button.addEventListener('mouseover', function() {
    button.style.backgroundColor = 'rgba(38, 38, 38, 1)';
    if (!button.classList.contains('hovered')) {
      button.classList.add('hovered');
    }
  });

  button.addEventListener('mouseout', function() {
    if (!button.classList.contains('clicked')) {
      button.style.backgroundColor = 'rgba(38, 38, 38, 0.7)';
    }
    button.classList.remove('hovered');
  });

  button.addEventListener('mouseenter', function() {
    if (!button.classList.contains('clicked')) {
      button.style.transform = 'translateY(0px) scale(1.00)';
    }
  });
});