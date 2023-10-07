import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";

export default function Main(){


    return(<>
    
    <div className=" p-1 main" >
        <div className="mb-1 pl-5 pr-5">
    <CreateForm/>
    </div>
    <div className="pl-5 pr-5 d-flex flex-row justify-content-center">
    <ReportTable/>
    </div>
    </div>
    
    </>);
}