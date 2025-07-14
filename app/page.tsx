"use client";

import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

import { Publication } from "@/components";
import { SiGooglescholar } from "react-icons/si";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/flower.png" type="image/png" sizes="any" />
      </Head>
      <div className="px-8 xl:px-40 2xl:px-60 max-w-screen overflow-hidden">
        {/* --- Top Section: Two-Column Layout --- */}
        <div className="flex flex-col md:flex-row md:items-start md:space-x-10 my-12">
          {/* Left column: Photo + Name/Short Info */}
          <div className="basis-full md:basis-1/3 flex flex-col items-center md:items-start">
            <img
              src="/Saki.JPG"
              alt="Portrait of Saki Imai"
              className="w-60 h-60 object-cover object-top rounded-full shadow-md mb-4"
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
              University, where I am advised by Dr. Malihe Alikhani.
            </p>
            <p className="mb-4 text-lg">
              I completed my undergraduate at Colby College in Computer Science
              and Mathematical Sciences. My primary research focuses on natural language processing,
              with an emphasis on sign language processing, multimodal systems, and
              accessibility technologies to empower underrepresented communities. I am also 
              passionate about sustainable computing and its potential to make AI 
              more environmentally responsible.
            </p>
            <p className="mb-4 text-lg">
              In my free time, I enjoy watching classical ballet performances, 
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
          <div className="">
            {/* Publication Card Example */}
            <Publication 
              title="Evaluating Open-Source ASR Systems: Performance Across Diverse Audio Conditions and Error Correction Methods"
              author="Saki Imai, Tahiya Chowdhury and Amanda Stent"
              conference="International Conference on Computational Linguistics (COLING), 2025 "
              pdfLink="https://aclanthology.org/2025.coling-main.336.pdf"
            />
            <Publication 
              title="Non-Visual Interfaces for Visual Learners: Multisensory Learning of Graphic Primitives"
              author="Stacy Doore, Justin Brown, Saki Imai, Justin Dimmel, Nicholas Giudice"
              conference="IEEE Access"
              pdfLink="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10786022"
            />
            <Publication 
              title="Predicting LLM Inference Latency: A Roofline-Driven ML Method"
              author="Saki Imai, Rina Nakazawa, Marcelo Amaral, Sunyanan Choochotkaew, Tatsuhiro Chiba"
              conference="Annual Conference on Neural Information Processing Systems (NeurIPS), ML for Systems Workshop, 2024"
              pdfLink="https://mlforsystems.org/assets/papers/neurips2024/paper28.pdf"
            />
            <Publication 
              title="Is GitHub Copilot a Substitute for Human Pair-programming?"
              author="Saki Imai"
              conference="International Conference on Software Engineering (ICSE), ACM Student Research Competition, 2022."
              pdfLink="https://dl.acm.org/doi/pdf/10.1145/3510454.3522684"
            />
          </div>
        </div>

      </div>
    </>
  );
}



