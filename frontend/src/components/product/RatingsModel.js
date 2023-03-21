import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function RatingsModel() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSaveChanges = () => {
    // logic to save changes goes here
    handleClose();
  };

  return (
    <div>
        <Button
                variant="contained"

                className="button-black"
                sx={{ mt: 3,minWidth:'100%' }}
                onClick={handleShow}
              
              >
                 Add Rating
              </Button>
     
      <Modal open={show} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            Add Review
          </Typography>
          <Box component="form" sx={{marginLeft:0}} noValidate>
            <TextField fullWidth margin="normal" label="Enter rating (1-5)" type="number" autoFocus />
            <TextField fullWidth margin="normal" label="Enter description" multiline rows={3} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <Button variant="contained" color="error" onClick={handleClose} sx={{ mr: 1 }} className="button">
              Close
            </Button>
            <Button variant="contained" onClick={handleSaveChanges} className="button-black">
              Save Changes
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
