export function ourStory(){
    let content = document.querySelector("#content");

    let storyTitle = document.createElement("p");
    storyTitle.textContent = `ラーメン`;
    storyTitle.style.color = "#d95454";
    storyTitle.style.marginLeft = "280px";
    storyTitle.style.fontSize = "60px";
    storyTitle.style.marginBottom ="0px"
    content.appendChild(storyTitle);
    let ourStory = document.createElement("p");
    ourStory.textContent = `This project is a simple restaurant homepage built entirely with JavaScript DOM manipulation.

        By the end, the entire contents of the site (except for styles in CSS) are dynamically generated through JavaScript.

        The page uses tab navigation (Home, Menu, Our Story, Contact) where each tab’s content is rendered dynamically.

        All images used in this project come from Freepik.`;
    ourStory.classList.add("ourStoryText");
    content.appendChild(ourStory);
}