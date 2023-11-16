import React from "react";
import { SectionWrapper } from "../hoc";

const Hero = () => {
    return (
        <div className="bg-primary h-screen w-full">
            <div className="w-full h-1/2 bg-[#ffcee6] rounded-[50px] mt-10 p-4 sm:p-24">
                <p className="text-4xl sm:text-[70px] sm:leading-30 font-medium">Making budgeting and expense tracking creative and enjoyable.</p>
            </div>
        </div>
    )
}

export default SectionWrapper(Hero, "hero");