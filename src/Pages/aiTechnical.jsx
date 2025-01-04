import React, { useState, useRef, useEffect } from "react";
import { Editor } from "@monaco-editor/react";

import image1 from "../assets/image1.png";
import image2 from "../assets/Aspireit.png";
import image3 from "../assets/Ellipse 1872.svg";
import image4 from "../assets/Type=Layila.svg";
import image5 from "../assets/buttons-cta.svg";
import image6 from "../assets/Profile picture.png";
import { FaChevronDown } from "react-icons/fa6";

//  ------------------ Piechart function ---------------
const HalfCircleChart = ({ percentage }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0); // Initial percentage for animation
  const radius = 54; // Radius of the circle
  const circumference = Math.PI * radius; // Circumference of the half-circle
  const dashOffset = circumference - (animatedPercentage / 100) * circumference; // Adjust to match animated percentage

  useEffect(() => {
    // Trigger animation after component mounts
    const timeout = setTimeout(() => setAnimatedPercentage(percentage), 100);
    return () => clearTimeout(timeout); // Cleanup timeout
  }, [percentage]);

  return (
    <div className="relative flex items-center justify-center w-32 h-16">
      {/* Foreground Gradient Half-Circle */}
      <svg
        width="180px"
        height="110%"
        viewBox="0 0 120 60"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="#3E41B5" />
            <stop offset="25%" stopColor="#9BFF9C" />
            <stop offset="50%" stopColor="#F7DF43" />
            <stop offset="100%" stopColor="#CD3232" />
          </linearGradient>
        </defs>
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="url(#gradient)"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          transform="rotate(180, 60, 60)"
          style={{
            transition: "stroke-dashoffset 1s ease-in-out", // Smooth animation
          }}
        />
      </svg>

      {/* Percentage Display */}
      <div className="absolute top-8 text-center text-[#0f0f36] text-2xl font-semibold font-['SF UI Text'] leading-normal">
        {animatedPercentage}%
      </div>
    </div>
  );
};

