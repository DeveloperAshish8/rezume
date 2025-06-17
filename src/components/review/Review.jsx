import React, { useContext, useState } from "react";
import UploadForm from "./UploadForm";
import { ResumeData } from "../../contexts/ResumeData";
import axios from "axios";
import Strength from "./Strength";
import Header from "../home/Header";
import Footer from "../home/Footer";
import Waiting from "./Waiting";

const Review = () => {
  const { uploadedResume } = useContext(ResumeData);

  const question = `${
    uploadedResume + " "
  }   Rate this resume in only one word out of Average, Good, Excellent and outstanding`;
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateResponse() {
    setGeneratingAnswer(true);
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.REACT_APP_API_KEY}
        `,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      // console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  const steps = [
    {
      id: 1,
      image: "/assets/resumeIcon.png",
      title: "Upload Resume",
    },
    {
      id: 2,
      image: "/assets/descIcon.png",
      title: "Processing",
    },
    {
      id: 3,
      image: "/assets/scoreIcon.png",
      title: "Done",
    },
  ];

  return (
    <>
      <Header />
      <div className="flex md:flex-row flex-col gap-8 lg:px-6 mx-auto my-6 md:max-w-[1500px] ">
        <div className=" md:w-[50%]">
          <div className="flex flex-col gap-5 font-['Lexend'] mx-3">
            <h1 className=" text-3xl font-bold md:text-left text-center">
              Resume <span className="text-primary"> Review </span>
            </h1>
            <p className="text-base leading-8 md:text-left text-center text-[#71797E]">
              Use our FREE AI-powered platform to tailor your resume for your
              dream job and make yourself stand out from the competition!
            </p>

            <div className="w-[80%] mx-auto">
              <img src="/assets/review.gif" alt="review" />{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mx-3 justify-center py-0 md:w-[50%]">
          <div className="w-[88%] p-3 mb-6">
            <h4 className="lg:text-lg text-base font-semibold mb-8 text-center items-center flex justify-center">
              Just a three step process to make you stand out from the crowd
            </h4>
            <div className="flex relative justify-around items-center shadow-md rounded-lg">
              <div className="absolute w-[65%] top-[35%] opacity-30 border-t-2 border-dashed border-[black] z-[5]"></div>
              {steps.map((step, i) => {
                return (
                  <div
                    className={`flex flex-col justify-center items-center z-10  rounded-lg p-1 
                  `}
                  >
                    <div className="w-8 h-10 bg-[white]">
                      <img src={step.image} alt="resume" />
                    </div>
                    <div
                      className="font-semibold text-[12px]"
                      onClick={generateResponse}
                    >
                      {step.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {answer ? (
            <Strength answer={answer} />
          ) : !generatingAnswer ? (
            <UploadForm generateResponse={generateResponse} />
          ) : (
            <Waiting />
          )}
        </div>
      </div>
      {/* <div className="flex justify-center items-center w-full h-[90vh]">
        <h3 className="font-semibold text-lg text-primary">Deployed Soon</h3>
      </div> */}
      <Footer />
    </>
  );
};

export default Review;
