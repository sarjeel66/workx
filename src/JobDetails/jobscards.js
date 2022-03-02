import React from 'react'
// import '../crypto/text'

import "../JobDetails/jobscards.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Icon from '@mui/icons-material/StarRate';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
// import Image from '../assets/image1.png';
import { Divider } from '@mui/material';
 import Box from '@mui/material/Box';
 import Icon from '@mui/icons-material/StarRate';


const crypto = () => {
  return (
    <div className='cryptocards'>
     
     <Card sx={{ maxWidth: 320 }}>
        <CardMedia
        height="188"
        // padding: "120";
        maxWidth= "55"
       
    
        
      />

        
     
     <CardContent>
    
        
    
       <Typography gutterBottom variant="h5" component="div" fontSize="13px" fontFamily={'Sourse Sans Pro'}>
       <Box sx={{ fontWeight: 'light', m: 1 }}>Augest 13, 2013</Box>
       </Typography>
       <Typography variant="body2" color="black" className='text1' fontFamily={'Sourse Sans Pro'}>
          <h1>PancakebunnyFork</h1>
       </Typography>
       <Chip label="$2500.00" color="error" fontFamily={'Sourse Sans Pro'}  />
       <p margin="10px" padding="10px">Skills:</p>
       <Chip style={{margin:'2px'}} label="Blockchain and crypto" size="small" />
        <Chip label="solidity" size="small" />
        <Chip label="Smart contract development" size="small" />        
       {/* <span style={{ padding:'10px', backgroundColor: '#E8EBED', borderRadius:'20px', paddingBottom:'10px' }}>Small Contact Development </span> */}
     </CardContent>
     <Divider variant="middle" />
    
     <CardActions>
    
      
     <Chip avatar={<Avatar>SK</Avatar>} label="Mr Sarjeel" style={{backgroundColor:'white'}} /> 
     
     <Icon style={{margin: '0 60px', color:'yellow'}}>
        
    
    
     </Icon>
     
     
     </CardActions>
     
   </Card>
   </div>
    
  )
}

export default crypto
