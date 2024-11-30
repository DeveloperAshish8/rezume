import React from "react";
import PersonalInfo from "./sections/PersonalInfo";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Acheivement from "./sections/Acheivements";
import Leadership from "./sections/Leadership";

const Editor = ({ sections, activeIndex, setactiveIndex }) => {
  const renderContent = React.useCallback(() => {
    switch (activeIndex) {
      case 0:
        return (
          <PersonalInfo
            activeIndex={activeIndex}
            setactiveIndex={setactiveIndex}
          />
        );

      case 1:
        return (
          <Experience
            activeIndex={activeIndex}
            setactiveIndex={setactiveIndex}
          />
        );

      case 2:
        return (
          <Projects activeIndex={activeIndex} setactiveIndex={setactiveIndex} />
        );

      case 3:
        return (
          <Skills activeIndex={activeIndex} setactiveIndex={setactiveIndex} />
        );

      case 4:
        return (
          <Education
            activeIndex={activeIndex}
            setactiveIndex={setactiveIndex}
          />
        );

      case 5:
        return (
          <Leadership
            activeIndex={activeIndex}
            setactiveIndex={setactiveIndex}
          />
        );

      case 6:
        return (
          <Acheivement
            activeIndex={activeIndex}
            setactiveIndex={setactiveIndex}
          />
        );
      default:
        return null;
    }
  }, [activeIndex]);

  const suggestion = [
    {
      id: 0,
      desc: "Avoid college or work Email",
    },
    {
      id: 1,
      desc: "Avoid adding any club volunteer role here",
    },
    {
      id: 2,
      desc: "Add atleast 2 best projects",
    },
    {
      id: 3,
      desc: "Write according to job role",
    },
    {
      id: 4,
      desc: "Avoid 10th and 12th details",
    },
    {
      id: 5,
      desc: "Added only if there is one or less Experience",
    },
    {
      id: 6,
      desc: "Your proud things",
    },
  ];
  return (
    <div className="flex flex-col min-h-[90vh] justify-between">
      <div className="flex mt-6 flex-col  md:mt-20 md:max-w-[900px] md:mx-auto  mx-16 md:px-20">
        <h1 className="font-semibold mt-3 md:mt-0 text-3xl  md:mx-0 mx-auto flex gap-2 items-center">
          {sections[activeIndex].title}
          <div class="group relative inline-block whitespace-nowrap">
            <span class="flex size-6 cursor-pointer items-center justify-center rounded-full bg-primary text-sm font-semibold text-[white]">
              i
            </span>

            <span
              role="tooltip"
              class="pointer-events-none absolute z-50 inline-flex items-center justify-center rounded-md px-3 py-1 font-semibold opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 bg-primary text-[white] min-h-7 text-sm left-1/2 -translate-x-1/2 after:absolute after:block after:size-0 after:border-8 after:border-transparent after:border-t-primary after:-bottom-[0.95rem] after:left-1/2 after:-translate-x-1/2 top-[-2.5rem]"
            >
              {suggestion[activeIndex].desc}
            </span>
          </div>
        </h1>

        {renderContent()}
      </div>
      <div className="flex justify-center items-center mb-2  gap-2 ">
        <span>Created with ❤️ in</span>
        <img src="/IndianFlag.png" alt="Flag" className="w-6 h-6" />
        <span>by Ashish</span>
      </div>
    </div>
  );
};

export default Editor;
