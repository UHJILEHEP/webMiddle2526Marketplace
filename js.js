// https://i.pinimg.com/736x/35/c2/e7/35c2e7f316f886e0410c294077223745.jpg

let productsGrid = document.getElementById('productsGrid')
let productsCart = document.getElementById('cartProducts')
let productsArray = []
let cart = []
let url = 'https://my-json-server.typicode.com/morolo223/Lesson11/db'

fetch(url)
.then(async function(response){
    let products = await response.json()
    console.log(products.products)
    productsGrid.innerHTML = ``

    products.products.forEach(product => {
        // console.log()
        productsArray.push(product)
        productsGrid.innerHTML += 
            `
                <div class="product">
                    <h2>${product.title}</h2>
                    <img src="${product.img}" alt="product image">
                    <p>${product.price}</p>
                    <p>${product.description}</p>
                    <a href="#">link</a>
                    <button onclick='addProductToCard()'>Buy</button>
                </div>
            `
    });
})

function openCart(){
    console.log('openCart')
    productsCart.classList.toggle('hide')
}

function addProductToCard(id){
    let product = productsArray.find((p)=>{return p.id == id})
    cart.push(product)
    console.log(cart)
}