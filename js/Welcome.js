let welcomeEmail = document.getElementById("welcomeEmail");
let welcomePassword = document.getElementById("welcomePassword");
let welcomeDaxilol = document.getElementById("welcomeDaxilol");
let welcomeQeydiyyat = document.getElementById("welcomeQeydiyyat");
let passEror = false;
let loginVar = false;
let logins;
let error = document.getElementById("error");
let errorDiv = document.getElementById("errorDiv")

welcomeDaxilol.addEventListener("click", fnGet);
document.getElementById("forEnter").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        fnGet()
    }
})

function fnGet() {

    JSON.parse(localStorage.getItem("users")).forEach(function(istifadeciler) {

        if (istifadeciler.email == welcomeEmail.value && istifadeciler.password != welcomePassword.value) {
            passEror = true;
        };
        if (istifadeciler.email == welcomeEmail.value && istifadeciler.password == welcomePassword.value) {

            logins = {
                name: istifadeciler.name,
                lastname: istifadeciler.lastname
            };
            loginVar = true;
        }
    })

    if (passEror) {
        errorDiv.style.display = "block";
        error.innerHTML = "🔢 İstifadəçi şifrəsi səhvdir!";
        passEror = false;
        return;
    };
    if (loginVar) {
        localStorage.setItem("login", JSON.stringify(logins))
        window.open("UserProfil.html", "_self")
    } else {

        errorDiv.style.display = "block";
        error.innerHTML = "📧istifadəçi mövcud deyil";
        return;
    }

};



welcomeQeydiyyat.addEventListener("click", function() {
    window.open("Registration.html", "_self")
});