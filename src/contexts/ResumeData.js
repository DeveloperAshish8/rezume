import React, { createContext, useEffect, useState } from "react";

export const ResumeData = createContext();
const ResumeContextProvider = (props) => {
  const [resume, setResume] = useState(
    JSON.parse(localStorage.getItem("resumeLocal")) || {
      personal: [],
      education: [],
      experience: [],
      skills: [],
      project: [],
      acheivement: {},
      leadership: [],
    }
  );

  const [experienceCount, setExperienceCount] = useState(1);
  const [projectCount, setProjectCount] = useState(1);
  const [educationCount, setEducationCount] = useState(1);
  const [leadershipCount, setLeadershipCount] = useState(1);
  const [uploadedResume, setUploadedResume] = useState();

  function updatePersonal(data) {
    setResume({ ...resume, personal: data });
  }

  function updateEducation(data) {
    setResume({ ...resume, education: data });
  }

  function updateSkills(data) {
    setResume({ ...resume, skills: data });
  }

  function updateExperience(data) {
    setResume({ ...resume, experience: data });
  }

  function updateProject(data) {
    setResume({ ...resume, project: data });
  }

  function updateAcheivement(data) {
    setResume({ ...resume, acheivement: data });
  }

  function updateLeadership(data) {
    setResume({ ...resume, leadership: data });
  }

  const deleteLeadershipItem = (i) => {
    delete resume.leadership[`position${i}`];
    delete resume.leadership[`organisation${i}`];
    delete resume.leadership[`duration${i}`];
    delete resume.leadership[`location${i}`];
    delete resume.leadership[`position${i}details1`];
    delete resume.leadership[`position${i}details2`];
    delete resume.leadership[`position${i}details3`];
    setResume({ ...resume, leadership: resume.leadership });
    console.log(resume.leadership);
    setLeadershipCount(leadershipCount - 1);
    // console.log("deleted");
  };

  const deleteExpItem = (i) => {
    delete resume.experience[`designation${i}`];
    delete resume.experience[`company${i}`];
    delete resume.experience[`duration${i}`];
    delete resume.experience[`location${i}`];
    delete resume.experience[`Ex${i}details1`];
    delete resume.experience[`Ex${i}details2`];
    delete resume.experience[`Ex${i}details3`];
    setResume({ ...resume, experience: resume.experience });
    console.log(resume.experience);
    setExperienceCount(experienceCount - 1);
    // console.log("deleted");
  };

  const deleteProjectItem = (i) => {
    delete resume.project[`title${i}`];
    delete resume.project[`techStacks${i}`];
    delete resume.project[`deployedLink${i}`];
    delete resume.project[`githubLink${i}`];
    delete resume.project[`P${i}details1`];
    delete resume.project[`P${i}details2`];
    delete resume.project[`P${i}details3`];
    setResume({ ...resume, project: resume.project });
    console.log(resume.project);
    setProjectCount(projectCount - 1);
  };

  const deleteEduItem = (i) => {
    delete resume.education[`title${i}`];
    delete resume.education[`college${i}`];
    delete resume.education[`duration${i}`];
    delete resume.education[`location${i}`];
    setResume({ ...resume, education: resume.education });
    console.log(resume.education);
    setEducationCount(educationCount - 1);
  };

  useEffect(() => {
    localStorage.setItem("resumeLocal", JSON.stringify(resume));
  }, [resume]);

  const value = {
    resume,
    updatePersonal,
    updateEducation,
    updateSkills,
    updateExperience,
    updateProject,
    updateAcheivement,
    experienceCount,
    setExperienceCount,
    projectCount,
    setProjectCount,
    educationCount,
    setEducationCount,
    deleteExpItem,
    deleteProjectItem,
    deleteEduItem,
    uploadedResume,
    setUploadedResume,
    leadershipCount,
    setLeadershipCount,
    deleteLeadershipItem,
    updateLeadership,
  };

  return (
    <ResumeData.Provider value={value}> {props.children}</ResumeData.Provider>
  );
};

export default ResumeContextProvider;
