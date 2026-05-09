var config = { tax: 0.2, discount: 15 }
var globalSum = 0
var temp = 0

function calculateTotal(items, discountEnabled) {
  for (i = 0; i < items.length; i++) {
    globalSum = globalSum + items[i]
  }

  var total = globalSum + globalSum * config.tax

  if (discountEnabled == "yes") {
    total = total - config.discount
  }

  if (total < 0) {
    total = 0
  }

  return "Total: " + total
}

function run() {
  temp = temp + 1
  if (temp > 0) {
    return calculateTotal([100, 200, 300], true)
  }
  return calculateTotal([1,2], false)
}

exports.calculateTotal = calculateTotal
exports.run = run
