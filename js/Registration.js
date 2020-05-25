let regName = document.getElementById("regName");
let regLastname = document.getElementById("regLastname");
let regEmail = document.getElementById("regEmail");
let regPassword1 = document.getElementById("regpassword1");
let regPassword2 = document.getElementById("regpassword2");
let regBtnQeydiyyat = document.getElementById("regBtnQeydiyyat");
let regBtnDaxilOl = document.getElementById("regBtnDaxilOl");
let error = document.getElementById("error");
let users;
let regPasswrodX;
let errorDiv = document.getElementById("errorDiv");
let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
} else {
    users = [];
}

document.getElementById("forEnter").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        fnRegBtnQeydiyyat()
    }
})

regBtnQeydiyyat.addEventListener("click", fnRegBtnQeydiyyat)

function fnRegBtnQeydiyyat() {
    if (regName.value == "") {
        errorDiv.style.display = "block";
        error.innerText = "⚠️  Adınızı daxil edin";
        return;
    };
    if (regLastname.value == "") {
        errorDiv.style.display = "block";
        error.innerText = "⚠️  Soyadınızı daxil edin";
        return;
    };
    if (regEmail.value == "") {
        errorDiv.style.display = "block";
        error.innerText = "⚠️  Elekton ünvanınızı daxil edin";
        return;
    };
    if (!regEmail.value.match(validEmail)) {
        errorDiv.style.display = "block";
        error.innerText = "⚠️  Elekton ünvanın formatı səhvdir";
        regEmail.focus() //NEW
        return;
    };
    if (regPassword1.value == "") {
        errorDiv.style.display = "block";
        error.innerText = "⚠️  Şifrə daxil edin";
        return;
    };
    if (regPassword2.value == "") {
        errorDiv.style.display = "block";
        error.innerText = "⚠️  Şifrə daxil edin";
        return;
    };
    if (regPassword1.value != regPassword2.value) {
        errorDiv.style.display = "block";
        error.innerText = "⚠️  Daxil edilən şifrələr fərqlidir ";
        return;
    }


    let istifadeciMovcuddur = false;

    users.forEach(function(istifadeci) {
        if (regEmail.value == istifadeci.email) {
            istifadeciMovcuddur = true;
        }
    })

    if (istifadeciMovcuddur) {
        alert("Istifadeci movcuddur ! Basqa email ile kecin");
        return;
    }

    let user = {
        name: regName.value,
        lastname: regLastname.value,
        email: regEmail.value,
        password: regPassword1.value,
        id: 1
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));


    let logins = {
        name: user.name,
        lastname: user.lastname,
        email: user.email
    };
    localStorage.setItem("login", JSON.stringify(logins))
    window.open("UserProfil.html", "_self")

};


regBtnDaxilOl.addEventListener("click", function() {
    window.open("index.html", "_self")

});