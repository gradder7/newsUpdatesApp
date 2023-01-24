import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    //we can also take props like this in object
    //usinf destructuring
    // let { title, description } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className={`badge rounded-pill bg-danger`}>
              {this.props.source}
            </span>
          </div>
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
            <h5 className="card-title">{this.props.title}... </h5>
            <p className="card-text">{this.props.description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {this.props.author ? this.props.author : "Unknown"} on
                {new Date(this.props.date).toUTCString()}
              </small>{" "}
            </p>
            {/* to open a link in new tab use taget="_blank"*/}
            <a
              rel="noreferrer"
              href={this.props.newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
