import React, { useContext, useEffect } from "react";
import InputControl from "./InputControl";
import { ChevronLeft, ChevronRight, Plus, Trash } from "lucide-react";
import { ResumeData } from "../../contexts/ResumeData";
import { useForm } from "react-hook-form";

const Projects = ({ activeIndex, setactiveIndex }) => {
  const {
    projectCount,
    setProjectCount,
    deleteProjectItem,
    updateProject,
    resume,
  } = useContext(ResumeData);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const projectSubmit = (data) => {
    updateProject(data);
    console.log(data);
    setactiveIndex(activeIndex + 1);
  };
  resume.project.test = " ";

  useEffect(() => {
    reset((resume.project.test = ""));
  }, [deleteProjectItem]);
  return (
    <form
      className="mt-2 mx-3"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(projectSubmit)}
    >
      {Array.from({
        length: projectCount,
      }).map((j, i) => {
        return (
          <div>
            {projectCount > 1 ? (
              <h1 className="font-semibold text-xl text-primary mt-2 md:mx-0 mx-auto">
                Project {i + 1}
              </h1>
            ) : (
              ""
            )}
            <div className="flex md:gap-24  gap-1  md:flex-row flex-col">
              <div className="flex flex-col gap-1">
                <InputControl
                  label="Project Title"
                  placeholder="Enter title eg. Chat app"
                  register={register(`title${i}`, {
                    required: "Project Title is required",
                  })}
                  defaultValue={resume.project[`title${i}`]}
                />
                {errors[`title${i}`] && (
                  <span className="text-[#F04438] text-sm ml-2 ">
                    {errors[`title${i}`].message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <InputControl
                  label="Tech Stacks"
                  placeholder="eg. ReactJS, Tailwind, Firebase"
                  register={register(`techStacks${i}`, {
                    required: "Tech Stack is required",
                  })}
                  defaultValue={resume.project[`techStacks${i}`]}
                />
                {errors[`techStacks${i}`] && (
                  <span className="text-[#F04438] text-sm ml-2 ">
                    {errors[`techStacks${i}`].message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex md:gap-24 mt-1 gap-1  md:flex-row flex-col">
              <InputControl
                label="Deployed Link"
                placeholder="Enter deployed link of project"
                register={register(`deployedLink${i}`)}
                defaultValue={resume.project[`deployedLink${i}`]}
              />
              <InputControl
                label="Github Link"
                placeholder="Enter github link of project"
                register={register(`githubLink${i}`)}
                defaultValue={resume.project[`githubLink${i}`]}
              />
            </div>
            {/* <div className="flex mb-8 flex-col">
              <div className="font-semibold text-base mt-4 ">
                Enter project description
              </div>
              <div className="flex-col flex  gap-2 mb-8">
                <InputControl
                  placeholder="Write your Project Description ( Prefer pointwise )"
                  detail={true}
                  register={register("description")}
                  defaultValue={resume.project.description}
                />
              </div>
            </div> */}
            <div className="font-semibold text-base mt-4 text-[#646d8c]">
              Enter Project description
            </div>
            <div className="flex mb-8 flex-col">
              <div className="flex flex-col gap-2">
                <InputControl
                  placeholder="One liner description for it"
                  detail={true}
                  register={register(`P${i}details1`)}
                  defaultValue={resume.project[`P${i}details1`]}
                />
              </div>
              <div className="flex flex-col gap-2">
                <InputControl
                  placeholder="Impact your Project have made"
                  detail={true}
                  register={register(`P${i}details2`)}
                  defaultValue={resume.project[`P${i}details2`]}
                />
              </div>
              <div className="flex flex-col gap-2">
                <InputControl
                  placeholder="why it's out of the box "
                  register={register(`P${i}details3`)}
                  detail={true}
                  defaultValue={resume.project[`P${i}details3`]}
                />
              </div>
            </div>
          </div>
        );
      })}
      {projectCount > 1 && (
        <div className="flex gap-4 ">
          <div
            className="rounded-lg bg-[white] md:px-6 md:py-3 px-3 py-2 text-sm font-semibold flex md:gap-2 gap-1 text-center text-primary shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer mx-auto hover:bg-primary hover:text-[white]"
            onClick={() => deleteProjectItem(projectCount - 1)}
          >
            Delete
            <Trash width={20} height={20} />
          </div>
        </div>
      )}
      {projectCount < 3 && (
        <div
          className="flex mt-8 gap-2 align-middle text-center cursor-pointer"
          onClick={() =>
            projectCount < 3 ? setProjectCount((_) => _ + 1) : null
          }
        >
          <Plus className="bg-primary text-[white] rounded-lg p-1 md:w-7 md:h-7 w-5 h-5" />
          <span className="text-primary font-semibold text-sm text-center md:p-1">
            Add one more project
          </span>
        </div>
      )}

      {/* next button starts*/}
      <div className="flex justify-between my-10">
        <div className="sm:flex sm:gap-4">
          <button
            className="bg-primary rounded  md:px-8 px-4 md:py-3 py-2 text-base font-semibold text-[white] transition hover:rotate-2 flex md:gap-2 gap-1 text-center  shadow items-center"
            onClick={() => {
              setactiveIndex(activeIndex - 1);
            }}
          >
            <ChevronLeft width={27} height={25} />
            <p className="flex items-center justify-center">Prev</p>
          </button>
        </div>

        <div className="sm:flex sm:gap-4">
          <button
            className="bg-primary rounded  md:px-8 px-4 md:py-3 py-2 text-base font-semibold text-[white] transition hover:rotate-2 flex md:gap-2 gap-1 text-center  shadow items-center"
            type="submit"
          >
            <p className="flex items-center justify-center">Next</p>
            <ChevronRight width={27} height={25} />
          </button>
        </div>
      </div>

      {/* next button ends */}
    </form>
  );
};

export default Projects;
