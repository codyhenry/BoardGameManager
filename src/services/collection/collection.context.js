import React, { useState, useEffect, createContext } from "react";

import { collectionRequest } from "./collection.service";

export const CollectionContext = createContext();

export const CollectionContextProvider = ({ children }) => {
  const [collections, setCollections] = useState(null);
  //const [keyword, setKeyword] = useState("San Francisco");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /* const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };*/
  /*
  useEffect(() => {
    if (!keyword || keyword.trim().length === 0) {
      return;
    }
    collectionRequest(keyword.toLowerCase())
      .then(collectionTransform)
      .then((result) => {
        setIsLoading(false);
        setCollection(result);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [keyword]);*/

  retriveCollection = () => {
    setIsLoading(true);
    setTimeout(() => {
      collectionRequest()
        .then((result) => {
          setIsLoading(false);
          setCollections(result);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
        });
    }, 2000);
  };

  useEffect(() => {
    retriveCollection();
  }, []);

  return (
    <CollectionContext.Provider
      value={{
        collections,
        isLoading,
        error,
        /*search: onSearch,
        keyword,*/
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};
