
const links = document.querySelectorAll(".link");
const forms = document.querySelector(".forms");
const showHide = document.querySelectorAll(".hide-show");

showHide.forEach(showicon=>{
    showicon.addEventListener("click", ()=>{
        let field_password = showicon.parentElement.parentElement.querySelectorAll(".password");

        field_password.forEach(password=>{
            if(password.type === 'password'){
                password.type = 'text';
                showHide.classList.replace("bx-hide", "bx-show");
            }
            password.type = "password";
            showHide.classList.replace("bx-show", "bx-hide");
        })
    })
})


links.forEach(link =>{
    link.addEventListener("click", e=>{
        e.preventDefault();
        forms.classList.toggle("Show-Signup");
    })
})