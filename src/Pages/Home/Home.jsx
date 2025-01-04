import React from "react";
import { useGetAnimeQuery } from "../../AnimeApi";
import PaginationButton from "../../Components/PaginationButton";
import { Element } from "../../stories/Element";
import DataBox from "../../Components/DataBox";

const Home = () => {
  const [pageCount, setPageCount] = React.useState(5);
  const [chapterCount, setChapterCount] = React.useState(1);
  const { data, isLoading, isFetching, isError } = useGetAnimeQuery(
    `top/anime?page=${chapterCount}&limit=${pageCount}`,
    "GET"
  );

  return (
    <Element className={"p-4"} Tag={"div"}>
      
      <Element Tag={"div"}>
        {isLoading && <Element label={"Loading..."} Tag={"p"}></Element>}
        {isFetching && <Element label={"Fetching..."} Tag={"p"}></Element>}
        {isError && <Element label={"Error..."} Tag={"p"}></Element>}
      </Element>
    
      {data &&
        data.data.map((item) => {
          return (
           <DataBox item={item} key={item.url}/>
          );
        })}
      <Element className={' my-6 '} Tag={"div"}>
        <PaginationButton
          pageCount={pageCount}
          chapterCount={chapterCount}
          setChapterCount={setChapterCount}
          setPageCount={setPageCount}
        />
      </Element>
    </Element>
  );
};

export default Home;
