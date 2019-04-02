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

  function toggleDenseLayout() {
    document.body.classList.toggle("dense-layout");
  }

  function toggleRtl() {
    document.body.classList.toggle("rtl");
  }

  function mainContentScroll(e) {
    if (e.target.scrollTop) {
      appbar.classList.add('elevation-6dp');
    } else {
      appbar.classList.remove('elevation-6dp');
    }
  }

  document
    .getElementById("menu-toggle")
    .addEventListener("click", toggleSidebar);

  document
    .getElementById("dense-toggle")
    .addEventListener("click", toggleDenseLayout);

  document
    .getElementById("rtl-toggle")
    .addEventListener("click", toggleRtl);


  sidebarBackdrop.addEventListener("click", toggleSidebar);

  document.getElementById("main-content").addEventListener("scroll", mainContentScroll);

  umd.Ripple.initializeRipples();
  umd.TextField.initializeTextFields();
  umd.Dropdown.initializeDropdowns();
  umd.TabBar.initializeTabBars();

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
      if (navItem.pathname === location.pathname) {
        navItem.classList.add('active');
        break;
      }
    }
  }

  setActiveNavigationItem();
})();

function showSnackbar() {

  const text = document.getElementById('snackbarText').value;
  const buttonText = document.getElementById('snackbarButtonText').value;

  umd.Snackbar.show(text, umd.SnackbarDuration.long, buttonText ? {
    text: buttonText,
    action: function () {
      alert('Snackbar action!')
    }
  } : null);
}

hljs.initHighlightingOnLoad();
