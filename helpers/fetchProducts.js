const fetchProducts = async (query) => {
    const resultado = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
    .then((element) => element.json())
    .then((data) => data.results)
    .catch(() => 'You must provide an url');

    return resultado;  
 };

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
