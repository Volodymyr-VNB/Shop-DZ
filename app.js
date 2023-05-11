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

