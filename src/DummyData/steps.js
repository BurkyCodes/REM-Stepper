import { FaShield } from "react-icons/fa6";
import { CiCalendarDate,CiLocationOn } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { FaTruck,FaTrash } from "react-icons/fa";

export const steps = [
    {id:1,name:"Postcode",icon:CiLocationOn},
    {id:2,name:"WasteType",icon:FaTrash},
    {id:3,name:"Select Skip",icon:FaTruck},
    {id:4,name:"Permit Check",icon:FaShield},
    {id:5,name:"Choose Date",icon:CiCalendarDate},
    {id:6,name:"Payment",icon:MdOutlinePayment},
]

