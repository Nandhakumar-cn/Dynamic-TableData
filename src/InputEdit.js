import React from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import CancelIcon from '@mui/icons-material/Cancel';

// import SaveIcon from '@mui/icons-material/Save';


export default function InputEdit({ usereditdata, Editvalue, cancelbtn,table }) {

    
   
    return (
     
        <TableRow>
            
            <TableCell>
                <input type="text"
                    // placeholder={table[1].skill}
                    onChange={usereditdata}
                    value={Editvalue.skill}
                    name="skill"></input>
            </TableCell>

            <TableCell>
                <input type="number"
                  placeholder={table.value}
                    onChange={usereditdata  }
                    value={Editvalue.value}
                    name="value"></input>
            </TableCell>
            <TableCell>
                <input type="text"
          onChange={usereditdata}
                    placeholder={table.percentage}
                    value={Editvalue.percentage}
                    name="percentage"></input></TableCell>
            {/* <button>Add Your New Data</button> */}
            <TableCell><button style={{backgroundColor:"rgb(169, 169, 169)",color:"black",fontWeight:"bolder",borderRadius:"50px"}}>Save</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <CancelIcon onClick={cancelbtn}>Cancel</CancelIcon></TableCell>
            

               

        </TableRow>
  
    )
   



    
   
 
}
