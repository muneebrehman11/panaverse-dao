import { FC } from "react"
const Button: FC<{ text: string }> = ({ text }) => {
    return (
        <div>
            <button className="bg-[#00616C] text-white font-medium text-lg md:text-xl px-5 md:px-8 h-12 md:h-14
            rounded-full  hover:shadow-lg  hover:bg-[#0c7985] hover:scale-105 duration-500">{text}</button>
        </div>
    )

}
export default Button