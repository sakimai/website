"use client";

import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { BracketText } from "../primitives";

const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// const ProjectText = ({
//   text,
//   title,
//   demo,
// }: {
//   text: string;
//   title: string;
//   demo?: string;
// }) => {
//   return (
//     <div
//       className={`w-full text-white flex flex-col justify-center items-start ${SpaceGrotesk.className}`}
//     >
//       <h3 className="text-xl font-bold">{title}</h3>
//       <span className="mt-4">{text}</span>
//       {demo && (
//         <a
//           target="_blank"
//           href={demo}
//           className="mt-4 cursor-pointer appearance-none px-12 py-2 rounded-md bg-zinc-700/50 text-zinc-400 border border-zinc-400 transition duration-500 ease-in-out shadow-lg shadow-transparent hover:bg-emerald-500/20 hover:border-emerald-500 hover:text-emerald-500 hover:shadow-emerald-500/20"
//         >
//           <BracketText
//             text={"Demo"}
//             type={"default"}
//             animated={false}
//             clickable={true}
//           />
//         </a>
//       )}
//     </div>
//   );
// };

const handleClick = ( link : string ) => {
    window.open(link, '_blank');
  };

const ProjectCard = ({
  image,
  title,
  text,
  orientation,
  code,
  demo,
}: {
  image: string;
  title: string;
  text: string;
  orientation: "left" | "right";
  code: string;
  demo: string;
}) => {


  return (
    <div className="w-full flex flex-row my-20 space-x-6">
      {orientation == "left" && (
        <motion.div
          initial={{ opacity: 0, scale: 1.1, x: -100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className={"w-1/4 flex justify-center items-center"}
        >
          <div className="flex flex-col space-y-5">
            <span className="font-semibold">{title}</span>
            <span>{text}</span>
            <button
              onClick={() => handleClick(code)}
              type="button"
              className="inline-block rounded bg-black px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-700 active:shadow-lg"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Code
            </button>

            <button
              onClick={() => handleClick(demo)}
              type="button"
              className="inline-block rounded border-2 border-black px-4 pb-[3px] pt-[4px] text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:border-gray-900 hover:bg-gray-100 hover:text-gray-600 focus:border-gray-600 focus:text-gray-600 focus:outline-none focus:ring-0 active:border-gray-700 active:text-gray-700"
              data-te-ripple-init
            >
              See demo
            </button>
          </div>
          {/* <ProjectText {...{ text, title, demo }} /> */}
        </motion.div>
      )}
      <motion.div
        initial={{
          opacity: 0,
          scale: 1.4,
          x: orientation == "right" ? -500 : 500,
        }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-3/4 p-6 bg-gradient-to-tr from-zinc-50 to-zinc-100 backdrop-blur-sm rounded-md border border-zinc-50"
      >
        <img
          src={image}
          className=" w-full rounded-md border border-zinc-50 shadow-xl"
        />
      </motion.div>
      {orientation == "right" && (
        <motion.div
          initial={{ opacity: 0, scale: 1.1, x: 100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className={"w-1/4 flex justify-center items-center"}
        >
          <div className="flex flex-col space-y-5">
            <span className="font-semibold">{title}</span>
            <span>{text}</span>
            {/* <button
              type="button"
              className="inline-block rounded bg-info px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Code
            </button>
            <button
              type="button"
              className="inline-block rounded border-2 border-info px-4 pb-[3px] pt-[4px] text-xs font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700"
              data-te-ripple-init
            >
              See demo
            </button> */}
            <button
              onClick={() => handleClick(code)}
              type="button"
              className="inline-block rounded bg-black px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-700 active:shadow-lg"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Code
            </button>

            <button
              onClick={() => handleClick(demo)}
              type="button"
              className="inline-block rounded border-2 border-black px-4 pb-[3px] pt-[4px] text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:border-gray-900 hover:bg-gray-100 hover:text-gray-600 focus:border-gray-600 focus:text-gray-600 focus:outline-none focus:ring-0 active:border-gray-700 active:text-gray-700"
              data-te-ripple-init
            >
              See demo
            </button>
          </div>
          {/* <ProjectText {...{ text, title, demo }} /> */}
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCard;
