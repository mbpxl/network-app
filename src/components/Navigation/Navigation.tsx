import classes from "./Navigation.module.scss";

//? Importing icons for nabvar
import logo from "../../assets/img/navbar/navbar-logo.png";
import profile from "../../assets/img/navbar/navbar-profile.svg";
import feed from "../../assets/img/navbar/navbar-feed.svg";
import messages from "../../assets/img/navbar/navbar-message.svg";
import music from "../../assets/img/navbar/navbar-music.svg";
import logout from "../../assets/img/navbar/navbar-logout.svg";
import friends from "../../assets/img/friends/friends-icon.svg";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__list}>
        <li className={classes.nav__item}>
          <NavLink to="/profile" className={classes.nav__link}>
            <img src={logo} alt="logo" className={classes.nav__img_logo} />
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            <img className={classes.nav__img} src={profile} alt="profile" />
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink
            to="/feed"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            <img className={classes.nav__img} src={feed} alt="feed" />
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink
            to="/friends"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            <img className={classes.nav__img} src={friends} alt="friends" />
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink
            to="/messages"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            <img className={classes.nav__img} src={messages} alt="messages" />
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink
            to="/music"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            <img className={classes.nav__img} src={music} alt="music" />
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink to="/logout" className={classes.nav__link}>
            <img className={classes.nav__img} src={logout} alt="logout" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
