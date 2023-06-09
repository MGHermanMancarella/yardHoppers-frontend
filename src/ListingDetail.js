// import React, { useEffect, useState } from 'react';
// import Card from "react-bootstrap/Card";

// import { useParams } from 'react-router-dom';
// import YardHoppersApi from './api';


// /** Component to display details about jobs for specific company
//  *
//  * State:
//  * - listingDetails: { company: { handle, name, description, numEmployees, logoUrl,
//  *                  jobs: [{id, title, salary, equity}]}
//  *                  isLoading: determines what get rendered based on value}
//  *
//  * RoutesList/ListingList -> ListingDetails
//  *
//  */

// function ListingDetail() {
//   const [isLoading, setIsLoading] = useState(true);


//   const {handle} = useParams();
//   let listing;

// async function getListing () {
//  listing = await YardHoppersApi.getListing(handle);

//   setIsLoading(false);
// }
// getListing();



//   if (isLoading) return <i>Loading...</i>;
//   console.log("listing ======> ", listing)

//   return (
//     <div className="isting-card-container">
//       <div >

//         <p>{listing.description}</p>
//         <div>
//             <Card>
//             <Card.Img variant="top" src={listing.photo_url} />
//             <Card.Body>
//               <Card.Title>{listing.description}</Card.Title>
//               <Card.Text>
//                 {listing.city} {listing.state}
//               </Card.Text>
//               <Card.Text>{listing.description}</Card.Text>
//               <Card.Text>${listing.price}/day</Card.Text>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ListingDetail;