var LogInBtn = document.getElementById("login-btn")
 function changeLogInStatus(){
   if(JSON.parse(localStorage.getItem("isLoggedIn")) == null){
    localStorage.setItem("isLoggedIn",JSON.stringify("false"));
    location.assign("http://127.0.0.1:5500/index.html")
   }else if(JSON.parse(localStorage.getItem("isLoggedIn")) == "false"){
    localStorage.setItem("isLoggedIn",JSON.stringify("true"));
    LogInBtn.innerText = "LOG OUT"
   }else{
    localStorage.setItem("isLoggedIn",JSON.stringify("false"));
    LogInBtn.innerText = "LOG IN";
    location.assign("http://127.0.0.1:5500/index.html")
   }
 }
 if(JSON.parse(localStorage.getItem("isLoggedIn")) == null || JSON.parse(localStorage.getItem("isLoggedIn")) == "false"){
    LogInBtn.innerText = "LOG IN";
    location.assign("http://127.0.0.1:5500/index.html")
 }else{
    LogInBtn.innerText = "LOG OUT"
 }

var homePage = document.getElementById("home-page");
var productPage = document.getElementById("product-page");
productPage.onclick = function(){
        location.assign("http://127.0.0.1:5500/product.html")
}
homePage.onclick = function(){
        location.assign("http://127.0.0.1:5500/index.html")
    }

    var tableElement = document.getElementsByTagName("td");
   
    for(var i = 0 ; i < tableElement.length; i++){
     tableElement[i].addEventListener("click",function(){
      open("http://127.0.0.1:5500/product.html","","width=500px,height= 200px, left=500px, top=200px")
     })
    } 

    var countNum = document.getElementById("count");
     let countNumber= JSON.parse(localStorage.getItem("countNumber"));
    countNum.innerText = countNumber
    var productFromLocalStorage = JSON.parse(localStorage.getItem("products"))
    var productSection = document.getElementById("product-section");
    
    for(var i = 0 ; i < productFromLocalStorage.length; i++){
       
     productSection.innerHTML +=`
     <div class="product-wrapper">
     <div class="product-image-wrapper">
         <img  class="checkout-img" src="${productFromLocalStorage[i].img}"/>  
     </div>
     <div class="product-detail-section">
         <h2>${productFromLocalStorage[i].name}</h2>
         <p > X <span class="product-count">${productFromLocalStorage[i].productClicked}</span></p>
         <p>Amount : RS <span class="toatal-price"> ${productFromLocalStorage[i].price * productFromLocalStorage[i].productClicked } </span></p>
         <button class="remove-btn">REMOVE</button>
     </div>

   </div>
     `
    
    }

let removeBtn = document.getElementsByClassName("remove-btn")
 for(let i = 0 ; i < removeBtn.length; i++){
 
  removeBtn[i].addEventListener("click",function(){
    countNumber = countNumber - Number(productFromLocalStorage[i].productClicked);
    localStorage.setItem("countNumber", JSON.stringify(countNumber))
    productFromLocalStorage.splice(i, 1);
    localStorage.setItem("products",JSON.stringify(productFromLocalStorage));
    if(productFromLocalStorage.length == null || productFromLocalStorage == 0){
      countNumber = 0
      localStorage.setItem("countNumber", JSON.stringify(countNumber))
    }
    location.reload()
  })
 
 }


let  grandTotalAmount = document.getElementById("grand-total-amnt");
let totalPrice = document.getElementsByClassName("toatal-price");


for(let i = 0 ; i < totalPrice.length; i++){
  grandTotalAmount.innerText = Number(grandTotalAmount.innerText ) + Number(totalPrice[i].innerText)
}




let placeOrderbtn = document.getElementById("place-order-btn");
placeOrderbtn.addEventListener("click", function(){
$.ajax({
  type:"POST",
  url:"https://5d76bf96515d1a0014085cf9.mockapi.io/order",
  data:JSON.stringify(productFromLocalStorage),
  contentType:"application/json;charset=utf-8",
  success:function(response){
    confirm("h!!!!!!!!!!!. your order is placed successfully. Your total amount is "+ grandTotalAmount.innerText )
  },
  error : function(request,status,errorThrown){
  console.log(status,errorThrown);
  if(status == "error"){
    confirm("your order is not placed due to some technichal error.")
  }
  } 
})
})
