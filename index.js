require("simple-git")()
  .init()
  .add("./*")
  .commit("test commit!")
  .addRemote("origin", "https://github.com/user/repo.git")
  .push("origin", "master");

console.log("wokring");
