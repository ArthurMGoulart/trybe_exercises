const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const unifyProductPrice = (products, prices) => {
  const unified = products.map((product, index) => {
    return {
      [product]: prices[index]
    }
  })
  return unified;
}
console.log(unifyProductPrice(products, prices));