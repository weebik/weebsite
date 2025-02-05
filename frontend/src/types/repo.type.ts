export interface RepoProps {
  name: string;
  htmlUrl: string;
  imageUrl: string;
}

export interface RepoData {
  id: number;
  name: string;
  html_url: string;
  owner: {
    login: string;
  };
}
