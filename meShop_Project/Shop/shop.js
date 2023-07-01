const home =document.querySelector('.home');
const logout =document.querySelector('.logout');
const signup =document.querySelector('.signup');
const mycart =document.querySelector('.myCart');
const profile =document.querySelector('.profile');

// add events on variables
home.addEventListener('click',() => {
    window.location.href = "./index.html";
})
logout.addEventListener('click',() => {
    localStorage.removeItem('currentuser');
    window.location.href = "../Login/login.html";
})
mycart.addEventListener('click',() => {
    window.location.herf = "../Mycart/mycart.html";
})
profile.addEventListener('click',() => {
    window.location.herf = "../Profile/profile.html";
})

const search = document.querySelector('.search-input');

const mencardwrapper = document.querySelector('.men-card-wrapper');
const womencardwrapper = document.querySelector('.women-card-wrapper');
const jewellerycardwrapper = document.querySelector('.jewellery-card-wrapper');
const electronicscardwrapper = document.querySelector('.electronics-card-wrapper');
const myrating =document.querySelector('#myRange');
let myValue = myrating.value;

let addCart = [];
let addcaetArray = [];

const myData = [];

localStorage.getItem('mycart') ? addcaetArray = JSON.parse(localStorage.getItem('mycart')) : [];
fetch('https://fakestoreapi.com/products')
.then(resolve => resolve.json())
.then(data => {
    data.map(product => {
        myData.push(product.title);
        if(product.category === "men's clothing") {
            mencardwrapper.innerHTML +=`
            <div class="card">
        <img class="image-top" src=${product.image} alt="${product.title}">
        <div class="card-body">
             <h5 class="card-title">${product.title}</h5> 
             <div class="price-size">
            <p class="card-text">&#36;<span class="card-price">${product.price}</span></p>
            <p class="card-color">${product.color}</p>
            </div>
            <p class="card-rating">${Math.round(product.rating.rate)} &#9733;</p>   
        </div>
        <button class='addCart'>Add to cart</button>
    </div>`;
        }
        if(product.category === "women's clothing") {
            mencardwrapper.innerHTML +=`
            <div class="card">
        <img class="image-top" src=${product.image} alt="${product.title}">
        <div class="card-body">
             <h5 class="card-title">${product.title}</h5> 
             <div class="price-size">
            <p class="card-text">&#36;<span class="card-price">${product.price}</span></p>
            <p class="card-color">${product.color}</p>
            </div>
            <p class="card-rating">${Math.round(product.rating.rate)} &#9733;</p>   
        </div>
        <button class='addCart'>Add to cart</button>
    </div>`;
        }
        if(product.category === "jewelery") {
            mencardwrapper.innerHTML +=`
            <div class="card">
        <img class="image-top" src=${product.image} alt="${product.title}">
        <div class="card-body">
             <h5 class="card-title">${product.title}</h5> 
             <div class="price-size">
            <p class="card-text">&#36;<span class="card-price">${product.price}</span></p>
            <p class="card-color">${product.color}</p>
            </div>
            <p class="card-rating">${Math.round(product.rating.rate)} &#9733;</p>   
        </div>
        <button class='addCart'>Add to cart</button>
    </div>`;
        }
        if(product.category === "electronics") {
            mencardwrapper.innerHTML +=`
            <div class="card">
        <img class="image-top" src=${product.image} alt="${product.title}">
        <div class="card-body">
             <h5 class="card-title">${product.title}</h5> 
             <div class="price-size">
            <p class="card-text">&#36;<span class="card-price">${product.price}</span></p>
            <p class="card-color">${product.color}</p>
            </div>
            <p class="card-rating">${Math.round(product.rating.rate)} &#9733;</p>   
        </div>
        <button class='addCart'>Add to cart</button>
    </div>`;
        }
    })

    //filter based on color



    // filtering based on cost
        const checkBoxZero = document.querySelector('#checkbox0');
        const checkBoxOne = document.querySelector('#checkbox25');
        const checkBoxTwo = document.querySelector('#checkbox50');
        const checkBoxThree = document.querySelector('#checkbox100');
        // checkBoxZero.checked = false;
        checkBoxZero.addEventListener('click', () => {
            if (checkBoxZero.checked == false) {
                checkBoxZero.checked = false;
                let userCard;
                document.querySelectorAll('.card') ? userCard = document.querySelectorAll('.card') : userCard = "";
                userCard.forEach(function (elem) {
                    let cardElem = parseInt(elem.querySelector('.card-price').innerText);
                    elem.classList.remove('hide');
                })
            }
            else {
                checkBoxZero.checked = true;
                checkBoxOne.checked = false;
                checkBoxTwo.checked = false;
                checkBoxThree.checked = false;
                let userCard = "";
                document.querySelectorAll('.card') ? userCard = document.querySelectorAll('.card') : userCard = "";
                userCard.forEach(function (elem) {
                    let cardElemPrice = parseInt(elem.querySelector('.card-price').innerText);
                    elem.classList.add('hide');
                    if (cardElemPrice >= 0 && cardElemPrice <= 25) {
                        elem.classList.remove('hide');
                    }
                })
            }

        })
        checkBoxOne.addEventListener('click', () => {
            if (checkBoxOne.checked == false) {
                checkBoxOne.checked = false;
                let userCard = "";
                document.querySelectorAll('.card') ? userCard = document.querySelectorAll('.card') : userCard = "";
                userCard.forEach(function (elem) {
                    let cardElem = parseInt(elem.querySelector('.card-price').innerText);
                    elem.classList.remove('hide');
                })
            }
            else {
                checkBoxZero.checked = false;
                checkBoxOne.checked = true;
                checkBoxTwo.checked = false;
                checkBoxThree.checked = false;
                let userCard = "";
                document.querySelectorAll('.card') ? userCard = document.querySelectorAll('.card') : userCard = "";
                userCard.forEach(function (elem) {
                    let cardElemPrice = parseInt(elem.querySelector('.card-price').innerText);
                    elem.classList.add('hide');
                    if (cardElemPrice >= 25 && cardElemPrice <= 50) {
                        elem.classList.remove('hide');
                    }
                })
            }

        })
        checkBoxTwo.addEventListener('click', () => {
            if (checkBoxTwo.checked == false) {
                checkBoxTwo.checked = false;
                let userCard = "";
                document.querySelectorAll('.card') ? userCard = document.querySelectorAll('.card') : userCard = "";
                userCard.forEach(function (elem) {
                    let cardElem = parseInt(elem.querySelector('.card-price').innerText);
                    elem.classList.remove('hide');
                })
            }
            else {
                checkBoxZero.checked = false;
                checkBoxOne.checked = false;
                checkBoxTwo.checked = true;
                checkBoxThree.checked = false;
                let userCard = "";
                document.querySelectorAll('.card') ? userCard = document.querySelectorAll('.card') : userCard = "";
                userCard.forEach(function (elem) {
                    let cardElemPrice = parseInt(elem.querySelector('.card-price').innerText);
                    elem.classList.add('hide');
                    if (cardElemPrice >= 50 && cardElemPrice <= 100) {
                        elem.classList.remove('hide');
                    }
                })
            }

        })
        checkBoxThree.addEventListener('click', () => {
            if (checkBoxThree.checked == false) {
                checkBoxThree.checked = false;
                let userCard = "";
                document.querySelectorAll('.card') ? userCard = document.querySelectorAll('.card') : userCard = "";
                userCard.forEach(function (elem) {
                    let cardElem = parseInt(elem.querySelector('.card-price').innerText);
                    elem.classList.remove('hide');
                })
            }
            else {
                checkBoxZero.checked = false;
                checkBoxOne.checked = false;
                checkBoxTwo.checked = false;
                checkBoxThree.checked = true;
                let userCard = "";
                document.querySelectorAll('.card') ? userCard = document.querySelectorAll('.card') : userCard = "";
                userCard.forEach(function (elem) {
                    let cardElemPrice = parseInt(elem.querySelector('.card-price').innerText);
                    elem.classList.add('hide');
                    if (cardElemPrice >= 100) {
                        elem.classList.remove('hide');
                    }
                })
            }
        })

        // Filter based on string typed in search box
        const search = document.querySelector('.input-search');
        const searchButton = document.querySelector('.btn-search');

        search.addEventListener('input', (e) => {

            const inputSearch = search.value.toLowerCase();
            let userCard = "";
            document.querySelectorAll('.card') ? userCard = document.querySelectorAll('.card') : userCard = "";
            userCard.forEach(function (elem) {
                elem.classList.add('hide');
                let cardElemTitle = elem.querySelector('.card-title').innerText.toLowerCase();
                if (cardElemTitle.includes(inputSearch)) {
                    elem.classList.remove('hide');
                }
            })
        })

        addCart = document.querySelectorAll('.addCart');
        let count = 0;
        let idCount = 0;
        addCart.forEach((elem) => {

            elem.setAttribute('id', count++);
            elem.addEventListener("click", function () {
                let x = document.getElementById("snackbar");
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 1500);
                const myProd = {
                    id: idCount++,
                    img: data[elem.id].image,
                    title: data[elem.id].title,
                    price: data[elem.id].price,
                }
                addCartArr.push(myProd);
                localStorage.setItem('myCart', JSON.stringify(addCartArr))
            });
        });

        const allProd = document.getElementById('all');
        const menProd = document.getElementById('mens');
        const womenProd = document.getElementById('womens');
        const jewelleryProd = document.getElementById('jewellery');
        const electronicsProd = document.getElementById('electronics');
        const menCard = document.querySelector('.mens-clothing');
        const womenCard = document.querySelector('.womens-clothing');
        const jewelleryCard = document.querySelector('.jewellery');
        const electronicsCard = document.querySelector('.electronics');
        const categories = document.querySelectorAll('.selectCategories');
        const clothings = document.querySelectorAll('.clothings');

        allProd.addEventListener('click', () => {
            categories.forEach(function (elem) {
                elem.style.color = '#162938';
                elem.style.backgroundColor = '#f0e6e6';
            })
            clothings.forEach(function (elem) {
                elem.classList.remove('hide');
            })
            allProd.style.color = '#fff';
            allProd.style.backgroundColor = '#000';
        })

        menProd.addEventListener('click', () => {
            categories.forEach(function (elem) {
                elem.style.color = '#162938';
                elem.style.backgroundColor = '#f0e6e6';
            })
            clothings.forEach(function (elem) {
                elem.classList.add('hide');
            })
            menCard.classList.remove('hide');
            menProd.style.color = '#fff';
            menProd.style.backgroundColor = '#000';
        })

        womenProd.addEventListener('click', () => {
            categories.forEach(function (elem) {
                elem.style.color = '#162938';
                elem.style.backgroundColor = '#f0e6e6';
            })
            clothings.forEach(function (elem) {
                elem.classList.add('hide')
            })
            womenCard.classList.remove('hide');
            womenProd.style.color = '#fff';
            womenProd.style.backgroundColor = '#000';
        })

        jewelleryProd.addEventListener('click', () => {
            categories.forEach(function (elem) {
                elem.style.color = '#162938';
                elem.style.backgroundColor = '#f0e6e6';
            })
            clothings.forEach(function (elem) {
                elem.classList.add('hide')
            })
            jewelleryCard.classList.remove('hide');
            jewelleryProd.style.color = '#fff';
            jewelleryProd.style.backgroundColor = '#000';
        })

        electronicsProd.addEventListener('click', () => {
            categories.forEach(function (elem) {
                elem.style.color = '#162938';
                elem.style.backgroundColor = '#f0e6e6';
            })
            clothings.forEach(function (elem) {
                elem.classList.add('hide')
            })
            electronicsCard.classList.remove('hide');
            electronicsProd.style.color = '#fff';
            electronicsProd.style.backgroundColor = '#000';
        })
 
})