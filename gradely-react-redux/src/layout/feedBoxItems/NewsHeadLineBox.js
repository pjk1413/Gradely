import React, { Component } from 'react';
import axios from 'axios'
import './news.css'

class NewsHeadLineBox extends Component {
    constructor() {
        super()
        this.getHeadline = this.getHeadline.bind(this)
        this.state = {

        }
    }

    componentDidMount() {

        this.getHeadline()
    }

    //Will need to get API key to activate the news feed
    getHeadline() {
        // const url = 'http://newsapi.org/v2/top-headlines?' +
        //     'country=us&' +
        //     'apiKey=0000000000';

        let data = async () => {
            const temp = axios.get(url).then(response => {
                return response.data
            })
            const temp2 = await temp

            this.setState({
                newsList: temp2
            })
        }
        data();



    }

    render() {
        console.log(this.state.newsList)
        const headLineItems = this.state.newsList && this.state.newsList.articles.map(news => {
            return (
                <div className="card w-100 my-2 bg-light border-0">
                    <a href={news.url} class=""><img src={news.urlToImage} className="card-img-top" alt="..." /></a>
                    <div className="card-body p-1">
                        <h6 className="card-title news-text">{news.title}</h6>
                        <p className="card-text news-text"><small>{news.content}</small></p>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <ul className="list-unstyled">
                    {headLineItems}

                </ul>

            </div>
        );
    }
}

export default NewsHeadLineBox;