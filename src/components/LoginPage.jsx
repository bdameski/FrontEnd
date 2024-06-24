import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Box, Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  const handleUserEmailChange = (event) => {
    setUserEmail(event.target.value);
  };
  const handleUserPasswordChange = (event) => {
    setUserPassword(event.target.value);
  };



  useEffect(() => {
    let dataToken = localStorage.getItem("token")
    if (dataToken !== null){
      navigate("/")
    }
  },[])

  const handleLogin = () => {
    const userObj = {
      email: userEmail,
      password: userPassword   
  }
  let apiUrl = process.env.REACT_APP_API_URL
  console.log(apiUrl)
    axios.post(`${apiUrl}/login/`, userObj)
    .then(response =>{
      console.log(response)
      if ( response.status === 200 ) {
        let token = response.data.token
        localStorage.setItem("token", token)
        navigate("/")
        console.log(response)
      }
      else{
        alert("Error, try again")
      }

    })
}






  
  return (
    <Container sx={{ width: "33%" }}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 2, width: "50ch" },
          background: "#aaf0c9",
          marginTop: "200px",
          padding: "50px",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="email"
          type="email"
          label="Enter email"
          variant="outlined"
          required
          sx={{ background: "white", borderRadius: "10px" }}
          onChange={(event) => handleUserEmailChange(event)}
        />{" "}
        <br />
        <TextField
          id="password"
          type="password"
          label="Enter password"
          variant="outlined"
          required
          sx={{ background: "white", borderRadius: "10px" }}
          onChange={(event) => handleUserPasswordChange(event)}
        />{" "}
        <br />
        <Button
          variant="outlined"
          size="small"
          style={{
            background: "#64e3a1",
            padding: "10px 20px",
            border: "none",
            borderRadius: "10px",
          }}
        >
          <Link to="/" style={{ color: "black", textDecoration: "none" }}
           onClick={()=>handleLogin()}
          >
            Login
          </Link>
        </Button>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="body1"
            sx={{ color: "grey", marginRight: "10px" }}
          >
            Don't have an account ?
          </Typography>
          <Typography>
            {" "}
            <Link to="/register/" style={{ color: "green" }}>
              Create an account
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
export default LoginPage;
