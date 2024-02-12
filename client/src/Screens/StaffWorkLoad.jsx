import React from "react";
import { exportExcelFile } from "../components/Excel";
import { SiMicrosoftexcel } from "react-icons/si";
import ReportDatas from "../data/StaffWorkLoadReport.json";

export const StaffWorkLoad = () => {
 
    const data = ReportDatas.map(e=>{
        return{
            Year:e.year,
            Batch:e.bname,
            Course:e.course,
            Department:e.department,
            StaffName :e.firstname,
            AllottedHours:e.allottedhrs,
            Semester:e.semesternumber,
            Section:e.section
        }
    })

    console.log(data);

    

  const handleSubmit = () => {
    exportExcelFile()
};

  return (
    <div>
      StaffWorkLoad
      <div>
        <SiMicrosoftexcel
          className="flex text-green-600 text-3xl font-bold cursor-pointer"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};
