import React, { useContext } from "react";
import { useState } from "react";
import { useReducer } from "react";
import { createContext, ReactNode } from "react";

interface InitialValueProps {
  searchTerm?: string;
  setSearchTerm?: (value: string) => void;
}

const initialValue: InitialValueProps = {
  searchTerm: undefined,
  setSearchTerm: undefined,
};

const DataContext = createContext(initialValue);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <DataContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </DataContext.Provider>
  );
};

export const useContextValue = () => useContext(DataContext);
