import clsx from "clsx";
import classes from "./Paginator.module.scss";
import { useState } from "react";
import arrow from "../../assets/img/paginator/arrow-right.svg";

export const Paginator = (props: {
  totalItemsCount: number;
  pageSize: number;
  portionSize: number;
  onPageChanged: (p: number) => void;
  currentPage: number;
}) => {
  let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize); // округляем в большую сторону
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / props.portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
  let rightPortionPageNumber = portionNumber * props.portionSize;

  return (
    <div className={classes.paginator}>
      <div className={classes.paginator__content}>
        {portionNumber > 1 && (
          <button
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
            className={classes.paginator__prev}
          >
            <img src={arrow} alt="arrow" />
          </button>
        )}
        {pages
          .filter(
            (p: number) =>
              p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((p: number) => {
            return (
              <span
                onClick={() => {
                  props.onPageChanged(p);
                }}
                className={clsx(
                  props.currentPage === p && classes.selectedPage
                )}
              >
                {p + "\n"}
              </span>
            );
          })}
        {portionCount > portionNumber && (
          <button
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
            className={classes.paginator__next}
          >
            <img src={arrow} alt="arrow" />
          </button>
        )}
      </div>
    </div>
  );
};
