import { Link, useLocation } from "react-router-dom";

import SlashImg from "./assets/slash.png";

export default function Breadcrumb() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="bg-white ">
      <ul className=" flex border p-2 gap-6 text-xl text-[#2E4053] items-center">
        <Link
          to={"home"}
          className={`cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md ${
            location.pathname === "/home" && "bg-[#b572d6] text-white"
          }`}>
          Home
        </Link>
        <img src={SlashImg} className="w-5 h-5 " alt="" />
        <Link
          to={"products"}
          className={`cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md ${
            location.pathname === "/products" && "bg-[#b572d6] text-white"
          }`}>
          Products
        </Link>
        <img src={SlashImg} className="w-5 h-5 " alt="" />
        <Link
          to={"about"}
          className={`cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md ${
            location.pathname === "/about" && "bg-[#b572d6] text-white"
          }`}>
          About
        </Link>
        <img src={SlashImg} className="w-5 h-5 " alt="" />
        <Link
          to={"faq"}
          className={`cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md ${
            location.pathname === "/faq" && "bg-[#b572d6] text-white"
          }`}>
          FAQ
        </Link>
      </ul>
    </div>
  );
}
