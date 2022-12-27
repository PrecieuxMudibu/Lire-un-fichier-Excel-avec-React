import * as XLSX from 'xlsx';
import { useEffect, useState } from 'react';
function Excel() {

  const [candidats,setCandidats] = useState([])
    async function handleFile (e) {
      console.log('reading input file:');
      const file = e.target.files[0];
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      console.log(jsonData);
      setCandidats([...jsonData])
    }
    
    useEffect(()=>{
      console.log("candidats",candidats)
    },[candidats])

    return (
      <div className="app">
          <input type="file" onInput={(e) => handleFile(e)}
            />

        { candidats.map((candidat)=>{
          return (
            <div>
              <p>{candidat.nom}</p>
              <p>{candidat.email}</p>
              <img src={candidat.photo} alt ='candidat hpoto'/>
            </div>
          )
          })}
      </div>
    );
  }
  export default Excel;