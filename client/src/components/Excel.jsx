const ExcelJS = require("exceljs");

export const exportExcelFile = (data, headers, name) => {
    let date = new Date()
    var printdate = `${date.getDate()}/${date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)}/${date.getFullYear()}`
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("My Sheet");
    sheet.mergeCells('G1:M1');
    sheet.getCell('J1').value = "RVS COLLEGE OF ARTS AND SCIENCE (AUTONOMOUS)";
    sheet.mergeCells('G2:M2');
    sheet.getCell('J2').value = "NAAC Re-accredited & ISO 9001:2008 Certified Institution";
    sheet.mergeCells('G3:M3');
    sheet.getCell('J3').value = "Sulur, Coimbatore, Tamil Nadu";


    // sheet.getCell('F2').value = name;
    sheet.getCell('R1').value = `Report As On : ${printdate}`

    sheet.getRow(1).font = {
        family: 4,
        size: 12,
        bold: true
    };
    sheet.getRow(1).alignment = {
        "vertical": "middle", "horizontal": "center"
    };
    sheet.getRow(2).font = {
        family: 4,
        size: 12,
        bold: true,
    };
    sheet.getRow(2).alignment = {
        "vertical": "middle", "horizontal": "center"
    };

    sheet.getRow(3).font = {
        family: 4,
        size: 12,
        bold: true,
    };
    sheet.getRow(3).alignment = {
        "vertical": "middle", "horizontal": "center"
    };

    const promise = Promise.all(
        data?.map(async (v, index) => {
            sheet.addTable({
                name: 'MyTable',
                ref: 'A5',
                headerRow: true,
                totalsRow: true,
                style: {
                    theme: 'TableStyleLight1',
                    showRowStripes: true,
                },
                columns: headers,
                rows: data,
                
            })
            // sheet.addTable({
            //     name: 'MyTable',
            //     ref: 'A1',
            //     headerRow: true,
            //     totalsRow: true,
            //     style: {
            //       theme: 'TableStyleDark4',
            //       showRowStripes: true,
            //     },
            //     columns: [
            //       {name: 'Date', totalsRowLabel: 'Totals:', filterButton: true},
            //       {name: 'Amount', totalsRowFunction: 'sum', filterButton: false},
            //     ],
            //     rows: [
            //       [new Date('2019-07-20'), 70.10],
            //       [new Date('2019-07-21'), 70.60],
            //       [new Date('2019-07-22'), 70.10],
            //     ],
            //   });
        })
    );

    promise.then(() => {
        // iterate over all current cells in this column
        workbook.xlsx.writeBuffer().then(function (data) {
            const blob = new Blob([data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            });
            const url = window.URL.createObjectURL(blob);
            const anchor = document.createElement("a");
            anchor.href = url;
            anchor.download = `${name}.xlsx`;
            anchor.click();
            window.URL.revokeObjectURL(url);
        });
    });
};