// add to cart
let productsCountEl = document.getElementById("products-count");
// console.log(productsCountEl);
let addToCartBtns = document.querySelectorAll(".button-size2");
// console.log(addToCartBtns);

// let button = document.querySelector("button");
// addToCartBtns.addEventListener("click", console.log(addToCartBtns));

// for (let i=0; i <addToCartBtns.length; i++) {
//     addToCartBtns[i].addEventListener("click", function(){

//         productsCountEl.textContent= +productsCountEl.textContent + 1;
//         console.log("prevProductsCount", productsCountEl.textContent);
//     })
// }
addToCartBtns.forEach((item) => {
  item.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  });
});
//==============================================================================

//  ДЗ 06-05-2023 # 18 Завдання 1

//==============================================================================
let likeProduct = document.querySelectorAll(".lake ");
let likeProductFon = document.querySelectorAll(".img-sizeJS");
function changeColor(nomProduct) {
  for (i = 0; i < likeProduct.length; i++) {
    if (likeProduct[i].id == nomProduct)
      if (
        likeProduct[i].style.backgroundImage ==
        'url("http://127.0.0.1:5500/Lesson-9DZ/images/heart-write.png")'
      ) {
        likeProduct[i].style.backgroundImage =
          'url("http://127.0.0.1:5500/Lesson-9DZ/images/heart-blue.png")';
        likeProductFon[i].style.backgroundColor = "#cdddee";
      } else {
        likeProduct[i].style.backgroundImage =
          'url("http://127.0.0.1:5500/Lesson-9DZ/images/heart-write.png")';
        likeProductFon[i].style.backgroundColor = "#2c71b8";
      }
  }
}

let nomProduct2;
document.addEventListener("click", (e) =>
  document
    .querySelector(".lake")
    .addEventListener("click", changeColor(e.target.id))
);

//==============================================================================

//  ДЗ 06-05-2023 # 18 Завдання 2

//==============================================================================

let buttonDetails = document.querySelectorAll(".button-details");

buttonDetails.forEach((item) => {
  item.addEventListener("click", createDetails);
});

function createDetails() {
  let fragment = new DocumentFragment();
  let div = document.createElement("div");
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let p = document.createElement("p");
  let p1 = document.createElement("p");
  let input = document.createElement("input");
  let p2 = document.createElement("p");
  let input2 = document.createElement("input");
  let button = document.createElement("button");
  div.id = "windowsDani";
  input.type = "text";
  input2.type = "tel";
  input2.placeholder = "099-122-4537";

  p.textContent = "Залиште свої данні будь ласка";
  p.style.cssText = `font-size: 16px; font-weight: bold; color: white; 
                      margin: 20px auto; text-align: center;}`;
  div.style.cssText = `position:fixed; width:400px; height:300px; 
                        color:white; top: 50%; left:50%; z-index:20;
                        background-color: #2c71b8; transform: translate(-50%, -50%);
                        border-radius: 5px;   border: 2px white solid;
                        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                        display: flex;   flex-direction:column;`;
  p1.textContent = "Ім'я";
  p2.textContent = "Номер телефону";
  button.textContent = "Надіслати";
  p1.style.cssText = `font-size: 12px; font-weight: bold; color: white; 
                      margin: 20px; text-align: center; width:100px;}`;
  p2.style.cssText = `font-size: 12px; font-weight: bold; color: white; 
                      margin: 20px; text-align: center; width:100px;}`;
  button.style.cssText = `font-size: 12px; font-weight: bold; color: blue; 
                      margin: 20px auto; text-align: center; width:100px;
                      height: 40px;}`;
  input.style.cssText = `font-size: 14px; font-weight: bold; color: black; 
                      margin: 20px; text-align: center; width:150px;height: 30px;}`;
  input2.style.cssText = `font-size: 14px; font-weight: bold; color: black; 
                      margin: 20px; text-align: center; width:150px;height: 30px;}`;
  div1.style.cssText = `display: flex; margin: 10px 0px;`;
  div2.style.cssText = `display: flex; margin: 10px 0px;`;
  div3.style.cssText = `display: flex; margin: 5px; position: absolute;top:0px;
                        right:0px; border: 1px white solid;width:20px;height: 20px;
                        justify-content: center;  align-items: center;`;

  div3.textContent = "x";
  div3.className = "closeWindows";
  div.append(p, div1, div2, button, div3);
  div1.append(p1, input);
  div2.append(p2, input2);

  document.body.append(div);

  let closeWidows = document.querySelector(".closeWindows");
  document
    .querySelector(".closeWindows")
    .addEventListener("click", closeWidowsFun);

  function closeWidowsFun() {
    div.remove();
    //  div.style.display="none"; працює тільки перший раз Чому ?
    console.log("Привіт");
  }
}
