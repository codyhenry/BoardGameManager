import { collections } from "../mock/collections.mock";

export const collectionRequest = (/*searchTerm*/) => {
  return new Promise((resolve, reject) => {
    const collectionMock = collections; /*[searchTerm]*/
    if (!collectionMock) {
      reject("not found");
    }
    resolve(collectionMock);
  });
};
