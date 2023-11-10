import { Searchbar } from "../Profile/Searchbar/Searchbar";
import classes from "./Friends.module.scss";
import { FriendsItem } from "./FriendsItem/FriendsItem";

export const Friends = (props: any) => {
  let friendsData = props.appState.friends;

  let friendsItemElements = friendsData.map(
    (friend: { id: any; name: any; avatar: any }) => {
      return (
        <FriendsItem id={friend.id} name={friend.name} avatar={friend.avatar} />
      );
    }
  );

  return (
    <div className={classes.friends}>
      <Searchbar />
      {friendsItemElements}
    </div>
  );
};
