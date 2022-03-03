const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('requisito 1', async () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalled();
  })

  it('requisito 1', async () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  })

});
