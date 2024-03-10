import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps={
    country:'in',
    category:'general'
  }

  static propTypes = {
    country:PropTypes.string,
    category:PropTypes.string
  }

  constructor(){
    super();
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }

  load = async()=>{
    this.setState({loading:true})
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fcafa7598b68459194591b67815ff4a5&page=${this.state.page}`)
        let json = await data.json();
        this.setState({loading:false})
        this.setState({articles: json.articles});
  }

  componentDidMount(){
    this.load()
  }

  previousPage =()=>{
    
    this.setState({page:this.state.page-1});
    this.load();

  }
  nextpage = ()=>{
    this.setState({page:this.state.page+1});
    this.load();
  }
  render() {
    return (
      <div className = "container my-3">
        <h2 className='text-center '>TOP HEADLINES</h2>
        {this.state.loading && <Spinner/>}
        <div className="row my-4">
          
            {this.state.articles.map((element)=>{
              return (
                <div className="col-md-3 my-3" key={element.url}>
              <NewsItem title={element.title} discription={element.description} image={element.urlToImage} url={element.url}/>
              </div>
              )
            })}
        </div>
        <div className=" d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1} onClick={this.previousPage} className="btn btn-primary">&larr; Previous</button>
            <button type="button" onClick={this.nextpage} className="btn btn-primary">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
