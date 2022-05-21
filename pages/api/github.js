import { Octokit } from "@octokit/rest";

export default async (req, res) => {
  
  const octokit = new Octokit();

  const repos = await octokit.request("/users/yuwansamega/repos");

  const dataRepos = repos.data;

  const reposCount = repos.data.length;

  const starsCount = repos.data.filter(repo => !repo.fork).reduce((acc, item) => {
    return acc + item.stargazers_count;
  },0);

  const starred = await octokit.request("/users/yuwansamega/starred");

  const starredCount = starred.data.length;

  return res.status(200).json({dataRepos: dataRepos, reposCount: reposCount, starsCount: starsCount, starredCount: starredCount});
}