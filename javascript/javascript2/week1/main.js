const testProductNames = window.getAvailableProducts();
//const testProductNames = ['Flat screen', 'Mobile phone', 'Wallet'];
const products = document.querySelector('.products');
console.log(testProductNames);
const ul = document.createElement('ul');
console.log(ul);
products.appendChild(ul);

function renderProducts(products) {
  for(let i = 0; i < products.length; i++) {
  const li = document.createElement('li');
  const ulInside = document.createElement('ul');
  ul.appendChild(li);
  li.appendChild(ulInside);
  const liInside = document.createElement('li');
  liInside.innerHTML = products[i].name;
  ulInside.appendChild(liInside);
    //li.innerHTML = products[i].name;
    //li.innerHTML += ' | ' + products[i].id
    //li.innerHTML += ' | ' + products[i].price
    //li.innerHTML += ' | ' + products[i].rating
    //li.innerHTML += ' | ' + products[i].shipsTo
    ul.appendChild(li);
}
};
let a = renderProducts(testProductNames); //testProductNames becomes products

/* this is not necessary
function getProductNames() {
  let pushedProducts = [];
  let b = window.getAvailableProducts();
  console.log(b);
  for(let i = 0; i < b.length; i++){
    pushedProducts.push(b[i].name);
  }
  //console.log(pushedProducts);
  return pushedProducts;
};
*/

//console.log(c);
//console.log(getAvailableProducts());
//console.log('Script loaded');
