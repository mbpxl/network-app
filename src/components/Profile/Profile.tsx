import classes from "./Profile.module.scss";
import { Searchbar } from "./Searchbar/Searchbar";
import { HeaderProfile } from "./HeaderProfile/HeaderProfile";
import { Actions } from "./Actions/Actions";
import { WallContainer } from "./Wall/WallContainer";

export const Profile = (props: any) => {
  // store={props.store}
  return (
    <div className={classes.profile}>
      <Searchbar />
      <HeaderProfile />
      <Actions />
      <WallContainer />
    </div>
  );
};
