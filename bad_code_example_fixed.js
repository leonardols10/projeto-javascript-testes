const DEFAULT_TAX_RATE = 0.2;
const DEFAULT_DISCOUNT = 15;

function validateItems(items) {
  if (!Array.isArray(items)) {
    throw new TypeError('items deve ser um array de números');
  }

  return items.map((item) => {
    if (typeof item !== 'number' || !Number.isFinite(item) || item < 0) {
      throw new TypeError('Cada item deve ser um número finito e não-negativo');
    }
    return item;
  });
}

function calculateOrderTotal(items, options = {}) {
  const validItems = validateItems(items);
  const subtotal = validItems.reduce((sum, value) => sum + value, 0);
  const taxRate = typeof options.taxRate === 'number' ? options.taxRate : DEFAULT_TAX_RATE;
  const discountValue = options.applyDiscount ? DEFAULT_DISCOUNT : 0;

  const tax = Number((subtotal * taxRate).toFixed(2));
  const total = Math.max(0, Number((subtotal + tax - discountValue).toFixed(2)));

  return {
    subtotal,
    tax,
    discount: discountValue,
    total
  };
}

function formatOrderTotal(items, options = {}) {
  const result = calculateOrderTotal(items, options);
  return `Total: R$ ${result.total.toFixed(2)}`;
}

module.exports = {
  calculateOrderTotal,
  formatOrderTotal
};
