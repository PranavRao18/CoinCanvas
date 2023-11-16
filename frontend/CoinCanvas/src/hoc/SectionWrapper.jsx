import React from "react";

const SectionWrapper = (Component, idName) => function HOC() {
    return(
        <section
            className={`px-6 md:px-16 lg:px-28 relative z-0 mt-[100px] bg-primary pb-8`}
        >
            <span className="hash-span -mt-[100px]"  id={idName}>&nbsp;</span>
            <Component />
        </section>
    )
}
export default SectionWrapper;