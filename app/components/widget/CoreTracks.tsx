import Button from "@/app/components/shared/Button"
import Wrapper from "@/app/components/shared/Wrapper"
import QuarterCard from "@/app/components/shared/QuarterCard"
const CoreTracks = () => {
    // if we don't want to use html in any element or div we can use this method
    const heading = `Core Courses \n (Common in All Specializations)`

    const QCardsData: { quarter: string, description: string, number: number }[] = [
        {
            quarter: "Quarter I",
            description: "CS-101: Object-Oriented Programming using TypeScript",
            number: 1
        },
        {
            quarter: "Quarter II",
            description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
            number: 2
        },
        {
            quarter: "Quarter III",
            description: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
            number: 3
        }

    ]

    return (
        <section className="mt-16 lg:mt-28">

            <Wrapper>
                
                <div className="max-w-screen-2xl">
                    <h4 className="text-teal-700 font-bold text-base md:text-lg">Program of Studies</h4>
                    <h2 className="text-2xl md:text-4xl font-bold whitespace-pre-line">{heading}</h2>
                    <p className="mt-4 text-base md:text-lg text-zinc-600 ">Every participant of the program will start by completing the following three core courses.</p>
                    <div className="mt-6 z-20">
                        <Button text={"Enoll Now"} />
                    </div>
                </div>


                <div className="flex flex-col  md:flex-row  my-10 gap-x-5 gap-y-4 ">
                    {
                        QCardsData.map((items) => {

                            return (
                                <QuarterCard
                                    key={items.number}
                                    heading={items.quarter}
                                    description={items.description}
                                    number={items.number}
                                    WidthDivider="basis-1/12 md:basis-4/12" />

                            )
                        })
                    }
                   
                </div>
            </Wrapper>
        </section >
    )
}
export default CoreTracks