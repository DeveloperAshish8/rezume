import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white" id="footer">
      <div className="mx-auto max-w-screen-xl px-8 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <Link to="/">
                <img
                  src="/assets/logo.svg"
                  alt="logo"
                  height={80}
                  width={100}
                />
              </Link>
            </div>

            <p className="mt-3 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
              Unlock your career potential with Rezume – where resumes come to
              life. Build your story, land your dream job.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-medium "> Products </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <Link
                    className="text-[grey] transition hover:text-[grey]/75"
                    to="/"
                  >
                    {" "}
                    Rezume{" "}
                  </Link>
                </li>

                <li>
                  <a
                    className="text-[grey] transition hover:text-[grey]/75"
                    href="https://shareflow.vercel.app"
                  >
                    ShareFlow
                  </a>
                </li>

                <li className="text-[grey] transition hover:text-[grey]/75">
                  {/* <a
                    className="text-[grey] transition hover:text-[grey]/75"
                    href="https://coinix.vercel.app"
                  > */}
                  Coinix
                  {/* </a> */}
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium "> About </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a
                    className=" transition text-[grey] hover:text-[grey]/75"
                    href="/#about"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-[grey] transition hover:text-[grey]/75"
                    href="/#steps"
                  >
                    {" "}
                    How To{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-[grey] transition hover:text-[grey]/75"
                    href="/#feature"
                  >
                    {" "}
                    Features{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium "> Support </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a
                    className="text-[grey] transition hover:text-[grey]/75"
                    href="/#faq"
                  >
                    {" "}
                    FAQs{" "}
                  </a>
                </li>

                <li className="text-[grey] transition hover:text-[grey]/75">
                  {/* <a
                    className="text-[grey] transition hover:text-[grey]/75"
                    href="https://ashish4.bio.link"
                  > */}{" "}
                  Contact {/* </a> */}
                </li>

                <li className="text-[grey] transition hover:text-[grey]/75">
                  {/* <a
                    className="text-[grey] transition hover:text-[grey]/75"
                    href=""
                  > */}{" "}
                  Community {/* </a> */}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8 ">
          <p className="text-center text-base/relaxed text-gray-500">
            © Rezume 2024. All rights reserved.
            <br />
            Created with ❤️
            {/* <img src="/IndianFlag.png" alt="Flag" className="w-6 h-6" /> */}
            {/* <a
              href="https://ashish4.vercel.app"
              className="text-[grey] underline transition hover:text-[grey]/75"
            >
              {" "}
              Ashish
            </a> */}
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
