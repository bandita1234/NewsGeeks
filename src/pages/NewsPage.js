import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
// import data from '../data.json';
import "../css/card.css";
import Loading from "../components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";

const NewsPage = () => {
  const { category } = useParams(); //IMP

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [progress, setProgress] = useState(20);

  const fetchData = async () => {
    setProgress(40);
    setLoading(true);
    let news = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=96f72ee6b8f044f09b4f031c1551bbaf`
    );
    setProgress(70);
    let newsData;
    if (news.status === 200) {
      newsData = await news.json();
      setData(newsData);
      setLoading(false);
      setProgress(100);
      //   console.log(newsData);
    }
  };

  const fetchNewData = async () => {
    let news = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${category}&page=${
        page + 1
      }&country=in&apiKey=96f72ee6b8f044f09b4f031c1551bbaf`
    );
    let newsData;
    setPage(page + 1);
    if (news.status === 200) {
      newsData = await news.json();
      console.log(newsData);
      setData({
        ...newsData,
        articles: [...data.articles, ...newsData.articles],
      });
    }
  };
  // console.log(page, data);
  useEffect(() => {
    fetchData();
    //clean up function runs when component unmounts
    return () => {
      setData({});
      setPage(1);
      setLoading(true);
    };
  }, [category]);

  return (
    <>
    <div className="heading">
    <h1>NewsGeeks - Top Picks</h1>
    <h3>Category : <span style={{color:'#6C00FF'}}>{category}</span></h3>
    </div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <LoadingBar
            color="red"
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <div>
            <InfiniteScroll
              dataLength={data.articles.length} //This is important field to render the next data
              next={fetchNewData}
              hasMore={data.totalResults !== data.articles.length}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all!</b>
                </p>
              }
              style={{height:'full',overflow:'none'}}
              className="card_grp"
            >
              {/*if data is null,then can't map..so && */}
              {data &&
                data.length !== 0 &&
                data.articles.map((item) => (
                  <Card
                    key={item.title}
                    img={item.urlToImage}
                    heading={item.title}
                    desc={item.description}
                    readmore={item.url}
                    author={item.author}
                  />
                ))}
            </InfiniteScroll>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsPage;
