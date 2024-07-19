// src/context/MyContext.js
import React, { createContext, useState, useEffect } from 'react';

const TableContext = createContext();

const TableProvider = ({ children }) => {
  const [tableValues, setTableValues] = useState([-1,-1,-1,-1,-1,-1,-1,-1,-1]);
  
  return (
    <TableContext.Provider value={{ tableValues, setTableValues }}>
      {children}
    </TableContext.Provider>
  );
};

export { TableContext, TableProvider };