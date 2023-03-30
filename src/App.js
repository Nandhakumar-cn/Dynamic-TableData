import React from 'react'
import data from "./Skill.json"
import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


import Dynamic from './Dynamic';
import InputEdit from './InputEdit';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

// import AlertDialog from './Agree';
//Style Component
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
//Main Function
function App() {



  ///EDIT DATA
  const Data = data;
  const [table, settable] = React.useState(Data)
 
  const getting=[table[0].skill]
  

  const [id, setid] = React.useState()
  const [Editvalue, setEditvalue] = React.useState({
    skill:getting,
    value: table[0].value,
    percentage:table[0].percentage,
  })
  // const [editid, seteditid] = React.useState()
// const [Status, setStatus] = React.useState()

  //Edit fORM DATA
  const geteditvalue = (event, getvalue) => {
    event.preventDefault();
    setid(getvalue.id);
  }

  const getDeletevalue = (e,getvalue) => {
  //  event.preventDefault();
    setid(getvalue.skill);

  }

console.log(id);
  // this function using for onchange in edit input
  const usereditdata = (e) => {
    e.preventDefault();
    const name = e.target.getAttribute("name");
    const value = e.target.value;
    const newaddData = { ...Editvalue }
    newaddData[name] = value;
    setEditvalue(newaddData)

  }
//////////////////////////////////////////
//   const statuschange=(e)=>{
//     const name=e.target.getAttribute(table.Status)
//     const value = e.target.value
//     const newStatus = { ...Data}
//     newStatus[name] = value
// setStatus(newStatus)
// console.log(newStatus);
//   }
  
    
 

  //This function using for form onsubmit 
  const userdatasave = (e) => {
    e.preventDefault();
    const newtable = {

      skill: Editvalue.skill,
      value: Editvalue.value,
      percentage: Editvalue.percentage
    }
    const addtable = [...table]
    const findingindex = table.findIndex((getvalue) => getvalue.id === id)

    addtable[findingindex] = newtable;
    settable(addtable)
    setid(null)
    localStorage.setItem("Details", store)

  }
  //This Function Using for Cancel Button 
  const cancelbtn = () => {
    setid(null)
  }
  //This Function Was Deleteing All Data
  const DeleteData = (ids) => {
    // setid(getvalue.id);
    const Delete = [...table];
    const index = table.findIndex((s) => s.id === ids);
    Delete.splice(index, 1);
    settable(Delete)
    localStorage.setItem("Details", store)
    // localStorage.setItem("Details",store.includes({Status:"1"}))
    
  }
  
  

    //main content Localstorage
    const store = JSON.stringify(Data)
    localStorage.setItem("Details", store)
    // localStorage.getItem("Details")


    
 


  return (
    <>
      <form onSubmit={userdatasave}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell><h1>Skill</h1></StyledTableCell>
                <StyledTableCell><h1>Value</h1></StyledTableCell>
                <StyledTableCell><h1>Percentage</h1></StyledTableCell>
                <StyledTableCell><h1>Changes</h1></StyledTableCell>
                

              </TableRow>
            </TableHead>

            {
              table.map((getvalue, index) => (
                <>
                  {
                    id === getvalue.id ?
                      (<InputEdit usereditdata={usereditdata} Editvalue={Editvalue} 
                        cancelbtn={cancelbtn} table={table} id={id} />)

                      : (<Dynamic getvalue={getvalue} geteditvalue={geteditvalue} Deletedata={DeleteData} 
                        settable={settable} table={table} Data={Data} getDeletevalue={getDeletevalue} id={id}/>)
                  }

  


                </>
              ))
            }
          
          </Table>
        </TableContainer>
      
      </form >
 
    </>
  )
}

export default App