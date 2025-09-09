import { Baby } from 'lucide-react';
import React from 'react';

const AllSkills = ({ frontend, backend, tools }) => {
    console.log(frontend, backend, tools);
    return (
        <div className='max-w-[1200px] mx-auto'>


            <h2 className='my-10 text-2xl font-bold'>FrontEnd :</h2>
            <div className='grid lg:grid-cols-4 gap-4'>
                {
                    frontend.map(data => <div key={data.id} className='border h-60 flex justify-center items-center rounded-xl shadow-gray-500 hover:shadow-gray-700 shadow-2xl'>
                        <div>
                            <img className='w-[60px] h-[60px] mx-auto' src={data.logo} alt="" />
                            <h3 className='text-center mt-5 text-2xl font-bold'>{data.name}</h3>
                        </div>
                    </div>)
                }
            </div>

            <h2 className='my-10 text-2xl font-bold'>BackEnd:</h2>
            <div className='grid lg:grid-cols-4 gap-4'>
                {
                    backend.map(data => <div key={data.id} className='border h-60 flex justify-center items-center rounded-xl shadow-gray-500 hover:shadow-gray-700 shadow-2xl'>
                        <div>
                            <img className='w-[60px] h-[60px] mx-auto' src={data.logo} alt="" />
                            <h3 className='text-center mt-5 text-2xl font-bold'>{data.name}</h3>
                        </div>
                    </div>)
                }
            </div>


            <h2 className='my-10 text-2xl font-bold'>Tools :</h2>
            <div className='grid lg:grid-cols-4 gap-4'>
                {
                    tools.map(data => <div key={data.id} className='border h-60 flex justify-center items-center rounded-xl shadow-gray-500 hover:shadow-gray-700 shadow-2xl'>
                        <div>
                            <img className='w-[60px] h-[60px] mx-auto' src={data.logo} alt="" />
                            <h3 className='text-center mt-5 text-2xl font-bold'>{data.name}</h3>
                        </div>
                    </div>)
                }
            </div>


        </div>
    );
};

export default AllSkills;