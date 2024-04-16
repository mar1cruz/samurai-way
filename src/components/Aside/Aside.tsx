import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Aside.module.css";

export const Aside = () => {
  return (
    <aside className={classes.aside}>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          <li>
            <NavLink to="/profile" activeClassName={classes.active}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/dialogs" activeClassName={classes.active}>
              Dialogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" activeClassName={classes.active}>
              News
            </NavLink>
          </li>
          <li>
            <NavLink to="/music" activeClassName={classes.active}>
              Music
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeClassName={classes.active}>
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" activeClassName={classes.active}>
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
