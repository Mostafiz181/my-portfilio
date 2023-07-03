import React from 'react';
import Banner from '../../Banner/Banner';
import About from '../../About/About';
import Service from '../../Service/Service';
import Portfolio from '../../Portfolio/Portfolio';
import Skill from '../../Skill/Skill';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Service></Service>
           <Portfolio></Portfolio>
           <Skill></Skill>
            
        </div>
    );
};

export default Home;