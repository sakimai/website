"use client";

import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

import { SiGooglescholar } from "react-icons/si";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
      <link rel="icon" type="image/png" sizes="32x32" href="/flower.png" />
      </Head>
      <div className="px-8 xl:px-40 2xl:px-60 max-w-screen overflow-hidden">
        {/* --- Top Section: Two-Column Layout --- */}
        <div className="flex flex-col md:flex-row md:items-start md:space-x-10 my-12">
          {/* Left column: Photo + Name/Short Info */}
          <div className="basis-full md:basis-1/3 flex flex-col items-center md:items-start">
            <img
              src="/Saki.JPG"
              alt="Portrait of Saki Imai"
              className="w-60 h-60 object-cover rounded-full shadow-md mb-4"
            />
            <h1 className="text-2xl lg:text-3xl font-bold mb-2">
              Saki Imai
            </h1>
            <p className="text-gray-600 mb-2">
              (she/her) <br />
              PhD Student @ Northeastern University
            </p>
            <div className="flex mt-4 space-x-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/saki-imai-1204/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin className="text-blue-500" size={30} />
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/sakimai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub size={30} />
              </a>
              {/* Google Scholar */}
              <a
                href="https://scholar.google.com/citations?user=lO2jF24AAAAJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGooglescholar size={30} />
              </a>
            </div>
          </div>

          {/* Right column: Your main "About" text */}
          <div className="basis-full md:basis-2/3 mt-10 md:mt-0">
            <p className="mb-4 text-lg">
              I am a first-year PhD student in Computer Science at Northeastern
              University, where I am advised by Dr. Malihe Alikhani. I am fortunate to be
              supported by the Khoury Distinguished Fellowship.
            </p>
            <p className="mb-4 text-lg">
              I completed my undergraduate at Colby College in Computer Science
              and Mathematical Science. My primary research focuses on natural language processing,
              with an emphasis on sign language processing, multimodal systems, and
              accessibility technologies to empower underrepresented communities. I am also 
              passionate about sustainable computing and its potential to make AI 
              more environmentally responsible.
            </p>
            <p className="mb-4 text-lg">
              In my free time, I enjoy critiquing classical ballet performances (Maria Khoreva is my favorite ballerina), 
              running, and exploring new places through travel.
            </p>
          </div>
        </div>

        {/* --- News Section --- */}
        <div className="my-20">
          <span className="flex font-bold items-center text-xl lg:text-2xl xl:text-4xl justify-center mb-10">
            News
          </span>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="text-gray-600 text-sm">January 20-25, 2025</p>
              <p>
                I will present a paper at COLING
                2025 in Abu Dhabi.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="text-gray-600 text-sm">December 20, 2024</p>
              <p>
                Our work on the usability of multimodal learning systems was published at IEEE Access. 
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="text-gray-600 text-sm">December 15, 2024</p>
              <p>
                I am presenting a paper at ML for Systems Workshop at NeurIPS 2024 in Vancouver.
              </p>
            </div>
            {/* Add more news items as needed */}
          </div>
        </div>

        {/* --- Publications Section --- */}
        <div className="my-20">
          <span className="flex font-bold items-center text-xl lg:text-2xl xl:text-4xl justify-center mb-10">
            Publications
          </span>
          <div className="space-y-10">
            {/* Publication Card Example */}
            <div className="border border-stone-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold">
                Is GitHub Copilot a Substitute for Human Pair-programming?
              </h3>
              <p className="text-gray-600 mt-2">
                 ICSE ’22: 44th International Conference
                on Software Engineering, ACM Student Research Competition.
              </p>
              <div className="mt-4 inline-flex items-center space-x-2">
                <a
                  href="https://www.linkedin.com/in/saki-imai-1204/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-pink-200 text-pink-800 px-2 py-1 
                            rounded-full text-xs font-semibold uppercase"
                >
                  PDF
                </a>
              </div>
            </div>
            {/* Add more publication cards as needed */}
          </div>
        </div>

      </div>
    </>
  );
}



