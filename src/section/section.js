import React from 'react'
import "./section.css"
// import Image from "../assets/bg.png"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Imgbg from '../assets/bg.png'
import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';


const section = () => {
  return (
    <div className='section1'>
        <Typography gutterBottom variant="h4" className='textside' style={{
            fontFamily:'Rubek',
            height: '40px',
            width: '478px',
            fontWeight: 'blod',
            textalign: 'center',
            

            Image:{Imgbg}
          
        }}>

                    Get Alart For New Gigs Or Jobs
        </Typography>
        <Typography gutterBottom varient="h5" className='textarea' style={{color:'gray', margin: '-48px -86px 15px -793px'}}>
                    Subscribe to get notified about new gigs, Jobs and other relevant Events
        </Typography>  
        {/* <Image src="../assets/bg.png" alt='background'></Image>    */}
        <Box component="form" noValidate autoComplete="off">
            
      <FormControl className='button1' sx={{ width: '350px', height:'40px',  margin: '10px 0 0 -793px', padding: '10px 10px 0 10px' }}>
        <OutlinedInput placeholder="Enter you are Email Address...." />
        <FormHelperText />
      </FormControl>
    </Box>   
    {/* <Button variant="contained" style={{margin: '-42px 9px 9px -257px', padding: '8px 25px 10px', color:"error", textTransform:'none', fontSize:'18px'}}>Search</Button> */}
    <Button variant="contained" color="error" style={{margin: '-42px 9px 9px -257px', padding: '8px 25px 10px',textTransform:'none', fontSize:'18px'}}>Subscribe</Button>
    </div>
    
    

  )
}

export default section
