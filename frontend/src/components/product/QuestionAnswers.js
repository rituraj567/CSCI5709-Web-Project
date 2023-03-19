import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ThumbUpAltOutlined, ThumbDownAltOutlined } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export function QuestionAnswers() {
  return (
    <Accordion sx={{marginTop:'2rem'}}>
      <AccordionSummary    expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
        <Typography>Question & Answers</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <Typography>
            <strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum fringilla ante,
            nec gravida urna elementum ut. Nulla porttitor sit amet nisl vitae tincidunt. Pellentesque ut enim interdum,
            scelerisque turpis gravida, fringilla nibh.
          </Typography>
          <Typography>
            <strong>A:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum fringilla ante,
            nec gravida urna elementum ut. Nulla porttitor sit amet nisl vitae tincidunt. Pellentesque ut enim interdum,
            scelerisque turpis gravida, fringilla nibh.
          </Typography>
          <div className="like-dislike">
            <ThumbUpAltOutlined color="grey" className="icon-thumbs" />
            <ThumbDownAltOutlined color="grey" className="icon-thumbs" />
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
