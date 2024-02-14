import preloader from "../../assets/img/friends/preloader.svg";
import classes from "./preloader.module.scss";

export const Preloader = (props: any) => {
  return (
    <div className={classes.preloader}>
      <img src={preloader} alt="ty" className={classes.img} />
    </div>
  );
};
