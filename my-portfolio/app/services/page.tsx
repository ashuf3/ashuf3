"use client"

import Link from "next/link";
import {BsArrowDownRight}from "react-icons/bs";
import {motion}from "framer-motion"

const services=[
    {
        num:'01',
        title:'Web Developer',
        href:'xyz',
        description:'I design and develop websites and digital experiences that help You grow, innovate, and transform. I listen, learn and understand before I build. I identify your goals, then I use my expertise to find that sweet spot of realistic and impactful.'
    },
    {
        num:'02',
        title:'SEO',
        href:'xyz',
        description:"Unlock the full potential of your online presence with my comprehensive SEO services tailored for businesses of all sizes. I understand that visibility and ranking are crucial for your business to thrive in today's competitive digital landscape."
    },
    {
        num:'03',
        title:'UX/UI',
        href:'xyz',
        description:'I craft immersive digital experiences that captivate audiences and drive results. My UI/UX design services blend creativity with user-centric principles to deliver interfaces that are not just visually stunning but also intuitive and engaging.'
    },
    {
        num:'04',
        title:'Logo Design',
        href:'xyz',
        description:"Your logo is more than just a symbol it's the cornerstone of your brand identity. I try to creating memorable logos that resonate with your audience and encapsulate the essence of your brand."
    },

]



export default function Services() {
  return (<section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className="container m-auto">
        <motion.div
        initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{ delay:2.4 ,duration:0.4,ease:"easeIn"}
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
            {services.map((service,index)=>{
                return (<div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                    <div className="w-full flex justify-between items-center">
                        <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover group-hover:text-accent/80 transition-all duration-500">{service.num}</div>
                        <Link href={service.href} className="w-[30px] h-[30px] rounded-full bg-white
                        group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                            <BsArrowDownRight className="text-primary text-3xl"/>
                        </Link>
                    </div>
                    <h3 className="text-[42px] font-bold leading-none text-white
                     group-hover:text-accent transition-all duration-500 ">{service.title}</h3>
                    <p className="text-white/60">{service.description}</p>
                    <div className="border-b border-white/20 w-full"></div>
                </div>)
            })}
        </motion.div>
    </div>
  </section>
  );
}
