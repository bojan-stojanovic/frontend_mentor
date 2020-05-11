const form = document.querySelector("#form");
const emailField = form.querySelector("#email");
const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;

form.addEventListener("submit", (e) => {
    let formValid = true;    
    
    if (!emailField.value || !regex.test(emailField.value)) {
        formValid = false;
        form.querySelector(".input-field").classList.add("error");
    }

    if(!formValid) {
        e.preventDefault();
    }
}, false);

emailField.addEventListener("focus", () => {
    form.querySelector(".input-field").classList.remove("error");
}, false);