//here everything is class based

// import React, { Component } from 'react'

// export class NewsItem extends Component {
//   render() {
//     let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
//     return (
//       <div className='my-3'>
//         <div className="card">
//         <img src={imageUrl || "https://img.etimg.com/thumb/msid-83549420,width-1200,height-630,imgsize-22674,overlay-etmarkets/articleshow.jpg"}
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src = "https://img.etimg.com/thumb/msid-83549420,width-1200,height-630,imgsize-22674,overlay-etmarkets/articleshow.jpg";
//           }}
//           className="card-img-top"
//           alt="news"
//         />
//         <div className="card-body">
//           <h5 className="card-title">{title}... <h6>Example heading <span class="badge text-bg-danger">{source}</span></h6></h5>
//           <p className="card-text">{description}...</p>
//           <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date (date).toGMTString()} </small></p>
//           <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
//         </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default NewsItem









//here everything is functional based

import React from 'react'

const NewsItem= (props)=> {
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className='my-3'>
        <div className="card">
        <img src={imageUrl || "https://img.etimg.com/thumb/msid-83549420,width-1200,height-630,imgsize-22674,overlay-etmarkets/articleshow.jpg"}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://img.etimg.com/thumb/msid-83549420,width-1200,height-630,imgsize-22674,overlay-etmarkets/articleshow.jpg";
          }}
          className="card-img-top"
          alt="news"
        />
        <div className="card-body">
          <h5 className="card-title">{title}... <h6>Example heading <span class="badge text-bg-danger">{source}</span></h6></h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date (date).toGMTString()} </small></p>
          <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
}

export default NewsItem
