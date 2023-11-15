

document.getElementById("btn").addEventListener("click", () => {
    
    let name = document.getElementById("name");
    let password = document.getElementById("password");
    let msg=document.getElementById('mssg')


    if (name.value === "" || password.value === "") {
        msg.innerHTML="You Have Empty inputs";
    } else {
      fetch("https://655127797d203ab6626e943b.mockapi.io/users")
        .then((response) => response.json())
        .then((data) => {
          let userValid = data.find(
            (d) => name.value === d.name && password.value === d.password
          );

          if (!userValid) {
            msg.innerHTML="name or password is invalled";

          } else {
            msg.innerHTML=''
            sessionStorage.clear()
            localStorage.clear()
            localStorage.setItem("User", name.value);
            sessionStorage.setItem("User",name.value,)
            window.location.href = "blog.html";
          }
        });
    }})