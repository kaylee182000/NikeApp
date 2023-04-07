export const numberWithCommas = (x: number) => {
  if (!x) {
    return x;
  }
  return x
    .toLocaleString('en-US', {minimumFractionDigits: 2})
    .replace('.', ',');
};
