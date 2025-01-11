function TechList() {
  const techs = [
    {
      url: "https://react.dev",
      src: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
      alt: "React.js",
    },
    {
      url: "https://www.typescriptlang.org",
      src: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
      alt: "Typescript",
    },
    {
      url: "https://mui.com/material-ui/",
      src: "https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white",
      alt: "Material-UI",
    },
    {
      src: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
      alt: "CSS3",
    },
    {
      url: "https://strapi.io",
      src: "https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white",
      alt: "Strapi",
    },
    {
      url: "https://vercel.com",
      src: "https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white",
      alt: "Vercel",
    },
    {
      url: "https://render.com",
      src: "https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white",
      alt: "Render",
    },
    {
      url: "https://supabase.com",
      src: "https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white",
      alt: "Supabase",
    },
  ];

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
