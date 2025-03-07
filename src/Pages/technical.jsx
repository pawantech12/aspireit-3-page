import { useEffect, useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import { Editor } from "@monaco-editor/react";


const Technical = () => {
  const [timer, setTimer] = useState(180);
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  const [tempLanguage, setTempLanguage] = useState("python");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);
  const [volume, setVolume] = useState(0);
  const isRecordingRef = useRef(false);
  const codeEditorRef = useRef("");
  const [videoToggleButton, setVideoToggleButton] = useState(true);

  const toggleVideoSize = () => {
    setVideoToggleButton(!videoToggleButton);
    console.log(videoToggleButton);
  };

  const selectRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
          clearInterval(interval);
          stopRecording();
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    if (!isRecording && timer === 180) {
      startRecording();
    }

    return () => clearInterval(interval);
  }, [timer]);

  const startRecording = useCallback(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        audioChunks.current = [];
        const audioContext = new (window.AudioContext ||
          window.webkitAudioContext)();
        const source = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        source.connect(analyser);
        const updateVolume = () => {
          analyser.getByteFrequencyData(dataArray);
          const avgVolume =
            dataArray.reduce((a, b) => a + b) / dataArray.length;
          setVolume(avgVolume);
          if (isRecordingRef.current) requestAnimationFrame(updateVolume);
        };
        updateVolume();
        mediaRecorder.ondataavailable = (event) => {
          audioChunks.current.push(event.data);
        };
        mediaRecorder.onstop = async () => {
          new Blob(audioChunks.current, {
            type: "audio/wav",
          });
          audioContext.close();
          setVolume(0);
          isRecordingRef.current = false;
        };
        mediaRecorder.start();
        isRecordingRef.current = true;
        setIsRecording(true);
      })
      .catch((error) =>
        console.error("Error accessing the microphone:", error)
      );
  }, []);


  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const formatTimer = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const onMount = (editor) => {
    codeEditorRef.current = editor;
    const currentValue = editor.getValue();
    const lines = currentValue.split("\n");
    const nextLine = lines.length + 1;
    editor.setPosition({ lineNumber: nextLine, column: 1 });
    editor.focus();
  };

  useEffect(() => {
    const fetchLanguages = async () => {
      const monaco = await import("monaco-editor");
      const availableLanguages = monaco.languages.getLanguages().map((lang) => ({
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

  useEffect(() => {
    if (selectRef.current) {
      const text = selectedLanguage;
      const tempElement = document.createElement("span");
      tempElement.style.visibility = "hidden";
      tempElement.style.position = "absolute";
      tempElement.style.font = window.getComputedStyle(selectRef.current).font;
      tempElement.textContent = text;

      document.body.appendChild(tempElement);
      selectRef.current.style.width = `${tempElement.offsetWidth + 40}px`;
      document.body.removeChild(tempElement);
    }
  }, [selectedLanguage]);

  const handleLanguageChange = (newLanguage) => {
    if (codeEditorRef.current?.getValue()?.trim()) {
      setTempLanguage(newLanguage);
      setIsPopupVisible(true);
    } else {
      setSelectedLanguage(newLanguage);
    }
  };

  const handlePopupAction = (action) => {
    if (action === "ok") {
      codeEditorRef.current?.setValue("");
      setSelectedLanguage(tempLanguage);
    }
    setIsPopupVisible(false);
  };

  return (
    <div className="bg-black z-[-3]">
      {/* Background effect ellipse */}
      <div className="fixed left-[-12px] top-[330px] z-0 w-[543px] h-[543px] flex-shrink-0 rounded-full bg-[#85BEFF] blur-[100px]"></div>
      <div className="fixed right-[-65px] bottom-[330px] z-0 w-[587px] h-[587px] flex-shrink-0 rounded-full bg-[#7EFFEA] blur-[100px]"></div>

      <div className="flex flex-col min-h-screen bg-[rgba(0,0,0,0.07)] backdrop-blur-[2px] overflow-hidden">
        <div className="flex flex-1 bg-none ">

          {/* Left side code editor container */}
          <div className="w-[60%] ml-10 mr-5 my-8 rounded-3xl p-5 relative shadow-lg rounded-[30px] border border-black bg-[rgba(15,15,15,0.82)] backdrop-blur-[5px] shadow-[-0.55px_0.6px_0px_#85BEFF]">
            <div className="flex justify-between items-center text-gray-800 mb-5">
              <div className="flex items-center space-x-2 py-4">
                <h2 className="text-[18px] font-semibold text-white">Language:</h2>
                <select
                  ref={selectRef}
                  value={selectedLanguage}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="text-white bg-[#1E1E1E] outline-none font-semibold text-[18px] border border-black bg-[rgba(15,15,15,0.82)] backdrop-blur-[5px]"
                >
                  {languages.map((lang) => (
                    <option key={lang.value} value={lang.value} className="text-[18px]">
                      {lang.label.charAt(0).toUpperCase() + lang.label.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              <span className="text-[#FFF] border border-[#FFF] rounded-full py-2 px-5 text-[20px] font-medium">Timer: {formatTimer(timer)}</span>
            </div>
            <div className="h-full">
              <Editor
                height="85%"
                language={selectedLanguage}
                defaultValue="// Write your code here...
"
                theme='vs-dark'
                onMount={onMount}
                options={{
                  minimap: { enabled: false },
                  fontSize: "24px",
                }}
              />
            </div>
            <div className={`absolute bottom-[-60px] left-0 rounded-3xl overflow-hidden shadow-lg ${videoToggleButton ? 'w-[180px] h-[227px]' : 'w-[91px] h-[114px]'}`}>
              <Webcam audio={false} className="w-full h-full object-cover" />
              {videoToggleButton && <p className="absolute z-10 text-white text-[14px] font-semibold top-[80%] left-2">Sanjay Prasath</p>}
              <button
                className="absolute -top-1 -right-1 bg-[#1E1E1E] rounded-full text-white w-[55px] h-[55px] cursor-pointer flex justify-center items-center"
                onClick={toggleVideoSize}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="19.7814"
                    cy="19.7814"
                    r="19.7814"
                    fill="#0072DC"
                  />
                  <path
                    d="M19.6771 21.0651C19.6771 21.1346 19.6504 21.1961 19.5969 21.2496L16.9334 23.9131L18.0886 25.0684C18.1903 25.17 18.2411 25.2903 18.2411 25.4294C18.2411 25.5685 18.1903 25.6888 18.0886 25.7904C17.987 25.892 17.8667 25.9429 17.7276 25.9429H14.1334C13.9944 25.9429 13.874 25.892 13.7724 25.7904C13.6708 25.6888 13.62 25.5685 13.62 25.4294V21.8352C13.62 21.6962 13.6708 21.5758 13.7724 21.4742C13.874 21.3726 13.9944 21.3218 14.1334 21.3218C14.2725 21.3218 14.3928 21.3726 14.4945 21.4742L15.6497 22.6295L18.3133 19.9659C18.3668 19.9125 18.4283 19.8857 18.4978 19.8857C18.5673 19.8857 18.6288 19.9125 18.6823 19.9659L19.5969 20.8805C19.6504 20.934 19.6771 20.9955 19.6771 21.0651ZM25.9429 14.1334V17.7276C25.9429 17.8667 25.892 17.987 25.7904 18.0886C25.6888 18.1903 25.5685 18.2411 25.4294 18.2411C25.2903 18.2411 25.17 18.1903 25.0684 18.0886L23.9131 16.9334L21.2496 19.5969C21.1961 19.6504 21.1346 19.6771 21.0651 19.6771C20.9955 19.6771 20.934 19.6504 20.8805 19.5969L19.9659 18.6823C19.9125 18.6288 19.8857 18.5673 19.8857 18.4978C19.8857 18.4283 19.9125 18.3668 19.9659 18.3133L22.6295 15.6497L21.4742 14.4945C21.3726 14.3928 21.3218 14.2725 21.3218 14.1334C21.3218 13.9944 21.3726 13.874 21.4742 13.7724C21.5758 13.6708 21.6962 13.62 21.8352 13.62H25.4294C25.5685 13.62 25.6888 13.6708 25.7904 13.7724C25.892 13.874 25.9429 13.9944 25.9429 14.1334Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="w-[40%] flex flex-col justify-between my-8 mr-10 space-y-5">
            <div className="h-[55%] px-8 pt-[96px] text-white overflow-auto rounded-[30px] bg-[rgba(0,0,0,0.50)] backdrop-blur-[20px]">
              <h3 className="text-[24px] font-semibold mb-4">1 Question</h3>
              <p className="text-[16px] text-justify leading-[22px]">
                You are developing a system for a bookstore to manage its
                inventory. The bookstore has a unique way of organizing books:
                they are arranged in a circular queue, where the front of the
                queue connects back to the rear. Each book in the queue has a
                title and a price. The store owner wants to implement a feature
                that finds the most expensive book within a given range of the
                queue, considering its circular nature. Write a function that
                takes the circular queue of books, a start position, and the
                number of books to consider, and returns the title of the most
                expensive book within that range.
              </p>
            </div>
            <div className="h-[45%] rounded-3xl p-5 text-[#FFF] shadow-[0.7px_-0.6px_0px_#0DDDBB] leading-[20px] flex h-[383px] p-[25px] justify-center items-start rounded-[30px] bg-[rgba(62,59,65,0.50)] backdrop-blur-[20px] overflow-auto">
              <div>
               <h3 className="text-[24px] font-[400] pt-[24px] pb-[72px]">Example:</h3>
                <p className="text-[14px] font-medium">
                {`Input Queue: [("The Hobbit", 15), ("1984", 10), ("To Kill a
      Mockingbird", 12), ("Pride and Prejudice", 9), ("The Great
      Gatsby", 11)], Start: 2, Range: 4`}
              </p>
              <p className="text-[14px] font-medium mt-8">Output: The Hobbit</p>
              <p className="text-[14px] font-medium ">
                {`Explanation: Starting from "To Kill a Mockingbird", considering 4
      books, we wrap around to "The Hobbit", which is the most expensive
      at $15.`}
              </p>
              </div>
              
            </div>
          </div>

        </div>
        <div className="justify-end items-end flex py-[32px] pr-10 bg-none">
          {audioURL && (
            <audio controls>
              <source src={audioURL} type="audio/webm" />
              Your browser does not support the audio element.
            </audio>
          )}
          <button className="border border-[#0DDDBB] px-14 py-2 bg-[#0DDDBB] text-white rounded-3xl font-medium text-[14px]">
            Next
          </button>
        </div>
        {isPopupVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 shadow-lg space-y-4">
              <h2 className="text-lg font-bold">Change Language?</h2>
              <p>Changing the language will erase the current code. Do you want to proceed?</p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => handlePopupAction("cancel")}
                  className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handlePopupAction("ok")}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Technical;