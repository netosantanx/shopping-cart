require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
 
  it('requisito 1', async () => {
    expect(typeof fetchItem).toBe('function');
  })

  it('requisito 2', async () => {
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled()
  })

  it('requisito 3', async () => {
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527')
  })

  it('requisito 4', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item)
  })

  it('requisito 5', async () => {
    expect.assertions(1);
    try {
      fetchItem()
    } catch (error) {
      expect(error).toBe('You must provide and url')
    }
  })

});
