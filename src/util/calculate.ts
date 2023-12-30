export const getDiscountPrice = (price: number, discountRate: number) => {
  return 10 * Math.floor((price * (100 - discountRate)) / 1000);
};
