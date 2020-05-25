function checkUserLogin() {
    if (localStorage.getItem("login") == null) {
        userSpanText.innerHTML = "";
        buttonX.style.display = "none"
        window.open("index_Welcome.html", "_self");
    }
}