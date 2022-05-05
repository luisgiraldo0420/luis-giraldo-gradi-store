fetch('https://orders-customer.herokuapp.com/orders-finish')
      .then(response => response.json())
      .then(DataOrderFinish => console.log(DataOrderFinish))
      .catch(error => console.log('Error', error))