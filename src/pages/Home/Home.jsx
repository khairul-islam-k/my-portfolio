import banner from "../../assets/rsz_adobe_express_-_file.png";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import ProjectsSection from "../projectsSection/ProjectsSection";
import Contact from "./Contact";

const Home = () => {
    const frontend = [
        {
            "id": 1,
            "name": "React",
            "logo": "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        },
        {
            "id": 2,
            "name": "JavaScript",
            "logo": "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
        },
        {
            "id": 3,
            "name": "HTML",
            "logo": "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
        },
        {
            "id": 4,
            "name": "CSS",
            "logo": "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
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



    return (
        <div className='pt-18'>
            <div className='bg-linear-to-t from-[#FFD4D4] to-[#fffafa]'>

                <div className=' w-11/12 mx-auto flex flex-col-reverse lg:flex-row items-center justify-around bg-[url("assets/header_bg.png")] bg-no-repeat bg-bottom-right'>
                    <div className='pl-2 py-2'>
                        <h5 className='text-xl mb-4'>Hi, I am</h5>
                        <h3 className='text-3xl font-bold mb-4'>Md Khairul Islam</h3>
                        <p>I am a web developer.I can make beautiful website</p>
                        <button className='btn btn-primary mt-4'>Resume</button>
                    </div>
                    <div>
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>

            {/* About */}
            <section className='border-2 w-11/12 mx-auto my-20 p-3 rounded-2xl'>
                <h3 className='text-3xl font-bold text-center'>About me</h3>
                <h4 className='text-xl font-bold mb-3 mt-4'>Programming Journey :</h4>
               <p> I began my programming journey with curiosity and a passion for problem-solving. Starting with basic HTML and CSS, I gradually explored JavaScript, React, Node.js, Express, and MongoDB, building projects that solve real-life problems. Over time, I developed a strong understanding of both frontend and backend development, enabling me to create complete, functional</p>

               
                <h4 className='text-xl font-bold mb-3 mt-4'>Work I Enjoy :</h4>
               <p>I love building intuitive, user-friendly web applications that not only look great but also perform seamlessly. Whether it’s designing interactive UIs, optimizing performance, or integrating APIs, I enjoy the entire process of turning an idea into a functional product.</p>

                <h4 className='text-xl font-bold mb-3 mt-4'>Hobbies & interests :</h4>
               <p>Outside of coding, I enjoy playing cricket and reading about new tech trends. I also like learning about business and entrepreneurship, as I believe technology and innovation go hand-in-hand.</p>

                <h4 className='text-xl font-bold mb-3 mt-4'>Personality :</h4>
               <p>I’m a curious, detail-oriented, and self-motivated individual who enjoys continuous learning. I’m always eager to take on challenges, improve my skills, and collaborate with others to create meaningful solutions.</p>

                <h4 className='text-xl font-bold mb-3 mt-4'>Mindset :</h4>
               <p>I believe in writing clean, maintainable code and value teamwork as much as individual growth. My approach to work is proactive and solution-driven, and I always keep user experience at the heart of my development process</p>

            </section>

            <section className='p-10 text-neutral bg-base-300'>
                <h2 className='text-3xl font-bold text-center mb-10'>What I do</h2>
                <div className='bg-white py-5 rounded-xl mb-5'>
                    <h2 className='text-2xl font-bold mb-5 lg:ml-10'>FrontEnd:</h2>
                    <div className='text-white w-11/12 mx-auto'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {
                                frontend.map(data => <SwiperSlide>
                                    <div className='bg-base-300 p-10 rounded-xl'>
                                        <img className='w-[150px] h-[150px] mx-auto' src={data.logo} alt="" />
                                        <h3 className='text-center text-neutral'>{data.name}</h3>
                                    </div>
                                </SwiperSlide>)
                            }

                        </Swiper>
                    </div>
                </div>


                <div className='bg-white py-5 rounded-xl mb-5'>
                    <h2 className='text-2xl font-bold mb-5 lg:ml-10'>BackEnd:</h2>
                    <div className='text-white w-11/12 mx-auto'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {
                                backend.map(data => <SwiperSlide>
                                    <div className='bg-base-300 p-10 rounded-xl'>
                                        <img className='w-[150px] h-[150px] mx-auto' src={data.logo} alt="" />
                                        <h3 className='text-center text-neutral'>{data.name}</h3>
                                    </div>
                                </SwiperSlide>)
                            }

                        </Swiper>
                    </div>
                </div>


                <div className='bg-white py-5 rounded-xl'>
                    <h2 className='text-2xl font-bold mb-5 lg:ml-10'>Tools:</h2>
                    <div className='text-white w-11/12 mx-auto'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {
                                tools.map(data => <SwiperSlide>
                                    <div className='bg-base-300 p-10 rounded-xl'>
                                        <img className='w-[150px] h-[150px] mx-auto' src={data.logo} alt="" />
                                        <h3 className='text-center text-neutral'>{data.name}</h3>
                                    </div>
                                </SwiperSlide>)
                            }

                        </Swiper>
                    </div>
                </div>



            </section>

            {/* projects */}
            <section className='bg-base-300'>
                <ProjectsSection></ProjectsSection>
            </section>

            {/* contact */}
            <section className='bg-base-300'>
                <Contact></Contact>
            </section>


        </div>
    );
};

export default Home;