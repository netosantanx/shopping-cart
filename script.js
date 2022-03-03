const items = document.getElementsByClassName('items')[0];
const cartItems = document.getElementsByClassName('cart__items')[0];
const contaPreco = document.getElementsByClassName('total-price')[0];
const cleanButton = document.getElementsByClassName('empty-cart')[0];

items.innerHTML = '<span class="loading">Carregando</span>';

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
  .id = sku;

  items.appendChild(section);
  return section;
}

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.id = sku;
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  cartItems.appendChild(li);
  return li;
}

const apiResults = async () => {
  const dataResults = await fetchProducts('computador');
  items.innerHTML = '';
  dataResults.forEach((element) => createProductItemElement({ sku: element.id, 
    name: element.title, 
    image: element.thumbnail }));

  return dataResults;
};

cleanButton.addEventListener('click', () => {
  cartItems.innerHTML = '';
  saveCartItems(cartItems.innerHTML);
});
let contador = 0;
window.onclick = async (event) => {
  if (event.target.className === 'item__add') {
   const result = await fetchItem(event.target.id);
   createCartItemElement({ sku: event.target.id, name: result.title, salePrice: result.price });
   saveCartItems(cartItems.innerHTML);
   contador += result.price;
   contaPreco.innerText = `${contador}`;
  }
  if (event.target.className === 'cart__item') {
    event.target.remove();
    saveCartItems(cartItems.innerHTML);
    const result = await fetchItem(event.target.id);
    contador -= result.price;
    contaPreco.innerText = `${contador}`;
  }
};

window.onload = async () => { 
  await apiResults();
  cartItems.innerHTML = getSavedCartItems();
};
