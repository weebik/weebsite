import { useEffect, useState } from "react";
import Repo from "./Repo";
import { RepoData } from "../types/repo.type";
import "../styles/repoList.css";

function RepoList() {
  const [repos, setRepos] = useState<RepoData[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/weebik/repos"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: RepoData[] = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repo data: ", error);
      }
    };

    fetchRepos();
  });

  function getImageUrl(repo: RepoData) {
    const { owner, name, id } = repo;
    const socialPreviewUrl = `https://opengraph.githubassets.com/1/${owner.login}/${name}`;
    const defaultImageUrl = `https://repository-images.githubusercontent.com/${id}/default.png`;
    return socialPreviewUrl || defaultImageUrl;
  }

  return (
    <div className="repo-list">
      {repos.map((repo) => (
        <Repo
          key={repo.id}
          name={repo.name}
          htmlUrl={repo.html_url}
          imageUrl={getImageUrl(repo)}
        />
      ))}
    </div>
  );
}

export default RepoList;
