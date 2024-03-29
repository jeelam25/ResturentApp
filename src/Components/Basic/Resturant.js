import React, { useState } from "react";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
import "./styles.css";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  // eslint-disable-next-line
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updateList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updateList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
