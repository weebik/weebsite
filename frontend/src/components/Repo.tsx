import "../styles/repoList.css";
import { RepoProps } from "../types/repo.type";

function Repo({ name, htmlUrl, imageUrl }: RepoProps) {
  return (
    <a href={htmlUrl} target="_blank">
      <img src={imageUrl} alt={`${name}`} />
    </a>
  );
}

export default Repo;
