// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
import { sidebar } from "../components/sidebar.js";
import {countries} from "./fetch.js"

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("sidebar").innerHTML = sidebar();

let container = document.getElementById("results")
let country = document.getElementById("countries").children
console.log(country);

let defaultNews = async () =>{
    try{
        let res = await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=in")
        let data = await res.json();
        console.log(data);
        appendData(data.articles)
    }
    catch(err){
        console.log(err);
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

defaultNews();

let qSearch = (e) => {
    if(e.key == "Enter") {
        window.location.href = "search.html"  
        localStorage.setItem("q", JSON.stringify(document.getElementById("search_input").value))
    }
}

function showNews(){
    countries(this.id).then((res)=>{
        appendData(res.articles);
    })
}

for (let el of country){
    el.addEventListener("click", showNews)
}

document.getElementById("search_input").addEventListener("keydown", qSearch)