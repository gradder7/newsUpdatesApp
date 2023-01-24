import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    //we can also take props like this in object
    //usinf destructuring
    // let { title, description } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              this.props.imgUrl
                ? this.props.imgUrl
                : "https://media.istockphoto.com/id/1264074047/vector/breaking-news-background.jpg?s=1024x1024&w=is&k=20&c=OQpfeXBSwFZZ-OI08FautEpYI-3iUAJHlZTOTxRS3xE="
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}...</h5>
            <p className="card-text">{this.props.description}...</p>
            {/* to open a link in new tab */}
            <a
              rel="noreferrer"
              href={this.props.newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
        
      </div>
    );
  }
}
