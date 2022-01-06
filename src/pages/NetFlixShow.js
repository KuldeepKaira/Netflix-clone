import React from "react";
import Row from "../components/Row/Row";
import { api } from "../api/api";
import Banner from "../components/Banner/Banner";
import Nav from "../components/Nav/Nav";

const NetFlixShow = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={api.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchUrl={api.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={api.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={api.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={api.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={api.fetchHorrorMovies} />
      <Row title="ROMANTIC MOVIES" fetchUrl={api.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={api.fetchDocumentaries} />
    </div>
  );
};

export default NetFlixShow;
