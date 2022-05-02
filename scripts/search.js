// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
import { sidebar } from "../components/sidebar.js";
import { countries, queries } from "./fetch.js";


document.getElementById("navbar").innerHTML = navbar();

let q = JSON.parse(localStorage.getItem("q"));
console.log(q);

let container = document.getElementById("results");

queries(q).then(function (res) {
    appendData(res.articles)
});

function enter(e) {
  if (e.key == "Enter") {
    let query = document.getElementById("search_input").value;
    queries(query).then(function (res) {
        appendData(res.articles)
    });
  }
}

let appendData = (data) => {
    container.innerHTML = null;
    data.forEach((el)=>{
        let news = document.createElement("div")
        news.setAttribute("class", "news")
        let imgBox = document.createElement("div")
        imgBox.setAttribute("class", "imgBox")
        let data = document.createElement("div")
        data.setAttribute("class", "data")
        let image = document.createElement("img")
        image.src = el.urlToImage;
        let h3 = document.createElement("h3")
        h3.innerText = el.title;
        let des = document.createElement("p")
        des.innerText = el.description;

        imgBox.append(image)
        data.append(h3, des)
        news.append(imgBox, data)
        container.append(news)

        news.addEventListener("click", function(){
            myFn(el)
        })
    })
    
}

let myFn = (el) => {
    localStorage.setItem("news", JSON.stringify(el))
    window.location.href = "news.html"
}

document.getElementById("search_input").addEventListener("keydown", enter);
