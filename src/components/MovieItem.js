import React, { Component } from 'react';

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      willWatch: false
     };
  }

  render() {
    const { willWatch } = this.state;
    const {
      movie,
      removeMovie,
      addMovieToWillWatch,
      removeMovieFromWillWatch
    } = this.props;

    const { title, vote_average, backdrop_path, poster_path } = movie;

    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${backdrop_path || poster_path}`}
          alt=""
        />

        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <p className="mb-2">
            Rating: {vote_average}
          </p>

          <div className="d-flex justify-content-between align-items-center">
            {willWatch ? (
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  this.setState({
                    willWatch: false
                  })
                  removeMovieFromWillWatch(movie)
                }}
              >
                remove will watch
              </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    this.setState({
                      willWatch: true
                    })
                    addMovieToWillWatch(movie)
                  }}
                >
                  will watch
                </button>
              )
            }
            <button
              className="btn btn-primary"
              type="button"
              onClick={removeMovie.bind(null, movie)}>
              delete movie
            </button>
          </div>
        </div>
      </div>
    )
  }
}


export default MovieItem;
