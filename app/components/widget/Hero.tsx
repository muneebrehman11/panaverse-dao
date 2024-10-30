import Wrapper from "@/app/components/shared/Wrapper"
import HeroPoster from "@/app/assets/hero-poster.webp"
import Image from "next/image"
import Button from "@/app/components/shared/Button"
export default function Hero() {
    return (
        <section>

            <Wrapper>
                <div className=" flex flex-col md:flex-row items-center">
                    {/* left side */}
                   
                    <div className="flex-1" >
                        <h4 className="text-teal-700  font-bold text-base md:text-lg mt-4 ">Presidential Initiative for Artificial Intelligence and Computing(PIAIC)</h4>
                        <h1 className=" text-4xl md:text-6xl font-bold max-w-auto">Certified Web 3.0 and Metaverse Developer</h1>
                        <p className="mt-6 text-sm   md:text-lg text-zinc-600 max-max-w-auto">
                            A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet 
                        </p>
                        <p className="mt-2 text-sm   md:text-lg text-zinc-600 max-w-auto ">
                            Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
                        </p>
                        <div className="mt-6">
                        <Button text={"Learn More"}/>
                        </div>
                        
                         {/* <button className="bg-teal-700 text-white font-bold text-lg px-10 mt-7 rounded-full h-14 ">Learn More</button> */}
                    </div>
                    {/* right side */}
                    <div className="flex-1 ">
                        <Image src={HeroPoster} alt="panaverse" />
                    </div>


                </div>
            </Wrapper>
        </section>
    )
}