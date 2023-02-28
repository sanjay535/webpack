require("./css/main.css");
import { addTwoNumber } from "./helper";
import { sum,difference } from "./operations";

document.write('Hello FrescoPlayers');
const h1=document.createElement('h1');
h1.innerText=`WebPack Practice module Bundling: Addtion of 2 number=${addTwoNumber(10, 20)}`;
document.body.appendChild(h1);

document.write("Sum of 2 and 3 is "+sum(2, 3)); // 5
document.write("Difference of 5 and 5 is "+difference(5, 2));  // 3
document.write('<br/>')