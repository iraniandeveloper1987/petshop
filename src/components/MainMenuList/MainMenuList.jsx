import React from "react"
import "./MainMenuList.scss"
import { BsShop } from "react-icons/bs"
import { FaDog } from "react-icons/fa"
import { LiaCatSolid } from "react-icons/lia"
import { IoFish } from "react-icons/io5"
import { GiRabbit } from "react-icons/gi"
import { GiReptileTail } from "react-icons/gi"
import { PiBirdFill } from "react-icons/pi"

function MainMenuList() {
  return (
    <>
      <li href="/shop" className="mx-1">
        <BsShop /> Shop
      </li>
      <li href="/dogs" className="mx-1">
        <FaDog /> Dogs
      </li>
      <li href="/cats" className="mx-1">
        <LiaCatSolid /> Cats
      </li>
      <li href="/fish" className="mx-1">
        <IoFish /> Fish
      </li>
      <li href="/small-pets" className="mx-1">
        <GiRabbit /> Small Pets
      </li>
      <li href="/reptiles" className="mx-1">
        <GiReptileTail />
        Reptiles
      </li>
      <li href="/birds" className="mx-1">
        <PiBirdFill /> Birds
      </li>
    </>
  )
}

export default MainMenuList
