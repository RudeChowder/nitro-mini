const products = [
  {
    productName: "Windows",
    cost: 100
  },
  {
    productName: "Doors",
    cost: 200
  },
  {
    productName: "Roofing",
    cost: 400
  }
]

const productSummaryAsAnArray = () => {
  return products.map( product => `${product.productName}: ${product.cost}$` )
}

const productSummaryAsAString = () => {
  return products.map( product => `${product.productName}: ${product.cost}$` ).join(", ")
}

const expensiveProducts = () => {
  return products.filter( product => product.cost > 150)
}

const productEstimate = (productName, productQuantity) => {
  const matchingProduct = products.find( product => product.productName === productName)
  return matchingProduct.cost * productQuantity
}

const totalProjectEstimate = (numberOfWindows, numberOfDoors, numberOfRoofing) => {
  let total = 0
  total += products[0].cost * numberOfWindows
  total += products[1].cost * numberOfDoors
  total += products[2].cost * numberOfRoofing
  return total
}

productSummaryAsAnArray()