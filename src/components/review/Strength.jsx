import React from "react";

const Strength = ({ answer }) => {
  // console.log(answer);

  const strength = {
    average:
      "Needs Work! Your resume strength is Average which is below the recommended strength. There is a high chance that your resume will be skipped by the Applicant Tracking System (ATS) unless it is adjusted. Please review the skills and add any relevant skills or keywords that are missing to increase your Relevance Strength.",
    good: "Your resume shows promise but could be stronger. Enhance it with targeted keywords for better ATS recognition. Aim for excellence by refining skills and improving relevance to increase chances of job consideration.",
    excellent:
      "Your resume strength is Excellent, signifying a meticulously crafted resume tailored precisely to the job specifications. Your Relevance Strength is exceptional, greatly enhancing your chances of surpassing the Applicant Tracking System (ATS) and making a lasting impression on potential employers.",
    outstanding:
      "Your resume strength is Outstanding, showcasing an impeccably tailored resume that perfectly aligns with the job requirements. Your Relevance Strength is unparalleled, elevating your resume above the competition and ensuring it sails through the Applicant Tracking System (ATS) with ease.",
  };

  const strengthMessage = strength[answer.trim().toLowerCase()];
  // console.log("Message:", strengthMessage);

  return (
    <div className="text-center">
      <div className="flex flex-col items-center justify-center w-full gap-8">
        <h2 className="text-3xl font-bold md:text-left text-center">
          Relevance <span className="text-primary">Strength </span>
        </h2>

        <div className="rounded-[50%] w-32 h-32 border-primary border-4 flex items-center  justify-center text-lg font-bold">
          {answer !== "Sorry - Something went wrong. Please try again!"
            ? answer
            : "error"}
        </div>

        <p
          className={`text-sm leading-6 items-center font-semibold flex justify-center text-center lg:w-[80%] w-[90%]  ${
            strengthMessage ? "text-[#130e49]" : "text-[red]"
          }`}
        >
          {strengthMessage ? strengthMessage : "Strength level not found."}
        </p>
      </div>
    </div>
  );
};

export default Strength;
