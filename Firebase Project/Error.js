const sunIcon = document.querySelector('.Sun');
const moonIcon = document.querySelector('.Moon');
const body = document.body;
const wrapper = document.querySelector('.wrapper');
const centerPage = document.querySelector('.center-page');

function switchIcons(hideIcon, showIcon, enableDarkMode) {
  
  hideIcon.classList.add('spin-out');

  setTimeout(() => {
    hideIcon.classList.add('hidden');
    hideIcon.classList.remove('spin-out');

    showIcon.classList.remove('hidden');
    showIcon.classList.add('pop-in');

    setTimeout(() => {
      showIcon.classList.remove('pop-in');
    }, 500); 
  }, 400); 
  if (enableDarkMode) {
    body.classList.add('darkmode-active');
    centerPage.classList.remove('dark-ready');
    centerPage.classList.add('light-mode');
  } else {
    body.classList.remove('darkmode-active');
    centerPage.classList.remove('dark-ready', 'light-mode');
  }
}


sunIcon.addEventListener('click', () => {
  switchIcons(sunIcon, moonIcon, true);
});


moonIcon.addEventListener('click', () => {
  switchIcons(moonIcon, sunIcon, false);
});


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
