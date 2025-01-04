import React from "react";
import { Element } from "../stories/Element";

const DataBox = ({ item }) => {
  return (
    <Element className={" flex flex-wrap "} Tag={"div"} key={item.url}>
      <Element
        className={" text-[#212121]  "}
        Tag={"div"}
        label=""
        onClick={() => {}}
      >
        <Element
          className={" text-[#212121]  ml-2 "}
          Tag={"h1"}
          label={item.title}
          onClick={() => {}}
        />

        <Element
          className={" text-[#d4d4d4] bg-[#212121] border my-2 rounded-xl "}
          Tag={"img"}
          src={item.images.jpg.image_url}
          alt={item.title}
          onClick={() => {}}
        />
      </Element>
      <Element
        className={" text-[#212121]  ml-2 "}
        Tag={"p"}
        label={item.synopsis}
        onClick={() => {}}
      />
    </Element>
  );
};

export default DataBox;
