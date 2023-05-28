"use client";

import {
  AiFillCheckSquare,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";

import { HiCode } from "react-icons/hi";

import { ProjectCard, SocialButton } from "@/components";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="px-10 xl:px-40 2xl:px-60 max-w-screen overflow-hidden">
        <div className="flex py-10 xl:py-32 2xl:py-48 flex-col md:flex-row">
          <div className="flex flex-col basis-3/4">
            <div className="mb-6">
              <span className=" text-xl lg:text-2xl xl:text-4xl font-semibold ">Hi! I am</span>
              <span className=" text-xl lg:text-2xl xl:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-pink-400 to-blue-400">
                {" "}
                Saki Imai
              </span>
            </div>
            <span className=" text-xl lg:text-2xl xl:text-4xl font-semibold mb-6">
              an aspiring Software Engineer{" "}
            </span>
            <span className=" text-xl lg:text-2xl xl:text-4xl font-semibold mb-6">
              and a student researcher at Colby College
            </span>
            <span className=" text-xl lg:text-2xl xl:text-4xl font-semibold mb-6">
              currently based in the United States.{" "}
            </span>
          </div>
          <div className="flex flex-wrap justify-center basis-1/4">
            <div className="w-1/3 md:w-1/2">
              <img
                src="/Saki_resized.png"
                alt="..."
                className="shadow rounded-full max-w-full h-auto align-middle border-none"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-5 pb-10 xl:pb-32 2xl:pb-48">
          <button
            className="h-10 w-1/5 px-4 cursor-pointer appearance-none items-center justify-center rounded-full border border-stone-200 bg-black shadow outline-none inline-flex flex-row min-w-fit"
            onClick={() => router.push("/contact")}
          >
            <AiOutlineMail color="white" className="mr-2" />
            <span className="text-xs xl:text-lg text-white">Contact Me</span>
          </button>
          <SocialButton
            icon={<AiFillLinkedin className="text-blue-500" size={30} />}
            link="https://www.linkedin.com/in/saki-imai-1204/"
          />
          <SocialButton
            icon={<AiFillGithub size={30} />}
            link="https://github.com/saki-imai-1204"
          />
          <SocialButton
            icon={<SiGooglescholar size={30} />}
            link="https://scholar.google.com/citations?user=ZUSP9qIAAAAJ&hl=en"
          />
        </div>

        <span className="flex font-bold items-center text-xl lg:text-2xl xl:text-4xl justify-center mb-20">
          What I Do
        </span>
        <div className="flex flex-col xl:flex-row xl:justify-between space-y-10 xl:space-y-0 xl:space-x-20 mb-40">
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

        <span className="flex font-bold items-center text-xl lg:text-2xl xl:text-4xl justify-center">
          Projects
        </span>
        <div className="pb-10 lg:pb-20 xl:pb-40">
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
            demo={"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZUSP9qIAAAAJ&citation_for_view=ZUSP9qIAAAAJ:u-x6o8ySG0sC"}
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

        <span className="flex items-center font-bold text-xl lg:text-2xl xl:text-4xl justify-center my-20">
          Experiences
        </span>
        <div className="pb-20 lg:pb-32 xl:pb-40">
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
