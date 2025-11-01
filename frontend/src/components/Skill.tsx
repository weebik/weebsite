import '../styles/skills.css';
import { SkillData } from '../types/skill.type';

export default function Skill({ name, imgSrc }: SkillData) {
  return (
    <div className="skill">
      <img className="skill-image" src={imgSrc} alt={name} />
      <div className="skill-text">{name}</div>
    </div>
  );
}
