import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Login(props) {

    const [Name,setName]= useState("");
    const [Pass,setPass]= useState("");

    const login= async(e)=>{
        e.preventDefault();
       
      const obj={
      
        Email: Name,
        Passowrd: Pass
        
      }
      const result= await axios.post("https://cookie-stand20231007094403.azurewebsites.net/api/Users/Login",obj)
      .then(res=>{
        console.log(res.data)
        props.LoginUser(true,res.data.token)
      })
      .catch(err=>{
        console.log(err);
      });
      
    }
    return (
        <div className='m-5'>
        <Form className='d-flex flex-column creatform' onSubmit={login}>
        
          <div className='d-flex flex-row mt-5 pt-5 '>
            <label>Name</label>
            <Form.Control type="text" placeholder="Name" name="Name"  onChange={(e)=>setName(e.target.value)}/>
          </div >
          <div className='d-flex flex-row flex-wrap justify-content-around mt-5'>
            <div className='field'>
            <label>Password </label>
            <Form.Control type="password" placeholder="0" name="Minimum"  onChange={(e)=>setPass(e.target.value)}/>  
            </div>
           
          <Button variant="primary" type="submit">
            Create
          </Button>
          </div>
        
        </Form>
        </div>
    );
  }
  
  export default Login;