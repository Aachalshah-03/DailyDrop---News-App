import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props)=>{

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  //document.title = `DailyDrop - ${props.category}`

    const updateNews=async()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`
      setLoading(true)
      let data = await fetch(url);
      let parsedData = await data.json()
      setArticles(parsedData.articles)
      settotalResults(parsedData.totalResults)
      setLoading(false)
    }

    useEffect(() => {
      updateNews();
      // eslint-disable-next-line
    }, [props.category]);


    const fetchMoreData=async()=>{
      setPage(page + 1)
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`
      setLoading(true)
      let data = await fetch(url);
      let parsedData = await data.json()
      setArticles(articles.concat(parsedData.articles))
      settotalResults(parsedData.totalResults)
      setLoading(false)
    }
 
    return (
      // <div className="container my-3">
      <>
        <h1 className="text-center my-4" style={{marginTop: '90px'}}>DailyDrop - Top headlines from {props.category} category</h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
        {loading && <Spinner/>}
        <div className="container my-3">
        <div className="row"> 
          {/* {!loading && articles.map((element)=>{ */}
          {articles.map((element)=>{

              return <div className="col-md-4" key={element.url}>
                          {/* <NewsItem title={(element.title || "").slice(0, 45)} description={(element.description || "").slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url}/> */}
                          <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                      </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
}

    News.defaultProps = {
      country: 'in',
      pageSize: 9,
      category: 'general'
    };

    News.propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string
    };

export default News