const AiTechnical = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [isFocused1, setisFocused1] = useState(false);
  const inputRef = useRef(null);
  const [isCandidateSelected, setIsCandidateSelected] = useState(false);

  const AssessmentData = [
    [
      {
        heading:
          "You are developing a system for a bookstore to manage its inventory. The bookstore has a unique way of organizing books: they are arranged in a circular queue, where the front of the queue connects back to the rear. Each book in the queue has a title and a price. The store owner wants to implement a feature that finds the most expensive book within a given range of the queue, considering its circular nature.  Write a function that takes the circular queue of books, a start position, and the number of books to consider, and returns the title of the most expensive book within that range.",
        input:
          "Queue:    [{‘The Hobbit’  , 15}, (‘1984’  ,   10),    (‘To Kill a Mockingbird’, 12), (‘Pride and Prejudice’, 9)  ,  ( ‘The Great Gatsby’  ,  11} ] ,  Start:  2,  Range:  4.",
        output: "The Hobbit",
        explanation:
          "Starting from ‘To Kill a Mockingbird’, considering 4 books, we wrap around to ‘The Hobbit’, which is the most expensive is $15.",
      },
      {
        assessment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        level: 50,
      },
    ],
    [
      {
        heading:
          "You are developing a system for a bookstore to manage its inventory. The bookstore has a unique way of organizing books: they are arranged in a circular queue, where the front of the queue connects back to the rear. Each book in the queue has a title and a price. The store owner wants to implement a feature that finds the most expensive book within a given range of the queue, considering its circular nature.  Write a function that takes the circular queue of books, a start position, and the number of books to consider, and returns the title of the most expensive book within that range.",
        input:
          "Queue:    [{‘The Hobbit’  , 15}, (‘1984’  ,   10),    (‘To Kill a Mockingbird’, 12), (‘Pride and Prejudice’, 9)  ,  ( ‘The Great Gatsby’  ,  11} ] ,  Start:  2,  Range:  4.",
        output: "The Hobbit",
        explanation:
          "Starting from ‘To Kill a Mockingbird’, considering 4 books, we wrap around to ‘The Hobbit’, which is the most expensive is $15.",
      },
      {
        assessment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        level: 100,
      },
    ],
  ];

  const [isExpanded, setIsExpanded] = useState(false); // Track if the editor is expanded
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  const [tempLanguage, setTempLanguage] = useState("python");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const codeEditorRef = useRef("");

  const toggleExpand = () => {
    setIsExpanded((prevState) => !prevState); // Toggle the editor size
  };

  useEffect(() => {
    const fetchLanguages = async () => {
      const monaco = await import("monaco-editor");
      const availableLanguages = monaco.languages
        .getLanguages()
        .map((lang) => ({
          label: lang.id,
          value: lang.id,
        }));
      setLanguages(availableLanguages);

      if (availableLanguages.some((lang) => lang.value === "python")) {
        setSelectedLanguage("python");
      }
    };

    fetchLanguages();
  }, []);

  const [expandedStates, setExpandedStates] = useState(
    Array(AssessmentData.length).fill({ assessment: false })
  );

  const handleToggle = (index, field) => {
    setExpandedStates((prevStates) =>
      prevStates.map((state, i) =>
        i === index ? { ...state, [field]: !state[field] } : state
      )
    );
  };

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

  return (
    <div className="bg-[#F2F2F2]">
      {/*------- Navbar --------- */}
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

      {/*------- Center Card --------- */}

      <div className="flex justify-between items-center px-[50px] py-6 mt-[2rem] max-md:px-5 max-w-[1224px] mx-auto">
        <div className="w-full gap-6">
          <div>
            <div className="w-full h-full flex justify-between items-center px-1">
              <div className="text-black text-[28px] font-bold leading-9 font-[SF UI Text] break-words max-sm:text-[24px]">
                AI Technical
              </div>
              <div className="flex items-center gap-1">
                <p className="text-[24px] font-semibold max-sm:text-[20px]">
                  Code Quality :{" "}
                </p>
                <span className="text-[24px] font-semibold text-[#0072DC] max-sm:text-[20px]">
                  {" "}
                  High
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*------- Question Card --------- */}
      <div className="px-[48px] pb-8 mt-[2rem] max-md:px-5 max-w-[1224px] mx-auto">
        {AssessmentData.map((dataGroup, index) => (
          <div key={index} className="pb-8">
            <div className="flex rounded-[24px] px-[24px] py-[32px] bg-[#FFF] shadow-[0px_0px_4px_0px_#00000040]">
              <div className="flex pr-3 w-fit">
                <span className="flex justify-center items-center w-11 h-11 rounded-full border border-[#6f6f6f] text-[#6f6f6f] text-[20px]">
                  {index + 1}
                </span>
              </div>
              {/* Question Section */}
              <div>
                <div className="flex flex-col gap-[16px]">
                  <div className="Text text-[#6f6f6f] text-[18px] font-semibold font-['SF UI Text'] leading-7">
                    {dataGroup[0].heading}
                  </div>
                  <div className="Text text-[#0f0f36] text-[16px] font-semibold font-['SF UI  Text'] leading-normal">
                    Example:
                  </div>
                  <div className="Text text-[#0f0f36] text-[16px] font-semibold font-['SF UI Text'] leading-normal">
                    Input: {dataGroup[0].input}
                  </div>
                  <div className="Text text-[#0f0f36] text-[16px] font-semibold font-['SF UI Text'] leading-normal">
                    Output: {dataGroup[0].output}
                  </div>
                  <div className="Text text-[#0f0f36] text-[16px] font-semibold font-['SF UI Text'] leading-normal">
                    Explanation: {dataGroup[0].explanation}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-1 bg-none py-4 ">
              {/* Left side code editor container */}
              <div
                className={`w-[100%]  p-6 relative  rounded-[30px] border border-black bg-[black]   ${
                  isExpanded ? "h-[90vh]" : "h-[35vh]"
                }`}
              >
                <div className="flex justify-between items-center ">
                  <div className="flex gap-1">
                    <h2 className=" text-[18px] w-fit font-semibold text-white">
                      Language:
                    </h2>
                    {/* <select
                      value={selectedLanguage}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                      className="max-w-[96px] scrollbar-custom text-white bg-[#1E1E1E] outline-none font-semibold text-[18px] border border-black bg-[rgba(15,15,15,0.82)] backdrop-blur-[5px] w-auto  "
                    >
                      {languages.map((lang) => (
                        <option
                          key={lang.value}
                          value={lang.value}
                          className="text-[18px]"
                        >
                          {lang.label.charAt(0).toUpperCase() +
                            lang.label.slice(1)}
                        </option>
                      ))}
                    </select> */}
                    <div className="relative max-w-[96px] w-auto">
                      <select
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                        className="scrollbar-custom text-white bg-[#1E1E1E] outline-none font-semibold text-[18px] max-[500px]:text-[16px] border border-black bg-[rgba(15,15,15,0.82)] w-full backdrop-blur-[5px] appearance-none pr-8"
                      >
                        {languages.map((lang) => (
                          <option
                            key={lang.value}
                            value={lang.value}
                            className="text-[18px]"
                          >
                            {lang.label.charAt(0).toUpperCase() +
                              lang.label.slice(1)}
                          </option>
                        ))}
                      </select>
                      <FaChevronDown className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white pointer-events-none w-5 h-5" />
                    </div>
                  </div>

                  <div className=" shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-[30px] border-[2px] border-[#0072DC] flex justify-center items-center gap-2.5 cursor-pointer">
                    <div
                      onClick={toggleExpand}
                      className="text-center text-[#0072DC] text-[18px]  leading-[36px] font-[SF_UI_Text] break-words px-[20px] max-sm:text-[16px] max-sm:px-5"
                    >
                      {isExpanded ? "Collapse Code" : "Expand Code"}
                    </div>
                  </div>
                </div>
                <div className="h-full py-8">
                  <Editor
                    height="100%"
                    language={selectedLanguage}
                    defaultValue={"// Write your code here..."}
                    theme="vs-dark"
                    className="custom-monaco-editor" // Custom class for background styling
                    onMount={(editor) => {
                      codeEditorRef.current = editor;
                      const currentValue = editor.getValue();
                      const lines = currentValue.split("\n");
                      const nextLine = lines.length + 1;
                      editor.setPosition({ lineNumber: nextLine, column: 1 });
                      editor.focus();
                    }}
                    options={{
                      minimap: { enabled: false },
                      scrollbar: { vertical: "hidden", horizontal: "hidden" },
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Language Change Popup */}
            {isPopupVisible && (
              <div className=" fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-black bg-opacity-50 rounded-lg ">
                <div className="bg-white p-5 rounded-lg text-center">
                  <h3>Are you sure you want to change the language?</h3>
                  <div className="mt-4">
                    <button
                      onClick={() => setIsPopupVisible(false)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setIsPopupVisible(false)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md"
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Assessment Section */}

            <div className="flex rounded-[24px] px-[64px] py-[32px] bg-[#FFF] shadow-[0px_0px_4px_0px_#00000040] mb-6 max-md:px-10">
              <div>
                <div className="text-[#1e1e1e] text-[18px] font-semibold leading-7">
                  Assessment:
                </div>
                <div className="flex mt-3 gap-5 max-md:flex-col">
                  <div className="text-[#1e1e1e] text-[16px] font-semibold leading-normal py-2">
                    {expandedStates[index].assessment
                      ? dataGroup[1].assessment
                      : `${dataGroup[1].assessment.slice(0, 300)}...`}
                    <p
                      className="text-[#0071db] text-[18px] font-semibold leading-[18px] py-3 cursor-pointer"
                      onClick={() => handleToggle(index, "assessment")}
                    >
                      {expandedStates[index].assessment
                        ? "View less"
                        : "View more"}
                    </p>
                  </div>
                  {/* Progress Bar */}
                  <div className="flex justify-center w-[142px] items-center relative mx-8 max-md:w-full max-md:mx-0">
                    <div className=" flex items-start justify-center">
                      <HalfCircleChart percentage={dataGroup[1].level} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiTechnical;
