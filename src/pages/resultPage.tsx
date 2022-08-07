import React from "react";
import { useContextValue } from "../core/DataProvider";

export const ResultPage = () => {
  const { searchTerm } = useContextValue();
  return <div>{searchTerm}</div>;
};
