import Hero from "@/app/components/widget/Hero"
import CoreTracks from "@/app/components/widget/CoreTracks"
import SpecializedTrack from "@/app/components/widget/SpecializedTrack"
import Footer from "@/app/components/layout/footer"
import Outcome from "@/app/components/widget/Outcome"
export default function Home(){
  
  return (
   
    
   <main>
    {/* hero section */}
    <Hero/>
    {/* core tracks */}
    <CoreTracks/>
    {/* specialized track */}
    <SpecializedTrack/>
    {/* footer */}
    <Outcome/>
    <Footer/>
    </main> 
    
  )
}