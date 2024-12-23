import React, { Component } from "react";

export default class ArticleItem extends Component{


    render(){
       const{article,onClickToggle,onClickRemove} = this.props;


       return(
        <ul>
            {article.map(articles => (
                <li key={articles.id}>
                    <a href={`#${articles.id}`}
                       title="ToggleSummary"
                       onClick={onClickToggle.bind(null,articles.id)}>
                        {articles.title}
                       </a>
                       <br></br>
                    <a href={`#${articles.id}`}
                       title="Remove"
                       onClick={onClickRemove.bind(null,articles.id)}>
                        X
                       </a>
                       <p style={{display : articles.display}}>{articles.summary}</p>
                </li>
            ))}
        </ul>
       )



    }

}