const ThemeMode = {
  Auto: 0,
  Light: 1,
  Dark: 2
};

(function () {

  const sidebar = document.querySelector(".u-drawer");
  const sidebarBackdrop = document.querySelector(".u-drawer-backdrop");
  const appbar = document.getElementById("app-bar");

  function toggleSidebar() {
    if (sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
    } else {
      sidebar.classList.add("open");
    }

    if (sidebar.classList.contains("dismiss")) {
      sidebar.classList.remove("dismiss");
    } else {
      sidebar.classList.add("dismiss");
    }
  }

  function toggleRtl() {
    document.body.classList.toggle("rtl");
  }

  function mainContentScroll(e) {
    if (window.scrollY) {
      appbar.classList.add('u-toolbar-elevated');
    } else {
      appbar.classList.remove('u-toolbar-elevated');
    }
  }

  document
    .getElementById("menu-toggle")
    .addEventListener("click", toggleSidebar);

  document
    .getElementById("rtl-toggle")
    .addEventListener("click", toggleRtl);


  sidebarBackdrop.addEventListener("click", toggleSidebar);

  window.addEventListener("scroll", mainContentScroll);

  umd.Ripple.initializeRipples();
  umd.TextField.initializeTextFields();
  umd.ChipField.initializeChipFields();
  umd.Dropdown.initializeDropdowns();
  umd.TabBar.initializeTabBars();
  umd.Slider.initializeSliders();

  let textField = document.querySelector('.u-text-field-box');
  const textInput = document.querySelector('#text-field-box');
  if (textInput) {
    textInput.addEventListener('input', function () {
      if (textInput.value) {
        textField.classList.remove('invalid');
      } else {
        textField.classList.add('invalid');
      }
    });
  }

  function setActiveNavigationItem() {
    const navItems = document.querySelectorAll('nav .u-list-item');

    for (let i = 0; i < navItems.length; i++) {
      const navItem = navItems[i];
      if (navItem.pathname !== location.pathname) {
        continue;
      }

      navItem.classList.add('active');
      if (navItem.parentElement.classList.contains('nested-menu-items')) {
        navItem.parentElement.classList.add('expanded');
      }

      break;
    }
  }
  function setExpandableMenus() {
    const nestedMenus = document.querySelectorAll('.nested-menu-items');

    for (const nestedMenu of nestedMenus) {
      const nestedMenuToggle = nestedMenu.previousElementSibling;
      nestedMenuToggle.addEventListener('click', () => nestedMenu.classList.toggle('expanded'));
    }
  }

  function setToggleButtons() {
    const toggleButtons = document.querySelectorAll('.u-icon-toggle-btn');

    for (const button of toggleButtons) {
      const icon = button.firstElementChild;
      button.addEventListener('click', () => {
        if (button.classList.contains('selected')) {
          button.classList.remove('selected');
          icon.classList.remove('mdi-cards-heart');
          icon.classList.add('mdi-cards-heart-outline');
          return;
        }

        button.classList.add('selected');
        icon.classList.add('mdi-cards-heart');
        icon.classList.remove('mdi-cards-heart-outline');
      });
    }
  }

  setActiveNavigationItem();
  setExpandableMenus();
  setToggleButtons();
})();

hljs.highlightAll();

let currentThemeMode = parseInt(localStorage.currentThemeMode, 10) || 0;

function setThemeMode(mode) {
  currentThemeMode = mode;
  localStorage.currentThemeMode = mode;
  applyThemeMode();
}

function applyThemeMode() {
  const darkMode = currentThemeMode === ThemeMode.Dark ||
    currentThemeMode  === ThemeMode.Auto && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (!darkMode) {
    document.body.classList.remove('u-dark-mode');
    return;
  }

  document.body.classList.add('u-dark-mode');
}

applyThemeMode();
