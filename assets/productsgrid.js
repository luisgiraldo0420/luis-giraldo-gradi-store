let products={
    id:undefined,
    quantity:1,
};
const updateProduct=(variant)=>{
    let disponible = variant.getAttribute("disponible");
    disponible ? products.id=variant.id : alert('Ups... al parecer esta referencia no tiene stock disponible')
}
const updateQuantity=(quantity)=>{
    products.quantity=quantity;
}
const addToCart= (button) => {
    const quantity=document.getElementById(`quantity__input-${button.id}`)
    updateQuantity(quantity.value);

    if(products.id !== undefined){
       
        fetch(window.Shopify.routes.root + 'cart/add.js', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(products)
        })
        .then(response => {
            return response.json();
        })
        .catch((error) => {
            console.error('Error:', error);
        })
        .finally(() => {
            products={
                id:undefined,
                quantity:1,
            };
            window.top.location.href = "/cart"
        });
    }else {
       alert('Ups... al parecer no has elegido un color')
    }
}
const buttonsAdd=document.getElementsByClassName('button_productgrid')
    for(button of buttonsAdd){
        button.addEventListener('click', addToCart)
    }
let inputs = document.getElementsByClassName("input_productgrid")
for(item of inputs) {
    item.addEventListener("mouseover", function(e) {
        let image = e.target.getAttribute("image_hover")
        let imageProduct = document.getElementById(e.target.getAttribute("idImageProd"))
        imageProduct.setAttribute("src", image)
    })
    item.addEventListener("mouseout", function(e) {
        let imageProduct = document.getElementById(e.target.getAttribute("idImageProd"))
        let image = imageProduct.getAttribute("defaultImage")
        imageProduct.setAttribute("src", image)
    })
    item.addEventListener("click", function(e) {
        let image = e.target.getAttribute("image_hover")
        let imageProduct = document.getElementById(e.target.getAttribute("idImageProd"))
        imageProduct.setAttribute("src", image)
        imageProduct.setAttribute("defaultImage", image)
    })
}