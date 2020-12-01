const url = 'https://jsonplaceholder.typicode.com/users/1'

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    renderInfo() {
      const myInfo = document.createElement('div')

      this.products.forEach((items) => {
        const p = document.createElement('p')
        p.textContent = this.name
        p.textContent = this.price
        myInfo.appendChild(p)
      })
        return myInfo
    }

    convertToCurrency(currency) {
      return fetch('http://data.fixer.io/api/latest?access_key=25e524a669334b226a450e77c8dd3ef8')
        .then(res => res.json())
        .then(result => {
          const rate = result.rates[currency]
          return rate * this.price
        })
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
      this.products.push(product)
    }

    removeProduct(product) {
      const newProduct = this.products.filter((existingProduct) => {
          return existingProduct.name !== product.name
        })
    }

    searchProduct(productName) {
      const findItems = this.products.indexOf(productName)
    }

    getTotal() {
      const totalPrice = this.products.map((p) => p.price).reduce((acc, cur) => (acc += cur), 0)
      // const totalPrice = this.products.reduce(function(prev, cur) {
      //   return prev + cur
      // }, 0)
    }

    renderProducts() {
      const myProducts = document.createElement('div')

      this.products.forEach((items) => {
        const p = document.createElement('p')
        p.textContent = items.name
        p.textContent = items.price
        myProducts.appendChild(p)
      })
        return myProducts
    }

    getUser() {
        fetch(url)
          .then(res => res.json())
          .then(result => {
            console.log(result)
            const username = result.username
            const user = username.map((m) => {
              return document.createElement('h2'). innerHTML = m
            })
          })
    }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product('flat-screen', 5000);
shoppingCart.addProduct(flatscreen);

const iPhone = new Product('iPhone', 2000);
shoppingCart.addProduct(iPhone);

console.log(shoppingCart)

shoppingCart.removeProduct(flatscreen)
console.log(shoppingCart)

const outputProduct = shoppingCart.renderProducts()
document.querySelector('body').appendChild(outputProduct)
console.log(outputProduct)

// const outputInfo = Product.renderInfo()
// document.querySelector('body').appendChild(outputInfo)
// console.log(outputInfo)

const plant = new Product('plant', 50);
console.log(plant.convertToCurrency('dollars'))

ShoppingCart.getUser()
ShoppingCart.renderProducts()
