import { techs } from '../consts/techs';

function TechList() {
  return (
    <ul className="tech-list">
      {techs.map((tech, index) => (
        <li key={index}>
          <a href={tech.url} target="_blank">
            <img src={tech.src} alt={tech.alt} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default TechList;
