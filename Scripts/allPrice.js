
constproducts = [
  { name: "Ноутбук", price: 1000, quantity: 5 },
  { name: "Телефон", price: 500, quantity: 10 },
  { name: "Планшет", price: 300, quantity: 8 }
];
function getTotalValue(card) {
  let value
  let totalValue = 0
  for (let i = 0; i < card.length; i++) {
    value = card[i].price * card[i].quantity
    totalValue = totalValue + value
  }
  return totalValue
}
console.log(`Сумма всех товаров: ${getTotalValue(constproducts)}`)