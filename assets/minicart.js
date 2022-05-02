function minicartHiddenShow() {
    updatePriceMinicart();
    updateTotalPriceMinicart();
    window.scroll(0, 0);
    let x = document.getElementById("minicartHiddenShow");
    let y = document.getElementById("container_content");

    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.opacity = 0.5;
        y.style.pointerEvents = "none";
    } else {
        x.style.display = "none";
        y.style.opacity = 1;
        y.style.pointerEvents = "all";
    }
}

const updateQuantityProduct  = async (button) =>{
const operation = button.getAttribute('name')
const referenceToInput = button.getAttribute('referenceInput')
const variantId = button.getAttribute('variant')
const quantityInput = document.getElementById(referenceToInput)
switch (operation){
    case 'plus':
        await updateProductMinicart(variantId, parseInt(quantityInput.value) + 1)
        break;
    case 'minus':
        await updateProductMinicart(variantId, parseInt(quantityInput.value) - 1)
        break;
}
await updatePriceMinicart()
await updateTotalPriceMinicart()
}
const updateProductMinicart = async (productId, quantity) =>{
let updates = {
    [productId]:quantity,
}
await fetch(window.Shopify.routes.root + 'cart/update.js', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({updates:updates})
})
.then(response =>{
    return response.json()
})
.catch(error =>{
    console.log('Error:', error);
})

}
getSection = async section => {
    return await fetch(`/?sections=${section}`)  
}
const updatePriceMinicart = () =>{
    const productsMinicart = document.getElementById('products_my_car')
    const productMinicartUpdate = this.getSection('products-minicart')
    productMinicartUpdate
    .then(response => response.json())
    .then(data =>productsMinicart.innerHTML = data['products-minicart'])
} 
const updateTotalPriceMinicart = () =>{
    const summaryMinicart = document.getElementById('total-price-minicart')
    const summaryMinicartUpdate = this.getSection('total-price-minicart')
    summaryMinicartUpdate
    .then(response => response.json()
    .then(data => summaryMinicart.innerHTML = data['total-price-minicart']))
}