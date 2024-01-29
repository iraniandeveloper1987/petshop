import React from "react";
import "./MainMenuList.scss";
import { BsShop } from "react-icons/bs";
import { FaDog } from "react-icons/fa";
import { LiaCatSolid } from "react-icons/lia";
import { IoFish } from "react-icons/io5";
import { GiRabbit } from "react-icons/gi";
import { GiReptileTail } from "react-icons/gi";
import { PiBirdFill } from "react-icons/pi";

function MainMenuList() {
  return (
    <>
      <li href="/shop" className="mx-1 px-2 ">
        <BsShop />
        <span className="px-2">Shop</span>
      </li>
      <li href="/dogs" className="mx-1 px-2 ">
        <FaDog /> <span className="px-2">Dogs</span>
      </li>
      <li href="/cats" className="mx-1 px-2 ">
        <LiaCatSolid /> <span className="px-2">Cats</span>
      </li>
      <li href="/fish" className="mx-1 px-2 ">
        <IoFish /> <span className="px-2">Fish</span>
      </li>
      <li href="/small-pets" className="mx-1 px-2 ">
        <GiRabbit />
        <span className="px-2">Small Pets</span>
      </li>
      <li href="/reptiles" className="mx-1 px-2 ">
        <GiReptileTail />
        <span className="px-2">Reptiles</span>
      </li>
      <li href="/birds" className="mx-1 px-2 ">
        <PiBirdFill /> <span className="px-2">Birds</span>
      </li>
    </>
  );
}

export default MainMenuList;
