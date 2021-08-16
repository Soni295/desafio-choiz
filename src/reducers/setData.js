const setPrice = price => {
  const allPrice = Math.round(price+'e2').toString()
  return `$ ${allPrice.slice(0, -2)},${allPrice.slice(-2)}`
}

const setItem = ({brand, laboratory, price}) => ({
  brand: brand.toUpperCase(),
  laboratory,
  price: setPrice(price)
})

export const setDataPrice = payload => {
  const Categories = Object.keys(payload)
  return Categories.reduce((acc, cur) => {

    const category = payload[cur]
    let listOfItems = []

    for(let item of category){
      listOfItems.push(setItem(item))
    }

    return {...acc, [cur]: listOfItems}
  }, {})
}
