// main.js
import { moo } from "./moo.js";
import { say } from "cowsay";

console.log(say({
  text: moo("there"),
}));
// moo, there!