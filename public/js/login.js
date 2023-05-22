async function loginform(event){
    event.preventDefault();
    
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if (email && password) {
        // Send a POST request to the API endpoint
        const response = await fetch("/api/user/login", {
          method: "POST",
          body: JSON.stringify({ username, password }),
          headers: { "Content-Type": "application/json" },
          
        });
        console.log(email)
          console.log(password)
    
        if (response.ok) {
         //console.log(response)
          // If successful, redirect the browser to the profile page
          document.location.replace("/");
        } else {
          console.log(await response.text());
        }
      }

}

const loginbtn  = document.querySelector('#loginbtn')

loginbtn.addEventListener('submit', loginform);

console.log(loginbtn);


const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#signup-username').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/blogpost');
      } else {
        alert('Failed to sign up.');
      }
    }
  };

  document.querySelector('#signupbtn').addEventListener('submit', signupFormHandler);