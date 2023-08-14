
import "./Skill.css";
import skillImg from "../../assets/skill.gif";
import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
  return (
    <div className="mt-5 skill-part">
      <h1 className="text-6xl skill-title">Skills</h1>
      <h2 className="text-2xl skill-text">My Skills</h2>

      <div className="flex flex-col md:flex-row">
        <div className="w-full">
          <img className="w-full" src={skillImg} alt="" />
        </div>
        <div className="w-full mt-28 progressbar">
            <h2>HTML</h2>
             <ProgressBar className="bar" completed={90} maxCompleted={100} />
             
             <h2>CSS</h2>
             <ProgressBar completed={80} maxCompleted={100} />
             <h2>JavaScript</h2>
             <ProgressBar completed={75} maxCompleted={100} />
             <h2>React</h2>
             <ProgressBar completed={85} maxCompleted={100} />
             <h2>Next JS</h2>
             <ProgressBar completed={70} maxCompleted={100} />
             <h2>Express JS</h2>
             <ProgressBar completed={60} maxCompleted={100} />
             <h2>MongoDB</h2>
             <ProgressBar completed={65} maxCompleted={100} />

        </div>
      </div>
    </div>



  );
};

export default Skill;
