
//NO NEED FOR THIS PAGE AS WE USE NEWSPAGE.JS

import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../css/card.css";

const Sports = () => {
  const [data, setData] = useState();
  const fetchData = async () => {
    let news = await fetch(
      "https://newsapi.org/v2/top-headlines?category=sports&country=in&apiKey=96f72ee6b8f044f09b4f031c1551bbaf"
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
      <div>Sports</div>
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
  )
}

export default Sports