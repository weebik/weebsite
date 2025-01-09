import "../styles/repoList.css";

interface RepoProps {
  name: string;
  htmlUrl: string;
  imageUrl: string;
}

function Repo({ name, htmlUrl, imageUrl }: RepoProps) {
  return (
    <a href={htmlUrl} target="_blank">
      <img src={imageUrl} alt={`${name}`} />
    </a>
  );
}

export default Repo;
