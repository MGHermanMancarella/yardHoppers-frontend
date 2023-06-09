import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React, { useEffect, useState } from "react";
import YardHoppersApi from "./api"

function Listings( { listState } ) {
const listings = listState.listings
const setListings = listState.setListings

const [isLoading, setIsLoading] = useState(true);


  /** Make get request and update companiesList upon mount */
  useEffect(function fetchListingsWhenMounted() {
    async function fetchListings() {
      const listingsResp = await YardHoppersApi.getListings();

      setListings(listingsResp);
      setIsLoading(false);
    }
    fetchListings();
  }, []);

  // /** Perform search with argument */
  // async function searchListings(query) {
  //   const response = await YardHoppersApi.getListings(query);
  //   setListings({
  //     listings: response,
  //     isLoading: false,
  //   });
  // }

  if (isLoading) return <i>Loading...</i>;

  console.log("listings ====>>>", listings)

  return (
    <Row xs={1} md={3} className="g-4 m-3 p-3">
      {listings.map((listing, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={listing.photo_url} />
            <Card.Body>
              <Card.Title>{listing.title}</Card.Title>
              <Card.Text>{listing.city} {listing.state}</Card.Text>
              <Card.Text>
                {listing.description}
              </Card.Text>
              <Card.Text>${listing.price}/day</Card.Text>
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