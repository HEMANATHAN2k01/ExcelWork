import React, { useState, useEffect } from 'react';
import ReportData from '../data/Report.json';
import { exportExcelFile } from '../components/Excel';
import { SiMicrosoftexcel } from "react-icons/si";

export const Report = () => {
    const [staffAllottedHours, setStaffAllottedHours] = useState({});
    const [totalAllottedHours, setTotalAllottedHours] = useState(0);


    useEffect(() => {
        let staffHours = {};
        ReportData.forEach(entry => {
            const staffName = entry.staffname + ` (${entry.staffinitials})`;
            staffHours[staffName] = (staffHours[staffName] || 0) + (entry.allottedhrs || 0);
        });
        setStaffAllottedHours(staffHours);

        let totalHours = 0;
        ReportData.forEach(entry => {
            totalHours += entry.allottedhrs || 0;
        });
        setTotalAllottedHours(totalHours);
    }, []);

    const handleSubmit = () => {
        exportExcelFile(body, [...headers, ...new Set(datas)].map(v => {
            return { name: v }
        }), name);
    };

    ReportData.forEach(v => {
        v.name = v.staffname + ` (${v.staffinitials})`
    })

    const data = ReportData.map((e, index) => {
        return {
            Course: e.course,
            Year: e.year,
            Batch: e.bname,
            Subject: e.subject,
            Allotted_Hrs: e.allottedhrs,
        }
    })


    console.log(data);

    const data1 = ReportData.map((e, index) => {
        return {
            Course: e.course,
            Year: e.year,
            Batch: e.bname,
            Subject: e.subject,
            Allotted_Hrs: e.allottedhrs,
            name: e.name
        }
    })

    let headers = Object.keys(data[0])
    let datas = ReportData.map(v => v.name)
    let totalheaders = [...headers, ...new Set(datas)]

    const name = "Workload Report"

    let newbody = data1.map(c => {
        let obj = {}
        totalheaders.map(v => {
            obj = {
                [v]: c.name === v ? c.Allotted_Hrs ?? "" : c[v] ?? '',
                ...obj,
            }
        })
        return obj
    })

    const body = newbody.map((value, i) => {
        return Object.values(value).reverse()
    })

    return (
        <div>
            <div>
                Total Hours : {totalAllottedHours}
            </div>
            <div>
                {Object.entries(staffAllottedHours).map(([staff, hours]) => (
                    <div key={staff}>{staff}: {hours} hours</div>
                ))}
            </div>
            <SiMicrosoftexcel className='flex text-green-600 text-3xl font-bold cursor-pointer' onClick={handleSubmit} />
        </div>
    );
};
