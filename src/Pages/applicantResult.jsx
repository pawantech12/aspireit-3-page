import { useState, useRef, useEffect } from "react";
import Logo from "../assets/aspireit logo.png";
import image1 from "../assets/image1.png"
import image2 from '../assets/Aspireit.png';
import image3 from '../assets/Ellipse 1872.svg';
import image4 from '../assets/Type=Layila.svg';
import image5 from '../assets/Group.svg';
import Arrow from "../assets/downArrow.svg";
import Gradient from "../assets/Gradient.png";
import Company from "../assets/company logo.png";
import Location from "../assets/location.png";
import Briefcase from "../assets/briefcase.png";
import Ellipse from "../assets/Ellipse.png";
import Ellipse1 from "../assets/Ellipse 2013.png";
import Sanjay from '../assets/sanjay.jpeg';
import Mukesh from '../assets/mukesh.jpeg';
import Debaleena from '../assets/debaleena.jpg';
import Manjeet from '../assets/manjeet.jpeg';
import Priyansh from '../assets/priyansh.jpg';
import Bieden from '../assets/bieden.jpeg';
import Joe from '../assets/joe.jpeg';
import Rajan from '../assets/rajan.jpg';
import hamburgerBar from "../assets/hamburgerBar.png";
import Star from "../assets/star.svg";
import Card from "../Components/card";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import ReactPaginate from "react-paginate";

