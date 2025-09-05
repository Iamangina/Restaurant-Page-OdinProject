export function menuSection(){
    let content = document.querySelector("#content");

    let menuSection = document.createElement("div");
    menuSection.classList.add("menuSection");

    let ramen1 = document.createElement("div");
    ramen1.classList.add("ramenSoup");
    let ramen1img = document.createElement("div");
    ramen1img.classList.add("ramen1Img");
    ramen1.appendChild(ramen1img);
    let ramen1textDiv = document.createElement("div");
    ramen1textDiv.classList.add("ramenTextDiv");
    let ramen1Title = document.createElement("p");
    ramen1Title.textContent = `SHOYU`;
    ramen1Title.classList.add("titleRamen");
    ramen1textDiv.appendChild(ramen1Title);
    let ramen1text = document.createElement("p");
    ramen1text.textContent = `Originating in Kitakata city, it is serverd in a soy soup base which has 
    a sweet, slightly herbal flavor`;
    ramen1textDiv.appendChild(ramen1text);
    ramen1.appendChild(ramen1textDiv);
    let ramen1Price = document.createElement("p");
    ramen1Price.classList.add("ramenPrice");
    ramen1Price.textContent = `20$`;
    ramen1.appendChild(ramen1Price);
    menuSection.appendChild(ramen1);

    let ramen2 = document.createElement("div");
    ramen2.classList.add("ramenSoup");
    let ramen2img = document.createElement("div");
    ramen2img.classList.add("ramen2Img");
    ramen2.appendChild(ramen2img);
    let ramen2textDiv = document.createElement("div");
    ramen2textDiv.classList.add("ramenTextDiv");
    let ramen2Title = document.createElement("p");
    ramen2Title.textContent = `TONKOTSU`;
    ramen2Title.classList.add("titleRamen");
    ramen2textDiv.appendChild(ramen2Title);
    let ramen2text = document.createElement("p");
    ramen2text.textContent = `Originating in Hakata city, it uses a pork bone broth which has a rich, 
    silky, and intense flavor`;
    ramen2textDiv.appendChild(ramen2text);
    ramen2.appendChild(ramen2textDiv);
    let ramen2Price = document.createElement("p");
    ramen2Price.classList.add("ramenPrice");
    ramen2Price.textContent = `25$`;
    ramen2.appendChild(ramen2Price);
    menuSection.appendChild(ramen2);

    let ramen3 = document.createElement("div");
    ramen3.classList.add("ramenSoup");
    let ramen3img = document.createElement("div");
    ramen3img.classList.add("ramen3Img");
    ramen3.appendChild(ramen3img);
    let ramen3textDiv = document.createElement("div");
    ramen3textDiv.classList.add("ramenTextDiv");
    let ramen3Title = document.createElement("p");
    ramen3Title.textContent = `MISO`;
    ramen3Title.classList.add("titleRamen");
    ramen3textDiv.appendChild(ramen3Title);
    let ramen3text = document.createElement("p");
    ramen3text.textContent = `Originating in Sapporo city, it is often made using soybean paste for a creamy
    and earthy flavor`;
    ramen3textDiv.appendChild(ramen3text);
    ramen3.appendChild(ramen3textDiv);
    let ramen3Price = document.createElement("p");
    ramen3Price.classList.add("ramenPrice");
    ramen3Price.textContent = `16$`;
    ramen3.appendChild(ramen3Price);
    menuSection.appendChild(ramen3);

    content.appendChild(menuSection);
}