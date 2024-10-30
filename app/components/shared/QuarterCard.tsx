import { FC } from "react"
interface QCard{
    heading:string,
    description:string,
    number:number,
    WidthDivider:string,
    border?:boolean
}

const QuarterCard:FC<QCard>=({heading, description, number, border=true, WidthDivider})=>{
    return(
        <div className={`relative group cursor-pointer  ${WidthDivider}  md:mx-0 px-8 py-12 ${border && "border rounded-xl"} `}>
            <h4 className="font-bold text-lg group-hover:text-teal-700">{heading}</h4>
            <p className="mt-2  text-slate-600 ">{description}</p>
            <h3 className=" absolute top-1 right-14 text-gray-300 text-9xl font-bold -z-10 group-hover:-translate-y-3 duration-300">{number}
            </h3>
        </div>
    )
}
export default QuarterCard
