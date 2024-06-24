import React, { useState, useEffect } from "react";
import axios from "axios"
import {Container, Box, TextField, Button, Typography } from "@mui/material";
import { Link, useNavigate} from "react-router-dom";

const RegisterPage = () => {

    const [userName,     setUserName] = useState("");
    const [userEmail,           setUserEmail] = useState("");
    const [userPassword,        setUserPassword] = useState("");
    const [userConfirmPassword, setUserConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    };
    const handleUserEmailChange = (event) => {
        setUserEmail(event.target.value);
    };
    const handleUserPasswordChange = (event) => {
        setUserPassword(event.target.value);
    };
    const handleUserConfirmPasswordChange = (event) => {
        setUserConfirmPassword(event.target.value)
    }

    useEffect(() => {
      let dataToken = localStorage.getItem("token")
      if (dataToken !== null){
        navigate("/")
      }
    },[])

    
    

  const validationRegister = () => {  
      if (userEmail.includes("@") && userPassword === userConfirmPassword) {
        const userObj = {
            name: userName,
            email: userEmail,
            password: userPassword,
            confirmPassword: userConfirmPassword
        }
        let apiUrl = process.env.REACT_APP_API_URL
        axios.post(`${apiUrl}/register/`, userObj)
        .then(response =>{
          console.log(response)
          if ( response.status === 200 ) {
            navigate("/login/")
          }
          else{
            alert("Error, try again")
          }

        })
      }
    else{
      console.log("error")
     }
  }
            
    
    

            // localStorage.setItem("userData", JSON.stringify(userObj));
      
  return (
   
        <Container sx={{width:"33%"}}>
             <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "50ch" },
            background:"#aaf0c9",
            marginTop:"200px",
            padding:"50px"
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="name"
            type="text"
            label="Enter name"
            variant="outlined"
            required
            sx={{ background: "white", borderRadius: "10px" }}
            onChange={(event) => handleUserNameChange(event)}
          />{" "}
          <br />
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
          <TextField
            id="confirmePassword"
            type="password"
            label="Confirme password"
            variant="outlined"
            required
            sx={{ background: "white", borderRadius: "10px" }}

            onChange={(event) => handleUserConfirmPasswordChange(event)}
          />{" "}
          <br />
          <Button variant="outlined"
            size="small"
            style={{
              
              background: "#64e3a1",
              padding: "10px 20px",
              border: "none",
              borderRadius: "10px",
            }}>
            <Link
              to="/login/"
              style={{ color: "black", textDecoration: "none" }}
              onClick={()=>validationRegister()}
            >
              Register
            </Link>
          </Button>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="body1"
            sx={{ color: "grey", marginRight: "10px" }}
          >
            Already have an account ?
          </Typography>
          <Typography>
            {" "}
            <Link to="/login/" style={{ color: "green" }}>
              Log In here
            </Link>
          </Typography>
        </Box>
        </Box>
     
        </Container>
       
  );
};
export default RegisterPage;
