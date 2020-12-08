import React,{useState} from 'react';
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar/index';
import Sidebar from '../components/Sidebar/index';
import HeroSection from './../components/HeroSection/index';
import InfoSection from './../components/InfoSection/index';
import Services from './../components/Services/index';
import { homeObjThree } from './../components/InfoSection/Data';
import Footer from '../components/Footer';


const Home = () => {

    const [isOpen,setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle= {toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Services/>
            <Footer/>
        </>
        
        
        
    );
}

export default Home;
