import React, { useState, useRef, useEffect } from "react";

import image1 from "../assets/image1.png";
import image2 from "../assets/Aspireit.png";
import image3 from "../assets/Ellipse 1872.svg";
import image4 from "../assets/Type=Layila.svg";
import image5 from "../assets/buttons-cta.svg";
import image6 from "../assets/Profile picture.png";
import image7 from "../assets/summarizeIcon.png";
import Rank from "../assets/Rank.svg";
import ProfileMatch from "../assets/Profile match.svg";
import CircularLoader from "../Components/CircularLoader";
import SkillSection from "../Components/SkillSection";
import RadarChart from "../Components/RadarChart";

const applicant = () => {
  // navbar variables
  const [searchPhrase, setSearchPhrase] = useState("");
  const [isFocused1, setisFocused1] = useState(false);
  const inputRef = useRef(null);
  const [isCandidateSelected, setIsCandidateSelected] = useState(false);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSearch = (e) => {
    setSearchPhrase(e.target.value);
  };

  useEffect(() => {
    if (isFocused1 === false) {
      setSearchPhrase("");
    }
  }, [isFocused1]);

  // Ai summary variables
  const [isAiInterviewOpen, setAiInterviewOpen] = useState(false);
  const toogleAiInterview = () => {
    return setAiInterviewOpen(!isAiInterviewOpen);
  };

  const [isAiTechnicalOpen, setAiTechnicalOpen] = useState(false);
  const toogleAiTechnical = () => {
    return setAiTechnicalOpen(!isAiTechnicalOpen);
  };

  // radar chart data
  const labels = [
    "Leadership",
    "Communication",
    "Creativity",
    "Visual Design",
    "Critical Thinking",
    "Adaptability",
    "Market Analysis",
  ];

  const data = [
    [800, 600, 700, 500, 400, 600, 700], // Skill Level 1
    [400, 500, 600, 400, 300, 500, 600], // Skill Level 2
  ];

  return (
    <div className="main-container min-h-[100vh] bg-[#F2F2F2] pb-8">
      {/*------- Navbar ----------- */}
      <div className="NavBar w-full mx-[auto] py-5 max-sm:gap-5  px-8 bg-white border border-[#D2D2D2] backdrop-blur-[220px] flex justify-between items-center hover:cursor-pointer max-sm:flex-col">
        <div className="logo-container w-[130px]  relative  bg-[#FFF] max-sm:w-full">
          <img className="Aspireit " src="/Logo.png" />
        </div>
        <div className="SearchBarContainer w-full flex grow justify-center items-center gap-4 bg-none">
          <div className="InputContainer w-[55%] max-sm:w-full flex justify-start items-center gap-4  pl-6 pr-6 bg-[#F2F2F2] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-[32px]">
            <div className="searchBar inline-flex items-center  w-full bg-[#F2F2F2]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
                fill="none"
                className={`w-[3vh] h-[3vh] shrink-0 rounded-full mr-1 ${
                  isFocused1
                    ? "transform scale-110 transition-transform duration-300"
                    : ""
                }`}
              >
                <path
                  d="M9.49996 2.75C8.16495 2.75 6.85991 3.14588 5.74989 3.88757C4.63986 4.62927 3.7747 5.68347 3.26381 6.91686C2.75292 8.15026 2.61925 9.50745 2.8797 10.8168C3.14015 12.1262 3.78302 13.3289 4.72702 14.2729C5.67102 15.2169 6.87375 15.8598 8.18311 16.1202C9.49248 16.3807 10.8497 16.247 12.0831 15.7361C13.3165 15.2252 14.3707 14.3601 15.1124 13.25C15.854 12.14 16.2499 10.835 16.2499 9.49996C16.2498 7.70979 15.5386 5.99298 14.2728 4.72714C13.0069 3.46131 11.2901 2.75011 9.49996 2.75Z"
                  stroke="#353535"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
                <path
                  d="M14.666 14.668L18.3327 18.3346"
                  stroke="#353535"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </svg>
              <input
                className="justify-start px-[24px] w-full max-w-[657px] text-[#353535] py-[12px] text-[16px] leading-[18px] border-0 bg-[#F2F2F2] focus:outline-none focus:text-[#353535]"
                onClick={focusInput}
                type="text"
                name="searchBar"
                value={isFocused1 ? searchPhrase : ""}
                onChange={handleSearch}
                onFocus={() => setisFocused1(true)}
                onBlur={() => setisFocused1(false)}
                placeholder="Search"
                ref={inputRef}
              />
            </div>
          </div>
        </div>

        <div className="Frame1000008205 flex justify-start items-center w-fit gap-[1vw] bg-none">
          <div className="Frame1000008204 px-[16px] py-[4px] bg-[#F2F2F2] flex justify-start items-center shadow-[0px_0px_6px_rgba(0,_0,_0,_0.25)] rounded-[40px] backdrop-blur-[4px]">
            <div className="ButtonsNotification w-[5vh] min-w-[24px] h-[5vh] min-h-[24px] mr-[1.5vh] relative bg-[#F2F2F2]">
              <div className="Ellipse w-[5vh] h-[5vh] min-w-[24px] min-h-[24px] absolute left-0 top-0 bg-white rounded-full" />
              <div className="IconsBell w-[4vh] h-[4vh] min-w-[18px] min-h-[18px] absolute left-[1vh] top-[1vh] bg-none hover:transform hover:scale-[1.08] hover:transition-transform hover:duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-[3vh] h-[3vh] min-w-[16px] min-h-[16px]"
                >
                  <path
                    d="M21 6.50001C21 8.43001 19.43 10 17.5 10C15.57 10 14 8.43001 14 6.50001C14 4.57001 15.57 3.00001 17.5 3.00001C19.43 3.00001 21 4.57001 21 6.50001ZM19 11.79C18.5 11.92 18 12 17.5 12C16.0421 11.9974 14.6447 11.4171 13.6138 10.3862C12.583 9.3553 12.0026 7.95788 12 6.50001C12 5.03001 12.58 3.70001 13.5 2.71001C13.3185 2.48755 13.0897 2.30838 12.8302 2.18555C12.5707 2.06272 12.2871 1.99934 12 2.00001C10.9 2.00001 10 2.90001 10 4.00001V4.29001C7.03 5.17001 5 7.90001 5 11V17L3 19V20H21V19L19 17V11.79ZM12 23C13.11 23 14 22.11 14 21H10C10 21.5304 10.2107 22.0391 10.5858 22.4142C10.9609 22.7893 11.4696 23 12 23Z"
                    fill="#0072DC"
                  />
                </svg>
              </div>
            </div>
            <div className="Profile flex justify-end items-center bg-[#F2F2F2] hover:transform hover:scale-[1.08] hover:transition-transform hover:duration-300">
              <img
                className="AvatarPic w-[5vh] min-w-[24px] bg-none rounded-full"
                src={image3}
              />
            </div>
          </div>
          <div className="Ai w-[4.5vw] min-w-[42px] bg-none">
            <img
              className="Layila h-[7.5vh] bg-none rounded-full hover:transform hover:scale-[1.08] hover:transition-transform hover:duration-300"
              src={image4}
            />
          </div>
        </div>
      </div>

      {/*------- Profile Card --------- */}
      <div className="flex flex-col pt-6 px-24 max-md:px-5 max-w-[1224px] mx-auto">
        <div className="HeaderApplicantResults w-full flex-col justify-start items-start gap-4 inline-flex mx-auto">
          <div className="Profile self-stretch py-6 px-8 bg-white rounded-3xl shadow">
            <div className="gap-6 justify-start items-center inline-flex">
              <img
                className="ProfilePicture w-[88px] h-[88px] rounded-full"
                src={image6}
              />
              <div className="Heading grow shrink basis-0 self-stretch flex-col justify-center items-start gap-[8px] inline-flex">
                <div className="Text self-stretch text-[#1e1e1e] text-[24px] font-semibold font-['SF UI  Text']">
                  Aryan Sharma
                </div>
                <div className="text-[#6f6f6f] text-[16px] font-normal font-['SF UI  Text'] leading-none pl-1">
                  OTM Architect
                </div>
                <div className="flex w-full justify-between items-center mt-[4px]">
                  <button
                    className="relative pointer-events-auto overflow-hidden rounded-full opacity-100 flex items-center gap-2"
                    style={{
                      padding: "10px 20px",
                      background: "white",
                      border: "none", // Remove default borders
                    }}
                  >
                    <img src="./aiicon.png" alt="ai icon" />
                    <span
                      style={{ position: "relative", zIndex: 2 }}
                      className="text-[14px] text-transparent bg-clip-text bg-button-text"
                    >
                      AI Summary
                    </span>
                    <div
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{
                        zIndex: 0,
                        background:
                          "linear-gradient(131.04deg, #002DBF 17.73%, #4396F7 49.01%, #FF9BD2 69.29%, #C9FFFC 89.75%)",
                        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMask:
                          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "destination-out",
                        maskComposite: "exclude",
                        padding: "2px", // Controls the border thickness
                      }}
                    ></div>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between pt-[3vh] gap-6 flex-wrap">
                <div className=" px-7 py-2 rounded-3xl flex-col justify-start items-start gap-[16px] inline-flex">
                  <div className="self-stretch px-1 justify-start items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 text-[#282828] text-[18px] font-semibold font-['SF UI  Text'] leading-[18px]">
                      About
                    </div>
                  </div>
                  <div className="self-stretch flex-col justify-start items-start gap-1 flex max-[950px]:flex-row max-[950px]:gap-5 max-[950px]:flex-wrap">
                    <div className="self-stretch justify-start items-center gap-1 inline-flex">
                      <div className="py-1 justify-start items-center gap-4 flex">
                        <svg
                          width="24"
                          height="32"
                          viewBox="0 0 24 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 23V9.70046C3 9.27995 3.26307 8.90437 3.65826 8.76067L13.3291 5.24398C13.5886 5.14961 13.8755 5.28349 13.9699 5.54301C13.9898 5.59778 14 5.65561 14 5.71388V10.6667L20.3162 12.7721C20.7246 12.9082 21 13.2904 21 13.7208V23H22C22.5523 23 23 23.4477 23 24V24C23 24.5523 22.5523 25 22 25H2C1.44772 25 1 24.5523 1 24V24C1 23.4477 1.44772 23 2 23H3ZM5 23H12V7.85543L5 10.4009V23ZM19 23V14.4416L14 12.7749V23H19Z"
                            fill="#0072DC"
                          />
                        </svg>

                        <span className="text-[#6f6f6f] text-[16px] font-normal font-['SF UI  Text'] leading-none inline-flex">
                          Company&nbsp;:
                        </span>
                      </div>
                      <div className="grow shrink basis-0 text-[#1e1e1e] text-[16px] font-normal font-['SF UI  Text'] leading-none">
                        TCS
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-center gap-1 inline-flex">
                      <div className="py-1 justify-start items-center gap-4 flex">
                        <svg
                          width="24"
                          height="32"
                          viewBox="0 0 24 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 23V9.70046C3 9.27995 3.26307 8.90437 3.65826 8.76067L13.3291 5.24398C13.5886 5.14961 13.8755 5.28349 13.9699 5.54301C13.9898 5.59778 14 5.65561 14 5.71388V10.6667L20.3162 12.7721C20.7246 12.9082 21 13.2904 21 13.7208V23H22C22.5523 23 23 23.4477 23 24V24C23 24.5523 22.5523 25 22 25H2C1.44772 25 1 24.5523 1 24V24C1 23.4477 1.44772 23 2 23H3ZM5 23H12V7.85543L5 10.4009V23ZM19 23V14.4416L14 12.7749V23H19Z"
                            fill="#0072DC"
                          />
                        </svg>

                        <span className="text-[#6f6f6f] text-[16px] font-normal font-['SF UI Text'] leading-none inline-flex">
                          Experience&nbsp;:
                        </span>
                      </div>
                      <div className="grow shrink basis-0 text-[#1e1e1e] text-[16px] font-normal font-['SF UI  Text'] leading-none">
                        5 years
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-center gap-1 inline-flex">
                      <div className="py-1 justify-start items-center gap-4 flex">
                        <svg
                          width="24"
                          height="32"
                          viewBox="0 0 24 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 8H4V6H20V8H18V10C18 11.6154 17.1838 12.9147 16.1561 13.9767C15.4532 14.703 14.598 15.372 13.7309 16C14.598 16.628 15.4532 17.297 16.1561 18.0233C17.1838 19.0853 18 20.3846 18 22V24H20V26H4V24H6V22C6 20.3846 6.81616 19.0853 7.8439 18.0233C8.54682 17.297 9.40202 16.628 10.2691 16C9.40202 15.372 8.54682 14.703 7.8439 13.9767C6.81616 12.9147 6 11.6154 6 10V8ZM8 8V10C8 10.8846 8.43384 11.7103 9.2811 12.5858C10.008 13.337 10.9548 14.0398 12 14.7781C13.0452 14.0398 13.992 13.337 14.7189 12.5858C15.5662 11.7103 16 10.8846 16 10V8H8ZM12 17.2219C10.9548 17.9602 10.008 18.663 9.2811 19.4142C8.43384 20.2897 8 21.1154 8 22V24H16V22C16 21.1154 15.5662 20.2897 14.7189 19.4142C13.992 18.663 13.0452 17.9602 12 17.2219Z"
                            fill="#0072DC"
                          />
                        </svg>

                        <span className="text-[#6f6f6f] text-[16px] font-normal font-['SF UI  Text'] leading-none inline-flex">
                          Location&nbsp;:
                        </span>
                      </div>
                      <div className="grow shrink basis-0 text-[#1e1e1e] text-[16px] font-normal font-['SF UI  Text'] leading-none">
                        Kolkata{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-7 py-2 rounded-3xl flex-col justify-start items-start gap-[16px] inline-flex">
                  <div className="self-stretch px-1 justify-start items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 text-[#282828] text-[18px] font-semibold font-['SF UI  Text'] leading-[18px]">
                      Skills
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-2 flex flex-wrap">
                    <div className="px-3 py-2 bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 flex">
                      <div className="text-black text-[16px] font-normal font-['SF UI  Text'] leading-none">
                        User Research
                      </div>
                    </div>
                    <div className="px-3 py-2 bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 flex">
                      <div className="text-black text-[16px] font-normal font-['SF UI  Text'] leading-none">
                        Framer
                      </div>
                    </div>
                    <div className="px-3 py-2 bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 flex">
                      <div className="text-black text-[16px] font-normal font-['SF UI  Text'] leading-none">
                        Canva
                      </div>
                    </div>
                    <div className="px-3 py-2 bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 flex">
                      <div className="text-black text-[16px] font-normal font-['SF UI  Text'] leading-none">
                        Figma
                      </div>
                    </div>
                    <div className="px-3 py-2 bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 flex">
                      <div className="text-black text-[16px] font-normal font-['SF UI  Text'] leading-none">
                        Photoshop
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-end px-7 py-2">
                  <div
                    className="ButtonsCta py-4 px-9 bg-[#0071db] rounded-[30px] shadow justify-center max-w-[235px] items-center gap-2 inline-flex cursor-pointer"
                    onClick={() => setIsCandidateSelected(!isCandidateSelected)}
                  >
                    <div className="ButtonLabel text-center inline-flex">
                      {isCandidateSelected ? (
                        <>
                          <span className="text-white text-[18px] font-['SF UI  Text'] leading-[18px]">
                            Schedule&nbsp;
                          </span>
                          <span className="text-white text-[18px] font-['SF UI  Text'] leading-[18px]">
                            Interview
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="text-white text-[18px] font-['SF UI  Text'] leading-[18px]">
                            Finalize&nbsp;
                          </span>
                          <span className="text-white text-[18px] font-['SF UI  Text'] leading-[18px]">
                            Candidate
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* score card */}
      <div className="grid grid-cols-3 mt-[4vh] justify-between px-[60px] gap-[2vw]  max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:px-5  max-w-[1224px] mx-auto">
        <div className=" px-7 py-8 bg-white rounded-3xl shadow-[0px_0px_24px_0px_rgba(211,136,255,0.45)] flex-col justify-center items-center gap-9 inline-flex">
          <div className="self-stretch text-center text-[#1e1e1e] text-[24px] font-semibold font-['SF UI  Text'] leading-normal">
            Cummulative Score
          </div>
          <div className="self-stretch grow basis-0 flex-col justify-center items-center flex">
            <div className="justify-start items-start inline-flex">
              <div className="text-center text-[#24df3a] text-[48px] font-semibold font-['SF UI Display'] leading-[48px]">
                86%
              </div>
            </div>
          </div>
        </div>
        <div className=" px-7 py-8 bg-white rounded-3xl shadow-[0px_0px_24px_0px_rgba(211,136,255,0.45)] flex-col  items-center gap-3 inline-flex">
          <div className="self-stretch text-center text-[#1e1e1e] text-[24px] font-semibold font-['SF UI  Text'] leading-normal">
            Rank
          </div>
          <div className="justify-start items-start gap-[20px] inline-flex">
            <div className="px-2 py-1 justify-center items-center gap-9 flex">
              <div className="flex-col justify-start items-center gap-6 inline-flex">
                <div className="flex-col justify-start items-center gap-1 flex">
                  <img className="w-[130px] h-[130px] relative" src={Rank} />
                  <div className="justify-center items-end gap-0.5 inline-flex">
                    <div className="text-center text-[#0f0f36] text-[28px] font-semibold font-['SF UI Display'] leading-7">
                      12
                    </div>
                    <div className="text-center text-[#0f0f36] text-[28px] font-semibold font-['SF UI Display'] leading-7">
                      th
                    </div>
                  </div>
                </div>
                <div className="text-center text-[#6f6f6f] text-[18px] font-normal font-['SF UI  Text'] leading-[18px]">
                  AI Interview
                </div>
              </div>
            </div>
            <div className="px-2 py-1 justify-center items-center gap-9 flex">
              <div className="flex-col justify-start items-center gap-6 inline-flex">
                <div className="flex-col justify-start items-center gap-1 flex">
                  <img className="w-[130px] h-[130px] relative" src={Rank} />
                  <div className="justify-center items-end gap-0.5 inline-flex">
                    <div className="text-center text-[#0f0f36] text-[28px] font-semibold font-['SF UI Display'] leading-7">
                      9
                    </div>
                    <div className="text-center text-[#0f0f36] text-[28px] font-semibold font-['SF UI Display'] leading-7">
                      th
                    </div>
                  </div>
                </div>
                <div className="text-center text-[#6f6f6f] text-[18px] font-normal font-['SF UI  Text'] leading-[18px]">
                  AI Technical
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" px-10 py-7 bg-white rounded-3xl shadow-[0px_0px_24px_0px_rgba(211,136,255,0.45)] flex-col justify-start items-center gap-[32px] inline-flex">
          <div className="self-stretch h-12 flex-col justify-start items-center gap-2 flex">
            <div className="self-stretch text-center text-[#1e1e1e] text-[24px] font-semibold font-['SF UI  Text'] leading-normal">
              Profile Match
            </div>
            <div className="text-center text-[#6f6f6f] text-[16px] font-normal font-['SF UI  Text'] leading-none">
              with job opening
            </div>
          </div>
          <div className="py-[16px] px-[8px] flex flex-col gap-[24px]">
            <div className="py-[16px] px-[12px] rounded-[12px] bg-[#F5F5F5] flex items-center gap-[12px]">
              <span className="text-[24px] font-semibold font-['SF UI Display'] leading-[24px] text-transparent bg-clip-text bg-gradient-text">
                Main Skills
              </span>
              <span className="text-[24px] font-semibold font-['SF UI Display'] leading-[24px] text-transparent bg-clip-text bg-gradient-text">
                82%
              </span>
            </div>
            <div className="py-[16px] px-[12px] rounded-[12px] bg-[#F5F5F5] flex items-center gap-[12px]">
              <span className="text-[24px] font-semibold font-['SF UI Display'] leading-[24px] text-transparent bg-clip-text bg-gradient-text">
                Sub Skills
              </span>
              <span className="text-[24px] font-semibold font-['SF UI Display'] leading-[24px] text-transparent bg-clip-text bg-gradient-text">
                68%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Interview */}
      <div className="flex flex-col  py-[4vh] px-[8vh] max-md:px-10 mt-[4vh] max-sm:mx-5 gap-[20px] bg-white rounded-3xl shadow  max-w-[1224px] mx-auto">
        <div className="flex justify-between max-[500px]:flex-col max-[500px]:gap-3">
          <div className="flex flex-col gap-[6px]">
            <div className="flex flex-col gap-[1vh]">
              <div className="text-[#1e1e1e] text-xl font-normal font-['SF UI  Text'] uppercase leading-none tracking-wide">
                Round 1
              </div>
              <div className="text-[#1e1e1e] text-2xl font-semibold font-['SF UI  Text'] leading-normal">
                AI Interview
              </div>
            </div>
            <div className="flex items-center gap-[24px]">
              <div className="flex items-center gap-1">
                <img src="./radio-btn.png" alt="radio button image" />
                <span className="text-[12px] text-[#161616]">AI Assisted</span>
              </div>
              <div className="flex items-center gap-1">
                <img src="./radio-btn.png" alt="radio button image" />
                <span className="text-[12px] text-[#161616]">Proctored</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <span className="text-[12px] text-[#6F6F6F] font-bold">
              Taken on : 12th December 2024
            </span>
            <span className="text-[12px] text-[#6F6F6F] font-bold">
              Duration : 30 mins
            </span>
          </div>
        </div>
        <div className="flex gap-[4vh] justify-between flex-wrap max-sm:flex-col">
          <div className="w-[25%] flex flex-col gap-[24px] max-[900px]:justify-center max-sm:w-full max-sm:items-center">
            <div className="flex items-center">
              <CircularLoader progress={75} />
            </div>
            <button
              className="relative pointer-events-auto overflow-hidden rounded-full opacity-100 flex items-center gap-2 w-fit"
              style={{
                padding: "10px 20px",
                background: "white",
                border: "none", // Remove default borders
              }}
              onClick={toogleAiInterview}
            >
              <img src="./aiicon.png" alt="ai icon" />
              <span
                style={{ position: "relative", zIndex: 2 }}
                className="text-[14px] text-transparent bg-clip-text bg-button-text font-semibold"
              >
                Summarize
              </span>
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  zIndex: 0,
                  background:
                    "linear-gradient(131.04deg, #002DBF 17.73%, #4396F7 49.01%, #FF9BD2 69.29%, #C9FFFC 89.75%)",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "destination-out",
                  maskComposite: "exclude",
                  padding: "2px", // Controls the border thickness
                }}
              ></div>
            </button>
          </div>
          <div className="w-[40%] flex flex-col gap-[5vh] max-sm:w-full">
            <div className="flex flex-col gap-[16px]">
              <div className="text-[#1e1e1e] text-[18px] font-semibold font-['SF UI  Text'] leading-[18px]">
                Strengths
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="h-8 w-fit px-[12px] py-[8px] bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 inline-flex">
                  <div className="text-black text-[16px] font-normal font-['SF UI  Text'] leading-none">
                    Communication
                  </div>
                </div>
                <div className="h-8 w-fit px-[12px] py-[8px] bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 inline-flex">
                  <div className="text-black text-[16px] font-normal font-['SF UI  Text'] leading-none">
                    Visual Design
                  </div>
                </div>
                <div className="h-8 w-fit px-[12px] py-[8px] bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 inline-flex">
                  <div className="text-black text-[16px] font-normal font-['SF UI  Text'] leading-none">
                    Adaptive
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <div className="text-[#1e1e1e] text-[18px] font-semibold font-['SF UI  Text'] leading-[18px]">
                Weaknesses
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="h-8 w-fit px-[12px] py-[8px] bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 inline-flex">
                  <div className="text-black text-[16px] font-normal font-['SF UI  Text'] leading-none">
                    Public Speaking
                  </div>
                </div>
                <div className="h-8 w-fit px-[12px] py-[8px] bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 inline-flex">
                  <div className="text-black text-[16px] font-normal font-['SF UI  Text'] leading-none">
                    Perfectionism
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[20%] max-[900px]:w-full flex flex-col  justify-between">
            <div className="flex flex-col gap-[16px]">
              <div className="text-[#1e1e1e] text-xl font-semibold font-['SF UI  Text'] leading-[18px]">
                Role Fit
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="h-8 w-fit px-[12px] py-[8px] bg-neutral-100 rounded shadow-[0px_0px_4px_0px_#D388FF] border border-[#EA63E7] justify-start items-center gap-2 inline-flex">
                  <div className="text-black text-[16px] font-normal font-['SF UI  Text'] leading-none">
                    Senior
                  </div>
                </div>
                <div className="h-8 w-fit px-[12px] py-[8px] bg-neutral-100 rounded shadow-[0px_0px_4px_0px_#D388FF] border border-[#EA63E7] justify-start items-center gap-2 inline-flex">
                  <div className="text-black text-[16px] font-normal font-['SF UI  Text'] leading-none">
                    Mid-level
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-5 max-[900px]:mx-auto">
              <div className="h-10 px-[16px] py-2 rounded-[30px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0071db] justify-center items-center gap-1 inline-flex">
                <button className="text-center text-[#0071db] text-[14px] font-semibold font-['SF UI  Text'] leading-[14px]">
                  View more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`px-8 py-5 rounded-xl flex-col justify-center items-start gap-4 inline-flex transition-all duration-500 ease-in-out ${
            isAiInterviewOpen
              ? "opacity-100 max-h-[500px]"
              : "opacity-0 max-h-0 overflow-hidden"
          }`}
          style={{
            background:
              "linear-gradient(135deg, rgba(0, 45, 191, 0.30) -1.89%, rgba(67, 150, 247, 0.24) 45.88%, rgba(255, 155, 210, 0.42) 76.85%, rgba(201, 255, 252, 0.42) 108.11%)",
          }}
        >
          <div className="justify-start items-center gap-1 inline-flex">
            <div className="w-6 h-6 pl-[3px] pr-0.5 pt-px pb-[1.08px] justify-center items-center flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="22"
                viewBox="0 0 19 22"
                fill="none"
              >
                <path
                  d="M9.39632 5.41157C9.57676 4.92392 10.2665 4.92392 10.4469 5.41157L11.974 9.53835C12.1442 9.9983 12.5068 10.3609 12.9668 10.5311L17.0935 12.0582C17.5812 12.2386 17.5812 12.9284 17.0935 13.1088L12.9668 14.6358C12.5068 14.806 12.1442 15.1687 11.974 15.6286L10.4469 19.7554C10.2665 20.2431 9.57676 20.2431 9.39632 19.7554L7.86927 15.6286C7.69907 15.1687 7.33643 14.806 6.87649 14.6358L2.7497 13.1088C2.26205 12.9284 2.26205 12.2386 2.7497 12.0582L6.87649 10.5311C7.33643 10.3609 7.69907 9.9983 7.86927 9.53835L9.39632 5.41157Z"
                  fill="#323232"
                />
                <path
                  d="M16.4871 14.1136C16.5773 13.8698 16.9221 13.8698 17.0124 14.1136L17.3128 14.9255C17.3411 15.0021 17.4016 15.0626 17.4782 15.0909L18.2901 15.3913C18.5339 15.4816 18.5339 15.8264 18.2901 15.9167L17.4782 16.2171C17.4016 16.2454 17.3411 16.3059 17.3128 16.3825L17.0124 17.1944C16.9221 17.4382 16.5773 17.4382 16.4871 17.1944L16.1866 16.3825C16.1583 16.3059 16.0978 16.2454 16.0212 16.2171L15.2093 15.9167C14.9655 15.8264 14.9655 15.4816 15.2093 15.3913L16.0212 15.0909C16.0978 15.0626 16.1583 15.0021 16.1866 14.9255L16.4871 14.1136Z"
                  fill="#323232"
                />
                <path
                  d="M4.25314 1.4206C4.43358 0.932952 5.12331 0.932953 5.30375 1.4206L5.89976 3.03128C5.95649 3.1846 6.07737 3.30548 6.23069 3.36221L7.84137 3.95821C8.32902 4.13866 8.32901 4.82839 7.84136 5.00883L6.23069 5.60484C6.07737 5.66157 5.95649 5.78245 5.89976 5.93576L5.30375 7.54644C5.12331 8.03409 4.43358 8.03409 4.25314 7.54644L3.65713 5.93576C3.6004 5.78245 3.47952 5.66157 3.3262 5.60484L1.71552 5.00883C1.22787 4.82838 1.22788 4.13866 1.71553 3.95821L3.3262 3.36221C3.47952 3.30548 3.6004 3.1846 3.65713 3.03128L4.25314 1.4206Z"
                  fill="#323232"
                />
                <path
                  d="M14.4903 3.73633L15.0625 5.28259C15.1476 5.51256 15.3289 5.69388 15.5589 5.77898L17.1051 6.35115L15.5589 6.92331C15.3289 7.00841 15.1476 7.18973 15.0625 7.41971L14.4903 8.96597L13.9181 7.41971C13.833 7.18973 13.6517 7.00841 13.4217 6.92331L11.8755 6.35115L13.4217 5.77898C13.6517 5.69388 13.833 5.51256 13.9181 5.28259L14.4903 3.73633Z"
                  fill="#323232"
                />
                <path
                  d="M4.78226 15.9268C4.97935 15.7572 5.281 15.9244 5.24174 16.1814L5.0341 17.5406C5.02175 17.6214 5.04533 17.7035 5.09863 17.7655L5.99526 18.8079C6.1648 19.0049 5.99765 19.3066 5.74065 19.2673L4.38147 19.0597C4.30067 19.0473 4.21851 19.0709 4.15655 19.1242L3.11418 20.0209C2.91708 20.1904 2.61544 20.0232 2.6547 19.7662L2.86234 18.4071C2.87468 18.3263 2.85111 18.2441 2.79781 18.1821L1.90117 17.1398C1.73163 16.9427 1.89878 16.641 2.15578 16.6803L3.51496 16.8879C3.59576 16.9003 3.67792 16.8767 3.73989 16.8234L4.78226 15.9268Z"
                  fill="#323232"
                />
              </svg>
            </div>
            <div className={`flex justify-start items-center gap-2`}>
              <div className="text-center text-[#1e1e1e] text-xl font-semibold font-['SF UI  Text'] leading-[18px]">
                AI Summary
              </div>
            </div>
          </div>
          <div className="self-stretch text-justify text-black text-lg font-normal font-['SF UI  Text'] leading-tight">
            The candidate achieved an overall score of 65% in the AI interview.
            Key strengths include effective communication, strong
            problem-solving abilities, quick adaptability, analytical thinking,
            and teamwork. However, the candidate demonstrated weaknesses in
            leadership experience, time management, technical expertise, and
            reliance on structured processes. Overall, the candidate is highly
            suitable for collaborative and problem-solving roles but may need
            upskilling to excel in leadership positions. For more details, click
            "View More".
          </div>
        </div>
      </div>

      {/* AI Technical */}
      <div className="flex flex-col self-stretch py-[4vh] px-[8vh] max-md:px-10 mt-[4vh]  max-sm:mx-5 gap-[20px] bg-white rounded-3xl shadow  max-w-[1224px] mx-auto">
        <div className="flex justify-between max-[500px]:flex-col max-[500px]:gap-3">
          <div className="flex flex-col gap-[6px]">
            <div className="flex flex-col gap-[1vh]">
              <div className="text-[#1e1e1e] text-xl font-normal font-['SF UI  Text'] uppercase leading-none tracking-wide">
                Round 2
              </div>
              <div className="text-[#1e1e1e] text-2xl font-semibold font-['SF UI  Text'] leading-normal">
                AI Technical
              </div>
            </div>
            <div className="flex items-center gap-[24px]">
              <div className="flex items-center gap-1">
                <img src="./radio-btn.png" alt="radio button image" />
                <span className="text-[12px] text-[#161616]">AI Assisted</span>
              </div>
              <div className="flex items-center gap-1">
                <img src="./radio-btn.png" alt="radio button image" />
                <span className="text-[12px] text-[#161616]">Proctored</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <span className="text-[12px] text-[#6F6F6F] font-bold">
              Taken on : 12th December 2024
            </span>
            <span className="text-[12px] text-[#6F6F6F] font-bold">
              Duration : 30 mins
            </span>
          </div>
        </div>
        <div className="flex gap-[4vh] justify-between flex-wrap max-sm:flex-col">
          <div className="w-[25%] flex flex-col gap-[24px] max-[900px]:justify-center max-sm:w-full max-sm:items-center">
            <div className="flex items-center">
              <CircularLoader progress={75} />
            </div>
            <button
              className="relative pointer-events-auto overflow-hidden rounded-full opacity-100 flex items-center gap-2 w-fit"
              style={{
                padding: "10px 20px",
                background: "white",
                border: "none", // Remove default borders
              }}
              onClick={toogleAiTechnical}
            >
              <img src="./aiicon.png" alt="ai icon" />
              <span
                style={{ position: "relative", zIndex: 2 }}
                className="text-[14px] text-transparent bg-clip-text bg-button-text font-semibold"
              >
                Summarize
              </span>
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  zIndex: 0,
                  background:
                    "linear-gradient(131.04deg, #002DBF 17.73%, #4396F7 49.01%, #FF9BD2 69.29%, #C9FFFC 89.75%)",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "destination-out",
                  maskComposite: "exclude",
                  padding: "2px", // Controls the border thickness
                }}
              ></div>
            </button>
          </div>
          <div className="w-[40%] flex flex-col gap-[5vh] max-sm:w-full">
            <div className="flex flex-col gap-[16px]">
              <div className="text-[#1e1e1e] text-[18px] font-semibold font-['SF UI  Text'] leading-[18px]">
                Strengths
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="h-8 w-fit px-[12px] py-[8px] bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 inline-flex">
                  <div className="text-black text-[16px] font-normal font-['SF UI  Text'] leading-none">
                    Communication
                  </div>
                </div>
                <div className="h-8 w-fit px-[12px] py-[8px] bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 inline-flex">
                  <div className="text-black text-[16px] font-normal font-['SF UI  Text'] leading-none">
                    Visual Design
                  </div>
                </div>
                <div className="h-8 w-fit px-[12px] py-[8px] bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 inline-flex">
                  <div className="text-black text-[16px] font-normal font-['SF UI  Text'] leading-none">
                    Adaptive
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <div className="text-[#1e1e1e] text-[18px] font-semibold font-['SF UI  Text'] leading-[18px]">
                Weaknesses
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="h-8 w-fit px-[12px] py-[8px] bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 inline-flex">
                  <div className="text-black text-[16px] font-normal font-['SF UI  Text'] leading-none">
                    Public Speaking
                  </div>
                </div>
                <div className="h-8 w-fit px-[12px] py-[8px] bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 inline-flex">
                  <div className="text-black text-[16px] font-normal font-['SF UI  Text'] leading-none">
                    Perfectionism
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[20%] max-[900px]:w-full flex flex-col  justify-between">
            <div className="flex flex-col gap-[16px]">
              <div className="text-[#1e1e1e] text-xl font-semibold font-['SF UI  Text'] leading-[18px]">
                Role Fit
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="h-8 w-fit px-[12px] py-[8px] bg-neutral-100 rounded shadow-[0px_0px_4px_0px_#D388FF] border border-[#EA63E7] justify-start items-center gap-2 inline-flex">
                  <div className="text-black text-[16px] font-normal font-['SF UI  Text'] leading-none">
                    Senior
                  </div>
                </div>
                <div className="h-8 w-fit px-[12px] py-[8px] bg-neutral-100 rounded shadow-[0px_0px_4px_0px_#D388FF] border border-[#EA63E7] justify-start items-center gap-2 inline-flex">
                  <div className="text-black text-[16px] font-normal font-['SF UI  Text'] leading-none">
                    Mid-level
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-5 max-[900px]:mx-auto">
              <div className="h-10 px-[16px] py-2 rounded-[30px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0071db] justify-center items-center gap-1 inline-flex">
                <button className="text-center text-[#0071db] text-[14px] font-semibold font-['SF UI  Text'] leading-[14px]">
                  View more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`px-8 py-5 rounded-xl flex-col justify-center items-start gap-4 inline-flex transition-all duration-500 ease-in-out ${
            isAiTechnicalOpen
              ? "opacity-100 max-h-[500px]"
              : "opacity-0 max-h-0 overflow-hidden"
          }`}
          style={{
            background:
              "linear-gradient(135deg, rgba(0, 45, 191, 0.30) -1.89%, rgba(67, 150, 247, 0.24) 45.88%, rgba(255, 155, 210, 0.42) 76.85%, rgba(201, 255, 252, 0.42) 108.11%)",
          }}
        >
          <div className="justify-start items-center gap-1 inline-flex">
            <div className="w-6 h-6 pl-[3px] pr-0.5 pt-px pb-[1.08px] justify-center items-center flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="22"
                viewBox="0 0 19 22"
                fill="none"
              >
                <path
                  d="M9.39632 5.41157C9.57676 4.92392 10.2665 4.92392 10.4469 5.41157L11.974 9.53835C12.1442 9.9983 12.5068 10.3609 12.9668 10.5311L17.0935 12.0582C17.5812 12.2386 17.5812 12.9284 17.0935 13.1088L12.9668 14.6358C12.5068 14.806 12.1442 15.1687 11.974 15.6286L10.4469 19.7554C10.2665 20.2431 9.57676 20.2431 9.39632 19.7554L7.86927 15.6286C7.69907 15.1687 7.33643 14.806 6.87649 14.6358L2.7497 13.1088C2.26205 12.9284 2.26205 12.2386 2.7497 12.0582L6.87649 10.5311C7.33643 10.3609 7.69907 9.9983 7.86927 9.53835L9.39632 5.41157Z"
                  fill="#323232"
                />
                <path
                  d="M16.4871 14.1136C16.5773 13.8698 16.9221 13.8698 17.0124 14.1136L17.3128 14.9255C17.3411 15.0021 17.4016 15.0626 17.4782 15.0909L18.2901 15.3913C18.5339 15.4816 18.5339 15.8264 18.2901 15.9167L17.4782 16.2171C17.4016 16.2454 17.3411 16.3059 17.3128 16.3825L17.0124 17.1944C16.9221 17.4382 16.5773 17.4382 16.4871 17.1944L16.1866 16.3825C16.1583 16.3059 16.0978 16.2454 16.0212 16.2171L15.2093 15.9167C14.9655 15.8264 14.9655 15.4816 15.2093 15.3913L16.0212 15.0909C16.0978 15.0626 16.1583 15.0021 16.1866 14.9255L16.4871 14.1136Z"
                  fill="#323232"
                />
                <path
                  d="M4.25314 1.4206C4.43358 0.932952 5.12331 0.932953 5.30375 1.4206L5.89976 3.03128C5.95649 3.1846 6.07737 3.30548 6.23069 3.36221L7.84137 3.95821C8.32902 4.13866 8.32901 4.82839 7.84136 5.00883L6.23069 5.60484C6.07737 5.66157 5.95649 5.78245 5.89976 5.93576L5.30375 7.54644C5.12331 8.03409 4.43358 8.03409 4.25314 7.54644L3.65713 5.93576C3.6004 5.78245 3.47952 5.66157 3.3262 5.60484L1.71552 5.00883C1.22787 4.82838 1.22788 4.13866 1.71553 3.95821L3.3262 3.36221C3.47952 3.30548 3.6004 3.1846 3.65713 3.03128L4.25314 1.4206Z"
                  fill="#323232"
                />
                <path
                  d="M14.4903 3.73633L15.0625 5.28259C15.1476 5.51256 15.3289 5.69388 15.5589 5.77898L17.1051 6.35115L15.5589 6.92331C15.3289 7.00841 15.1476 7.18973 15.0625 7.41971L14.4903 8.96597L13.9181 7.41971C13.833 7.18973 13.6517 7.00841 13.4217 6.92331L11.8755 6.35115L13.4217 5.77898C13.6517 5.69388 13.833 5.51256 13.9181 5.28259L14.4903 3.73633Z"
                  fill="#323232"
                />
                <path
                  d="M4.78226 15.9268C4.97935 15.7572 5.281 15.9244 5.24174 16.1814L5.0341 17.5406C5.02175 17.6214 5.04533 17.7035 5.09863 17.7655L5.99526 18.8079C6.1648 19.0049 5.99765 19.3066 5.74065 19.2673L4.38147 19.0597C4.30067 19.0473 4.21851 19.0709 4.15655 19.1242L3.11418 20.0209C2.91708 20.1904 2.61544 20.0232 2.6547 19.7662L2.86234 18.4071C2.87468 18.3263 2.85111 18.2441 2.79781 18.1821L1.90117 17.1398C1.73163 16.9427 1.89878 16.641 2.15578 16.6803L3.51496 16.8879C3.59576 16.9003 3.67792 16.8767 3.73989 16.8234L4.78226 15.9268Z"
                  fill="#323232"
                />
              </svg>
            </div>
            <div className={`flex justify-start items-center gap-2`}>
              <div className="text-center text-[#1e1e1e] text-xl font-semibold font-['SF UI  Text'] leading-[18px]">
                AI Summary
              </div>
            </div>
          </div>
          <div className="self-stretch text-justify text-black text-lg font-normal font-['SF UI  Text'] leading-tight">
            The candidate achieved an overall score of 65% in the AI interview.
            Key strengths include effective communication, strong
            problem-solving abilities, quick adaptability, analytical thinking,
            and teamwork. However, the candidate demonstrated weaknesses in
            leadership experience, time management, technical expertise, and
            reliance on structured processes. Overall, the candidate is highly
            suitable for collaborative and problem-solving roles but may need
            upskilling to excel in leadership positions. For more details, click
            "View More".
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2  py-[4vh]  mt-[1vh] gap-[20px] max-lg:grid-cols-1 max-sm:mx-[10px]  max-w-[1224px] mx-auto">
        <SkillSection />
        <RadarChart data={data} labels={labels} />
      </div>
    </div>
  );
};

export default applicant;
