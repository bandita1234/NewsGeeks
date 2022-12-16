import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
// import data from '../data.json';
import "../css/card.css";
import Loading from "../components/Loading";

const SearchPage = () => {
  const path = useSearchParams();
  // console.log(path);

  const [searchParams] = useSearchParams(); //IMP

  // console.log(searchParams.get("q"),searchParams.get("category"));

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const fetchData = async () => {
    setLoading(true);
    let news = await fetch(
      `https://newsapi.org/v2/everything?q=${searchParams.get(
        "q"
      )}&apiKey=96f72ee6b8f044f09b4f031c1551bbaf`
    );
    let newsData;
    if (news.status === 200) {
      newsData = await news.json();
      setData(newsData);

      setLoading(false);

      //   console.log(newsData);
    }
  };

  useEffect(() => {
    fetchData();
    //clean up function runs when component unmounts
    return () => {
      setData([]);
    };
  }, [searchParams.get("q")]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="card_grp">
          {/*if data is null,then can't map..so && */}
          {data &&
            data.length !== 0 &&
            data.articles.map((item, idx) => (
              <Card
                key={idx} //index as key
                img={item.urlToImage}
                heading={item.title}
                desc={item.description}
                readmore={item.url}
                author={item.author}
              />
            ))}
        </div>
      )}
    </>
  );
};

export default SearchPage;
