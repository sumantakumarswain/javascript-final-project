var LogInBtn = document.getElementById("login-btn");
var homePage = document.getElementById("home-page");
var productPage = document.getElementById("product-page");

 function changeLogInStatus(){
   if(JSON.parse(localStorage.getItem("isLoggedIn")) == null){
    localStorage.setItem("isLoggedIn",JSON.stringify("false"));
    location.assign("http://127.0.0.1:5500/index.html");
   }else if(JSON.parse(localStorage.getItem("isLoggedIn")) == "false"){
    localStorage.setItem("isLoggedIn",JSON.stringify("true"));
    LogInBtn.innerText = "LOG OUT"
   }else{
    localStorage.setItem("isLoggedIn",JSON.stringify("false"));
    LogInBtn.innerText = "LOG IN";
    location.assign("http://127.0.0.1:5500/index.html");
   }
 }
 if(JSON.parse(localStorage.getItem("isLoggedIn")) == null || JSON.parse(localStorage.getItem("isLoggedIn")) == "false"){
    LogInBtn.innerText = "LOG IN";  
 }else{
    LogInBtn.innerText = "LOG OUT"
 }

productPage.onclick = function(){
        location.assign("http://127.0.0.1:5500/product.html")
  }
    homePage.onclick = function(){
        location.assign("http://127.0.0.1:5500/index.html")
    }





      
    
      
    
    
    
    
    