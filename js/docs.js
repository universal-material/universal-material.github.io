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

    sidebarBackdrop.addEventListener("click", toggleSidebar);


    document.getElementById("main-content").addEventListener("scroll", mainContentScroll);
})();

hljs.initHighlightingOnLoad();