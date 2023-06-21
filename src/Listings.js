import { Card, Row, Col, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import YardHoppersApi from "./api";
import './Listings.css'

function Listings({ listState }) {
  const listings = listState.listings;
  // console.log("listings in Listings comp =========", listings)
  const setListings = listState.setListings;

  const [isLoading, setIsLoading] = useState(true);

  /** Make get request and update listings upon mount */
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
      <Row xs={2} md={3} lg={4} className="g-4 m-2 p-2" >
        {listings.map((listing, idx) => (
          <Col key={idx} className='my-col'>
            <Card className='my-card' style={{ height: '370px', maxWidth: '400px' }}>
              <Card.Img variant="top" src={listing.photo_url} className='my-card-img'/>
              <Card.Body>
                <Card.Title >{listing.title}</Card.Title>
                <Card.Text>
                  {listing.city}, {listing.state}
                </Card.Text>
                <Card.Text>${listing.price}/day</Card.Text>
                <Link to={`/listings/${listing.listing_id}`} className="listings-link">
                  <Button variant="dark">More Info</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Listings;