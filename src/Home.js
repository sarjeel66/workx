import React from 'react'
import '../src/home.css'
import Jobs from './crypto/crypto'
import Gigs from '../src/gigs/gigs'
// import Crads from '../src/gigs/'
// import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

import Container from '@mui/material/Container'
import { display } from '@mui/system'
// import Button from '@mui/material/Button';
// import  from '../src/crypto/text'
import Crypto from '../src/crypto/crypto'
import Section from '../src/section/section'
import Footer from '../src/footer/footer'
import Pagination from '@mui/material/Pagination';
// import Gigsdetails from '../src/GigsDetails/gigsdetails'
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';


const Home = () => {
  return (
    <div>
      <div>
        <p style={{margin: '47px 50px', fontSize: '31px',fontWeight: 'bold'}}>New Gigs</p>
      </div>
      <Button style={{backgroundColor:'#FFFFFF',float: 'right',margin: '-79px 48px', color:'black', fontWeight:'bold', textTransform:'none'}} variant="contained" disableElevation>Search more Gigs  ></Button>
        <div className='homeside' style={{display:'flex', justifyContent:'space-around'}}>
       
        <Grid container spacing={1}>
       <Grid item xs={3}>
    <><Gigs /></>
      </Grid>
      <Grid item xs={3}>
    <><Gigs /></>
      </Grid>
     <Grid item xs={3}>
    <><Gigs /></>
     </Grid>
     <Grid item xs={3}>
       <><Gigs /></>
  </Grid>
  <Grid item xs={3}>
    <><Gigs /></>
      </Grid>
      <Grid item xs={3}>
    <><Gigs /></>
      </Grid>
     <Grid item xs={3}>
    <><Gigs /></>
     </Grid>
     <Grid item xs={3}>
       <><Gigs /></>
  </Grid>
</Grid>

        </div>
        <Pagination style={{display: 'flex', alignItems:'center', justifyContent:'center', margin:'66px', padding:'22px' }} count={10} />
        <div>
        <p style={{margin: '47px 50px', fontSize: '31px',fontWeight: 'bold'}}>New Crypto Jobs</p>
     
      </div>
      <Button style={{backgroundColor:'#FFFFFF',borderColor:'gray',float: 'right',margin: '-79px 48px', color:'black', fontWeight:'bold', textTransform:'none'}} variant="contained" disableElevation>Search more Jobs  ></Button>
      
<div style={{display:'flex'}}>

<Grid container spacing={0}>
       <Grid item xs={3}>
    <><Crypto /></>
      </Grid>
      <Grid item xs={3}>
    <><Crypto /></>
      </Grid>
     <Grid item xs={3}>
    <><Crypto /></>
     </Grid>
     <Grid item xs={3}>
       <><Crypto /></>
  </Grid>
  <Grid item xs={3}>
    <><Crypto /></>
      </Grid>
      <Grid item xs={3}>
    <><Crypto /></>
      </Grid>
     <Grid item xs={3}>
    <><Crypto /></>
     </Grid>
     <Grid item xs={3}>
       <><Crypto /></>
  </Grid>
</Grid>
        
        
</div>


       
           
            
            {/* <Section /> */}
            <Footer/>

      
    </div>
  )
}

export default Home;
