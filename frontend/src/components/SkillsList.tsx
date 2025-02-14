import '../styles/skills.css';
import { SkillDataProps } from '../types/skill.type';
import Skill from './Skill';

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
