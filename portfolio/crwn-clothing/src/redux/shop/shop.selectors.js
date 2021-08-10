
import { createSelector } from 'reselect';

const selectShop = state => state.shop;

const COLLECTION_ID_MAP = {
  hats:1,
  sneakers:2,
  jackets:3,
  womens:4,
  mens:5
}

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

// * this function is involved with getting our collection id so we can go to their correct pages aka a hats page or a jackets page forex.
  // * we are finding collection.id matching the url parameter of our collection id map
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections.find(collection => collection.id===COLLECTION_ID_MAP[collectionUrlParam])
    // collections => collections[collectionUrlParam]
  );