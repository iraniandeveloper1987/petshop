import React from "react"
import { Link } from "react-router-dom"
import { IoMail } from "react-icons/io5"
import { BsFillTelephoneFill } from "react-icons/bs"
import { CiLocationOn } from "react-icons/ci"

function InfoList() {
  return (
    <div>
      <Link to={{ pathname: "mailto:info@petshop.com" }} target="_blank">
        <IoMail />
      </Link>
      <Link to={{ pathname: "mailto:info@petshop.com" }} target="_blank">
        <BsFillTelephoneFill /> +123 488 9652
      </Link>
      <Link to={{ pathname: "mailto:info@petshop.com" }} target="_blank">
        <CiLocationOn /> 25 West 21th Street, Miami FL, USA
      </Link>
      <li>
        English
        <div>
            <ul>
                <li>
                    
                </li>
            </ul>
        </div>
      </li>
    </div>
  )
}

export default InfoList
