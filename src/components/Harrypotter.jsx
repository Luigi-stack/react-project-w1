import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";


class Harrypotter extends Component {
  state = {
    movies: [],
    isLoading: true,
    hasError: false,
    errorMessage: ""
  };

  fetchMovies = async () => {
    try {
      const response = await fetch
      ("http://www.omdbapi.com/?apikey=54d80b21&s=harry-potter");

      if (response.ok) {
        const data = await response.json();

        this.setState({
          movies: data.Search,
          isLoading: false
        });
      } else {
        this.setState({
          isLoading: false,
          hasError: true,
          errorMessage: `Error loading content. ERROR: ${response.status}`
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        hasError: true,
        errorMessage: `FATAL ERROR: ${error.message}`
      });
    }
  };

  componentDidMount = () => {
    this.fetchMovies();
  };

  render() {
    const { movies, isLoading, hasError, errorMessage } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (hasError) {
      return <div>{errorMessage}</div>;
    }

    return (
        <Container>
        <h3 className="mt-5 mb-3">{this.props.type}</h3>
      <Container className=" mb-5">
        <Row className="row-cols-2 row-cols-md-4 row-cols-lg-6">
          {movies.map((movie) => (
            <Col key={movie.imdbID} className="my-3">
              <Image src={movie.Poster} alt="poster" id="movie" />
            </Col>
          ))}
        </Row>
      </Container>
        </Container>
    );
  }
}

export default Harrypotter;
