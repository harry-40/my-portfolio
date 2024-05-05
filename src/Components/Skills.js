import css from '../config/css.svg';
import html from '../config/html.svg';
import tailwindcss from '../config/tailwindcss.svg';
import cpp from '../config/cpp.svg';
import github from '../config/github.svg';
import javascript from '../config/javascript.svg';
import mongodb from '../config/mongodb.svg';
import react from '../config/react.svg';
import node from '../config/node.svg';
import redux from '../config/redux.svg';
const Skills = () => {
    return (
      <div className="w-15 ml-16 mr-16 px-12 py-10">
        <h2 className="text-3xl text-white font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* HTML */}
          <div className="bg-neutral-500 p-4 rounded-lg shadow-md flex items-center justify-center">
            <img src={html} alt="HTML" className="w-16 h-16" />
            <span className="ml-2 text-lg font-semibold">HTML</span>
          </div>
          {/* CSS */}
          <div className="bg-neutral-500 p-4 rounded-lg shadow-md flex items-center justify-center">
            <img src={css} alt="CSS" className="w-16 h-16" />
            <span className="ml-2 text-lg font-semibold">CSS</span>
          </div>
          {/* JavaScript */}
          <div className="bg-neutral-500 p-4 rounded-lg shadow-md flex items-center justify-center">
            <img src={javascript} alt="JavaScript" className="w-16 h-16" />
            <span className="ml-2 text-lg font-semibold">JavaScript</span>
          </div>
          {/* React */}
          <div className="bg-neutral-500 p-4 rounded-lg shadow-md flex items-center justify-center">
            <img src={react} alt="React" className="w-16 h-16" />
            <span className="ml-2 text-lg font-semibold">React</span>
          </div>
          {/* Node.js */}
          <div className="bg-neutral-500 p-4 rounded-lg shadow-md flex items-center justify-center">
            <img src={node} alt="Node.js" className="w-16 h-16" />
            <span className="ml-2 text-lg font-semibold">Node.js</span>
          </div>
          {/* MongoDB */}
          <div className="bg-neutral-500 p-4 rounded-lg shadow-md flex items-center justify-center">
            <img src={mongodb} alt="MongoDB" className="w-16 h-16" />
            <span className="ml-2 text-lg font-semibold">MongoDB</span>
          </div>
          {/* Cpp */}
          <div className="bg-neutral-500 p-4 rounded-lg shadow-md flex items-center justify-center">
            <img src={cpp} alt="Working with Images" className="w-16 h-16" />
            <span className="ml-2 text-lg font-semibold">C++</span>
          </div>
               {/* Mongodb */}
          <div className="bg-neutral-500 p-4 rounded-lg shadow-md flex items-center justify-center">
            <img src={mongodb} alt="Working with Images" className="w-16 h-16" />
            <span className="ml-2 text-lg font-semibold">Mongodb</span>
          </div>
           {/* redux */}
           <div className="bg-neutral-500 p-4 rounded-lg shadow-md flex items-center justify-center">
            <img src={redux} alt="Working with Images" className="w-16 h-16" />
            <span className="ml-2 text-lg font-semibold">Redux</span>
          </div>
           {/* tailwindcss */}
           <div className="bg-neutral-500 p-4 rounded-lg shadow-md flex items-center justify-center">
            <img src={tailwindcss} alt="Working with Images" className="w-16 h-16" />
            <span className="ml-2 text-lg font-semibold">Tailwind CSS</span>
          </div>
           {/* Github */}
           <div className="bg-neutral-500 p-4 rounded-lg shadow-md flex items-center justify-center">
            <img src={github} alt="Working with Images" className="w-16 h-16" />
            <span className="ml-2 text-lg font-semibold">Github</span>
          </div>

        </div>
      </div>
    );
  };
  
  export default Skills;