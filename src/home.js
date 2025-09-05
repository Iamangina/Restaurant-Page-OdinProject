export function mainSection(){
    let content = document.querySelector("#content");

    let mainText = document.createElement("div");
    mainText.classList.add("mainText");

    let ramen = document.createElement("p");
    ramen.classList.add("ramen");
    ramen.textContent = `ラーメン`;
    mainText.appendChild(ramen);

    let title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = `TASTE THE TRADITION OF JAPAN`;
    mainText.appendChild(title);

    let text = document.createElement("p");
    text.textContent = `Warning: eating may cause extreme happiness, spontaneous noodle twirling, 
    and the uncontrollable urge to say ‘Mmm!’ out loud. 
    Perfect for anyone who believes that life is too short for boring meals!`;
    mainText.appendChild(text);

    let order = document.createElement("button");
    order.classList.add("order");
    order.textContent = `Order Now`;
    mainText.appendChild(order);

    content.appendChild(mainText);
    }