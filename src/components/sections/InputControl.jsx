import React from "react";

const InputControl = ({ label, detail, ...props }) => {
  return (
    <div className="flex flex-col md:mt-4 mt-3 w-72">
      {label && (
        <label className="font-semibold text-base md:mb-2 mb-[0.1rem]  text-[#646d8c]">
          {label}
        </label>
      )}
      <input
        {...props}
        {...props.type}
        {...props.register}
        required
        className={`${
          detail && "md:min-w-[40rem]"
        } md:h-12 h-8 max-w-[80%] md:min-w-72 w-[20rem] md:p-4 p-2 rounded-lg border-[1px] border-[#dedede]`}
      />
    </div>
  );
};

export default InputControl;
