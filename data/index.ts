
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#Experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Clean UI, efficient code — my development mantra.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Comfortable with Git and collaborative workflows.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Focused on writing scalable, maintainable code",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Exploring web animations beyond the basics.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img:"/grid.svg",
    spareImg:"/b5.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    name:"Click Card",
    title: "Modern Travel Page for Trip Planning",
    des: "Discover and plan your next adventure with this modern travel website",
    img: "/p1.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg"],
    link: "https://travel-website-chi-woad.vercel.app/",
  },
  {
    id: 2,
    name:"Click-Card",
    title: "Zoomy - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://zoomy-video-confrencing.vercel.app/",
  },
  {
    id: 3,
    name:"Click-Card",
    title:"Chatting_appliaction",
    des: "A real-time chat app enabling instant messaging using Socket.IO...",
    img: "/p3.png",
    iconLists: ["/jS.png","/CSS.svg","/HTML.png","socket-io.png"],
    link: "https://chat-app-websocket-37wl.onrender.com",
  },
  {
    id: 4,
    name:"Click-Card",
    title: "Number Guessing Game",
    des: "A game where you guess a randomly chosen number.",
    img: "/game.jpeg",
    iconLists: ["/jS.png","/CSS.svg","/HTML.png"],
    link: "https://number-guessing-game-rho-blue.vercel.app/",
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using javaScript & PHP , enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Personal Projects",
    desc: "Built multiple frontend projects using React.js, TypeScript, and modern libraries. Focused on responsiveness, component reusability, and user experience.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "AI Task Contributor - Outlier.ai",
    desc: "Performed structured micro-tasks to support machine learning workflows via the Outlier.ai contributor platform.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Community Contributor",
    desc: "Engaging with developer communities and exploring beginner-friendly open-source repositories to grow beyond tutorials.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/Arinyamaurya"
  },
  {
    id: 2,
    img: "/leet.svg",
     link:"https://leetcode.com/u/1AWci7KLWm/"
  },
  {
    id: 3,
    img: "/link.svg",
     link:"https://www.linkedin.com/in/arinya-maurya/"
  },
];