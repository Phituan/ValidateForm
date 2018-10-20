var btnSubmit = document.forms["form-register"]["btn_submit"];
btnSubmit.onclick = function () {
    //username
    var txtUsername = document.forms["form-register"]["username"];
    var msgUsername = txtUsername.nextElementSibling;
    if (txtUsername == null || txtUsername.value.length == 0) {
        msgUsername.innerHTML = "* Vui lòng nhập tên của bạn";
        msgUsername.classList.remove("hidden-text");
    }
    else if (txtUsername.value.length < 5) {
        msgUsername.innerHTML = "* Tên của bạn quá ngắn";
        msgUsername.classList.remove("hidden-text");
    }
    else if (txtUsername.value.length > 20) {
        msgUsername.innerHTML = "* Tên của bạn quá dài";
        msgUsername.classList.remove("hidden-text");
    }
    else {
        msgUsername.innerHTML = "* Tên rất ok";
        msgError.classList.remove("danger-text");
        msgError.classList.remove("succes-text");
    }

    //password
    var txtPassword = document.forms["form-register"]["password"];
    var msgPassword = txtPassword.nextElementSibling;
    if (txtPassword == null || txtPassword.value.length == 0) {
        msgPassword.innerHTML = "* Vui lòng  nhập Password của bạn";
        msgPassword.classList.remove("hidden-text");
    }
    else if (txtPassword.value.length < 5) {
        msgPassword.innerHTML = "* Password quá ngắn";
        msgPassword.classList.remove("hidden-text");
    }
    else if (txtPassword.value.length > 8) {
        msgPassword.innerHTML = "*  ";
        msgPassword.classList.remove("hidden-text");
    }
    else {
        msgPassword.innerHTML = "* Password rất ok";
        msgError.classList.remove("danger-text");
        msgError.classList.remove("succes-text");
    }
    //Email
    var txtEmail = document.forms["form-register"]["email"];
    var msgEmail = txtEmail.nextElementSibling;
    if (txtEmail == null || txtEmail.value.length == 0) {
        msgEmail.innerHTML = "* Vui lòng  nhập Email của bạn";
        msgEmail.classList.remove("hidden-text");
    }
    else if (txtEmail.value.length < 5) {
        msgEmail.innerHTML = "* Email quá ngắn";
        msgEmail.classList.remove("hidden-text");
    }
    else if (txtEmail.value.length > 8) {
        msgEmail.innerHTML = "*  ";
        msgEmail.classList.remove("hidden-text");
    }
    else {
        msgEmail.innerHTML = "* Password rất ok";
        msgError.classList.remove("danger-text");
        msgError.classList.remove("succes-text");
    }
    var txtFullName = document.forms["form-register"]["fullname"];
    var msgFullName = txtFullName.nextElementSibling;
    if (txtFullName == null || txtFullName.value.length == 0) {
        msgFullName.innerHTML = "* Vui lòng  nhập FullName";
        msgFullName.classList.remove("hidden-text");
    }
    else if (txtFullName.value.length < 5) {
        msgFullName.innerHTML = "* FullName quá ngắn";
        msgFullName.classList.remove("hidden-text");
    }
    else if (txtFullName.value.length > 8) {
        msgFullName.innerHTML = "* FullName không được quá 8 kí tự ";
        msgFullName.classList.remove("hidden-text");
    }
    else {
        msgFullName.innerHTML = "* FullName rất ok";
        msgError.classList.remove("danger-text");
        msgError.classList.remove("succes-text");
    }
}


