// UserProfil deyishkenleri
let userSpanText = document.getElementById("userSpanText");
let userHesabdanCix = document.getElementById("userHesabdanCix");
let wlcm = document.getElementById("wlcm");
let RedakteEt = document.getElementById("RedakteEt");
let editProfil = document.getElementById("editProfil");
let buttonX = document.getElementById("buttonX");
let loginedUser;

let edName = document.getElementById("edName");
let edLastname = document.getElementById("edLastname");
let edEmail = document.getElementById("edEmail");
let edpassword = document.getElementById("edpassword");

if (localStorage.getItem("login") == null) {

    wlcm.innerText = "Əvvəlcə hesaba daxil olun"
    userSpanText.innerHTML = "";
    buttonX.style.display = "none"

    setTimeout(fnUserHesabdanCix, 2000)
}


userSpanText.innerHTML = JSON.parse(localStorage.getItem("login")).name + " " + JSON.parse(localStorage.getItem("login")).lastname;

userHesabdanCix.addEventListener("click", fnUserHesabdanCix)

function fnUserHesabdanCix() {
    localStorage.removeItem("login")
    window.open("index.html", "_self");
};

RedakteEt.addEventListener("click", fnRedakteEt);

function fnRedakteEt() {
    RedakteEt.style.display = "none";
    userHesabdanCix.style.display = "none";
    userSpanText.style.display = "none";
    wlcm.style.display = "none";
    imgX.style.display = "none";

    saxla.style.display = "";
    a1.style.display = "block";
    a2.style.display = "block";
    a3.style.display = "block";
    a4.style.display = "block";
    a5.style.display = "block";
    a7.style.display = "block";

    JSON.parse(localStorage.getItem("users")).forEach(function(editingIstifadeci) {
        if (JSON.parse(localStorage.getItem("login")).email == editingIstifadeci.email) {
            edName.value = editingIstifadeci.name;
            edLastname.value = editingIstifadeci.lastname;
            edEmail.value = editingIstifadeci.email;
            edpassword.value = editingIstifadeci.password;
        }
    })
};

editProfil.addEventListener("click", fnEditSave)

function fnEditSave() {

    let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let laginUser = JSON.parse(localStorage.getItem("login"));
    let users = JSON.parse(localStorage.getItem("users"));
    let existsEmail = false
    if (!edEmail.value.match(validEmail)) {

        document.getElementById("errorDiv").style.display = "block";
        document.getElementById("error").innerText = "❌ Emailin formatı səhvdir";
        edEmail.focus() //NEW
        return;
    }
    users.forEach(function(editingIstifadeci) {

        if (edEmail.value == editingIstifadeci.email &&
            laginUser.email !== editingIstifadeci.email) {
            existsEmail = true;
        }
    })

    if (!existsEmail) {
        users.forEach(function(editingIstifadeci) {
            if (laginUser.email == editingIstifadeci.email) {
                editingIstifadeci.name = edName.value;
                editingIstifadeci.lastname = edLastname.value;
                editingIstifadeci.email = edEmail.value;
                editingIstifadeci.password = edpassword.value;

                laginUser.name = edName.value;
                laginUser.lastname = edLastname.value;

                localStorage.setItem("users", JSON.stringify(users));
                localStorage.setItem("login", JSON.stringify(laginUser));
                existsEmail = false;
                location.reload();
            }
        })
    } else {
        document.getElementById("errorDiv").style.display = "block";
        document.getElementById("error").innerText = "❌ Bu e-mail mövcuddur!";
    }


}