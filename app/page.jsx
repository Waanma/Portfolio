"use client";

import { FiDownload } from "react-icons/fi";
import { Button } from "../components/ui/button";
import Social from "../components/Social";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv/cv.pdf";
    link.download = "JuanManuelGallegosCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="h-full xl:px-28">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">React Native Developer</span>
            <h1 className="h1">
              {" "}
              Hello I'm <br />{" "}
              <span className="text-acent">Juan Manuel Gallegos</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Front-End Developer with expertise in mobile application
              development using React Native and modern technologies. Focused on
              building intuitive, efficient, and user-friendly applications.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0 ">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-acent rounded-full flex justify-center items-center text-acent text-base hover:bg-acent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
