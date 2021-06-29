import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

function AddMovie({ handleAddMovie }) {
  const [show, setShow] = useState(false);
  const [newMovie, setNewMovie] = useState({
    titre: "",
    description: "",
    poster: "",
    alt: "",
    rate: 1,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const mySubmitHandler = (event) => {
    event.preventDefault();
    handleAddMovie(newMovie);
    setNewMovie({
      titre: "",
      description: "",
      poster: "",
      alt: "",
      rate: "",
    });
    handleClose();
  };
  const handleChange = (e) => {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <a onClick={handleShow}>ADD MOVIE</a>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title> New Movie </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={mySubmitHandler}>
            <label> titre movie</label>
            <input
              type="text"
              class="form-control"
              onChange={handleChange}
              name="titre"
            />
            <label> Description </label>
            <input
              type="text"
              class="form-control"
              onChange={handleChange}
              name="description"
            />
            <label> src movie</label>
            <input
              type="text"
              class="form-control"
              onChange={handleChange}
              name="poster"
            />
            <label> alt movie</label>
            <input
              type="text"
              class="form-control"
              onChange={handleChange}
              name="alt"
            />
            <br />
            <label> rate</label>
            <input
              type="number"
              class="form-control"
              onChange={handleChange}
              name="rate"
            />
            <br />

            <Button variant="primary" type="submit" onClick={mySubmitHandler}>
              Save Changes
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;
