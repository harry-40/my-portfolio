import Navbar from "../Components/Navbar";
import Header from '../Components/Header';
import Footer from "../Components/Footer";
import ContactForm from "../Components/Contact";
import Skills from "../Components/Skills";




function Home() {
    return (
      <div className="bg-black w-full h-full max-w-full">
          <Navbar/>
          <Header/>
          
          <Skills/>
          <ContactForm/>
          <Footer/>
         
        
      </div>
    );
  }

export default Home;