export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "LongLyf",
    techs: ["ReactJS (NextJS)", "react-query", "zod"],
    link: "https://github.com/Sahith1408/LongLyf",
  },
  {
    title: "ParkingLotManagement",
    techs: ["ReactJS (NextJS)", "TypeScript"],
    link: "https://github.com/Sahith1408/ParkingLotManagement",
  },
  {
    title: "Sentimental-Analysis",
    techs: ["ReactJS (NextJS)", "TypeScript"],
    link: "https://github.com/Sahith1408/Sentimental-Analysis",
  },
  {
    title: "employee_management",
    techs: ["ReactJS (NextJS)", "TypeScript"],
    link: "https://github.com/Sahith1408/ParkingLotManagement",
  },
  {
    title: "Portfolio / Template",
    techs: ["Astro"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
