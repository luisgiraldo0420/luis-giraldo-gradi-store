

  const enviar = (id) =>{
    console.log('llega');
  let formData = {
   'items': [{
    'id': id,
    'quantity': 2
    }]
  };
  fetch(window.Shopify.routes.root + 'cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    return response.json();
  })
  .catch((error) => {
    console.error('Error:', error);
  })
  .finally(()=>{
    window.document.location.href = "https://luis-giraldo-gradi-store.myshopify.com/cart"
  })
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
              imageProduct.setAttribute("src", image);
              imageProduct.setAttribute("defaultImage", image);
          })
      }
  