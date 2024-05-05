
import './App.css';
import ContactForm from './Components/Contact';
import Skills from './Components/Skills';
import Home from './Pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
   <BrowserRouter >
   <Routes >
    <Route path="/" element={<Home/>}/>
    <Route path="/skills" element={<Skills/>}/>
    < Route path="/contact" element={<ContactForm/>}/>
    
   </Routes>

   </BrowserRouter>
  );
}

export default App;
