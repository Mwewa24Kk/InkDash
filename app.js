const priceTable = {
  bw: 1.5,
  color: 3.5,
  binding: 10,
  delivery: 15
};

const formatCurrency = (value) => `K ${value.toFixed(2)}`;

const updateSummary = () => {
  const pages = Number(document.querySelector('[name="pages"]').value || 0);
  const copies = Number(document.querySelector('[name="copies"]').value || 1);
  const color = document.querySelector('[name="color"]').value;
  const binding = document.querySelector('[name="binding"]').checked;
  const delivery = document.querySelector('[name="delivery"]').checked;

  const perPage = priceTable[color] || 0;
  const subtotal = pages * copies * perPage;
  const bindFee = binding ? priceTable.binding : 0;
  const deliveryFee = delivery ? priceTable.delivery : 0;
  const total = subtotal + bindFee + deliveryFee;

  document.querySelector('[data-summary="pages"]').textContent = `${pages} pages x ${copies} copies`;
  document.querySelector('[data-summary="color"]').textContent = color === 'color' ? 'Color print' : 'Black & white';
  document.querySelector('[data-summary="subtotal"]').textContent = formatCurrency(subtotal);
  document.querySelector('[data-summary="binding"]').textContent = binding ? formatCurrency(bindFee) : 'No binding';
  document.querySelector('[data-summary="delivery"]').textContent = delivery ? formatCurrency(deliveryFee) : 'Pick-up';
  document.querySelector('[data-summary="total"]').textContent = formatCurrency(total);
};

const orderForm = document.querySelector('[data-order-form]');
if (orderForm) {
  orderForm.addEventListener('input', updateSummary);
  updateSummary();
}
