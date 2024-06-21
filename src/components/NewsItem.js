import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
   let  {title, description, imageurl, newsurl, author, date, source} = this.props ;
    return (
      <div className='my-3'>
    <div className="card" style={{width: "18rem;"}}>
      <div>
    <span className=" badge bg-danger">{source}</span>
    </div>
  <img src={!imageurl ? 'https://image.cnbcfm.com/api/v1/image/107217823-1680189191302-gettyimages-1249879533-US_STOCKS.jpeg?v=1716900952&w=1920&h=1080' : imageurl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author } on {new Date(date).toGMTString()} </small></p>
    <a rel='noreferrer' href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read More..</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem



// a862970b6d6144f195c0f4bff8c04bfb