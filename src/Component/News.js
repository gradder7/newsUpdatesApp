import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  // articles = [
  //   {
  //     source: {
  //       id: "the-washington-times",
  //       name: "The Washington Times",
  //     },
  //     author: "Valerie Richardson",
  //     title: "Ted Cruz defends Tony Dungy as 'hero' amid media onslaught",
  //     description:
  //       "Pro Football Hall of Fame coach Tony Dungy was hit with a media blitz ahead of his Friday speech at the March for Life, but Sen. Ted Cruz for one had his back.",
  //     url: "https://www.washingtontimes.com/news/2023/jan/20/ted-cruz-defends-tony-dungy-hero-amid-media-onslau/",
  //     urlToImage:
  //       "https://twt-thumbs.washtimes.com/media/image/2023/01/20/Abortion_March_for_Life_03250--c73f0_c0-138-3320-2074_s1200x700.jpg?4dfc84b35b38ea3000898926fd724e1962bf74c8",
  //     publishedAt: "2023-01-20T19:28:16Z",
  //     content:
  //       "Pro Football Hall of Fame coach Tony Dungy was hit with a media blitz ahead of his Friday speech at the March for Life, but Sen. Ted Cruz for one had his back.\r\nThe Texas Republican called Mr. Dungy … [+5671 chars]",
  //   },
  //   {
  //     source: {
  //       id: "espn",
  //       name: "ESPN",
  //     },
  //     author: "Pete Thamel",
  //     title:
  //       "Michigan fires Matt Weiss amid computer access crimes investigation",
  //     description:
  //       'The University of Michigan announced it has fired co-offensive coordinator Matt Weiss, who is under investigation by university police for "a report of computer access crimes" at the school\'s football facility.',
  //     url: "http://espn.go.com/college-football/story/_/id/35490627/michigan-fires-matt-weiss-amid-computer-access-crimes-investigation",
  //     urlToImage:
  //       "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0118%2Fr1119076_1296x729_16%2D9.jpg",
  //     publishedAt: "2023-01-20T19:11:00Z",
  //     content:
  //       'The University of Michigan announced it has fired co-offensive coordinator Matt Weiss, who is under investigation by university police for "a report of computer access crimes" at the school\'s footbal… [+1671 chars]',
  //   },
  //   {
  //     source: {
  //       id: "espn-cric-info",
  //       name: "ESPN Cric Info",
  //     },
  //     author: null,
  //     title:
  //       "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
  //     description:
  //       "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
  //     urlToImage:
  //       "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
  //     publishedAt: "2020-04-27T07:20:43Z",
  //     content:
  //       "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]",
  //   },
  // ];

  static defaultProps = {
    country: "in",
    pageSize: 10,
  };

  static propTypes = {
    country: PropTypes.string,
    page: PropTypes.number,
  };

  constructor() {
    super();
    console.log("hello i am a constructor from news component");
    this.state = {
      article: [],
      loading: false,
      page: 1,
      // totalArticles: 0
    };
  }

  async componentDidMount() {
    console.log("cdm");
    // take pagesize as props
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=ae73228cd8a04eb194ee898b2eb0d7fb&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      article: parseData.articles,
      totalArticles: parseData.totalResults,
      loading: false,
    });
  }

  handleNextPage = async () => {
    // it will give me how many pages are there
    if (this.state.page + 1 > Math.ceil(this.state.totalArticles / 21)) {
    } else {
      let url = ` https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=business&apiKey=ae73228cd8a04eb194ee898b2eb0d7fb&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page: this.state.page + 1,
        article: parseData.articles,
        loading: false,
      });
    }
  };
  handlePrevPage = async () => {
    console.log("prev");
    let url = ` https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=business&apiKey=ae73228cd8a04eb194ee898b2eb0d7fb&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      article: parseData.articles,
      loading: false,
    });
  };
  render() {
    console.log("render");
    return (
      <div className="container my-5">
        <h1 className="text-center">News Updates : Top Head Lines</h1>
        {/* if it is true than show spinner */}
        {this.state.loading && <Spinner />}
        <div className="row">
          {/* if loading than dont show content */}
          {!this.state.loading &&
            this.state.article.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : <></>}
                    description={
                      element.description ? (
                        element.description.slice(0, 90)
                      ) : (
                        <></>
                      )
                    }
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={this.handlePrevPage}
          >
            Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalArticles / 21)
            }
            type="button"
            className="btn btn-primary"
            onClick={this.handleNextPage}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
