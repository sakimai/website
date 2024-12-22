import "./globals.css";
import { Nunito } from "next/font/google";
import { Header } from "@/components";
import { SocialButton } from "@/components";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";
import Head from 'next/head';

const ptserif = Nunito({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Saki Imai",
  description: "Hello, I'm Saki Imai, a junior majoring in Computer Science and Mathematical Sciences at Colby College. My interests lie at the intersection of software development, machine learning, and cybersecurity.\
  My experience in software development has been shaped by my internships and research positions. From classifying STEM diagrams using transfer learning techniques to designing eye-tracking analysis software, I have gained proficiency in several programming languages and tools, including Python, Java, Tensorflow, Git, and Microsoft Azure.\
  As a WiCyS conference student scholar, I'm committed to advancing the representation and participation of women in the tech industry. I'm passionate about learning and growing in the areas of software development, machine learning, and cybersecurity, and I'm eager to explore how I can apply my skills and knowledge in these fields to make a positive impact in my career.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/flower.png" type="image/png" sizes="any" />
      </Head>
      <body className={ptserif.className}>
        <div className="w-full h-full fixed top-0 z-0">
          <div className="w-full h-full relative bg-img">
            <div className="w-full h-full grid grid-cols-12 space-x-6 px-20">
              {Array.from(Array(12).keys()).map((index: number) => (
                <div
                  className="h-screen border-x border-black/5"
                  key={index}
                ></div>
              ))}
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-200 via-transparent to-transparent"></div>
          </div>
        </div>

        <main className="w-full h-full relative bg-transparent">
          <div className="w-full h-full absolute top-0 left-0 bg-transparent flex flex-col justify-between">
            <Header></Header>
            <div className="justify-center items-center">
            {children}
            </div>

            <div className="border-y w-full p-10 xl:px-40 py-20 border-black/5  shadow-footer shadow-gray-200/60">
              <div className=" w-full justify-start items-center">
                {/* <img src="/star2.svg" className="w-20 mr-10" /> */}
                <div className="flex flex-col">
                  <span className="text-xl font-semibold pb-5">
                    Let&apos;s talk!
                  </span>
                  <span className=" text-l font-medium w-full xl:w-1/2 pb-3">
                    Whether you have a job opening, wish to reach out, or simply
                    want to say hello, please don&apos;t hesitate to get in touch. I
                    would be thrilled to hear from you.
                  </span>
                  <div className="flex flex-row space-x-5">
                    {/* <span className="h-10 w-1/5 px-4 cursor-pointer appearance-none items-center justify-center rounded-full border border-stone-200 bg-black shadow outline-none inline-flex flex-row min-w-fit">
                      <AiOutlineMail color="white" className="mr-2" />
                      <span className="text-xs xl:text-lg text-white">
                        simai24@colby.edu
                      </span>
                    </span> */}
                    <SocialButton
                      icon={
                        <AiFillLinkedin className="text-blue-500" size={30} />
                      }
                      link="https://www.linkedin.com/in/saki-imai-1204/"
                    />
                    <SocialButton
                      icon={<AiFillGithub size={30} />}
                      link="https://github.com/sakimai"
                    />
                    <SocialButton
                      icon={<SiGooglescholar size={30} />}
                      link="https://scholar.google.com/citations?user=lO2jF24AAAAJ"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
