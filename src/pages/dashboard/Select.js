import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  const [url, setURL] = React.useState('');

  const app_rec = "https://firebasestorage.googleapis.com/v0/b/combined-hackathon-services.appspot.com/o/Appointment%20Receipt.pdf?alt=media&token=9026ca44-cddc-41c1-be8e-f1fea046128b" 
  const ana_rep = "https://firebasestorage.googleapis.com/v0/b/combined-hackathon-services.appspot.com/o/AnaesthesiaReports.pdf?alt=media&token=e6d4cb80-997f-4ab7-bd78-1ee2eaeaa16a"
  const blo_rep = "https://firebasestorage.googleapis.com/v0/b/combined-hackathon-services.appspot.com/o/BloodTest.pdf?alt=media&token=ff71f608-d044-4c53-8fde-4750ce59e6e4"
  const pat_rep = "https://firebasestorage.googleapis.com/v0/b/combined-hackathon-services.appspot.com/o/PathologyReports.pdf?alt=media&token=076c63d7-4166-4bec-a1b9-f54f3eaeae4c"
  const dis_sum = "https://firebasestorage.googleapis.com/v0/b/combined-hackathon-services.appspot.com/o/DischargeSummary.pdf?alt=media&token=a93677c6-19a8-477f-9627-87017132068a"
  const con_rep = "https://firebasestorage.googleapis.com/v0/b/combined-hackathon-services.appspot.com/o/ConsultationReport.pdf?alt=media&token=9a787e93-6fad-4f30-b2f7-b7ef8ca072c1"
  const car_rep = "https://firebasestorage.googleapis.com/v0/b/combined-hackathon-services.appspot.com/o/CardiologyReport.pdf?alt=media&token=7c0b26aa-260d-4cb4-9674-7f54e7ee0752"

  const handleChange = (event) => {
    setURL(event.target.value);
    props.setUrl(event.target.value)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Document Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={url}
          label="Document Type"
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value={app_rec}>Appointment Receipt</MenuItem>
          <MenuItem value={ana_rep}>Anaesthesia Report</MenuItem>
          <MenuItem value={blo_rep}>Blood Test Report</MenuItem>
          <MenuItem value={car_rep}>Cardiology Report</MenuItem>
          <MenuItem value={con_rep}>Consultation Report</MenuItem>
          <MenuItem value={pat_rep}>Pathology Report</MenuItem>
          <MenuItem value={dis_sum}>Discharge Summary</MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
}