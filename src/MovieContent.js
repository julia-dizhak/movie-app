import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MovieItem from './components/MovieItem';
import MovieTabs from './components/MovieTabs';
import Pagination from './components/Pagination';
import { API_URL, API_KEY } from './utils/api';

import "bootstrap/dist/css/bootstrap.min.css";

export default class MovieContent extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sortBy: 'revenue.desc',
      currentPage: 1,
      totalPages: 0
    }

    this.removeMovie = this.removeMovie.bind(this);
    this.addMovieToWillWatch = this.addMovieToWillWatch.bind(this);
    this.removeMovieFromWillWatch = this.removeMovieFromWillWatch.bind(this);
    this.updatedSortBy = this.updatedSortBy.bind(this);
    this.setCurrentPage = this.setCurrentPage.bind(this);
  }

  getMovies() {
    const { sortBy, currentPage } = this.state;
    fetch(`${API_URL}discover/movie?api_key=${API_KEY}&sort_by=${sortBy}&page=${currentPage}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({
          movies: data.results,
          totalPages: data.total_pages
        })
      })
  }

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    const { sortBy, currentPage } = this.state;
    // todo
    if (prevState.sortBy !== sortBy || prevState.currentPage !== currentPage) {
      this.getMovies()
    }
  }

  removeMovie(movie) {
    const { movies } = this.state;
    const updatedMovies = movies.filter(item => item.id !== movie.id);
    this.setState({
      movies: updatedMovies
    })
  }

  addMovieToWillWatch(movie) {
    const { moviesWillWatch } = this.state;
    const updatedMoviesWillWatch = [
      ...moviesWillWatch,
      movie
    ];
    this.setState({
      moviesWillWatch: updatedMoviesWillWatch
    })
  }

  removeMovieFromWillWatch(movie) {
    const { moviesWillWatch } = this.state;
    const updatedMoviesWillWatch = moviesWillWatch.filter(item => item.id !== movie.id);
    this.setState({
      moviesWillWatch: updatedMoviesWillWatch
    })
  }

  updatedSortBy(order) {
    this.setState({
      sortBy: order
    })
  }

  setCurrentPage(page) {
    if (page > 0) {
      this.setState({
        currentPage: page
      })
    }
  }

  render() {
    const { movies, moviesWillWatch, sortBy, currentPage, totalPages } = this.state;

    return (
      <Container>
        <Row className="mb-4">
          <Col xs={9}>
            <MovieTabs
              sortBy={sortBy}
              updatedSortBy={this.updatedSortBy}
            />
          </Col>
          <Col xs={3}>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={this.setCurrentPage}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={9}>
            <Row>
              {movies.map(movie => {
                return (
                  <Col
                    key={movie.id}
                    xs={6}
                    mb={4}
                  >
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                    />
                  </Col>
                )
              })}
            </Row>
          </Col>
          <Col xs={3}>
            will watch: {moviesWillWatch.length}
          </Col>
        </Row>
      </Container>
    )
  }
}
