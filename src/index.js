import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const movie = {
  title: "Advengers: Infifity War",
  vote_average: 8.5,
  image:
    "https://upload.wikimedia.org/wikipedia/ru/4/4d/Avengers_Infinity_War_poster.jpg",
  overview: "Английский телевизионный сериал, рассказывающей о паре агентов"
};

function Image(props) {
  console.log("Image props", props);
  return <img width="100%" src={props.src} alt={props.alt} />;
}

// function MovieItem(props) {
//   console.log("MovieItem props", props);

//   const {
//     data: { title, vote_average, image }
//   } = props;

//   return (
//     <div>
//       <Image src={image} alt={title} />
//       <p>{title}</p>
//       <p>{vote_average}</p>
//     </div>
//   );
// }

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      like: false
    };
  }

  toggleOverview = () => {
    console.log("show");
    this.setState({
      show: !this.state.show
    });
  };

  handleLike = () => {
    console.log("like");
    this.setState({
      like: !this.state.like
    });
  };

  render() {
    const {
      data: { title, vote_average, image, overview }
    } = this.props;
    console.log(this.state);
    return (
      <div style={{ width: "300px" }}>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toggleOverview}>
            {this.state.show ? "hide" : "show"}
          </button>
          <button
            type="button"
            onClick={this.handleLike}
            style={{ background: this.state.like ? "blue" : "white" }}
          >
            like
          </button>
        </div>

        {this.state.show ? <p>{overview}</p> : null}
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
