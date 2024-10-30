import Image from "next/image";
import Logo from "@/app/assets/panaverse-logo.png";
import Wrapper from "@/app/components/shared/Wrapper";
import Icons from "@/app/components/shared/icons";
export default function Footer() {
    return (
        <section className="border-t-2  pb-10">
            <Wrapper>
                <div className="flex flex-col md:flex-row mt-11  ">
                    <div className="md:w-6/12 flex flex-col text-lg text-zinc-600">
                        {/* logo */}
                        <div className="">
                            <Image className="w-32 md:w-40 cursor-pointer" src={Logo} alt="panaverse logo" />
                        </div>
                        {/* description */}
                        <div className="text-sm md:lg">
                            <p>
                                Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earns as you Leanrn Program Getting Ready for the Next Generation of the Internet
                            </p>
                        </div>
                        <div className="mt-4">
                            <Icons/>
                        </div>
                        
                    </div>
                    {/* center div */}
                    <div className="flex flex-col md:w-3/12  leading-loose">
                        <h4 className="font-bold text-base md:text-lg mb-2">Progrmaes</h4>
                        <div className="text-zinc-600">
                            <a href="" className="hover:text-primary duration-300">Web 3.0 and Metaverse Developer</a><br />
                            <a href="" className="hover:text-primary duration-300">Artificial Intelligence</a><br />
                            <a href="" className="hover:text-primary duration-300">Cloud-Native Computing</a><br />
                            <a href="" className="hover:text-primary duration-300">Ambient Computing and IoT</a><br />
                            <a href="" className="hover:text-primary duration-300">Genomics and Bioinformatics</a><br />
                            <a href="" className="hover:text-primary duration-300">Network Programmability and Automation</a>
                        </div>
                    </div>
                    <div className=" w-2/12  leading-loose ">
                        <h4 className="font-bold text-lg mb-2">Pages</h4>
                        <div className="text-zinc-600 flex flex-col ">
                            <a href="" className="hover:text-primary duration-300">Home</a>
                            <a href="" className="hover:text-primary duration-300">Quarter 1</a>
                            <a href="" className="hover:text-primary duration-300">Quarter 2</a>
                            <a href="" className="hover:text-primary duration-300">Quarter 3</a>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}