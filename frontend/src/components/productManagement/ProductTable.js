import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { Link } from "react-router-dom";



function ProductTable(props) {
    const [editButton, setEditButton] = useState(false);
    console.log(props.showEditButton);
  
    function createData(productName, quantity, price, rating) {
      return { productName, quantity, price, rating };
    }
  
    const rows = [
      createData("Product 1", 12, 100, 4.2),
      createData("Product 2", 11, 150, 4.3),
      createData("Product 3", 13, 80, 4.5),
      createData("Product 4", 10, 120, 3.5),
      createData("Product 5", 12, 100, 4),
    ];
  
    return (
      <div id="product-table">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Product Name </b>
                </TableCell>
                <TableCell align="right">
                  <b>Quantity</b>
                </TableCell>
                <TableCell align="right">
                  <b>Price</b>
                </TableCell>
                <TableCell align="right">
                  <b>Quantity</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.productName}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.productName}
                  </TableCell>
                  <TableCell align="right">{row.quantity}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.rating}</TableCell>
                  {props.showEditButton
                    ? false
                    : true && (
                        <TableCell align="right">
                          {/* <Link to="/updateitemform">
                            <EditSharpIcon />
                          </Link> */}
                        </TableCell>
                      )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
  
  export default ProductTable;
  

