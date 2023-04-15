import React, { useEffect, useState } from "react";
import Card from "../components/Card";
// import data from '../data.json';
import "../css/card.css";

const Home = () => {
  const [data, setData] = useState();
  // console.log(data);

  //To convert a json to js obj. (No need to convert here!)
  // const jsData = JSON.parse(data);

  // console.log(data.articles);
  const fetchData = async () => {
    let news = await fetch(
      "https://newsapi.org/v2/top-headlines?category=general&country=in&apiKey=96f72ee6b8f044f09b4f031c1551bbaf"
    );
    let newsData;
    if (news.status === 200) {
      newsData = await news.json();
      setData(newsData);
      console.log(newsData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <div className="heading">
    <h1>NewsGeeks - Top Picks</h1>
    <h3>Category : <span style={{color:'#6C00FF'}}>General</span></h3>
    </div>
      <div className="card_grp">
        {/*if data is null,then can't map..so && */}
        {data &&
          data.articles.map((item) => (
            <Card
              img={item.urlToImage}
              heading={item.title}
              desc={item.description}
              readmore={item.url}
              author={item.author}
            />
          ))}
      </div>
    </>
  );
};

export default Home;