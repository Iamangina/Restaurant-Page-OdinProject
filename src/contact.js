export function contactUs(){
    let content = document.querySelector("#content");

    let insta = document.createElement("div");
    insta.classList.add("insta");
    let instaIcon = document.createElement("div");
    instaIcon.classList.add("instaIcon");
    insta.appendChild(instaIcon);
    let instaLink = document.createElement("a");
    instaLink.href = "https://www.instagram.com/angina.art/";
    instaLink.textContent = "Instagram";
    insta.appendChild(instaLink);

    let github = document.createElement("div");
    github.classList.add("github");
    let gitIcon = document.createElement("div");
    gitIcon.classList.add("gitIcon");
    github.appendChild(gitIcon);
    let gitLink = document.createElement("a");
    gitLink.href = "https://github.com/Iamangina";
    gitLink.textContent = "Github";
    github.appendChild(gitLink);

    content.appendChild(insta);
    content.appendChild(github);

    let map = document.createElement("iframe");
    map.classList.add("map");
    map.src ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10331.671662917808!2d18.990535976561542!3d49.655845884484876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471423b209dfa043%3A0xb5de3704b4f1908a!2sMalinowska%20Ska%C5%82a!5e0!3m2!1spl!2sis!4v1757100739495!5m2!1spl!2sis";
    map.allowFullscreen = true;
    map.loading = "lazy";

    content.appendChild(map);


}