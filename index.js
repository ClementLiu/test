require("simple-git")()
  .add("./*")
  .commit("first commit!")
  .addRemote("origin", "https://github.com/ClementLiu/test.git")
  .push(["-u", "origin", "master"], () => console.log("done"));
/* 
require("simple-git")()
  .init()
  .add("./*")
  .commit("test commit!")
  .addRemote("origin", "https://github.com/user/repo.git")
  .push("origin", "master");

console.log("wokring");
 */
