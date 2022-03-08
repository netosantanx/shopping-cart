const fetchItem = async (item) => {
  const returnItems = await fetch(`https://api.mercadolibre.com/items/${item}`)
  .then((element) => element.json())
  .catch(() => 'You must provide an url');

  return returnItems;
};
console.log(fetchItem('MLB1341706310'));
if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
