import React from "react";
import Card from "react-bootstrap/Card";
import "./ListingCard.css";
import { Link } from "react-router-dom";

/** Component to render information about listing
 *
 * Props:
 * - listing: { handle, name, description, logoUrl }
 *
 * ListingList  -> ListingCard
 *
 */

function ListingCard({ listing }) {
  return (
    <div className="listing-card-container">
      <Link to={`/listings/${listing.id}`} className="listing-link">
        {" "}
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
        <div className="listing-card">
          <h3>Listing</h3>
          <h5>`{listing.city}, {listing.state}  {listing.zip}` </h5>
          <p>{listing.description}</p>
          {listing.photoUrl && <img src={listing.photoUrl} alt={listing.description} />}
        </div>
      </Link>
    </div>
  );
}

export default ListingCard;
