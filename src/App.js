import React from 'react';
import './App.css';
import requests from './requests';
import Row from './Row'
import Banner from './Banner'
import Nav from './Nav'
function App() {
  return (
    <div className="App">
      {/* <h1>LETS DO IT!!!</h1> */}
      {/* navbar */}
      {/* Banner starts */}
      <Nav />

      <Banner />
      {/* Banner ends */}
      <Row
        title="Netflix originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
