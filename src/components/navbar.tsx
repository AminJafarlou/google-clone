import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import Apps from "@material-ui/icons/Apps";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = createUseStyles({
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
    alignItems: "center",
    paddingBlock: 8,
    paddingInline: 8,
  },
  linkWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  link: {
    marginInline: 8,
    textDecoration: "none",
    color: "#000000de",
    fontSize: 14,
    fontFamily: "sans-serif",

    "&:hover": {
      textDecoration: "underline",
    },
  },
  iconWrapper: {
    background: "transparent",
    marginInline: 4,
    width: 40,
    height: 40,
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "&:hover": {
      backgroundColor: "#3c404314",
    },
  },
  icon: {
    display: "block",
  },
});

export const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <Link className={classes.link} to="/">
        Gmail
      </Link>
      <Link className={classes.link} to="/">
        Images
      </Link>
      <div className={classes.iconWrapper}>
        <Apps fontSize="medium" className={classes.icon} />
      </div>
      <div className={classes.iconWrapper}>
        <AccountCircle fontSize="large" className={classes.icon} />
      </div>
    </div>
  );
};
