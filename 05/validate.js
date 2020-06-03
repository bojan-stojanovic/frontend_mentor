const form = document.querySelector("#sign-form");
const inputFields = form.querySelectorAll("input");
const email = form.querySelector("input[name='email']");
const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;

form.addEventListener("submit", (e) => {
    let formValid = true;
    
    inputFields.forEach(element => {
        if(element.value == "") {
            formValid = false;
            element.parentElement.classList.add("error");
        }
    });

    if (!regex.test(email.value)) {
        email.parentElement.classList.add("error");
        formValid = false;
    }

    if(!formValid) {
        e.preventDefault();
    } else {
        alert("Success!");
    }
}, false);

inputFields.forEach(element => {
    element.addEventListener("focus", () => {
        element.parentElement.classList.remove("error");
    })
});