import classes from "./Profile.module.scss";
import search from "../../assets/img/profile/profile-search.svg";

export const Profile = () => {
  return (
    <div className={classes.profile}>
      <div className={classes.searchbar}>
        <form action="" className={classes.searchbar__form}>
          <input
            type="text"
            className={classes.searchbar__input}
            placeholder="Search"
            maxLength={30}
          />
          <button type="submit" className={classes.searchbar__btn}>
            <img src={search} alt="seatch" />
          </button>
        </form>
      </div>
    </div>
  );
};
