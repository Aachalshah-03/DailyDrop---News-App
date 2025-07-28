//here everything is class based

// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from 'react-infinite-scroll-component';

// export class News extends Component {

//     static defaultProps = {
//       country: 'in',
//       pageSize: 9,
//       category: 'general'
//     };

//     static propTypes = {
//       country: PropTypes.string,
//       pageSize: PropTypes.number,
//       category: PropTypes.string
//     };

//     articles = []
    
//     constructor(props){
//         super(props);
//         this.state={
//             articles: [],
//             loading: false,
//             page:1,
//             totalResults: 0
//         }
//         document.title = `DailyDrop - ${this.props.category}`
//     }

//     async updateNews(){
//       const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`
//       this.setState({loading:true});
//       let data = await fetch(url);
//       let parsedData = await data.json()
//       this.setState({articles: parsedData.articles, 
//                     totalResults: parsedData.totalResults,
//                     loading: false})
//     }

//     async componentDidMount(){
//       // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`
//       // this.setState({loading:true});
//       // let data = await fetch(url);
//       // let parsedData = await data.json()
//       // this.setState({articles: parsedData.articles, 
//       //               totalResults: parsedData.totalResults,
//       //               loading: false})
//       this.updateNews();
//     }

//     handlePrevClick=async()=>{
//       // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
//       // this.setState({loading:true});
//       // let data = await fetch(url);
//       // let parsedData = await data.json()   

//       // this.setState({
//       //   page: this.state.page - 1,
//       //   articles: parsedData.articles,
//       //   loading: false
//       // });
//       this.setState({page: this.state.page - 1});
//       this.updateNews();
//     }

//     handleNextClick= async()=>{
//       // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
//       //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
//       //   this.setState({loading:true});
//       //   let data = await fetch(url);
//       //   let parsedData = await data.json()   

//       //   this.setState({
//       //     page: this.state.page + 1,
//       //     articles: parsedData.articles,
//       //     loading: false
//       //   });
//       // }
//       this.setState({page: this.state.page + 1});
//       this.updateNews();
//     }

//     fetchMoreData=async()=>{
//       this.setState({page: this.state.page + 1})
//       const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`
//       this.setState({loading:true});
//       let data = await fetch(url);
//       let parsedData = await data.json()
//       this.setState({articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false})
//     }
 
//   render() {
//     return (
//       // <div className="container my-3">
//       <>
//         <h1 className="text-center my-4">DailyDrop - Top headlines from {this.props.category} category</h1>
//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner />}
//         >
//         {/* {this.state.loading && <Spinner/>} */}
//         <div className="container my-3">
//         <div className="row"> 
//           {/* {!this.state.loading && this.state.articles.map((element)=>{ */}
//           {this.state.articles.map((element)=>{

//               return <div className="col-md-4" key={element.url}>
//                           {/* <NewsItem title={(element.title || "").slice(0, 45)} description={(element.description || "").slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url}/> */}
//                           <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
//                       </div>
//           })}
//         </div>
//         </div>
//         </InfiniteScroll>
//           {/* <div className="container d-flex justify-content-between">
//             <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevClick} className="btn btn-dark">&larr; Previous</button>
//             <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
//           </div> */}
//       {/* </div> */}
//       </>
//     )
//   }
// }

// export default News







//here everything is functional based

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
          {/* <div className="container d-flex justify-content-between">
            <button type="button" disabled={page<=1} onClick={handlePrevClick} className="btn btn-dark">&larr; Previous</button>
            <button type="button" disabled={page + 1 > Math.ceil(totalResults/pageSize)} onClick={handleNextClick} className="btn btn-dark">Next &rarr;</button>
          </div> */}
      {/* </div> */}
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
