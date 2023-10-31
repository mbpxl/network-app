import classes from "./Profile.module.scss";
import search from "../../assets/img/profile/profile-search.svg";
import avatar from "../../assets/img/profile/profile-ava.png";
import edit from "../../assets/img/profile/profile-edit.svg";

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
      <div className={classes.info}>
        <div className={classes.info__bg}>
          <div className={classes.info__bg_edit}>
            <a href="#">
              <img src={edit} alt="edit" />
            </a>
          </div>
        </div>
        <div className={classes.bio}>
          <div className={classes.bio__counts}>
            <a href="#" className={classes.bio__counts_content}>
              <h1>2.5K</h1>
              <h2>FOLLOWERS</h2>
            </a>
            <a href="#" className={classes.bio__counts_content}>
              <h1>1.3K</h1>
              <h2>FOLLOWING</h2>
            </a>
            <a href="#" className={classes.bio__counts_content}>
              <h1>653K</h1>
              <h2>SUPPORTERS</h2>
            </a>
          </div>
          <div className={classes.bio__personal}>
            <img src={avatar} alt="avatar" />
            <h3>Edward Arcos</h3>
            <h4>@arcos111</h4>
          </div>
          <div className={classes.bio__status}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            fugiat corporis enim! Quam laudantium, iure enim nihil odio
            perferendis ipsa?
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <button type="submit" className={classes.actions__btn}>
          Add friend
        </button>
        <button type="submit" className={classes.actions__btn}>
          Follow
        </button>
        <button type="submit" className={classes.actions__btn}>
          Message
        </button>
      </div>
    </div>
  );
};
