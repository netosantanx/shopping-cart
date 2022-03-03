const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  it('Requisito 1', async () => {
    saveCartItems('<ol><li>Item</li></ol');
    expect(localStorage.setItem).toHaveBeenCalled();
  })

  it('Requisito 2', async () => {
    saveCartItems('<ol><li>Item</li></ol');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol');
  })
});
