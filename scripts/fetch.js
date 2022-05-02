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


export {countries, queries}