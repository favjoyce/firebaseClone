const sunIcon = document.querySelector('.Sun');
const moonIcon = document.querySelector('.Moon');
const body = document.body;
const wrapper = document.querySelector('.wrapper');
const centerPage = document.querySelector('.center-page');

function switchIcons(hideIcon, showIcon, enableDarkMode) {
  // Start exit animation on the clicked icon
  hideIcon.classList.add('spin-out');

  setTimeout(() => {
    hideIcon.classList.add('hidden');  // Hide after animation
    hideIcon.classList.remove('spin-out');

    showIcon.classList.remove('hidden');
    showIcon.classList.add('pop-in');

    setTimeout(() => {
      showIcon.classList.remove('pop-in');
    }, 500); // remove class after animation
  }, 400); // duration of spin-out animation

  // Apply or remove dark mode
  if (enableDarkMode) {
    body.classList.add('darkmode-active');
    centerPage.classList.remove('dark-ready');
    centerPage.classList.add('light-mode');
  } else {
    body.classList.remove('darkmode-active');
    centerPage.classList.remove('dark-ready', 'light-mode');
  }
}

// Sun click = activate dark mode
sunIcon.addEventListener('click', () => {
  switchIcons(sunIcon, moonIcon, true);
});

// Moon click = disable dark mode
moonIcon.addEventListener('click', () => {
  switchIcons(moonIcon, sunIcon, false);
});

// Hover effect for dark mode transition
wrapper.addEventListener('mouseenter', () => {
  if (body.classList.contains('darkmode-active')) {
    centerPage.classList.remove('light-mode');
    centerPage.classList.add('dark-ready');
  }
});

wrapper.addEventListener('mouseleave', () => {
  if (body.classList.contains('darkmode-active')) {
    centerPage.classList.remove('dark-ready');
    centerPage.classList.add('light-mode');
  }
});
