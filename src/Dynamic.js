import React from 'react'
// import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
export default function Dynamic({ getvalue, geteditvalue, Deletedata,Data,getDeletevalue,id}) {
  const [open, setOpen] = React.useState(false);
  const [Datas, setDatas] = React.useState(Data);
 


  // const [active, setActive] = React.useState(true);
  const handleClickOpen = (e) => {
    // e.preventDefault();
    getDeletevalue(e,getvalue)
    setOpen(true);
    
   
    
 



    // Deletedata(!getvalue.id)

  };


  const Disagree = () => {
    setOpen(false);
    // Deletedata(getvalue.id)
  };
  // const store = JSON.stringify(Data)
  // const store=JSON.stringify(table)
  const Agree = () => {
Deletedata(getvalue.id)
// localStorage.getItem("Details")
// localStorage.setItem("Details",Data)
    setOpen(false);
    // setDatas({...Data[editid-1].Status = 1})
if (id === "React") {
  setDatas([...Datas[0].Status = 1])
  
}
else if(id === "Node.JS") {
  setDatas([...Datas[1].Status = 1])
  
}
else if(id === "Html") {
  setDatas([...Datas[2].Status = 1])
  
}
else if(id === "Css") {
  setDatas([...Datas[3].Status = 1])
  
}
else if(id === "Javascript") {
  setDatas([...Datas[4].Status = 1])
  
}
   


     
    
   
  


    // setActive(false);


  };



    return (
<>

      <TableRow >
        <StyledTableCell style={{ color: "rgb(220, 20, 60)" }}><h2>{getvalue.skill}</h2></StyledTableCell>
        <StyledTableCell style={{ color: "rgb(218, 165, 32)" }}><h2>{getvalue.value}</h2></StyledTableCell>
        <StyledTableCell style={{ color: "rgb(255, 0, 255)" }}><h2>{getvalue.percentage}</h2></StyledTableCell>



        <TableCell><EditIcon onClick={(e) => geteditvalue(e, getvalue)} style={{ color: "rgb(112, 128, 144)", width: "50px" }}>Edit</EditIcon>

          &nbsp;&nbsp;
          <DeleteIcon onClick={() => handleClickOpen()} style={{ color: "red", width: "50px" }}  >Delete</DeleteIcon></TableCell>
          {/* {
            active ?
        <StyledTableCell><h2>{getvalue.Status}</h2></StyledTableCell>:
        <StyledTableCell><h2>{getvalue.Status=1}</h2></StyledTableCell>
          } */}
        </TableRow>
      

  
        <Dialog
          open={open}
          onClose={Agree}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are You Sure Of This ?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              If You Deleted This Data,This Data will be Deleted Also In Your Localstorage...
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={Disagree}>Disagree</Button>
            <Button onClick={Agree} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>

   
      </>


    )
  }


  