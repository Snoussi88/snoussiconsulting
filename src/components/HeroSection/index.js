import React,{useState} from 'react'
import {HeroBg,ImageBg,HeroP,HeroH1,HeroContainer,HeroBtnWrapper,ArrowForward,ArrowRight, HeroContent} from './HeroElements';
import {Button} from '../../ButtonElements';
import video from '../../videos/video.mp4';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);

    }

    return (
        <HeroContainer>
            <HeroBg>
                <ImageBg autoPlay loop muted src={video}/>
            </HeroBg>
            <HeroContent>
                <HeroH1>upgrade your business with our analytics!</HeroH1>
                <HeroP>
                    Hire us today, and get the help you need !
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' primary="true" dark="true" onMouseEnter={onHover} onMouseLeave={onHover}>Hire! {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
                </HeroBtnWrapper>

            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection;
