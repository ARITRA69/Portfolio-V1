import {
    mobile,
    programmer,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    next,
    GoogleMapClone,
    JobSearch,
    weatherforecast,
    starfield,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile App Developer",
      icon: mobile,
    },
    {
      title: "Programmer",
      icon: programmer,
    },
    {
      title: "Visual Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "next",
      icon: next,
    },
  ];
  
  const experiences = [
    {
      title: "Not Worked Professionally",
      // company_name: "Starbucks",
      // icon: starbucks,
      iconBg: "#383E56",
      // date: "March 2020 - April 2021",
      points: [
        "Developing websites using latest techs",
        "Grinding on leetcode",
      ],
    },
    {
      title: "Waiting for first Internship/PPO",
      // company_name: "Tesla",
      // icon: tesla,
      iconBg: "#E6DEDD",
      // date: "Jan 2021 - Feb 2022",
      points: [
        "Btech CSE undergrad",
        "looking for internship oportunities",
      ],
    }
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Google Map Clone",
      description:
        "Web-based platform that allows users to navigate, search, view distance between two places, view time to cover the distance and many more.",
      tags: [
        {
          name: "mapbox",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: GoogleMapClone,
      source_code_link: "https://github.com/ARITRA69/Google-Map-Clone",
      live_link: "https://google-map-clone-v1.netlify.app"
    },
    {
      name: "Job Search",
      description:
        "The Mobile Job Searching App is a cross-platform application designed to help users search and apply for jobs through their mobile devices",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "expo",
          color: "green-text-gradient",
        },

      ],
      image: JobSearch,
      source_code_link: "https://github.com/ARITRA69/JobSearch",
    },
    {
      name: "Weather Forecast",
      description:
        "Web-based platform that allows users to view weather details in daily or weekly basis in both celsius and fahrenheit. User can search location and view the weather.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "visualcrossing",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
      ],
      image: weatherforecast,
      source_code_link: "https://github.com/ARITRA69/weather-forecast",
      live_link: "https://weatherforcast-v1.netlify.app"
    },
    {
      name: "Star Field",
      description:
        "Desktop application that shows a infinite first person view of a space tavel through thousand stars. Speed accelerates on mouse movement.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "processing",
          color: "green-text-gradient",
        },

      ],
      image: starfield,
      source_code_link: "https://github.com/ARITRA69/Star-Filed",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };