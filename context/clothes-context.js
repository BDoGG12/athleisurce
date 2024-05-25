import {createContext, useState, useContext} from 'react';
import React from 'react';

export const ClothesContext = createContext();

export const ClothesProvider = ({children}) => {
  const [shirts, setShirts] = useState();

  const [pants, setPants] = useState();

  const [productDetail, setProductDetail] = useState();

  const [searchResults, setSearchResults] = useState([]);

  const [signUpUser, setSignUpUser] = useState({});

  const [logInUser, setLogInUser] = useState({});

  const [sessions, setSessions] = useState();

  return (
    <ClothesContext.Provider value={{shirts, setShirts, pants, setPants, productDetail, setProductDetail, searchResults, setSearchResults, signUpUser, setSignUpUser, logInUser, setLogInUser, sessions, setSessions}}>
      {children}
    </ClothesContext.Provider>
  );
};

export const useClothesContext = () => {
  return useContext(ClothesContext);
};