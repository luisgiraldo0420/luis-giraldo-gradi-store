

function getOrders(){
      const orders = document.querySelector('.orders_banner')
      fetch('https://orders-customer.herokuapp.com/orders-finish')
      .then(response => response.json())
      .then(DataOrderFinish =>{
            orders.innerHTML = DataOrderFinish.orders.length
      })
      .catch(error => console.log('Error', error))
}
function getCustomers(){
      const customers = document.querySelector('.customers_banner')
      fetch('https://orders-customer.herokuapp.com/customers')
      .then(response => response.json())
      .then(DataOrderFinish =>{
            customers.innerHTML = DataOrderFinish.customers.length
      })
      .catch(error => console.log('Error', error))
}

getOrders();
getCustomers();