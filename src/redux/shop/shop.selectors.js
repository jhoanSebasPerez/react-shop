import { createSelector } from "reselect";
import { memoize } from "lodash.memoize";

const COLLECTION_TO_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.shopData
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectShopData], (shopData) =>
    shopData.find((item) => COLLECTION_TO_MAP[collectionUrlParam] === item.id)
  )
);
