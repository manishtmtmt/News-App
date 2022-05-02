// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
import { sidebar } from "../components/sidebar.js";
import {countries, append} from "./fetch.js"

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("sidebar").innerHTML = sidebar();

let container = document.getElementById("results")
let country = document.getElementById("countries").children
console.log(country);

let qSearch = (e) => {
    if(e.key == "Enter") {
        window.location.href = "search.html"  
        localStorage.setItem("q", JSON.stringify(document.getElementById("search_input").value))
    }
}

function showNews(){
    countries(this.id).then((res)=>{
        append(res.articles, container)
    })
}

for (let el of country){
    el.addEventListener("click", showNews)
}

document.getElementById("search_input").addEventListener("keydown", qSearch)