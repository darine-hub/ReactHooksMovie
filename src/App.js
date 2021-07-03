import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListMovie from "./components/Movie/ListMovie";
import { Modal, Button } from "react-bootstrap";
import SearchMovie from "./components/Movie/SearchMovie";
import MovieDetail from "./components/Movie/MovieDetail";
import AddMovie from "./components/Movie/AddMovie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      titre: "Transformers: The Last Knight",
      description: "https://ibb.co/gGv6QS",
      poster: "https://image.ibb.co/k7P0kS/transformers4_640x320.jpg",
      alt: "transformers4_640x320",
      rate: 6,
    },
    {
      id: 2,
      titre: "Blade Runner 2049",
      description: "https://ibb.co/cXjfKn",
      poster: "https://image.ibb.co/ct9rQS/Blade_Runner2049_640x320.jpg",
      alt: "Blade_Runner2049_640x320",
      rate: 4,
    },
    {
      id: 3,
      titre: "Guardians of the Galaxy: Vol. 2",
      description: "https://ibb.co/b4nLkS",
      poster: "https://image.ibb.co/jAu0kS/GOG2_640x320.jpg",
      alt: "GOG2_640x320",
      rate: 5,
    },
    {
      id: 4,
      titre: "Spiderman: Homecoming",
      description: "https://ibb.co/mC5Uen",
      poster: "https://image.ibb.co/da7xX7/spiderman_homecoming_640x320.jpg",
      alt: "spiderman_homecoming_640x320",
      rate: 8,
    },
    {
      id: 5,
      titre: "Wonder Woman",
      description: "https://ibb.co/enV1s7",
      poster: "https://image.ibb.co/dHdAkS/Wonder_Woman_640x320.jpg",
      alt: "Wonder_Woman_640x320",
      rate: 9,
    },
  ]);

  /* ******************************************************************************************************* */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(0);

  const searching = (s) => {
    setSearch(s);
  };
  const rating = (r) => {
    setRate(r);
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <Router>
      <div>
        <header>
          <div class="container">
            <nav>
              <ul class="nav-container">
                {/* <NavBar/> */}

                {/* <Footer/> */}
                <li class="nav-item">
                  <a description="#">
                    <SearchMovie titre={searching} rate={rating} />
                  </a>
                </li>

                <li class="nav-item">
                  <a description="#">
                    <AddMovie handleAddMovie={handleAddMovie} />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="total">
          <div class="accordion">
            <ul>
              <ListMovie
                movies={movies.filter(
                  (elm) =>
                    elm.titre
                      .toLowerCase()
                      .match(search.toLowerCase().trim()) && elm.rate >= rate
                )}
              />
            </ul>
          </div>
          <div className="desc">
            <label>For more informations visit :</label>
            <Switch>
              {/* <Route path="/" exact component={Home} /> */}
              <Route
                path="/:id"
                render={(props) => <MovieDetail {...props} movies={movies} />}
              />
            </Switch>{" "}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
