(function () {
  var sidebar = document.querySelector(".sidebar");
  var sidebarBackdrop = document.querySelector(".sidebar-backdrop");
  var appbar = document.getElementById("app-bar");

  function toggleSidebar() {
    if (sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
    } else {
      sidebar.classList.add("open");
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

  var textField = document.querySelector('.text-field-box');
  var textInput = document.querySelector('#text-field-box');
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
    var navItems = document.querySelectorAll('nav .list-item');

    for (var i = 0; i < navItems.length; i++) {
      var navItem = navItems[i];
      if (navItem.pathname === location.pathname) {
        navItem.classList.add('active');
        break;
      }
    }
  }

  setActiveNavigationItem();
})();

function showSnackbar() {

  var text = document.getElementById('snackbarText').value;
  var buttonText = document.getElementById('snackbarButtonText').value;

  umd.Snackbar.show(document.getElementById('snackbarText').value, umd.SnackbarDuration.long, buttonText ? {
    text: buttonText,
    action: function () {
      alert('Snackbar action!')
    }
  } : null);
}

hljs.initHighlightingOnLoad();

