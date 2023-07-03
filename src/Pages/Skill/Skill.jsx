import React from 'react';
import "./Skill.css"
import skillImg from "../../assets/skill.gif"

const Skill = () => {
    return (
        <div className='mt-5 skill-part'>

            <h1 className='text-6xl skill-title'>Skills</h1>
            <h2 className='text-2xl skill-text'>My Skills</h2>
           <div>
            <img src={skillImg} alt="" />

           </div>
           <div>

           </div>
        </div>
    );
};

export default Skill;