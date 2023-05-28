"use client";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";
import { SocialButton } from "@/components";

export default function contact() {
  return (
    <div className="px-10 xl:px-40 2xl:px-60 py-10 md:py-16 lg:py-20 xl:py-24">
      <div className="flex flex-col md:flex-row w-full justify-between">
        <div className="flex flex-col pb-10 md:pb-0 md:w-3/4">
          <h2 className="text-xl md:text-2xl xl:text-4xl font-semibold pb-3 lg:pb-5">
            Love to hear from you,
          </h2>
          <h2 className="text-xl md:text-2xl xl:text-4xl font-semibold pb-3 lg:pb-5">
            Get in touch!
          </h2>
          <p className="text-base md:text-lg xl:text-xl font-semibold pb-3 lg:pb-5">
            Find me on:
          </p>
          <div className="p-6 bg-gradient-to-tr from-zinc-50 to-zinc-100 backdrop-blur-sm rounded-md border border-zinc-50 opacity-80 min-w-fit max-w-fit">
            <div className="flex flex-col py-3">
              <div className="flex flex-row items-center space-x-5">
                <AiOutlineMail color="black" size={30} />
                <span className="text-base md:text-lg xl:text-xl text-black">
                  simai24@colby.edu
                </span>
              </div>
              <div className="flex flex-row items-center space-x-5">
                <SocialButton
                  icon={<AiFillLinkedin className="text-blue-500" size={30} />}
                  link="https://www.linkedin.com/in/saki-imai-1204/"
                />
                <span className="text-base md:text-lg xl:text-xl text-black">
                  @saki-imai-1204
                </span>
              </div>
              <div className="flex flex-row items-center space-x-5">
                <SocialButton
                  icon={<AiFillGithub size={30} />}
                  link="https://github.com/saki-imai-1204"
                />
                <span className="text-base md:text-lg xl:text-xl text-black">
                  @saki-imai-1204
                </span>
              </div>
              <div className="flex flex-row items-center space-x-5">
                <SocialButton
                  icon={<SiGooglescholar size={30} />}
                  link="https://scholar.google.com/citations?user=ZUSP9qIAAAAJ&hl=en"
                />
                <span className="text-base md:text-lg xl:text-xl text-black">
                  Saki Imai
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/email.svg"
          className="w-full md:w-1/2 mt-10 md:mt-0"
          alt="Email Illustration"
        />
      </div>
    </div>
  );
}
