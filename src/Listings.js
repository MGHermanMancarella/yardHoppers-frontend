import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import YardHoppersApi from "./api";
import './Listings.css'

function Listings({ listState }) {
  const listings = listState.listings;
  // console.log("listings in Listings comp =========", listings)
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
    <div className='ListingsPage'>
    <Row xs={1} sm={2} md={3} lg={4} className="g-4 m-2 p-2" >
      {listings.map((listing, idx) => (
        <Col key={idx} className='my-col'>
          <Link to={`/listings/${listing.listing_id}`} className="listings-link">
            <Card className='my-card' style={{ height: '450px', maxWidth: '400px' }}>
              <Card.Img variant="top" src={listing.photo_url} className='my-card-img'/>
              <Card.Body>
                <Card.Title >{listing.title}</Card.Title>
                <Card.Text>
                  {listing.city}, {listing.state}
                </Card.Text>
                <Card.Text>{listing.description}</Card.Text>
                <Card.Text>${listing.price}/day</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
    </div>
  );
}

export default Listings;
