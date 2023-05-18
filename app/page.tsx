"use client";

import Image from "next/image";

import {
  AiFillCheckSquare,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";

import { HiCode } from "react-icons/hi";

import { ProjectCard, SocialButton } from "@/components";

import { Grand_Hotel } from "next/font/google";

import { useRouter } from "next/navigation";

const grandHotel = Grand_Hotel({ weight: ["400"], subsets: ["latin"] });

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export default function Home() {

  // const firebaseConfig = {
  //   apiKey: "AIzaSyAeSC6TM9qjicRbdbQWsUsfSqgi95UBLgM",
  //   authDomain: "saki-imai.firebaseapp.com",
  //   projectId: "saki-imai",
  //   storageBucket: "saki-imai.appspot.com",
  //   messagingSenderId: "960382418718",
  //   appId: "1:960382418718:web:a061b98a3001cd09ec130f",
  //   measurementId: "G-GLS0CXNQ87"
  // };
  
  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  return (
    <>
      <div className="px-40">
        <div className="flex flex-row w-full py-40 justify-start items-center">
          {/* <img src="/star2.svg" className="w-20 mr-10" /> */}
          <div className="flex flex-col">
            <span className="text-xl font-medium pb-5">
              Saki Imai—Software Engineer{" "}
            </span>
            <span className=" text-4xl font-semibold ">
              I use ChatGPT to write efficient code :)
            </span>
          </div>
        </div>

        <div className="flex py-40 justify-between space-x-20">
          <div className="flex flex-col space-y-5">
            <AiFillCheckSquare size={30} />
            <span className="font-semibold ">Machine Learning</span>
            <span>
              As a Machine Learning practitioner, my work revolves around
              utilizing advanced technologies to enhance accessibility of STEM
              domains for blind or visually blind students.
            </span>
          </div>
          <div className="flex flex-col space-y-5">
            <AiFillCheckSquare size={30} />
            <span className="font-semibold">Web Development</span>
            <span>
              I design and develop websites that enhance user experiences and
              optimize task efficiency. Explore the showcased projects below for
              a glimpse of my work.
            </span>
          </div>
          <div className="flex flex-col space-y-5">
            <AiFillCheckSquare size={30} />
            <span className="font-semibold">Research</span>
            <span>
              I have actively contributed to various research projects
              encompassing a wide spectrum of disciplines, including eye
              tracking studies, user experience studies, and machine learning
              projects.
            </span>
          </div>
        </div>

        <span className="flex font-bold items-center text-4xl justify-center">
          Projects
        </span>
        <div className="pb-40">
          <ProjectCard
            orientation="right"
            image={"/colbycourses.png"}
            demo={""}
            title={"Reactflow Course Viewer"}
            text={
              "A course search interface for Colby College built using React and React Flow library. The project is based on Next.js and was bootstrapped with create-next-app."
            }
            code={"https://github.com/saki-imai-1204/reactflow-courses"}
          />

          <ProjectCard
            orientation="left"
            image={"/CUSRR2022.svg"}
            demo={""}
            title={"Accessible STEM Education"}
            text={
              "Our project goal is to develop an automated STEM graph description model that communicates both the embedded text data and inherent spatial information into theory-based accessible captions."
            }
            code={""}
          />

          <ProjectCard
            orientation="right"
            image={"/SRC-poster.svg"}
            demo={""}
            title={"Eye tracking research"}
            text={
              "Designed and developed efficient PyQt5-based eye tracking analysis software, enabling a comprehensive comparison between human pair-programming and pair-programming with GitHub Copilot.\
              Presented my findings at the ACM Student Research Competition."
            }
            code={"https://github.com/saki-imai-1204/EyeMovementVisualizer"}
          />

          <ProjectCard
            orientation="left"
            image={"/CLASposter.svg"}
            demo={""}
            title={"ML to detect Cyber Attacks"}
            text={
              "We conducted a comparative analysis between classical machine learning algorithms and brain-inspired neural networks to detect network attacks using the UNSW-NB15 dataset. \
              Our findings were summarized in a poster presentation"
            }
            code={""}
          />
        </div>

        <span className="flex items-center font-bold text-4xl justify-center my-20">
          Experiences
        </span>
        <div className="pb-96">
          <ol className="relative border-l border-gray-200">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-black rounded-sm -left-3">
                <HiCode className="text-white" />
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 ">
                CS Research Assistant @ Davis Institute for Artificial
                Intelligence
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded  ml-3">
                  Latest
                </span>
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                May 2023 - Current
              </time>
              <p className="text-base font-normal text-gray-500 "></p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-black rounded-sm -left-3">
                <HiCode className="text-white" />
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 ">
                Summer 2023 Accenture Work Prep Participant
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                May 2023
              </time>
              <p className="text-base font-normal text-gray-500 "></p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-black rounded-sm -left-3">
                <HiCode className="text-white" />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                Software Development Intern @ Jackson Laboratory{" "}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                January 2023 - Current
              </time>
              <p className="mb-4 text-base font-normal text-gray-500"></p>
              {/* <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>{" "}
                  Download ZIP
                </a> */}
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-black rounded-sm -left-3">
                <HiCode className="text-white" />
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 ">
                CS Research Assistant @ Software Engineering and Human Factors
                Laboratory
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                October 2021 - June 2022
              </time>
              {/* <p className="text-base font-normal text-gray-500 flex flex-col">
                  <span>
                  Conducted and analyzed 21 eye tracking experiments using EyeLink 1000 Plus, providing insights into user behavior/subject matter.
                  </span>
                  <span>
                Published and presented my paper titled “Is GitHub Copilot a Substitute for Human Pair-programming? An Empirical Study” at ICSE ’22: 44th International Conference on Software Engineering 2022 ACM Student Research Competition
                </span>
                </p> */}
              <ul className="text-base font-normal text-gray-500 list-disc">
                <li>
                  Conducted and analyzed 21 eye tracking experiments using
                  EyeLink 1000 Plus, providing insights into user
                  behavior/subject matter.
                </li>
                <li>
                  Developed efficient PyQt5-based eye-tracking analysis
                  software, streamlining data analysis.
                </li>
                <li>
                  Published and presented my paper titled “Is GitHub Copilot a
                  Substitute for Human Pair-programming? An Empirical Study” at
                  ICSE ’22: 44th International Conference on Software
                  Engineering 2022 ACM Student Research Competition.
                </li>
              </ul>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-black rounded-sm -left-3">
                <HiCode className="text-white" />
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900">
                CS Research Assistant @ Immersive Navigation Systems and
                Inclusive Technology Ethics Lab (INSITE)
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                June 2021 - Current
              </time>
              <ul className="text-base font-normal text-gray-500 list-disc">
                <li>
                  Classified 3000+ STEM charts/diagrams with Tensorflow and
                  Singularity and achieved 97.27% accuracy.
                </li>
                <li>
                  Analyzed 300+ STEM diagram descriptions with NLTK, revealing
                  valuable insights for future project development.
                </li>
                <li>
                  Collaborated with University of Maine researchers to establish
                  a standardized user study protocol, improving study result
                  consistency.
                </li>
              </ul>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-black rounded-sm -left-3">
                <HiCode className="text-white" />
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900">
                Bachelor in Computer Science & Mathematics Major @ Colby College
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                August 2020 - Current
              </time>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
