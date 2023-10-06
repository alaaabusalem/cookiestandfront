import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function CreateForm(){

    const [Location,setLocation] = useState('');
    const [Min,setMin] = useState(0);
    const [Max,setMax] = useState(0);
    const [Avg,setAvg] = useState(0);


const Creat= async(e)=>{
    e.preventDefault();
   
  const obj={
    location: Location,
    minimum_customers_per_hour: Min,
    maximum_customers_per_hour: Max,
    average_cookies_per_sale: Avg
    
  }
  const result= await axios.post("https://localhost:7049/api/CookieStands",obj);
  console.log(result);
}
    return(<>
    <div className='m-5'>
    <Form className='d-flex flex-column' onSubmit={Creat}>
     <fieldset className='border'>
      <legend className='text-center'>Enter a New Location information</legend>
      <div className='d-flex flex-row mt-5 pt-5'>
        <label>Location</label>
        <Form.Control type="text" placeholder="Name" name="Location"  onChange={(e)=>setLocation(e.target.value)}/>
      </div >
      <div className='d-flex flex-row flex-wrap justify-content-around mt-5'>
        <div>
        <label>Minimum customers per hour </label>
        <Form.Control type="number" placeholder="0" name="Minimum"  onChange={(e)=>setMin(e.target.value)}/>  
        </div>
        <div>
        <label>Maximum customers per hour </label>
        <Form.Control type="number" placeholder="0" name="Maximum" onChange={(e)=>setMax(e.target.value)}/>  
        </div>
        <div>
        <label>Average cookies per sale</label>
        <Form.Control type="number" placeholder="0" name="Average" onChange={(e)=>setAvg(e.target.value)}/>  
        </div>
      <Button variant="primary" type="submit">
        Create
      </Button>
      </div>
      </fieldset>
    </Form>
    </div>
    </>);
}