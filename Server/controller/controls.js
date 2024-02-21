import DataBase from "../config/dbs";

// exports.SaveData = (req, (res)) => {
//     const query = `insert into practice_db.user (id,name,sname,adno,course,fname,dob,blood,phone,email,address) values ('47c8e267-0b95-4854-bc54-8417f03913fc','Hemanathan','AS','0019','MCA','sakthivel','13092001','B+',9361094253,'hems@gmail.com','T V Malai');`
//     DataBase.query(query,(err,data)=>{
//         try {

//         } catch (error) {

//         }
//     })
// });

exports.InsertData = (req, res) => {
  try {
    const InQuery = `insert into practice_db.user (id,name,sname,adno,course,fname,dob,blood,phone,email,address) values ('47c8e267-0b95-4854-bc54-8417f03913fc','Hemanathan','AS','0019','MCA','sakthivel','13092001','B+',9361094253,'hems@gmail.com','T V Malai');`;
    DataBase.query(InQuery, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send("Data Saved");
      }
    });
  } catch (error) {}
};
