import clsx from "clsx";
import classes from "./Paginator.module.scss";
import { useState } from "react";

export const Paginator = (props: {
  totalItemsCount: number;
  pageSize: number;
  portionSize: number;
  onPageChanged: Function;
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
    <div className="">
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
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
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                props.onPageChanged(p);
              }}
              className={clsx(props.currentPage === p && classes.selectedPage)}
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
        >
          NEXT
        </button>
      )}
    </div>
  );
};
