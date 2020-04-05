import React from 'react';
import { makeStyles, List, ListItem } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Header from "components/Header/Header.js";
import { Trans } from 'react-i18next';

import navbarsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(navbarsStyle);

function AppHeader() {
  const classes = useStyles();
  return (
    <Header
      color="transparent"
      fixed
      absolute
      changeColorOnScroll={{
        height: 20,
        color: "secondary",
      }}
      links={
        <List className={classes.list + " " + classes.mlAuto}>
          <ListItem className={classes.listItem}>
            <NavLink
              exact
              to="/"
              className={classes.navLink}
              color="transparent"
              activeClassName={classes.navLinkActive}
            >
              <Trans i18nKey="mainMenu.item0"></Trans>
            </NavLink>
          </ListItem>
          <ListItem className={classes.listItem}>
            <NavLink
              exact
              to="/features"
              className={classes.navLink}
              color="transparent"
              activeClassName={classes.navLinkActive}
            >
              <Trans i18nKey="mainMenu.item2"></Trans>
            </NavLink>
          </ListItem>
          <ListItem className={classes.listItem}>
            <NavLink
              exact
              to="/howitworks"
              className={classes.navLink}
              color="transparent"
              activeClassName={classes.navLinkActive}
            >
              <Trans i18nKey="mainMenu.item1"></Trans>
            </NavLink>
          </ListItem>
          <ListItem className={classes.listItem}>
            <NavLink
              exact
              to="/pricing"
              className={classes.navLink}
              color="transparent"
              activeClassName={classes.navLinkActive}
            >
              <Trans i18nKey="mainMenu.item3"></Trans>
            </NavLink>
          </ListItem>
          <ListItem className={classes.listItem}>
            <NavLink
              exact
              to="/help"
              className={classes.navLink}
              color="transparent"
              activeClassName={classes.navLinkActive}
            >
              <Trans i18nKey="mainMenu.item4"></Trans>
            </NavLink>
          </ListItem>
        </List>
      }
    />
  );
}

export default AppHeader;