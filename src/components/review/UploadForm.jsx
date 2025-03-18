import React, { useContext, useState } from "react";
import pdfToText from "react-pdftotext";
import { ResumeData } from "../../contexts/ResumeData";
import FilePreview from "./FilePreview";

const UploadForm = ({ generateResponse }) => {
  const { setUploadedResume } = useContext(ResumeData);
  const [upload, setUpload] = useState();
  function extractText(event) {
    // setUpload(event);
    const file = event.target.files[0];
    console.log(event.target.files[0]);
    if (file.size > 10485760) {
      console.log("size exceed");
      return;
    }
    pdfToText(file)
      .then((text) => {
        console.log(text);

        setUploadedResume(text);
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="text-center">
      <div className="flex flex-col items-center justify-center w-full ">
        {upload ? (
          <FilePreview upload={upload} />
        ) : (
          <label
            for="dropzone-file"
            className="flex flex-col items-center justify-center w-full  h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer "
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6 mx-10">
              <svg
                className="w-8 h-8 mb-4 text-primary "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 md:text-2xl">
                <span className="font-semibold text-primary">
                  Click to upload
                </span>{" "}
                or drag and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                PDF (MAX: 10MB)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={(event) => {
                extractText(event);
                setUpload(event.target.files[0]);
              }}
            />
          </label>
        )}

        <button
          disabled={!upload}
          className=" px-4 py-2 rounded-full bg-primary text-[white]  m-4 cursor-pointer disabled:bg-[grey] "
          onClick={() => {
            generateResponse();
          }}
        >
          {" "}
          Start Now
        </button>
      </div>
    </div>
  );
};

export default UploadForm;
