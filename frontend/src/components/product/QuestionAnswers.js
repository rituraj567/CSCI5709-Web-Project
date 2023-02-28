import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { HandThumbsDownFill, HandThumbsUpFill } from "react-bootstrap-icons";

export function QuestionAnswers() {
  return (
    <div>
      {" "}
      <Card className="card-style">
        <Card.Body>
          <div className="center">
            <Card.Title>Question & Answers</Card.Title>
          </div>
          <span>Q:</span>
          <p> </p>
          <span>A:</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            fermentum fringilla ante, nec gravida urna elementum ut. Nulla
            porttitor sit amet nisl vitae tincidunt. Pellentesque ut enim
            interdum, scelerisque turpis gravida, fringilla nibh.{" "}
          </p>
          <div className="like-dislike">
            <HandThumbsUpFill color="grey" className="icon-thumbs" />
            <HandThumbsDownFill color="grey" className="icon-thumbs" />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
