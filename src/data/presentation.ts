type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "Sahith.work@gmail.com",
  title: "Hi, I’m Sahith Manchi 👋",
  // profile: "/profile.webp",
  description:
    "Namaste 🙏🏻, i'm a *Java Full Stack* with over * 8+ years* of Spring MVC for Architecture, Restful Web services, PostgreSQL & Oracle DB are for Database Management, Unit Testing,Crucible. I am currently working with *Dell.Inc* as *Java Developer*. Outside of work I mix Pulihor with *Desi aunties*.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/sahithmanchi",
    },
    {
      label: "linkedin",
      link: "https://www.linkedin.com/in/sahith-m-a1ab18165/",
    },
    {
      label: "Github",
      link: "https://github.com/Sahith1408",
    },
  ],
};

export default presentation;
