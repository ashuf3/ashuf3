import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import{FiDownload} from "react-icons/fi"
export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 font-normal mb-6">
             hi,<span className="text-accent">Ashutosh</span> here.
            </h1>
            <h3 className="font-light mb-3">I create stuff sometimes.</h3>
            <p className="max-w-[500px] mb-9 text-white/60">I`&apos;`m fascinated by large-scale, high-impact products with a relentless curiosity and a knack for problem-solving, I dive deep into both front-end and back-end development realms, honing my skills and embracing the challenges along the way. Join me as I share my journey, insights, and projects, showcasing the growth and innovation that comes with each line of code written</p>
            {/*Btn and social handles */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size={"lg"}
                className="uppercase flex items-center gap-2 rounded-full"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div>
                <Social containerStyles="flex gap-6"
                 iconsStyles="w-9 h-9 border-accent rounded-full flex justify-center 
                 items-center text-accent text-base hover:bg-accent hover:text-primary
                 hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          <Photo/>
        </div>
      </div>
      <Stats/>
    </section>
  );
}
