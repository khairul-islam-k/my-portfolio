import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


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

const Skills = () => {
    return (
        <div className='pt-16'>
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
                                    <div className='bg-base-300 lg:p-10 rounded-xl'>
                                        <img className='lg:w-[150px] lg:h-[150px] mx-auto' src={data.logo} alt="" />
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
                                    <div className='bg-base-300 lg:p-10 rounded-xl'>
                                        <img className='lg:w-[150px] lg:h-[150px] mx-auto' src={data.logo} alt="" />
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
                                    <div className='bg-base-300 lg:p-10 rounded-xl'>
                                        <img className='lg:w-[150px] lg:h-[150px] mx-auto' src={data.logo} alt="" />
                                        <h3 className='text-center text-neutral'>{data.name}</h3>
                                    </div>
                                </SwiperSlide>)
                            }

                        </Swiper>
                    </div>
                </div>



            </section>
        </div>
    );
};

export default Skills;