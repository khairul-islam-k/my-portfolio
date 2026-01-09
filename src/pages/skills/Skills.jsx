import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import AllSkills from '../shared/AllSkills';


const frontend = [
        {
            "id": 1,
            "name": "Next.js",
            "logo": "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"
        },
        {
            "id": 2,
            "name": "React",
            "logo": "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        },
        {
            "id": 3,
            "name": "TypeScript",
            "logo": "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
        },
        {
            "id": 4,
            "name": "JavaScript",
            "logo": "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
        },
        {
            "id": 5,
            "name": "HTML",
            "logo": "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
        },
        {
            "id": 6,
            "name": "CSS",
            "logo": "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
        },
        {
            "id": 7,
            "name": "Tailwind CSS",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
        }

    ];

    const backend = [
        {
            "id": 1,
            "name": "Node.js",
            "logo": "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
        },
        {
            "id": 2,
            "name": "Express",
            "logo": "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
        },
        {
            "id": 3,
            "name": "MongoDB",
            "logo": "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
        },
        {
            "id": 4,
            "name": "MySQL",
            "logo": "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg"
        },
        {
            "id": 5,
            "name": "REST APIs",
            "logo": "https://cdn-icons-png.flaticon.com/512/2165/2165004.png"
        },
        {
            "id": 6,
            "name": "JWT",
            "logo": "https://cdn.worldvectorlogo.com/logos/jwt-3.svg"
        },
        {
            "id": 7,
            "name": "Socket.io",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg"
        },
        {
            "id": 8,
            "name": "Mongoose",
            "logo": "https://cdn.worldvectorlogo.com/logos/mongoose-1.svg"
        }

    ];

    const tools = [
        {
            "id": 1,
            "name": "Git",
            "logo": "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
        },
        {
            "id": 2,
            "name": "GitHub",
            "logo": "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
        },
        {
            "id": 3,
            "name": "VS Code",
            "logo": "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg"
        },
        {
            "id": 5,
            "name": "npm",
            "logo": "https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg"
        }
    ];

const Skills = () => {
    return (
        <div className='pt-16 pb-10 px-8'>
            <AllSkills
            frontend={frontend}
            backend={backend}
            tools={tools}
            ></AllSkills>
        </div>
    );
};

export default Skills;