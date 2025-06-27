export const formatMoney = (amount) =>
  amount.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' });

export const capitalize = (str) =>
  str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');