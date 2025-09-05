import "./style.css";
import { mainSection } from "./home.js";
mainSection();
import { menuSection } from "./menu.js";
import { ourStory } from "./ourStory.js";
import { contactUs } from "./contact.js";
const content = document.querySelector("#content");

let home = document.querySelector("#home");
home.addEventListener("click", function(){
    content.textContent = "";
    mainSection();
    home.style.borderBottom = "solid 5px #5170ff";
    menu.style.borderBottom = "none";
    contact.style.borderBottom = "none";
    story.style.borderBottom = "none";
});
let menu = document.querySelector("#menu");
menu.addEventListener("click", function(){
    content.textContent = "";
    menuSection();
    home.style.borderBottom = "none";
    menu.style.borderBottom = "solid 5px #5170ff";
    story.style.borderBottom = "none";
    contact.style.borderBottom = "none";
})
let story = document.querySelector("#ourStory");
story.addEventListener("click", function(){
    content.textContent = "";
    ourStory();
    home.style.borderBottom = "none";
    menu.style.borderBottom = "none";
    contact.style.borderBottom = "none";
    story.style.borderBottom = "solid 5px #5170ff";
})
let contact = document.querySelector("#contact");
contact.addEventListener("click", function(){
    content.textContent = "";
    contactUs();
    home.style.borderBottom = "none";
    menu.style.borderBottom = "none";
    story.style.borderBottom = "none";
    contact.style.borderBottom = "solid 5px #5170ff";
})