import "@iconify-json/logos";
import Emblem from "./Emblem";
import { skills } from "../constants/skills";
const SkillList = () => {
  return (
    <ul className="skill-list">
      {skills.map((skill, index) => (
        <Emblem icon={skill.icon} text={skill.skill} key={index} />
      ))}
    </ul>
  );
};

export default SkillList;
