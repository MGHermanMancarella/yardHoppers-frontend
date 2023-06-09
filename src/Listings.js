import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React, { useState, useEffect } from "react";
import YardHoppersApi from "./api"

function Listings() {
  const [listings, setListings] = useState({
    companies: null,
    isLoading: true,
  });

  /** Make get request and update companiesList upon mount */
  useEffect(function fetchListingsWhenMounted() {
    async function fetchListings() {
      const listingsResp = await YardHoppersApi.getListings();
      
      setListings(listingsResp);
    }
    fetchListings();
  }, []);

  /** Perform search with argument */
  async function searchListings(query) {
    const response = await YardHoppersApi.getListings(query);
    setListings({
      listings: response,
      isLoading: false,
    });
  }

  if (listings.isLoading) return <i>Loading...</i>;



  return (
    <Row xs={1} md={3} className="g-4 m-3 p-3">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Listings;
//TODO:
// I was f'n around and got them to show pics -
// {Array.from( listings ).map((listing, idx) => (
//   <Col key={idx}>
//     <Card>
//       <Card.Img variant="top" src={listing.photo_url} />
//       <Card.Body>
//         <Card.Title>Card title</Card.Title>
//         <Card.Text>{listing.description}
//           This is a longer card with supporting text below as a natural
//           lead-in to additional content. This content is a little bit
//           longer.