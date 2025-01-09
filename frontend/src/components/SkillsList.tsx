import "../styles/skills.css";
import { SkillData } from "../types/skill.type";
import Skill from "./Skill";

interface SkillDataProps {
  skillData: SkillData[];
}

function SkillsList({ skillData }: SkillDataProps) {
  return (
    <div className="skill-list">
      {skillData.map((_, index) => (
        <Skill
          key={index}
          name={skillData[index].name}
          imgSrc={skillData[index].imgSrc}
        />
      ))}
    </div>
  );
}

export default SkillsList;
