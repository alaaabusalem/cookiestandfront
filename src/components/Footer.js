import axios from "axios";
import { useEffect, useState } from "react";

function Footer() {
    const [ReportArray,SetReportArray]= useState([]);
let count=0;
    useEffect( ()=>{
        axios.get("https://cookie-stand20231007094403.azurewebsites.net/api/CookieStands")
        .then(respons=>{
            console.log(respons.data);
            SetReportArray(respons.data);
        })
        .catch(err=>{
            console.log(err);
        })
        ;
      

    },[]);
    return (
    <div className="foot">
      <div className="footerDiv">{ReportArray.forEach(element => {
        count=count+1;
      })}{`${count} Location World Wide`}</div>
    </div>
    );
  }
  
  export default Footer;