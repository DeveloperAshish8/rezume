import React, { useState } from "react";
import Editor from "../Editor";
import SideNav from "../SideNav";
import {
  BrainCircuit,
  BriefcaseBusiness,
  GraduationCap,
  Medal,
  Presentation,
  Store,
  Users,
} from "lucide-react";

const Main = () => {
  const sections = [
    { title: "Basic Info", src: <Store /> },
    { title: "Experience", src: <BriefcaseBusiness /> },
    { title: "Projects", src: <Presentation /> },
    { title: "Skills ", src: <BrainCircuit /> },
    { title: "Education", src: <GraduationCap /> },
    { title: "Leadership", src: <Users /> },
    { title: "Acheivement", src: <Medal /> },
  ];
  const [activeIndex, setactiveIndex] = useState(0);

  return (
    <>
      <SideNav
        sections={sections}
        activeIndex={activeIndex}
        setactiveIndex={setactiveIndex}
      />
      <Editor
        sections={sections}
        activeIndex={activeIndex}
        setactiveIndex={setactiveIndex}
      />
    </>
  );
};

export default Main;
