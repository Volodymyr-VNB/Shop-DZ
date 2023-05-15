// add to cart
let productsCountEl = document.getElementById( "products-count" );
let addToCartBtns = document.querySelectorAll( ".button-size2" );

addToCartBtns.forEach( ( item ) => {
  item.addEventListener( "click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  });
});

let likeBtns = document.querySelectorAll( ".lake " );

likeBtns.forEach((item) => {
  item.addEventListener("click", function () {
      // if (item.classList.contains("laked")) {
      //     item.classList.remove("laked");
      // } else {
      //     item.classList.add("laked");
      // }
    item.classList.toggle("laked");
  });
});

// alert(location.href)

let moreDetailsBtns = document.querySelectorAll( ".button-details" );
let modal = document.querySelector( ".modal" );
moreDetailsBtns.forEach( ( item ) => {
  item.addEventListener( "click", openModal );
});
function openModal () {
  modal.classList.add( "show" );
  modal.classList.remove( "hide" );
};

let closemoreDetailsBtns = document.querySelector( ".btn-close" );
closemoreDetailsBtns.addEventListener( "click", closeModal );

function closeModal () {
  
  modal.classList.remove("show");
  modal.classList.add("hide");
};
modal.addEventListener("click",function(e){
// e.preventDefault();
//   console.log(e.target);
      if(e.target=== modal){
        closeModal();
      }
});
$('.slider').slick({
  infinite: true,
  dots: true,
  dotsClass: 'dots-style',
  prevArrow: "<img src='./images/arrow_right_icon.svg' class='slick-prev slick-arrow' style='display: block;' alt='2'>",
  nextArrow: "<img src='./images/arrow_left_icon.svg' class='slick-next slick-arrow' style='display: block;' alt='1'>"
});

// OOP
// 

// function Car(modal,year,color) {
//   this.modal = modal;
//   this.year = year;
//   this.color = color;
//   this.carName = function(){
//     return this.modal+ " "+ this.year;
//   }
// test () {
//   return this.model;
// }
// }
// let audi = new Car("a4",2020,"black");
// let lexus = new Car("e24",2023,"blue");

// console.log(audi.test);
function Counter (incrementBtn, decrementBtn, inputField ){
        this.domRefs ={
            incrementBtn: incrementBtn,
            decrementBtn,
            inputField,
        };
        this.toggleButtonState = function(){
            let count =+this.domRefs.inputField.value;
            this.domRefs.decrementBtn.disabled = count <=1;
            this.domRefs.incrementBtn.disabled = count >=10;
        };

      this.toggleButtonState();

        this.increment = function(){
            this.domRefs.inputField.value = +this.domRefs.inputField.value +1;
            this.toggleButtonState();
        };

        this.decrement = function(){
            this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
            this.toggleButtonState();
        };

        this.domRefs.incrementBtn.addEventListener("click", 
            this.increment.bind(this)
        );
        this.domRefs.decrementBtn.addEventListener("click", 
            this.decrement.bind(this)
        );
  
      console.log("this",this);
}
let domNum = {
  incrementBtn : document.querySelectorAll(".increment-button"),
  decrementBtn : document.querySelectorAll(".decrement-button"),
  productQuantity : document.querySelectorAll(".product-quantity input"),
}

// console.log('document.querySelectorAll(".increment-button")[0]=',
//             document.querySelectorAll(".increment-button")[0]);

// console.log("domNum.1111 =",domNum.incrementBtn[0]);
// console.log("domNum.2 =",domNum.incrementBtn[1]);
// console.log("domNum.3 =",domNum.incrementBtn[2]);
// console.log('incrementBtn[1]=',domNum.incrementBtn[1]);
// let counter = new Counter
// (document.querySelectorAll(".increment-button")[0],
// document.querySelectorAll(".decrement-button")[0],
// document.querySelectorAll(".product-quantity input")[0]
// );

// for (let index = 0; index < 3; index++) {
//   domNum.push =(document.querySelectorAll(".increment-button")[index],
//   document.querySelectorAll(".decrement-button")[index],
//   document.querySelectorAll(".product-quantity input")[index]
//   );
//   console.log("domNum.push=",domNum);
  
  
// }  


  // console.log("domNum0=",domNum.incrementBtn[0]);
  // console.log("domNum1=",domNum.incrementBtn[1]);
  // console.log("domNum2=",domNum.incrementBtn[2]);
  // console.log("domNum=",domNum);

// let counter = new Counter
// (
//   domNum.incrementBtn[0],
//   domNum.decrementBtn[0],
//   domNum.productQuantity[0]
  
//  );

for (let index = 0; index < domNum.incrementBtn.length; index++) {
  domNum.push = 
  new Counter
            ( domNum.incrementBtn[index],
              domNum.decrementBtn[index],
              domNum.productQuantity[index]
             );
}
 

