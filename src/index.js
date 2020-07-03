const simpleGit = require("simple-git");
const git = simpleGit();

git
  .init()
  .add("./dist/*")
  .commit("Test commit!")
  .addRemote("origin", "https://github.com/ClementLiu/test.git")
  .push("origin", "master");
