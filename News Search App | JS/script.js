const apiKey  = `6997c35e4843475fab03748dcc57b2f3`;

const blogContainer = document.getElementById("blog-container");

const searchField = document.getElementById("search-input");

const searchButton = document.getElementById("search-button");

async function fetchRandomNews() {
    try{
        const apiURL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`
        const response = await fetch(apiURL);
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error("Error fetching random news", error)

        return [];
    }
}
async function fetchNewsQuery(query) {
    try{
        const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=10&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error(error);
        return [];
    }
}
searchButton.addEventListener("click", async () => {
    const query = searchField.value.trim();
    if(query !== ""){
        try{
            const articles = await fetchNewsQuery(query);
            displayBlocks(articles);
        } catch(error){
            console.error("Error fetching news by query", error);
        }
    }
})

function displayBlocks(articles){
    blogContainer.innerHTML = "";
    articles.forEach(article => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");
        const img = document.createElement("img");
        img.src = article.urlToImage;
        img.alt = article.title;
        const title = document.createElement("h2");
        const truncatedTitle = article.title?.length >  30 ? 
        article.title.slice(0, 30) + "...." : article.title;
        title.textContent = truncatedTitle;
        const description = document.createElement("p");
        const truncatedDesc = article.description?.length >  120 ? 
        article.description.slice(0, 120) + "...." : article.description;
        description.textContent = truncatedDesc;
        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogCard.addEventListener('click', () => {
            window.open(article.url, "_blank");
        })
        blogContainer.appendChild(blogCard);

    })
}

(async() => {
    try{
        const articles = await fetchRandomNews();
        displayBlocks(articles);
    } catch(error){
        console.error("Error fetching random news", error)
    }
})();