'use client';

import { FaHtml5, FaReact } from 'react-icons/fa';
import {
  SiCss3,
  SiTailwindcss,
  SiAndroid,
  SiApple,
  SiTypescript,
  SiJavascript,
  SiStyledcomponents,
  SiGraphql,
  SiAxios,
  SiGit,
  SiGithub,
  SiJest,
  SiTestinglibrary,
  SiRedux,
} from 'react-icons/si';
import { TabsContent, Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../components/ui/tooltip';
import { ScrollArea } from '../../components/ui/scroll-area';
import { motion } from 'framer-motion';

const about = {
  title: 'About me',
  description: 'React Native Developer',
  info: [
    {
      fieldName: 'Name:',
      fieldValue: 'Juan Manuel Gallegos',
    },
    {
      fieldName: 'Phone:',
      fieldValue: '(+54) 2664 018067',
    },
    {
      fieldName: 'Nationality:',
      fieldValue: 'Argentina',
    },
    {
      fieldName: 'Email:',
      fieldValue: 'wanmagallegos@gmail.com',
    },
    {
      fieldName: 'Language:',
      fieldValue: 'Spanish(native), English(B1)',
    },
  ],
};

const education = {
  icon: '',
  title: 'Education',
  description:
    'A passionate learner with a strong foundation in mobile development, web development, and JavaScript & TypeScript. My journey in technology includes hands-on experience gained through specialized courses at Coderhouse, where I refined my skills to build modern, user-friendly applications.',
  items: [
    {
      institution: 'Coderhouse',
      position: 'Mobile Developer',
      duration: '2023',
    },
    {
      institution: 'Coderhouse',
      position: 'JavaScript',
      duration: '2022 - 2023',
    },
    {
      institution: 'Coderhouse',
      position: 'CSS',
      duration: '2022',
    },
    {
      institution: 'Coderhouse',
      position: 'Web Developer',
      duration: '2022',
    },
  ],
};

const skills = {
  title: 'Skills',
  description:
    'With a diverse set of skills in modern web and mobile development, I specialize in creating seamless user experiences using a range of technologies. From building cross-platform apps with React Native to crafting responsive designs with CSS and Tailwind, I’m equipped to tackle a variety of development challenges.',
  items: [
    {
      name: 'React Native',
      icon: <FaReact />,
    },
    {
      name: 'CSS',
      icon: <SiCss3 />,
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss />,
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript />,
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript />,
    },
    {
      name: 'HTML5',
      icon: <FaHtml5 />,
    },
    {
      name: 'Styled Components',
      icon: <SiStyledcomponents />,
    },
    {
      name: 'GraphQL',
      icon: <SiGraphql />,
    },
    {
      name: 'Redux',
      icon: <SiRedux />,
    },
    {
      name: 'Axios',
      icon: <SiAxios />,
    },
    {
      name: 'Jest',
      icon: <SiJest />,
    },
    {
      name: 'Testing Library',
      icon: <SiTestinglibrary />,
    },
    {
      name: 'Android',
      icon: <SiAndroid />,
    },
    {
      name: 'iOS',
      icon: <SiApple />,
    },
    {
      name: 'Git',
      icon: <SiGit />,
    },
    {
      name: 'GitHub',
      icon: <SiGithub />,
    },
  ],
};

const tabsStyle =
  'hover:bg-white/30 rounded-sm hover:text-acent-hover bg-white/10';

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="skills"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380-x] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="skills" className={tabsStyle}>
              Skills
            </TabsTrigger>
            <TabsTrigger value="education" className={tabsStyle}>
              Education
            </TabsTrigger>{' '}
            <TabsTrigger value="about" className={tabsStyle}>
              About me
            </TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                    {skills.items.map((skills, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider duration={100}>
                            <Tooltip>
                              <TooltipTrigger
                                className="w-full h-[140px] bg-[#232329] rounded-xl flex justify-center items-center
                               group"
                              >
                                <div className="text-6xl group-hover:text-acent-hover transition-all duration-700">
                                  {skills.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skills.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-acent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px]">
                            {item.position}
                          </h3>
                          <p className="text-white/60">{item.institution}</p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-lg">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
