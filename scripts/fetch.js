// https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code}
// https://masai-mock-api.herokuapp.com/news/top-headlines?country=in

// https://masai-mock-api.herokuapp.com/news?q={query}

let countries = async (country) => {
    try {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`)
        let data = await res.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
}

let queries = async (query) => {
    try {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)
        let data = await res.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
}

let append = (data, container) => {
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
    })
    
}


export {countries, queries, append,}