"use client"
import Wrapper from "@/app/components/shared/Wrapper"
// images
import metaverse from "@/app/assets/metaverse.webp"
import ai from "@/app/assets/ai.webp"
import cloud from "@/app/assets/cloud.webp"
import ambient from "@/app/assets/ambient.webp"
import genomics from "@/app/assets/genomics.webp"
import network from "@/app/assets/network.webp"
import Image from "next/image"
import QuarterCard from "@/app/components/shared/QuarterCard"
import { useState } from "react"

const ProgrameData = [
    {
        slug: "wmd",
        header: "Web 3.0 (Blockchain) and Metaverse Specialization",
        description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        image: metaverse,
        quarters: [
            {
                header: "Quarter IV",
                description: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
                number: 4
            },
            {
                header: "Quarter V",
                description: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
                number: 5
            }
        ]
    },
    {
        slug: "ai",
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        image: ai,
        quarters: [
            {
                header: "Quarter IV",
                description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                number: 4
            },
            {
                header: "Quarter V",
                description: "AI-361: Deep Learning and MLOps",
                number: 5
            }
        ]
    },
    {
        slug: "cloud",
        header: "Cloud-Native Computing Specialization",
        description: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes",
        image: cloud,
        quarters: [
            {
                header: "Quarter IV",
                description: "CN-351: Certified Kubernetes Application Developer (CKAD)",
                number: 4
            },
            {
                header: "Quarter V",
                description: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
                number: 5
            }
        ]
    },
    {
        slug: "ambient",
        header: "Ambient Computing and IoT Specialization",
        description: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
        image: ambient,
        quarters: [
            {
                header: "Quarter IV",
                description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
                number: 4
            },
            {
                header: "Quarter V",
                description: "AC-361: Embedded Programming using C and Rust",
                number: 5
            }
        ]
    },
    {
        slug: "genomics",
        header: "Genomics and Bioinformatics Specialization",
        description: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
        image: genomics,
        quarters: [
            {
                header: "Quarter IV",
                description: "Bio-351: Python for Biologists",
                number: 4
            },
            {
                header: "Quarter V",
                description: "Bio-361: Bioinformatics with Python",
                number: 5
            }
        ]
    },
    {
        slug: "network",
        header: "Network Programmability and Automation Specialization",
        description: "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
        image: network,
        quarters: [
            {
                header: "Quarter IV",
                description: "NPA-351: CCNA 200-301 Certification",
                number: 4
            },
            {
                header: "Quarter V",
                description: "NPA-361: Network Programmability and Automation",
                number: 5
            }
        ]
    }
]









export default function SpecializedTrack() {

    const [SelectedItem, SetSelectedItem] = useState("wmd")
    const SelectedItemData = ProgrameData.find((item) => item.slug === SelectedItem)

    return (
        < Wrapper >
            {/* header/main heading */}
            <div className="max-w-screen-sm">
                <h3 className="text-3xl font-bold ">Specialized Tracks:</h3>
                <p className="text-sm md:text-lg text-zinc-600 mt-5">After completing the first three quarters the participants will select  one or more specializations consisting of two cources of each. </p>
            </div>

            <section className="flex flex-col-reverse lg:flex-row gap-x-6 gap-y-14 ">
                {/* content left */}
                <div className="basis-7/12 bg-white duration-500 pb-10 lg:sticky top-28 max-h-fit p-8 border border-slate-200 rounded-lg backdrop-blur-lg shadow-lg">
                    <Wrapper>
                        <h4 className="text-teal-700 font-bold text-md mt-10 ">
                            Specialized Program
                        </h4>
                        <h4 className="text-2xl font-bold mt-2">
                            {/* Web 3.0 (Blockchain) and Metaverse Specialization */}
                            {SelectedItemData?.header}
                        </h4>
                        <p className="mt-4 text-sm md:text-lg text-zinc-600 ">
                            {/* This Web 3.0 and Metaverse specialization focuses ondeveloping full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializingin building wordls that merge the best of cutting-edge decentrlized distributed blockchians with 3D metaverse client experiences. */}
                            {SelectedItemData?.description}
                            <br />
                        </p>
                        <div className="text-teal-700 font-semibold text-base md:text-lg mt-4 ">
                            <button className="border rounded-md border-primary p-1 px-2  md:px-4 hover:bg-slate-50 hover:shadow-lg">Learn More <svg xmlns="http://www.w3.org/2000/svg" width="25" height="15" viewBox="0 0 24 24" className="fill-current text-primary float-end mt-[9px]">
                                <path d="M7.293 4.707L14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                            </svg>
                            </button>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 mt-8 ">
                            {
                                SelectedItemData?.quarters.map((items) => {
                                    return (
                                        <QuarterCard heading={items.header}
                                            key={items.number}
                                            description={items.description}
                                            number={items.number}
                                            WidthDivider="" border={false} />
                                    )
                                })
                            }
                        </div>
                    </Wrapper>
                </div>

                {/* content right */}
                <div className="flex flex-col gap-5   pb-5  basis-5/12 cursor-pointer  ">
                    {
                        ProgrameData.map((items) =>
                            <div onClick={() => SetSelectedItem(items.slug)}
                                key={items.slug} className=" flex gap-x-5  group border-b-2 ">
                                <div className="shrink-0  w-36 md:h-28 md:w-48 mt-3 md:mt-0  group-hover:bg-gradient-to-t from-blue-700 to-cyan-500  rounded-md  mb-6">
                                    <Image src={items.image} alt={items.header} className=" inset-0 object-cover rounded-md h-28 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 duration-300 " />
                                </div>
                                <div className="">
                                    <h4 className="text-primary md:font-bold text-sm md:text-base">Specialize Tracks</h4>
                                    <h3 className="font-semibold md:font-bold text-base md:text-lg" >{items.header}</h3>
                                </div>
                            </div>
                        )
                    }


                </div>
            </section>


           

        </Wrapper >




    )
}