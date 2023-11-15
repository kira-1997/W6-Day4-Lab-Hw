if (!sessionStorage.getItem('User')) {
  // not logged in
  window.location.href = 'Login.html';
  exit();
}
  
  
  // CKEDITOR
CKEDITOR.replace('textarea');
let blog = document.getElementById("blog")
let btn = document.getElementById("btn")
let btn1 = document.getElementById("btn1")
let userName = document.getElementById('UserName')
userName.innerHTML= localStorage.getItem("User")



btn.addEventListener("click", () => {
    let texterea = CKEDITOR.instances.textarea.getData();
    btn.insertAdjacentHTML("beforebegin", texterea)
    

})

btn1.addEventListener("click", () => {
   let blogEl=document.querySelectorAll('p')
   blogEl[blogEl.length-1].parentNode.removeChild(blogEl[blogEl.length-1])

})