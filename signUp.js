document.getElementById("btn").addEventListener("click", () => {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let msg=document.getElementById('mssg')
    let nameValid = /^[A-Za-z]{5,}$/;
    let mailValid = /^[A-Za-z0-9_\-]+@[A-Za-z0-9_\-]+\.[A-Za-z]{2,4}$/;
    let passValid = /^\d{8,}$/;
    if (name.value === "" || email.value === "" || password.value === "") {
       msg.innerHTML="You Have Empty inputs";
    } else if (email.value != email.value.match(mailValid)) {
      msg.innerHTML="Invalid email address!!";
    } else if (password.value != password.value.match(passValid)) {
        msg.innerHTML="Entar a password only numbers and its more than 7!!";
    } else if (name.value != name.value.match(nameValid)) {
        msg.innerHTML="Entar a Name that is more than 4 Character and only Character!!"
    
    } else {
        msg.innerHTML=''
      fetch("https:655127797d203ab6626e943b.mockapi.io/users", {
        method: "POST",
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          password: password.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => (window.location.href = "Login.html"));
    }
  });