const ApplicantResult = () => {
  const candidates = [
    {
      name: "Sanjay Prasath",
      title: "MERN Stack",
      location: "India",
      experience: 12,
      appliedDaysAgo: 15,
      src: Sanjay,
      rounds: [
        { progress: 85, name: "Round 1", description: "Technical" },
        { progress: 95, name: "Round 2", description: "HR Interview" },
      ],
      recommanded : false,
    },
    {
      name: "Mukesh",
      title: "React developer",
      location: "America",
      experience: 6,
      appliedDaysAgo: 13,
      src: Mukesh,
      rounds: [
        { progress: 20, name: "Round 1", description: "Design Task" },
        { progress: 35, name: "Round 2", description: "Team Interview" },
      ],
      recommanded : true,
    },
    {
      name: "Debaleena",
      title: "UI/UX designer",
      location: "Austin",
      experience: 8,
      appliedDaysAgo: 10,
      src: Debaleena,
      rounds: [
        { progress: 60, name: "Round 1", description: "Portfolio Review" },
        { progress: 90, name: "Round 2", description: "Technical Round" },
      ],
      recommanded : false,
    },
    {
      name: "Manjeet",
      title: "MERN Stack",
      location: "Chicago",
      experience: 12,
      appliedDaysAgo: 1,
      src: Manjeet,
      rounds: [
        { progress: 60, name: "Round 1", description: "Technical" },
        { progress: 75, name: "Round 2", description: "HR Interview" },
      ],
      recommanded : false,
    },
    {
      name: "Priyansh",
      title: "React Devloper",
      location: "Boston",
      experience: 12,
      appliedDaysAgo: 7,
      src: Priyansh,
      rounds: [
        { progress: 45, name: "Round 1", description: "Research Task" },
        { progress: 88, name: "Round 2", description: "Team Interview" },
      ],
      recommanded : true,
    },
    {
      name: "Joe",
      title: "Visual Designer",
      location: "Seattle",
      experience: 4,
      appliedDaysAgo: 3,
      src: Joe,
      rounds: [
        { progress: 55, name: "Round 1", description: "Technical" },
        { progress: 90, name: "Round 2", description: "HR Interview" },
      ],
      recommanded : false,
    },
    {
      name: "Bieden",
      title: "Digital Designer",
      location: "Bieden",
      experience: 6,
      appliedDaysAgo: 4,
      src: Bieden,
      rounds: [
        { progress: 35, name: "Round 1", description: "Portfolio Review" },
        { progress: 75, name: "Round 2", description: "Team Interview" },
      ],
      recommanded : false,
    },
    {
      name: "Rajan",
      title: "Lead Designer",
      location: "Miami",
      experience: 8,
      appliedDaysAgo: 6,
      src: Rajan,
      rounds: [
        { progress: 70, name: "Round 1", description: "Technical" },
        { progress: 100, name: "Round 2", description: "Final Round" },
      ],
      recommanded : false,
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [isFocused1, setisFocused1] = useState(false);
  const inputRef = useRef(null);

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
      setSearchPhrase('');
    }
  }, [isFocused1]);

  const candidatesPerPage = 6;
  const pageCount = Math.ceil(candidates.length / candidatesPerPage);

  const currentCandidates = candidates.slice(
    currentPage * candidatesPerPage,
    (currentPage + 1) * candidatesPerPage
  );

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="bg-[#F2F2F2]">

      <div className="h-[50%]">
        {/* Nav bar */}
        <div className="NavBar w-full mx-[auto] h-[8vh] min-h-[42px] px-8 bg-white border border-[#D2D2D2] backdrop-blur-[220px] flex justify-between items-center hover:cursor-pointer">
                                    <div className="logo-container w-[130px] h-[5vh] min-h-[24px] relative  bg-[#FFF]">
                                      <div className="Rectangle7391 w-[9vw] h-[4.5vh] min-h-[24px] relative bg-[#0F0F36] rounded-[6px]" />
                                      <div className="logo w-[9vw] h-[4vh] min-h-[24px] absolute left-[0px] top-[1px] bg-none flex justify-center items-center gap-[0.3vw]" >
                                        <img className="Aspireit w-[1.5vw] bg-transparent shrink-0" src={image1} />
                                        <img className="Group1000007770 bg-transparent w-[5vw] h-[2vh] shrink-0" src={image2} />
                                      </div>
                                    </div>
                                    <div className="SearchBarContainer w-full flex grow justify-center items-center gap-4 bg-none">
                                      <div className='InputContainer w-[55%] flex justify-start items-center gap-4 h-[5vh] min-h-[24px] pl-6 pr-6 bg-[#F2F2F2] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-[32px]' >
                                        <div className='searchBar inline-flex items-center h-[5vh] w-full bg-[#F2F2F2]'>
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none" className={`w-[3vh] h-[3vh] shrink-0 rounded-full mr-1 ${isFocused1 ? 'transform scale-110 transition-transform duration-300' : ''}`}   >
                                            <path d="M9.49996 2.75C8.16495 2.75 6.85991 3.14588 5.74989 3.88757C4.63986 4.62927 3.7747 5.68347 3.26381 6.91686C2.75292 8.15026 2.61925 9.50745 2.8797 10.8168C3.14015 12.1262 3.78302 13.3289 4.72702 14.2729C5.67102 15.2169 6.87375 15.8598 8.18311 16.1202C9.49248 16.3807 10.8497 16.247 12.0831 15.7361C13.3165 15.2252 14.3707 14.3601 15.1124 13.25C15.854 12.14 16.2499 10.835 16.2499 9.49996C16.2498 7.70979 15.5386 5.99298 14.2728 4.72714C13.0069 3.46131 11.2901 2.75011 9.49996 2.75Z" stroke="#353535" strokeWidth="2" strokeMiterlimit="10" />
                                            <path d="M14.666 14.668L18.3327 18.3346" stroke="#353535" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                                          </svg>
                                          <input
                                            className='justify-start px-2 w-full max-w-[657px] text-[#353535] py-[0.5vh] text-[2vh] leading-[18px] border-0 bg-[#F2F2F2] focus:outline-none focus:text-[#353535]'
                                            onClick={focusInput}
                                            type="text" name='searchBar'
                                            value={isFocused1 ? searchPhrase : ''}
                                            onChange={handleSearch}
                                            onFocus={() => setisFocused1(true)}
                                            onBlur={() => setisFocused1(false)}
                                            placeholder='Search'
                                            ref={inputRef} />
                                        </div>
                                      </div>
                                    </div>
                            
                                    <div className="Frame1000008205 flex justify-start items-center w-fit gap-[1vw] bg-none" >
                                      <div className="Frame1000008204 px-[2vh] py-[2px] bg-[#F2F2F2] flex justify-start items-center shadow-[0px_0px_6px_rgba(0,_0,_0,_0.25)] rounded-[40px] backdrop-blur-[4px]">
                                        <div className="ButtonsNotification w-[5vh] min-w-[24px] h-[5vh] min-h-[24px] mr-[1.5vh] relative bg-[#F2F2F2]" >
                                          <div className="Ellipse w-[5vh] h-[5vh] min-w-[24px] min-h-[24px] absolute left-0 top-0 bg-white rounded-full" />
                                          <div className="IconsBell w-[4vh] h-[4vh] min-w-[18px] min-h-[18px] absolute left-[1vh] top-[1vh] bg-none hover:transform hover:scale-[1.08] hover:transition-transform hover:duration-300" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className='w-[3vh] h-[3vh] min-w-[16px] min-h-[16px]'>
                                              <path d="M21 6.50001C21 8.43001 19.43 10 17.5 10C15.57 10 14 8.43001 14 6.50001C14 4.57001 15.57 3.00001 17.5 3.00001C19.43 3.00001 21 4.57001 21 6.50001ZM19 11.79C18.5 11.92 18 12 17.5 12C16.0421 11.9974 14.6447 11.4171 13.6138 10.3862C12.583 9.3553 12.0026 7.95788 12 6.50001C12 5.03001 12.58 3.70001 13.5 2.71001C13.3185 2.48755 13.0897 2.30838 12.8302 2.18555C12.5707 2.06272 12.2871 1.99934 12 2.00001C10.9 2.00001 10 2.90001 10 4.00001V4.29001C7.03 5.17001 5 7.90001 5 11V17L3 19V20H21V19L19 17V11.79ZM12 23C13.11 23 14 22.11 14 21H10C10 21.5304 10.2107 22.0391 10.5858 22.4142C10.9609 22.7893 11.4696 23 12 23Z" fill="#0072DC" />
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="Profile flex justify-end items-center bg-[#F2F2F2] hover:transform hover:scale-[1.08] hover:transition-transform hover:duration-300" >
                                          <img className="AvatarPic w-[5vh] min-w-[24px] bg-none rounded-full" src={image3} />
                                        </div>
                                      </div>
                                      <div className="Ai w-[4.5vw] min-w-[42px] bg-none" >
                                        <img className="Layila h-[7.5vh] bg-none rounded-full hover:transform hover:scale-[1.08] hover:transition-transform hover:duration-300" src={image4} />
                                      </div>
                                    </div>
                                  </div>
        
        
               {/* company description */}
        <div className="mt-[2vh] mx-12 relative">
          <img className="w-full h-[12vh]" src={Gradient} alt="" />
          <img src={Company} alt="" className="absolute top-5 left-0 h-[20vh]" />
          <div className="bg-white -mt-5 pt-24 pl-9 pb-6 rounded-3xl">
            <div className="flex items-center">
              <p className="font-bold text-[3vh] text-[#353535] mr-3">
                Senior UI/UX Designer
              </p>
              <p className="mt-[1vh] mr-3 flex items-center">
                <img src={Location} alt="" className="w-[1.9vh] h-[1.9vh]" />
                <span className="ml-0.5 text-[#979797] text-[1.9vh]">Banglore</span>
              </p>
              <p className="mt-[1vh] mr-3 flex items-center">
                <img src={Briefcase} alt="" className="w-[1.9vh] h-[1.9vh]" />
                <span className="ml-0.5 text-[#979797] text-[1.9vh]">3 - 5 Yrs</span>
              </p>
            </div>
            <div className="flex pt-2 items-center">
              <p className="text-[#353535] text-[2.4vh]">Amazon</p>
              <p className="text-[#979797] pl-5 flex">
                <img src={Star} alt="" className="w-[2.5vh] h-[2.5vh] mt-1" />
                <span className="pl-1 pr-2 text-[2.2vh]">4.7</span>
              </p>
              <p className="pl-4 text-[#979797] text-[2.2vh]">1267 review</p>
            </div>
          </div>
        </div>
      </div>
      {/* card property */}
      <div
        className="py-12 w-[95%] mx-auto"
        style={{ direction: "rtl" }}
      >
        <div style={{ direction: "ltr" }} className="flex flex-wrap justify-center xl:justify-between gap-[3vh]">
          {currentCandidates.map((candidate, index) => (
            <Card key={index} index={index} candidate={candidate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicantResult;