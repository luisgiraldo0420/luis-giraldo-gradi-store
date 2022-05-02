function minicartHiddenShow() {
    updatePriceMinicart();
    updateTotalPriceMinicart();
    window.scroll(0, 0);
    let x = document.getElementById("minicartHiddenShow");
    let y = document.getElementById("container_content");
        console.log(x.style.display);
     if (x.style.display == "block") { 
        x.style.display = "none";
        y.style.opacity = 1;
        y.style.pointerEvents = "all";
    } else {
        x.style.display = "block";
        y.style.opacity = 0.5;
        y.style.pointerEvents = "none";
    } 
}

const updateQuantityProduct  = async (button) =>{
    //nombre del boton presionado
    const operation = button.getAttribute('name')

    const referenceToInput = button.getAttribute('referenceInput')

    // id de la variante a actualizar
    const variantId = button.getAttribute('variant')
    const quantityInput = document.getElementById(referenceToInput)
    switch (operation){
        case 'plus':
            //Si presiona el bton + sumamos 1 y pasamos los parametros para actualizar 
            await updateProductMinicart(variantId, parseInt(quantityInput.value) + 1)
            break;
        case 'minus':
            //Si presiona el bton - restamos 1 y pasamos los parametros para actualizar
            await updateProductMinicart(variantId, parseInt(quantityInput.value) - 1)
            break;
    }
    //llamamos las secciones a actualizar
    await updatePriceMinicart()
    await updateTotalPriceMinicart()
    await updateCartBubble();
}
const updateProductMinicart = async (productId, quantity) =>{
    //actualizamos el objeto updates 
let updates = {
    [productId]:quantity,
}
//ejecutamos la peticion y mandamos el objeto
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
// ejecutamos la peticion y traemos las secciones a actualizar 
getSection = async section => {
    return await fetch(`/?sections=${section}`)  
}
const updatePriceMinicart = () =>{
    //solicitamos el id de la seccion
    const productsMinicart = document.getElementById('products_my_car')
    //enviamos la seccion a a la peticion  
    const productMinicartUpdate = this.getSection('products-minicart')
    productMinicartUpdate
    //manipulamos la respuesta
    .then(response => response.json())
    //renderizamos la data que nos devolvio
    .then(data =>productsMinicart.innerHTML = data['products-minicart'])
} 
const updateTotalPriceMinicart = () =>{
    const summaryMinicart = document.getElementById('total-price-minicart')
    const summaryMinicartUpdate = this.getSection('total-price-minicart')
    summaryMinicartUpdate
    .then(response => response.json()
    .then(data => summaryMinicart.innerHTML = data['total-price-minicart']))
}
const updateCartBubble = () =>{
    const cartBubble = document.getElementById('cart-icon-bubble')
    const cartBubbleUpdate = this.getSection('cart-bubble')
    cartBubbleUpdate
    .then(response => response.json()
    .then(data => cartBubble.innerHTML = data['cart-bubble']))
}