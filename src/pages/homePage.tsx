import React from "react";
import { Navbar } from "../components/navbar";
import { HomeBody } from "../components/homeBody";

export const HomePage = () => {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Navbar />
      <HomeBody />
    </div>
  );
};
