import React, { useState } from "react";
import { StarFill } from "react-bootstrap-icons";
import Card from "react-bootstrap/Card";
import Products from "./Products.json";
export function UserReviews() {
  const [reviews, setReviews] = useState(Products[0].reviews);
  return (
    <div>
      <Card style={{ width: "100%", marginTop: "1rem" }}>
        <Card.Body>
          {reviews.map((review) => (
            <div key={review.rating}>
              <div className="icon-div">
                <p className="icon-text">{review.rating}</p>
                <StarFill className="icon-styles  margin-left" color="black" />
              </div>
              <p>{review.description} </p>
              <div className="review-user">
                <p className="username">{review.user}</p>
                <p className="date">{review.date}</p>
              </div>
            </div>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
}
