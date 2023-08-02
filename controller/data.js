const axios = require('axios');


const getNews_fromAPI = async ()=>{
    try {
        const getNews = await axios.get('https://fakenews.squirro.com/news/entertainment');
        const newsData = getNews.data['news'];

        // console.log(`typeof newsData--->  ${typeof newsData}`);
        // console.log(newsData);
        
        // for (let index = 0; index < newsData.length; index++) {
        //     const show_each_news_id = newsData[index]['id'];
        //     console.log(show_each_news_id);
        // }

        return newsData;

    } catch (error) {
        console.log('server error')
    }
}

getNews_fromAPI();


module.exports = {getNews_fromAPI,};