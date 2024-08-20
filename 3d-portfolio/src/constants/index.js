import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  go,
  python,
  c,
  cpp,
  java,
  tailwind,
  nodejs,
  git,
  threejs,
  dexterity,
  pompadour,
  smc,
  autocorrect,
  scheme,
  securefilesharing,
  byob,
  game2048,
  ngordnet,
  riscv,
  car,
  wen,
  carlos,
  faridian,
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
    title: "Cybersecurity Expert",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Computer Architecture",
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
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Golang",
    icon: go,
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
    name: "Python",
    icon: python,
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
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
];

const experiences = [
  {
    title: "Robotics and Supply Chain Intern",
    company_name: "Dexterity Inc.",
    icon: dexterity,
    iconBg: "#FFFFFF",
    date: "August 2021 - July 2023",
    points: [
      "Revised and updated the Standard Operations Procedure for camera mounting brackets of robots",
      "Assembled 5 control panels for robots",
      "Wrote the entire Standard Operations Procedure for control panels",
      "Attended and assisted a demo held by Dexterity for UPS in one of their warehouses",
      "Assembled 10 robot server racks that were used at international customer sites",
      "Designed test Rig for suction cup tolerance measurements using Solidworks",   
    ],
  },
  {
    title: "Assistant Manager and Website Developer",
    company_name: "Pompadour Beverly Hills",
    icon: pompadour,
    iconBg: "#FFFFFF",
    date: "Aug 2021 - June 2023",
    points: [
      "Implementing checklists that include required daily procedure and tasks from employees",
	    "Creating a database for all existing inventory to keep up with production needs",
	    "Updating website on a regular basis by including new products and their respective images",
    ],
  },
  {
    title: "Physics Supplemental Instructor and Tutor",
    company_name: "Santa Monica College",
    icon: smc,
    iconBg: "#FFFFFF",
    date: "Aug 2021 - June 2023",
    points: [
      "Tutoring college-level physics at the Santa Monica College Tutoring center. Some of the subjects I cover include: Mechanics, Thermodynamics, Electromagnetism, Optics, Waves, and Fluid Dynamics",
      "Responsible for conducting supplemental learning sessions for students enrolled in Physics 23 to help maximize their learning potential and improve student performance",

    ],
  },

];


