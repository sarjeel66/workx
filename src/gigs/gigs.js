import React from 'react'

import "./gigs.css";
import './pages';
import '../Freelancers/lancers';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Icon from '@mui/icons-material/StarRate';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
// import Grid from '@mui/material/Grid';

// import Avatar from '@mui/material/Avatar';

// import Image from '../assets/image1.png';
import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
// import { margin } from '@mui/system';
// import { styled } from '@mui/system';






export default function MediaCard() {
  return (
    <>
     
    <div className='cards4'>
    <Card sx={{ maxWidth: 320 }}>
      <CardMedia
        component="img"
        height="130"
        // padding: "120";
        maxWidth= "55"
        image={'image1'}
    

       
        
      />
            {/* <image src='../assets/image1.png' /> */}

          
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontSize="13px" fontFamily={'Sourse Sans Pro'}>
        <Box sx={{margin:'0 -7px', fontWeight: 'light', m: 1 }}>Augest 13, 2013</Box>
        </Typography>
        <Typography variant="body2" color="text.secondary" className='text1' fontFamily={'Sourse Sans Pro'}>
           <h2>Loram ipsam dolor sit amet, consectetor</h2>
        </Typography>
        <Chip label="$2500.00" color="error" fontFamily={'Sourse Sans Pro'}  />
        <p margin="10px" padding="10px">Skills:</p>
        {/* <span style={{marginRight:'15px', width:'126', height:'20', padding:'4px', backgroundColor: '#E8EBED', borderRadius:'20px'}}>Blockchain & crypto </span>
        <span style={{marginRight:'15px', padding:'2px', backgroundColor: '#E8EBED', borderRadius:'20px'}}> Solidity </span>
        <span style={{ padding:'10px', backgroundColor: '#E8EBED', borderRadius:'20px', paddingBottom:'10px' }}>Small Contact Development </span> */}
      
       {/* <Grid container spacing={6} style={{margin:'-73px -50px -27px'}}> */}
        {/* <Grid item xs={3}>
          <h5> BlaockChain and Crypto <h5/>
        </Grid> */}
        {/* <Grid item xs={3}>
          <h4>Blockchain and Crypto</h4>
        </Grid>
        <Grid item xs={6}>
          <h4> Solidity </h4> */}
        {/* </Grid> */}
      {/* </Grid> */}
      {/* <Grid item xs={3}>
          <h4>Smart Contract Development</h4>
        </Grid> */}
        <Chip style={{margin:'2px'}} label="Blockchain and crypto" size="small" />
        <Chip label="solidity" size="small" />
        <Chip label="Smart contract development" size="small" />
        
        
      </CardContent>
      <Divider variant="middle" />
     
      <CardActions>
      <Chip style={{backgroundColor:'white'}} avatar={<Avatar>Sk</Avatar>} label="Courteny H." />
      
    
       
     
      <Icon className='star1' color='yellow'></Icon>
      
      
     
      
      </CardActions>
      
    </Card>
    </div>
    </>
    
  );
}