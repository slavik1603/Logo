//add to cart
let productsCountEl = document.getElementById("products-count");
console.log(productsCountEl)

let addToCartButtons =document.querySelectorAll(".add");
console.log(addToCartButtons)

for(let i =0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click",function() {
       // let prevProductsCount = +productsCountEl.textContent;
       // productsCountEl.textContent = prevProductsCount + 1;
        productsCountEl.textContent = +productsCountEl.textContent + 1;
})
}

//modal

let modal = document.querySelector(".modal");
let moreDetailsButtons = document.querySelectorAll(".more");
let closeBtn = document.querySelector(".btn-close"); 

moreDetailsButtons.forEach(item => {
    item.addEventListener("click",openModal)
})   
    
function openModal() {
         modal.classList.add("show");
         modal.classList.remove("hide");
}

function closeModal() {
         modal.classList.remove("show");
         modal.classList.add("hide");
}

closeBtn.addEventListener("click",closeModal);

modal.addEventListener("click",function(e) {
    if(e.target === modal) {
        closeModal()
    }
})

function showModalByScroll () {
    if(window.pageYOffset > document.documentElement.scrollHeight/2) {
        openModal()
        window.removeEventListener("scroll",showModalByScroll)
    }
}

window.addEventListener("scroll", showModalByScroll)
// change like button state
let likeButtons = document.querySelectorAll(".like");

likeButtons.forEach(item => item.addEventListener("click",function() {
   /* if(item.classList.contains('liked')) {
        item.classList.remove("liked")
    } else {
        item.classList.add("liked")
    }*/
    item.classList.toggle("liked")
}))

// Counter


let decrementButtons = document.querySelectorAll(".decrement-button");
let incrementButtons = document.querySelectorAll(".increment-button");
let quantityValue = document.querySelectorAll(".product-quanity input");


function Counter(incrementButton,decrementButton,inputField,minCount = 1,maxCount = 10) {
    this.domRefs = {
        incrementButton,
        decrementButton,
        inputField
    }

    this.toggleButtonState = function() {
        const count = this.domRefs.inputField.value;
        this.domRefs.decrementButton.disabled = count <= minCount;
        this.domRefs.incrementButton.disabled = count >= maxCount;
    }

    this.toggleButtonState();

    this.increment = function() {
        this.domRefs.inputField.value = +this.domRefs.inputField.value +1;
        this.toggleButtonState();
    }

    this.decrement = function() {
        this.domRefs.inputField.value = +this.domRefs.inputField.value -1;
        this.toggleButtonState();
    }

    this.domRefs.incrementButton.addEventListener("click",this.increment.bind(this));
    this.domRefs.decrementButton.addEventListener("click",this.decrement.bind(this));
}



const counters = [];

quantityValue.forEach((item,i) => {
    counters[i] = new Counter (incrementButtons[i],decrementButtons[i],item)
})

//slick sliders

    $('.slider-block').slick( {
        autoplay:true,
        dots:true,
    });

