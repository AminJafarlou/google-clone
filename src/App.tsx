import React from "react";
import { HomePage } from "./pages/homePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ResultPage } from "./pages/resultPage";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  app: {
    boxSizing: "border-box",
    display: "flex",
    height: "100vh",
    width: "100vw",

    "& *": {
      boxSizing: "border-box",
    },
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
