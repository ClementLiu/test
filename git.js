const simpleGit = require("simple-git");
const git = simpleGit();

git
  .init()
  .checkout("gh-page", "--orphan")
  .add("./dist/*")
  .commit("Empty changee!")
  .push(["origin", "gh-page"], () => console.log("done"));
