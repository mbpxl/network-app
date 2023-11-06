import classes from "./Profile.module.scss";
import { Searchbar } from "./Searchbar/Searchbar";
import { HeaderProfile } from "./HeaderProfile/HeaderProfile";
import { Actions } from "./Actions/Actions";
import { Wall } from "./Wall/Wall";

export const Profile = () => {
  return (
    <div className={classes.profile}>
      <Searchbar />
      <HeaderProfile />
      <Actions />
      <Wall />
    </div>
  );
};
