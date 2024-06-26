import { updateNewsList } from "./markup.js";

const ENDPOINT = "https://newsapi.org/v2/everything";
const API_KEY = "ff9ae22ea3a840909fccf72096c77bf0";

// https://newsapi.org/v2/everything?q=tesla&from=2023-10-24&sortBy=publishedAt&apiKey=API_KEY

const getNews = async (query) => {
  try {
    const rezultat = await fetch(`${ENDPOINT}?q=${query}&apiKey=${API_KEY}`);
    console.dir(rezultat);
    const raspuns = await rezultat.json();
    console.dir(raspuns);

    return raspuns.articles;
  } catch (eroarea) {
    updateNewsList(`<p>${eroarea}</p>`);
    console.error(eroarea);
  }
};

// Axios:
// async function getNews(query) {
//     const raspuns = await axios.get(`${ENDPOINT}?q=${query}&apiKey=${API_KEY}`);
//     return raspuns.data.articles;
// }

export default { getNews };
