import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import DeleteDialog from './DeleteDialog';
import DocumentDialog from './DocumentViewer';


export default function Deposits({data,deleteMessage}) {
  
  const [openDelete , setOpenDelete] = React.useState(false);
  const [openDocument , setOpenDocument] = React.useState(false);

  const viewDocument = (event) => {
    event.preventDefault();
    setOpenDocument(true);
  } 

  return (
    <React.Fragment>
      <Title>{data.data.firstName.split(["|"])[1]}</Title>
      <Typography component="p" variant="h4" sx={{width:"100%",overflow:"scroll"}}>
        {data.data.firstName.split(["|"])[0]}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
      {data.data.lastName}
      </Typography>
      <div style={{width:"100%",display:"flex"}}>
        <Link color="primary" href="#" onClick={viewDocument}>
          View Document
        </Link>
        <Link color="#FF6900" style={{userSelect:"none", cursor:"pointer"}} onClick={(event)=>{event.preventDefault(); setOpenDelete(true) }}  sx={{marginLeft:"auto"}}>
          Delete
        </Link>
      </div>
      <DeleteDialog isOpen={openDelete} setOpen={setOpenDelete} delete={()=>{deleteMessage(data.id)}}/>
      <DocumentDialog title={data.data.firstName.split("|")[0]} url={data.data.message} open={openDocument} setOpen={setOpenDocument}/>
    </React.Fragment>
  );
}
