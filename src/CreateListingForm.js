import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";

function CreateListing({ handleCreateListing }) {
  const { currUser } = useContext(userContext);

  const initialFormData = {
    title: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    description: "",
    price: "",
    host_user: currUser.username,
    photo_url: null,
  };
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState([]);

  const navigate = useNavigate();

  async function handleSubmit(evt) {
    evt.preventDefault();

    let formObject = new FormData();

    for (let key in formData) {
      formObject.append(key, formData[key]);
    }

    try {
      await handleCreateListing(formObject);
    } catch (err) {
      setError(err);
      return;
    }

    setFormData(initialFormData);
    navigate("/");
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    let newValue = evt.target.type === "file" ? evt.target.files[0] : value;

    setFormData((fData) => ({
      ...fData,
      [name]: newValue,
    }));
  }

  return (
    <div className="CreateListingPage">
      <h1>Create New Listing</h1>
      <Form className="CreateListingForm" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="listingTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={formData.title}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="listingAddress">
          <Form.Label>Street Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="Street Address"
            onChange={handleChange}
            value={formData.address}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="listingCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
            value={formData.city}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="listingState">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            name="state"
            placeholder="State"
            onChange={handleChange}
            value={formData.state}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="listingZipcode">
          <Form.Label>Zipcode</Form.Label>
          <Form.Control
            type="text"
            name="Zipcode"
            placeholder="Zipcode"
            onChange={handleChange}
            value={formData.zipcode}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="listingDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="Description"
            placeholder="Description"
            onChange={handleChange}
            value={formData.description}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="listingPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            name="Price"
            placeholder="Price"
            onChange={handleChange}
            value={formData.price}
          />
        </Form.Group>
        {/* <Form.Group className='mb-3' controlId='listingHost'>
          <Form.Label>Host Name</Form.Label>
          <Form.Control
            type='text'
            name='Host'
            placeholder='Host Name'
            onChange={handleChange}
            value={currUser.username}
          />
        </Form.Group> */}

        <Form.Group className="mb-3" controlId="listingPhoto">
          <Form.Label>Photo</Form.Label>
          <Form.Control type="file" name="photo" onChange={handleChange} />
        </Form.Group>

        {error.length > 0 &&
          error.map((e, i) => (
            <Alert key={i} variant="danger">
              {e}
            </Alert>
          ))}

        <Button variant="outline-light" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreateListing;
