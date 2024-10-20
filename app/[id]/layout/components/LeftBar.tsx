
import Link from "next/link";
import { patient } from "./Lib/defintions";
import PatientForList from "./Lib/ui/patientsforlist";
import { IoSearch } from "react-icons/io5";
const LeftBar = ({ patients ,selected }: {patients:patient[] , selected:number }) => { 
    console.log("selected : " +selected)
    return (
        <div className="flex flex-col flex-grow bg-white h-[150vh] p-2 gap-y-2 rounded-lg">
            <div className="flex justify-between">
                <p className="font-bold">Patients</p>
                <IoSearch size={25}/>
            </div>
            <div className="overflow-y-auto overflow-x-hidden">

            {patients.map((patient, index) => (
                <div  className={`${index === selected ? " bg-swg":""} rounded-lg`}>

                    <PatientForList id={index} Patient={patient} key={`p-${index}`} />
                </div>
            ))}
            </div>
        </div>
    );
}

export default LeftBar