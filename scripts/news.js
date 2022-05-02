// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let qSearch = (e) => {
    if(e.key == "Enter") {
        window.location.href = "search.html"  
        localStorage.setItem("q", JSON.stringify(document.getElementById("search_input").value))
    }
}

document.getElementById("search_input").addEventListener("keydown", qSearch)

let news = JSON.parse(localStorage.getItem("news"))
console.log(news);

let image = document.createElement("img")
image.src = news.urlToImage;
let h3 = document.createElement("h3")
h3.innerText = news.title;
let des = document.createElement("p")
des.innerText = news.description;
let p = document.createElement("p")
p.innerText = news.content;

document.getElementById("detailed_news").append(image, h3, des, p)
