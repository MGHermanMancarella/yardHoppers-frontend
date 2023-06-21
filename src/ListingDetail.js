import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container, Button } from "react-bootstrap";

import { useParams } from 'react-router-dom';
import YardHoppersApi from './api';


/** Component to display details about details for specific listing
 *
 * State:
 * - listingDetails: { listing: { handle, name, description, numEmployees, logoUrl,
 *                  jobs: [{id, title, salary, equity}]}
 *                  isLoading: determines what get rendered based on value}
 *
 * RoutesList/ListingList -> ListingDetails
 *
 */

function ListingDetail() {
  const [listing, setListing] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { listing_id } = useParams();

  useEffect(() => {
    async function fetchListing() {
      try {
        const response = await YardHoppersApi.getListing(listing_id);
        console.log("RESP FROM API CALL IN LISTING DETAIL ===>>>", response);
        setListing(response);
      } catch (error) {
        console.error("error ===>", error);
      }
      setIsLoading(false);
    }
    fetchListing();
  }, [listing_id]);

  if (isLoading) return <i>Loading...</i>;

  if (!listing || Object.keys(listing).length === 0) {
    return <div>No listing found.</div>;
  }

  return (
    <Container className="listing-card-container">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img variant="top" src={listing.photo_url} />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{listing.title}</Card.Title>
              <Card.Text>
                {listing.city}, {listing.state}
              </Card.Text>
              <Card.Text>{listing.description}</Card.Text>
              <Card.Text>${listing.price}/day</Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default ListingDetail;