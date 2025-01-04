import React from "react";
import { Element } from "../stories/Element";

const PaginationButton = ({
  setPageCount,
  setChapterCount,
  pageCount,
  chapterCount,
}) => {
  const MoreData = () => {
    const nextPage = () => {
      setPageCount(10);
      setChapterCount(chapterCount + 1);
    };
    pageCount < 25 ? setPageCount(pageCount + 5) : nextPage();
  };
  const PreviousPage =()=> {
    setPageCount(10);
    setChapterCount(chapterCount - 1)
  }
  return (
    <Element
      className={" flex gap-2 justify-center items-center p-2 "}
      Tag={"div"}
    >
      {" "}
      {chapterCount > 1 && (
        <Element
          className={
            " flex justify-center items-center px-3 py-1 bg-[#212121] text-[#d4d4d4] "
          }
          Tag={"button"}
          onClick={PreviousPage}
          type="submit"
          label={" < Previous Page"}
        />
      )}
      <Element
        className={
          " flex justify-center items-center px-3 py-1 bg-[#212121] text-[#d4d4d4] "
        }
        label={pageCount === 25 ? "Next Page >" : `More`}
        Tag={"button"}
        onClick={MoreData}
        type="submit"
      />
    </Element>
  );
};

export default PaginationButton;
