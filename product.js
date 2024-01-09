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

    var clothingSection = document.getElementById("clothing-section");
    var essesorySection = document.getElementById("essesory-section");
    

$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product", function(response){
  var productList = response;
      for(var i = 0; i < productList.length; i++){

        if(productList[i].isAccessory == false){
          clothingSection.innerHTML +=`
          <div class="product-card" id="${productList[i].id}" onclick="productDetailPage(${productList[i].id})">
        <img class="product-image" src="${productList[i].preview}"/>
       <div class="details">
        <h3>${productList[i].name}</h3>
        <h4>${productList[i].brand}</h4>
        <h5> rs ${productList[i].price}</h5>
        </div>
        </div>
          `
        }else{
          essesorySection.innerHTML +=`
          <div class="product-card" id="${productList[i].id}" onclick="productDetailPage(${productList[i].id})">
          <img class="product-image" src="${productList[i].preview}"/>
         <div class="details">
          <h3>${productList[i].name}</h3>
          <h4>${productList[i].brand}</h4>
          <h5> rs ${productList[i].price}</h5>
          </div>
          </div>
          `
        }}

})

function productDetailPage(id){
  location.assign("http://127.0.0.1:5500/productDetail.html")
  localStorage.setItem("productId", JSON.stringify(id))

}


const wrapper = document.querySelector('#wrapper')
const carousel = document.querySelector('#image-carousel')
const images = document.getElementsByClassName('carousel-img')
const btn = document.querySelectorAll('button')
const previous = document.querySelector('#prev')
const nxt = document.querySelector('#next')

for(var i = 0; i < images.length; i++){
  images[i].style.left = `${i * 100}%`
}
 

let counter = 0;
let interval;
const slideImage = ()=>{
  for(var i = 0; i < images.length; i++){
    images[i].style.transform = `translateX(-${counter*100}%)`
  }    
}
const prev = ()=>{
    if(counter > 0){
        counter --;
        slideImage();
    }
}
const next = ()=>{
    if(counter <= (images.length - 2)){
        counter ++;
        slideImage(); 
    }
}
function stopSlide(){
  clearInterval(interval)
  }

function continueSlide(){
   interval = setInterval(function(){
    slideImage()
    counter++
    if(counter == (images.length)){
     counter = 0
    }
   },3000)
  }



 window.onload = continueSlide()

var countNum = document.getElementById("count");


   var count = JSON.parse(localStorage.getItem("countNumber"))
  countNum.innerText = count;

  if(count == 0){
    countNum.style.display = "none"
  }else{
    countNum.style.display = "block"
  }
       var tableElement = document.getElementsByTagName("td");
      
       for(var i = 0 ; i < tableElement.length; i++){
        tableElement[i].addEventListener("click",function(){
         open("http://127.0.0.1:5500/product.html","","width=500px,height= 200px, left=500px, top=200px")
        })
       } 
 const cart = document.getElementById("cart");

 cart.onclick = function(){
  open("http://127.0.0.1:5500/checkOut.html" ,"_parent")
 }



var obj = {
  name : "sumanta",
  email : "sumanta_123@gmail.com"
}

  

        






















 


    
 