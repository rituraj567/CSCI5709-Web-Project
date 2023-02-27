import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useTable } from 'react-table';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, InputLabel } from '@mui/material';
import { Image } from '@mui/icons-material';
import Header from "../Header";
import sony from "../../images/sonyheadphones.png";
import iphone from "../../images/iphone.png";
const OrderDetails = () => {




    const[order,setOrders]=useState([]);
    const [open, setOpen] = useState(false);
    const[orderName ,setOrderName]=useState()
    const[orderNumber,setOrderNumber]=useState();
    const[deliveryDate ,setDeliveryDate]=useState();
    const[amount,setAmount]=useState();
    const[address1,setAddress1]=useState();
    const[address2,setAddress2]=useState();
    const[city,setCity]=useState();
    const[province,setProvince]=useState();
    const[postalcode,setPostalCode]=useState();
    const[photo,setPhoto]=useState();
    const primaryColor = "#2B2D42";
    const selectedColor = "#EF233C";

    const viewOrderDetails=(row)=>{
        
        setPhoto(row.photo);
        setAmount(row.Amount);
        setDeliveryDate(row.deliveryDate);
        setOrderName(row.orderName);
        setOrderNumber(row.orderNumber);
        
        setOpen(true);

    }


    const handleClose = () => {
        setOpen(false);
      };

    const  getAddress=()=>{
        try {
            const response={
                data :{
                    address1:"2230",
                    address2:"Windsor Street",
                    city:"Halifax",
                    province:"Nova Scotia",
                    postalcode:"BJ7 4G9"
                }

            }
            setAddress1(response.data.address1);
            setAddress2(response.data.address2);
            setCity(response.data.city);
            setPostalCode(response.data.postalcode);
            setProvince(response.data.province);
            
        } catch (error) {
            
            console.log(error);
        }
       


    }

    const getOrderDetails = ()=>{
        try{
            // const response=await axios.get("url");
            const response = {
             data:[{
                photo:iphone,
                orderNumber:"5637321",
                orderName:"Iphone 14 Pro",
                deliveryDate:"12 Feb 2023",
                Amount:"1778.67"
                    },{
                photo:sony,
                orderNumber:"6231232",
                orderName:"Sony WH-CH710N",
                deliveryDate:"12 Jan 2023",
                Amount:"285.67"

                    }
            ]

            }
            setOrders(response.data);



        }catch(error){
            console.log(error);
        }
    }

    const  columns=[
        {
            name: "Product",
            selector : (row)=> < img width={100} height={100}  src={row.photo}/>,
        },
        {
            name:"Order Name",
            selector:(row)=> row.orderName
        },
        {
            name:"Order Number",
            selector: (row)=> row.orderNumber
        },
        {
            name:"Delivery Date",
            selector: (row)=>row.deliveryDate
        },
        {
            name:"Amount",
            selector:(row)=>row.Amount
        },{
            name:"View",
            cell: (row)=><Button  sx={{background: primaryColor,
                textTransform: "none",
                height: "2.5rem",
                "&:hover": {
                  backgroundColor: selectedColor,
                }}} variant="contained" onClick={()=> viewOrderDetails(row)}>View</Button> 

        }



    ]

    

    useEffect(()=>{
        getOrderDetails();
        getAddress();

    },[]);

    return (
        <div>
            <Header/>
            <h1 style={{textAlign:"center"}}>Order Details</h1>
            <DataTable title ="Order History" 
            columns={columns} 
            data={order} 
            pagination
            fixedHeader
            fixedHeaderScrollHeight='500px'
            highlightOnHover/>

        <Dialog 
            open={open}
            onClose={handleClose} >
        <DialogTitle id="alert-dialog-title">
          {orderName}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           <img src={photo} width={150} height={150}/>
           <InputLabel ><b>Order Number:</b> {orderNumber}</InputLabel>
           <InputLabel ><b>Delivery Date:</b> {deliveryDate}</InputLabel>
           <InputLabel ><b>Amount:</b> {amount}</InputLabel>
          </DialogContentText>
          <h3>Delivery Address</h3>
          <DialogContentText id="alert-dialog-description">
           <InputLabel ><b>Address Line 1:</b>{address1}</InputLabel>
           <InputLabel ><b>Address Line 2:</b> {address2}</InputLabel>
           <InputLabel ><b>City:</b> {city}</InputLabel>
           <InputLabel ><b>Province:</b> {province}</InputLabel>
           <InputLabel ><b>postal Code:</b> {postalcode}</InputLabel>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
         
        </DialogActions>
      </Dialog>

        </div>

    );


}

export default OrderDetails;
