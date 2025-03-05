import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import MovieCard from "../components/MovieCard";

// Static movie data
const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    poster: "https://m.media-amazon.com/images/I/91DH78JDDwL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    poster: "https://m.media-amazon.com/images/I/51p0exLRg2L.jpg",
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    genre: "Adventure",
    rating: 8.6,
    poster: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg",
  },
  {
    id: 4,
    title: "Memento",
    year: 2000,
    genre: "Thriller",
    rating: 8.5,
    poster: "https://m.media-amazon.com/images/I/91l5fCq8rGL._AC_SY679_.jpg",
  },
];

function ListMovies() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Movie List
      </Typography>
      <Grid container spacing={3}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ListMovies;
