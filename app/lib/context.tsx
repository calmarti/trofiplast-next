"use client";

import React, { createContext, useEffect, useState, } from 'react';


export const ItemsContext = createContext(null);

export const ItemsProvider = ({children}) => {

  const [items, setItems] = useState([]); 

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  );
};








