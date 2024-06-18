import React, { useContext, useEffect } from "react";
import InputControl from "./InputControl";
import { ChevronLeft, ChevronRight, Plus, Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { ResumeData } from "../../contexts/ResumeData";

const Leadership = ({ activeIndex, setactiveIndex }) => {
  const {
    leadershipCount,
    setLeadershipCount,
    deleteLeadershipItem,
    updateLeadership,
    resume,
  } = useContext(ResumeData);
  const { register, handleSubmit, resetField, reset } = useForm();

  const LeadershipSubmit = (data) => {
    updateLeadership(data);
    console.log(data);
    activeIndex === 6 ? setactiveIndex(0) : setactiveIndex(activeIndex + 1);
  };
  resume.leadership.test = " ";

  useEffect(() => {
    reset((resume.leadership.test = ""));
  }, [deleteLeadershipItem]);

  return (
    <form
      className="mt-2 mx-3"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(LeadershipSubmit)}
    >
      {Array.from({
        length: leadershipCount,
      }).map((j, i) => {
        return (
          <>
            {leadershipCount > 1 ? (
              <div className="flex justify-between">
                <h1 className="font-semibold text-xl text-primary mt-2 md:mx-0 mx-auto">
                  Leadership {i + 1}
                </h1>
              </div>
            ) : (
              ""
            )}
            <div className="flex md:gap-24 gap-1  md:flex-row flex-col">
              <InputControl
                label="Position"
                placeholder="Enter title eg. Coordinator"
                register={register(`position${i}`)}
                defaultValue={resume.leadership[`position${i}`] || ""}
              />
              <InputControl
                label="Organisation Name"
                placeholder="eg. College Coding Club"
                register={register(`organisation${i}`)}
                defaultValue={resume.leadership[`organisation${i}`] || ""}
              />
            </div>
            <div className="flex md:gap-24 mt-1 gap-1  md:flex-row flex-col">
              <InputControl
                label="Duration"
                placeholder="eg: 2021-22"
                register={register(`duration${i}`)}
                defaultValue={resume.leadership[`duration${i}`] || ""}
              />
              <InputControl
                label="Location"
                placeholder="Enter location eg. Remote"
                register={register(`location${i}`)}
                defaultValue={resume.leadership[`location${i}`] || ""}
              />
            </div>

            <div className="font-semibold text-base mt-4 text-[#646d8c]">
              Enter work description
            </div>
            <div className="flex mb-8 flex-col">
              <div className="flex flex-col gap-2">
                <InputControl
                  placeholder="What your responsibilities were"
                  detail={true}
                  register={register(`Ex${i}details1`)}
                  defaultValue={resume.leadership[`Ex${i}details1`] || ""}
                />
              </div>

              <div className="flex flex-col gap-2">
                <InputControl
                  placeholder="Improvement or impact you made in the club"
                  detail={true}
                  register={register(`Ex${i}details2`)}
                  defaultValue={resume.leadership[`Ex${i}details2`] || ""}
                />
              </div>
              <div className="flex flex-col gap-2">
                <InputControl
                  placeholder="What your responsibilities were"
                  register={register(`Ex${i}details3`)}
                  detail={true}
                  defaultValue={resume.leadership[`Ex${i}details3`] || ""}
                />
              </div>
            </div>
          </>
        );
      })}
      {leadershipCount > 1 && (
        <div className="sm:flex sm:gap-4 ">
          <span
            className="rounded-xl bg-[white] md:px-6 md:py-3 px-3 py-1 text-sm font-semibold flex md:gap-2 gap-1 text-center text-primary shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer mx-auto hover:bg-primary hover:text-[white]"
            onClick={() => deleteLeadershipItem(leadershipCount - 1)}
          >
            Delete
            <Trash width={20} height={20} />
          </span>
        </div>
      )}

      {leadershipCount < 2 && (
        <div
          className="flex mt-8 gap-2 cursor-pointer"
          onClick={() =>
            leadershipCount < 2 ? setLeadershipCount((_) => _ + 1) : null
          }
        >
          <Plus className="bg-primary text-[white] rounded-lg p-1 md:w-7 md:h-7 w-5 h-5" />
          <span className="text-primary font-semibold text-sm text-center md:p-1">
            Add one more leadership
          </span>
        </div>
      )}

      {/* prev button */}
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
    </form>
  );
};

export default Leadership;
