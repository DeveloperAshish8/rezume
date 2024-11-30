import React, { useContext } from "react";
import InputControl from "./InputControl";
import { ResumeData } from "../../contexts/ResumeData";
import { ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";

const PersonalInfo = ({ activeIndex, setactiveIndex }) => {
  const { updatePersonal, resume } = useContext(ResumeData);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const PersonalSubmit = (data) => {
    updatePersonal(data);
    activeIndex === 5 ? setactiveIndex(0) : setactiveIndex(activeIndex + 1);
    console.log(data);
  };

  return (
    <form
      className="mt-2 md:mx-3 px-2"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(PersonalSubmit)}
    >
      <div className="flex md:gap-24 gap-1  md:flex-row flex-col">
        <div className="flex flex-col gap-1">
          <InputControl
            type="text"
            label="First Name*"
            name="firstName"
            placeholder="Enter your first name"
            register={register("firstName", {
              required: "First name is required",
            })}
            // onChange={handleSubmit(PersonalSubmit)}
            defaultValue={resume.personal.firstName}
          />
          {errors.firstName && (
            <span className="text-[#F04438] text-sm ml-2 ">
              {errors.firstName.message}
            </span>
          )}
        </div>

        <InputControl
          type="text"
          label="Last Name"
          name="LastName"
          placeholder="Enter your last name"
          register={register("lastName")}
          defaultValue={resume.personal.lastName}
        />
      </div>
      <div className="flex md:gap-24 mt-1 gap-1 md:flex-row flex-col">
        <div className="flex flex-col gap-1">
          <InputControl
            type="url"
            label="Linkedin Link*"
            placeholder="Enter your linkedin profile link"
            name="linkedin"
            register={register("linkedin", {
              required: "Linkedin is required",
              pattern: {
                value: /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/,
                message: "Enter a valid LinkedIn profile link",
              },
            })}
            defaultValue={resume.personal.linkedin}
          />
          {errors.linkedin && (
            <span className="text-[#F04438] text-sm ml-2 ">
              {errors.linkedin.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <InputControl
            type="url"
            label="Github Link"
            placeholder="Enter your github profile link"
            register={register("github", {
              pattern: {
                value: /^(https?:\/\/)?(www\.)?github\.com\/.*$/,
                message: "Enter a valid Github profile link",
              },
            })}
            defaultValue={resume.personal.github}
          />
          {errors.github && (
            <span className="text-[#F04438] text-sm ml-2 ">
              {errors.github.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex md:gap-24 mt-1 gap-1 md:flex-row flex-col">
        <div className="flex flex-col gap-1">
          <InputControl
            type="email"
            label="Email*"
            placeholder="Enter your email"
            register={register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
            defaultValue={resume.personal.email}
          />
          {errors.email && (
            <span className="text-[#F04438] text-sm ml-2 ">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <InputControl
            type="tel"
            label="Phone Number*"
            placeholder="Enter your phone number"
            register={register("phone", {
              required: "Phone Number is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "Please enter a valid phone number (digits only)",
              },
              maxLength: {
                value: 10,
                message: "Phone number cannot exceed 10 digits",
              },
              minLength: {
                value: 10,
                message: "Phone number must be at least 10 digits",
              },
            })}
            defaultValue={resume.personal.phone}
          />
          {errors.phone && (
            <span className="text-[#F04438] text-sm ml-2">
              {errors.phone.message}
            </span>
          )}
        </div>
      </div>

      {/* next button starts*/}
      <div className=" sm:gap-4 flex justify-end my-10">
        <button
          className="bg-primary rounded  md:px-8 px-4 md:py-3 py-2 text-base font-semibold text-[white] transition hover:rotate-2 flex md:gap-2 gap-1 text-center  shadow items-center "
          type="submit"
        >
          <p className="flex items-center justify-center">Next</p>
          <ChevronRight width={27} height={25} />
        </button>
      </div>
      {/* next button ends */}
    </form>
  );
};

export default PersonalInfo;
