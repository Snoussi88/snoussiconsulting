import React from 'react';
import Icon1 from '../../images/flutter.svg';
import { ServicesContainer,ServicesH1,ServicesH2,ServicesCard,ServicesWrapper,ServicesP,ServicesIcon} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Lorem Ipsum</ServicesH2>
                    <ServicesP>Lorem Ipsum, 
                    Fusce pretium, et ornare eros augue a sapien, sed luctus nisl consectetur sed.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Lorem Ipsum</ServicesH2>
                    <ServicesP>Lorem Ipsum, 
                    ,tortor erat interdum mi. Aliquam vehicula massa odio, sed luctus nisl consectetur sed.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Lorem Ipsum</ServicesH2>
                    <ServicesP>Lorem Ipsum, 
                    ,et ornare eros augue a sapien, sed luctus nisl consectetur sed.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
