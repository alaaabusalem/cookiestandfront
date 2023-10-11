import { useState } from "react";
import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";

export default function Main(props){
const [count,setcount]=useState(0);

function UpdateCount(val){
    setcount(prev=> prev+val);
   console.log(count)
}
    return(<>
    
    <div className=" p-1 main d-flex flex-column justify-content-center align-items-center" >
        <div className="mb-1 pl-5 pr-5 form-creat" >
    <CreateForm UpdateCount={UpdateCount}/>
    </div>
    <div className=" d-flex flex-row justify-content-center table-div">
    <ReportTable count={count} Token={props.Token} UpdateCount={UpdateCount}/>
    </div>
    </div>
    
    </>);
}