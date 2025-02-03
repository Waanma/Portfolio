'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsGithub } from 'react-icons/bs';
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from '../../components/ui/tooltip';
import WorkSliderBtns from '../../components/WorkSliderBtns';

import Link from 'next/link';

const projects = [
  {
    num: '01',
    title: 'Delivery & Pick Up',
    description:
      'A mobile app built with React Native and NextJs that provides a Map and a navigation system, also a web app to upload route manifests.',
    img: '/assets/img/work/insightDrive.jpg',
    stack: [
      { name: 'React Native CLI' },
      { name: 'Styled-Components, TailwindCSS' },
      { name: 'TypeScript' },
      { name: 'Zustand' },
      { name: 'React Native Navigation' },
      { name: 'Radar' },
      { name: 'Google Maps' },
    ],
    link: '',
  },
  {
    num: '02',
    title: 'Thoughts App',
    description:
      'A mobile app built with React Native that provides a list with thoughts, a screen to add thoughts manualy with text and "Voice to Text" and Siri shortcut to interact.',
    img: '/assets/img/work/thoughts.jpg',
    stack: [
      { name: 'React Native CLI' },
      { name: 'Styled-Components' },
      { name: 'TypeScript' },
      { name: 'React Native Navigation' },
      { name: 'Siri' },
    ],
    link: '',
  },
  {
    num: '03',
    title: 'Crypto Consults',
    description:
      'A mobile application built with React Native and Expo that allows users to explore a real-time list of cryptocurrencies. Users can add their favorite cryptos to a personalized list and easily remove them as needed.',
    img: '/assets/img/work/cryptoCollage.jpg',
    stack: [
      { name: 'React Native' },
      { name: 'Styled-Components' },
      { name: 'TypeScript' },
      { name: 'Expo' },
      { name: 'React Router' },
    ],
    link: 'https://github.com/Waanma/consultCrypto',
  },
  {
    num: '04',
    title: 'Pokedex',
    description:
      'A mobile app built with React Native that allows users to explore Pokémon details, search, and save favorites. It uses Apollo Client with GraphQL for data fetching, Zustand for state management, and React Navigation for seamless navigation, providing a smooth and user-friendly experience.',
    img: '/assets/img/work/pokedexCollage.jpg',
    stack: [
      { name: 'React Native CLI' },
      { name: 'Styled-Components' },
      { name: 'TypeScript' },
      { name: 'Zustand' },
      { name: 'React Native Reanimated' },
      { name: 'GraphQL - Apollo Client' },
      { name: 'Adobe Illustrator' },
    ],
    link: 'https://github.com/Waanma/Pokedex',
  },
  {
    num: '05',
    title: 'Pocket Journal',
    description:
      'A mobile journaling app built with React Native and Expo. It allows users to create and manage journal entries, featuring seamless navigation with Expo Router and state management via Zustand. The app offers a clean, responsive design using Styled Components and supports offline functionality with AsyncStorage.',
    img: '/assets/img/work/pocketJournalCollage.jpg',
    stack: [
      { name: 'Expo' },
      { name: 'Tailwind - NativeWind' },
      { name: 'TypeScript' },
      { name: 'Zustand' },
      { name: 'React Native Reanimated' },
      { name: 'API Rest' },
      { name: 'expo-router' },
    ],
    link: 'https://github.com/Waanma/Pocket-Journal',
  },
  {
    num: '06',
    title: 'Recipe App',
    description:
      'A mobile application built with React Native and Expo that allows users to explore and view detailed recipes. Users can search for specific meals, view cooking videos, and save their favorite recipes. The app is styled using NativeWind, utilizes Zustand for state management, and features seamless navigation with Expo Router. ',
    img: '/assets/img/work/recipesCollage.jpg',
    stack: [
      { name: 'Expo' },
      { name: 'Tailwind - NativeWind' },
      { name: 'TypeScript' },
      { name: 'Zustand' },
      { name: 'Axios' },
      { name: 'expo-router' },
      { name: 'Jest' },
    ],
    link: 'https://github.com/Waanma/RecipesApp',
  },
  {
    num: '07',
    title: 'Where In The World',
    description:
      'A mobile app built with React Native and Expo that provides detailed information about countries around the world. Users can search for countries, view relevant details, and save their favorite locations. The app uses Redux Toolkit for state management, React Navigation for navigation, and is styled with Styled Components for a clean and modern user interface.',
    img: '/assets/img/work/countriesCollage.jpg',
    stack: [
      { name: 'React Native CLI' },
      { name: 'Styled-Components' },
      { name: 'TypeScript' },
      { name: 'Zustand' },
      { name: 'Axios' },
      { name: 'React Navigation' },
    ],
    link: 'https://github.com/Waanma/WhereInTheWorld',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto py-10">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-acent text-outline">
                {project.num}
              </div>
              <h2 className="text-[36px] font-bold leading-none text-white group-hover:text-acent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="grid grid-cols-2 xl:gap-2 gap-2 space-y-1">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-sm text-acent bg-white/10 rounded-xl py-2 px-3"
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="xl:pb-5">
                <Link href={project.link} target="_blank">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-acent transition-all duration-300" />
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12"
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="xl:h-[500px] w-full relative group flex justify-center items-center rounded-2xl">
                      <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                      <div className="rounded-2xl relative w-full h-full">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="object-contain rounded-xl max-w-full max-h-full" // Asegura que la imagen se ajuste al contenedor sin cambiar su tamaño
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                btnStyles="bg-acent hover:bg-acent-hover text-primary text-[26px] h-[26px] flex justify-center items-center transition-all rounded-full"
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Work;
