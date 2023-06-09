import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import YardHoppersApi from "./api";

function Listings({ listState }) {
  const listings = listState.listings;
  console.log("listings in Listings comp =========", listings)
  const setListings = listState.setListings;

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


  if (isLoading) return <i>Loading...</i>;

  return (
    <Row xs={1} md={3} className="g-4 m-3 p-3">
      {listings.map((listing, idx) => (
        <Col key={idx}>
          <Link to={`/listings/${listing.listing_id}`} className="listings-link">
            <Card>
              <Card.Img variant="top" src={listing.photo_url} />
              <Card.Body>
                <Card.Title>{listing.title}</Card.Title>
                <Card.Text>
                  {listing.city} {listing.state}
                </Card.Text>
                <Card.Text>{listing.description}</Card.Text>
                <Card.Text>${listing.price}/day</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
}

export default Listings;
