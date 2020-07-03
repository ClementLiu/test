const simpleGit = require("simple-git");
const git = simpleGit(__dirname);

git
  .checkIsRepo()
  .then((isRepo) => !isRepo && initialiseRepo(git))
  .then(() => git.fetch());

function initialiseRepo(git) {
  return git
    .init()
    .then(() => git.addRemote("master", "https://github.com/user/repo.git"));
}
console.log("wokring");
/* 
require("simple-git")()
  .init()
  .add("./*")
  .commit("test commit!")
  .addRemote("origin", "https://github.com/user/repo.git")
  .push("origin", "master");

console.log("wokring");
 */
