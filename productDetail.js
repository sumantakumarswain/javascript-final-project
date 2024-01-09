
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



var id = JSON.parse(localStorage.getItem("productId"))

  $.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${id}`, function(response){
    var productData = response;
   
    var leftColumnSection = document.getElementById("left-column")
leftColumnSection.innerHTML =`
<img id="preview-image" src="${productData.preview}"/>
`
var rightColumnSection = document.getElementById("right-column");
rightColumnSection.innerHTML =`
<h1 id="name">${productData.name}</h1>
<h4 id="brand">${productData.brand}</h4>
<h3>price : 
<span id="price">${productData.price}</span>
</h3>
<h3 id="descript">Description</h3>
<p id="description">${productData.description}</p>
<h3 id="preview-text">Product Preview</h3>
<div id="photo-section"></div>
<div id="order-btn-wrapper">
<button id="order-btn">ORDER</button> 
</div>
`
var photoSection = document.getElementById("photo-section");

for(var i = 0; i < productData.photos.length ; i++){
 if(i == 0){
 photoSection.innerHTML +=`
   <img class="product-detail-image active" id ="img${i + 1}" src="${productData.photos[i]}" onclick = "changeActiveClass(${i + 1})"/>
`
 }else{
   photoSection.innerHTML +=`
   <img class="product-detail-image" id ="img${i + 1}" src="${productData.photos[i]}" onclick = "changeActiveClass(${i + 1})"/>
`
 }}

 var countNum = document.getElementById("count");
var OrderBtn = document.getElementById("order-btn")

var clicked = 0
OrderBtn.addEventListener("click", function(){
  clicked++
  countNum.innerText = clicked;
  localStorage.setItem("countNumber",JSON.stringify(clicked))
})

clicked = JSON.parse(localStorage.getItem("countNumber"));
countNum.innerText = clicked




OrderBtn.addEventListener("click",()=>{
  OrderBtn.style.borderColor= "pink"
  OrderBtn.style.borderWidth="2px"
  OrderBtn.style.borderStyle="solid"

setTimeout(function(){
  OrderBtn.style.border ="none"
  },300)
});

OrderBtn.addEventListener("click",function(){
  $.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${id}`, function(response){
    var productData = response;
   var productArray = [];
    var obj = {
      "id": productData.id,
      "img" : productData.preview,
     "name" : productData.name,
     "price": productData.price,
     "productClicked": 1
    }

 
    var productFromLocalStorage = JSON.parse(localStorage.getItem("products"));
    var productId = JSON.parse(localStorage.getItem("productId"));
    if(productFromLocalStorage == null){
      productArray.push(obj);
      localStorage.setItem("products",JSON.stringify(productArray))
     
    }else{

      for(let i = 0 ; i < productFromLocalStorage.length ; i++){
        if(productId == productFromLocalStorage[i].id){ 
           ++productFromLocalStorage[i].productClicked;
           obj.productClicked = productFromLocalStorage[i].productClicked 
          productFromLocalStorage.splice(i,i+1);
          localStorage.setItem("products",JSON.stringify(productFromLocalStorage))
        }
        }
          
        productFromLocalStorage.push(obj);
        localStorage.setItem("products",JSON.stringify(productFromLocalStorage))
      }
    }) 
})
    });






  function changeActiveClass(id){
    var previousActiveClass = document.getElementsByClassName("active")[0];
    previousActiveClass.classList.remove("active");
    var addActiveBorder = document.getElementById(`img${id}`);
   addActiveBorder.classList.add("active");
    var preViewImage = document.getElementById("preview-image");
   preViewImage.src = addActiveBorder.src
}





 
  



  var tableElement = document.getElementsByTagName("td");
  
  for(var i = 0 ; i < tableElement.length; i++){
   tableElement[i].addEventListener("click",function(){
    open("http://127.0.0.1:5500/product.html","","width=500px,height= 200px, left=500px, top=200px")
   })
  } 

  cart.onclick = function(){
    open("http://127.0.0.1:5500/checkOut.html" ,"_parent")
   }


  var arr = [1,2,3,4,5,3];
  var num = 3;
  var times = 0
  for(var i = 0; i < arr.length; i++){
    if(arr[i] == num){
     arr.splice(i,1)
     times = ++times
    }else{
      console.log(arr[i])
    }
  }
  console.log(arr);
  arr.push(num);
  console.log(arr)
  console.log(times + 1)