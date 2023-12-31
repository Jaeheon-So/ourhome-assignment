import { recoilPersist } from "recoil-persist";
import { atom, selector } from "recoil";
import { getDiscountPrice } from "../util/calculate";
import { ProductCardItem } from "../data/data";

export interface CartItemType extends ProductCardItem {
  count: number;
}

const { persistAtom } = recoilPersist({
  key: "cartList-persist",
  storage: localStorage,
});

export const cartState = atom<CartItemType[]>({
  key: "cart",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const totalPriceState = selector({
  key: "totalPrice",
  get: ({ get }) =>
    get(cartState)
      .map(
        (item) => item.count * getDiscountPrice(item.price, item.discountRate)
      )
      .reduce((prev, current) => prev + current, 0),
});

export const deliveryFeeState = selector({
  key: "deliveryFee",
  get: ({ get }) => (get(totalPriceState) >= 30000 ? 0 : 3000),
});
