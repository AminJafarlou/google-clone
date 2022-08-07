import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
//@ts-ignore
import GoogleLogo from "./googleLogo.png";
import { createUseStyles } from "react-jss";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { MouseEvent } from "react";
import { useContextValue } from "../core/DataProvider";

const useStyles = createUseStyles({
  bodyWrapper: {
    paddingBlockEnd: 120,
    display: "flex",
    flex: 1,
  },
  container: {
    marginInline: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBlockEnd: 40,
  },
  imageWrapper: {
    display: "flex",
    alignItems: "center",
    marginBlockEnd: 16,
  },
  image: {
    height: 100,
    objectFit: "contain",
    marginInline: "auto",
  },
  googleInput: {
    border: "1px solid #dfe1e5",
    paddingInline: 16,
    paddingBlock: 8,
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    width: "50vw",
    height: 44,
  },
  input: {
    border: "none",
    outline: "none",
    marginInline: 16,
    fontSize: 18,
    lineHeight: "18px",
    flex: 1,

    "&:focus": {
      outline: "none",
    },
  },
  buttonsWrapper: {
    display: "flex",
    marginBlockStart: 32,
  },
  button: {
    marginInline: 8,
    paddingBlock: 8,
    paddingInline: 16,
    fontSize: 12,
    backgroundColor: "#f8f9fa",
    textTransform: "inherit",
    color: "#5f6368",
    border: "1px solid transparent",

    "&:hover": {
      boxShadow: "0 1px 1px rgba(0,0,0,0.1)",
      backgroundColor: "#f8f8f8",
      color: "#222",
      border: "1px solid #c6c6c6",
    },
  },
});

export const HomeBody = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const { setSearchTerm } = useContextValue();
  const [input, setInput] = useState<string>("");

  const handleSearch = (
    e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    setSearchTerm?.(input);
    navigate("/search");
  };

  return (
    <form action="submit" className={classes.bodyWrapper}>
      <div className={classes.container}>
        <div className={classes.imageWrapper}>
          <img className={classes.image} src={GoogleLogo} alt="" />
        </div>

        <div className={classes.googleInput}>
          <SearchIcon fontSize="small" color="disabled" />
          <input
            className={classes.input}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <MicIcon fontSize="small" color="primary" />
        </div>
        <div className={classes.buttonsWrapper}>
          <Button
            type="submit"
            className={classes.button}
            onClick={(e) => handleSearch(e)}
          >
            Google Search
          </Button>
          <Button className={classes.button}>I'm Feeling Lucky</Button>
        </div>
      </div>
    </form>
  );
};
