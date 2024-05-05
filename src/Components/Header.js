

import home from '../config/home.png';
import data from '../config/data';
import { useNavigate } from 'react-router-dom';

 
  const Home = () => {
    const navigate=useNavigate();
    
    return (
       
      <div id="home" className="w-full max-w-full    z-10">
        <div className="relative md:flex flex-row justify-between md:pt-40   pt-24 px-1 md:px-16 max-w-8xl mx-auto">
          <div className="max-w-[950px] px-4 flex flex-col justify-center mb-14 ml-10  ">
            <p className="text-white text-2xl font-bold  ml-1 ">
              {data.heading}
            </p>
            <h1 className=" text-6xl mb-4 font-sans text-white  hover:text-yellow-300">
            {data.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-white ">
            {data.position}
            </h2>
            <p className="text-white py-4 max-w-[700px] ">
           {data.description}
            </p>
            <div className="flex w-full">
               <button className=" border-2 border-gray-600 px-3 py-3 my-2 rounded-mdtext-bold flex items-center hover:bg-gray-700 hover:border-gray-300 text-white dark:hover:text-gray-100 dark:hover:bg-gray-500 dark:hover:border-gray-900">
                  View Projects
              </button> 
             
               
            </div>
          </div>
          <div className=" mb-20 mr-15 ">       
            <img
              src={home}
            alt="logo"
           className="h-auto max-w-full"
            />
          </div>
        </div>
  
        
      </div>
    );
  };
  
  export default Home;