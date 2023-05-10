const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit",e=>{
    e.preventDefault();
    const userObj = {
        email:document.querySelector("#login-email").value,
        password:document.querySelector("#login-password").value,
        //username:document.querySelector("#login-username").value
    }
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href = "/"
        } else {
            alert("trumpet sound")
        }
    })
})

const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit",e=>{
    e.preventDefault();
    const userObj = {
        email:document.querySelector("#signup-email").value,
        name:document.querySelector("#signup-username").value,
        password:document.querySelector("#signup-password").value,
    }
    fetch("/api/user",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href = "/"
        } else {
            alert("trumpet sound")
        }
    })
})