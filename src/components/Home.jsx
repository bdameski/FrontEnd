import React, { useState, useEffect } from "react";
import {Box, Grid, Item, Typography} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const columns = [
  { field: 'id',
   headerName: 'ID', 
   width: 90 },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 300,
  },
  {
    field: 'full_file_url',
    headerName: 'File url',
   
    width: 200,
    renderCell: (params) => 
      <a href={params.row.full_file_url} target="_blank">Download Report</a>,
  },
  {
    field: 'full_image_url',
    headerName: 'Image url',
    width: 200,
    renderCell: (params) => 
      <a href={params.row.full_image_url} target="_blank">Download Image</a>,
  },
  
];



const HomePage = () => {

  const [data, setData] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    let dataToken = localStorage.getItem("token")
    if (dataToken === null){
      navigate("/login")
    }
    else{
      let header = {
        headers: {
          Authorization: dataToken, //the token is a variable which holds the token,
	"ngrok-skip-browser-warning":69420

        }}
        let apiUrl = process.env.REACT_APP_API_URL
        axios.get(`${apiUrl}/reports/`, header)
      .then(response =>{
        setData(response.data)
      })

  }
  },[])

  
  
    return (
      
     
      <>
       <Box sx={{ flexGrow: 1, marginTop:"100px" }}>
        <Typography variant="h4">Reports</Typography>
      <Grid container spacing={2}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
        <Box sx={{ height: 400, width: '100%',padding:"20px", marginTop:"30px", background:"white"}}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
        </Grid>
        <Grid item xs={2}></Grid>
       
      </Grid>
    </Box>
      </>
       
        
       
      
       
    
        
   
       


    )
  
}

export default HomePage;