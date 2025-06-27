export const formatMoney = (amount) =>
  amount.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' });