const testimonials = [
  {
    testimonial:
      "As a budding-engineer, not only does Wael possess hands-on technical skills and knowledge, but he also has very high EQ and is very personable. His ability to communicate effectively with other team members, and willingness to collaborate on problem solving are key interpersonal skills. Wael is very self-motivated as he's always willing to go the extra-mile to ensure that his work product is of the highest quality. His positive attitude and collaborative demeanor makes him an integral asset to any team.",
    name: "Wen Hsieh, Ph.D.",
    designation: "Founding Managing Partner",
    company: "Matter Venture Partners",
    image: wen,
  },
  {
    testimonial:
      "As the Director of Supply Chain Operations at Dexterity Ai, I managed Wael directly throughout his time at Dexterity. Wael demonstrated a strong aptitude for engineering and a passion for problem-solving. Wael demonstrated a strong aptitude for engineering and a passion for problem-solving. Wael’s technical skills and attention to detail made him a valuable contributor to our supply chain optimization efforts.",
    name: "Carlos Araujo",
    designation: "Director of Supply Chain Operations",
    company: "Dexterity, Inc",
    image: carlos,
  },
  {
    testimonial:
      "Wael goes above and beyond the job requirement of helping my current Physics 23 students. He is always well prepared, does extra problems on his own and leads the SI sessions with passion. My current students are really benefiting from his help. Wael is a very intelligent student who can understand complex concepts with ease, and he also helped his fellow students understand the material better by sharing clear tips during his responses to their discussion prompts",
    name: "Forouzan Faridian",
    designation: "Associate Professor of Physics",
    company: "Santa Monica College",
    image: faridian,
  },
];
const projects = [
  {
    name: "Random World Generator",
    description:
      "A 2D tile-based world generation engine that procedurally creates explorable environments, allowing users to navigate interconnected rooms and hallways while interacting with objects. The engine supports features like randomized world layouts, avatar control, and dynamic gameplay elements, providing an immersive experience in a fully customizable virtual world.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
    ],
    image: byob,
    source_code_link: "https://github.com/",
  },
  {
    name: "Autocorrected Typing Software",
    description:
      "A typing test software that measures typing speed, accuracy, and offers autocorrection to improve the typing experience. The project involves implementing algorithms to select and analyze text, compute typing speeds in words per minute, and create an autocorrect feature that suggests corrections based on similarity metrics. Additionally, the project includes a multiplayer mode for competitive typing, allowing users to race against others in real time, and advanced optimization techniques to enhance performance and efficiency.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
    ],
    image: autocorrect,
    source_code_link: "https://github.com/",
  },
  {
    name: "Scheme Interpreter",
    description:
      "A Scheme interpreter developed in Python that supports evaluating symbolic expressions, defining variables, and invoking built-in as well as user-defined procedures. This project involves building a functional interpreter that can handle recursive calls, lexical and dynamic scoping, and other essential language features like conditionals and logical operators. It emphasizes understanding language design, handling complex data structures, and implementing an evaluation mechanism while following the principles of functional programming.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "scheme",
        color: "green-text-gradient",
      },
    ],
    image: scheme,
    source_code_link: "https://github.com/",
  },
  {
    name: "2048",
    description:
      "A fully-functional implementation of the popular 2048 game, where players slide numbered tiles on a grid to combine them and reach the 2048 tile. The project emphasizes implementing the core game logic, including the rules for tilting the board in four directions, merging tiles with identical values, tracking the score, and determining when the game ends. The implementation also handles edge cases like tile merging rules and empty spaces, allowing for a clean and playable game experience with user-friendly controls and real-time graphical feedback.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },

    ],
    image: game2048,
    source_code_link: "https://github.com/",
  },
  {
    name: "Ngordnet",
    description:
      "A dynamic language exploration tool that analyzes historical word usage trends and semantic relationships by integrating Google Ngrams and WordNet data, allowing users to visualize word frequencies over time, identify hyponyms, and explore linguistic connections in English texts.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },

    ],
    image: ngordnet,
    source_code_link: "https://github.com/",
  },

  {
    name: "Secure File Sharing System",
    description:
      "A secure and decentralized file-sharing platform that enables users to store, share, and manage files across multiple devices with strong encryption. The system offers advanced features like efficient access control, revocation, and integrity checks to ensure data remains protected against unauthorized access, tampering, and adversarial environments while maintaining usability and performance.",
    tags: [
      {
        name: "golang",
        color: "blue-text-gradient",
      },

    ],
    image: securefilesharing,
    source_code_link: "https://github.com/",
  },
  {
    name: "RISC-V CPU",
    description:
      "A RISC-V CPU design comprised of a 2-stage pipelined processor capable of executing multiple instruction types (I, R, S, B, U, J). The processor handles ALU operations, register file management, branching, memory access, and jump instructions, culminating in a fully functional pipelined CPU with hazard control.",
    tags: [
      {
        name: "risc-v",
        color: "blue-text-gradient",
      },
      {
        name: "logism",
        color: "green-text-gradient",
      },

    ],
    image: riscv,
    source_code_link: "https://github.com/",
  },
  {
    name: "Voice Controlled Car",
    description:
      "A voice-controlled mobile robot built on an Arduino Nano, capable of recognizing four commands to move forward, slow down, turn left, and turn right. It uses a microphone circuit to convert audio signals into data processed through level shifting, gain adjustment, and low-pass filtering. The signals are analyzed using PCA/SVD for command classification, triggering the robot’s movement based on a trained model, all powered by a 9V battery for autonomous operation.",
    tags: [
      {
        name: "numpy",
        color: "blue-text-gradient",
      },
      {
        name: "arduino",
        color: "green-text-gradient",
      },
    ],
    image: car,
    source_code_link: "https://github.com/",
  },

];

export { services, technologies, experiences, testimonials, projects };
