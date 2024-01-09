import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Fab } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import BasicSelect from './Select';
import SimpleSnackbar from './DataError';

export default function FormDialog({createDocument}) {
  const [open, setOpen] = React.useState(false);
  const [url, setURL] = React.useState("");
  const [showError , setShowError] = React.useState(false);

  const [ name , setName ] = React.useState("")
  const [ desc , setDesc ] = React.useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setName("");
    setDesc("");
    setOpen(false);
  };

  const handleAdd = () => {
    if( name === "" || desc === "" || url === "" )
    {
        setShowError(true)
        return 
    }
    const d = new Date();
    d.getDate();
    createDocument( name + "|" + d.toDateString() , desc , url , null )
    setOpen(false);
    setName("");
    setDesc("");
  };

  return (
    <React.Fragment>
      <Fab sx={{position:"absolute", right:"5vw", bottom:"8vh"}} aria-label="edit" onClick={handleClickOpen}>
                <EditIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Document</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a new document to your web5 decentralised document store
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(event)=>{setName(event.target.value)}}
          />
          <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Description"
          type="text"
          fullWidth
          variant="standard"
          value={desc}
          onChange={(event)=>{setDesc(event.target.value)}}
        />
        <div style={{height:"15px"}}></div>
        <BasicSelect setUrl={setURL} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
      <SimpleSnackbar open={showError} setOpen={setShowError}/>
    </React.Fragment>
  );
}