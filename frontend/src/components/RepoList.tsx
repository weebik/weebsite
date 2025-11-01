import { useEffect, useState } from 'react';
import Repo from './Repo';
import { RepoData } from '../types/repo.type';
import '../styles/repoList.css';
import axios from 'axios';

function RepoList() {
  const [repos, setRepos] = useState<RepoData[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get<RepoData[]>(
          'https://api.github.com/users/weebik/repos',
        );
        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching repo data: ', error);
      }
    };

    fetchRepos();
  }, []);

  function getImageUrl(repo: RepoData) {
    const { owner, name } = repo;
    const socialPreviewUrl = `https://opengraph.githubassets.com/1/${owner.login}/${name}`;
    return socialPreviewUrl;
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
