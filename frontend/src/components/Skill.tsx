import { Typography } from "@mui/material";
import "../styles/skills.css";
import { SkillData } from "../types/skill.type";

export default function Skill({ name, imgSrc }: SkillData) {
  return (
    <div className="skill">
      <img className="skill-image" src={imgSrc} alt={name} />
      <Typography fontSize={40} sx={{ color: "white" }}>
        {name}
      </Typography>
    </div>
  );
}
