import React from 'react'
import "../footer/footer.css";
// import Button from '@mui/material/Button';
import Logo from "../assets/6.png";
// import CopyrightIcon from '@mui/icons-material/Copyright';
// import Container from '@mui/material'
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MuseumIcon from '@mui/icons-material/Museum';
// import Item from '@mui/material/Item'

const footer = () => {
  return (
    <div className='footer1'>
      <div className='logo' style={{margin:'0 154px'}}>
         <img src={Logo} alt='logo' />
        
         <span class="material-icons" style={{color:'#7F909F', display:'block', width:'187', height:'87'}}> Copyright 2020-2021 workx.com <br></br> All rights Reserved</span>
         <Container className='gridsystem' style={{display:'flex', padding:'0 155px 0 351px', margin:'-70px 50px 0 45px'}} >
         <Grid color='#fff' item xs={2} sm={4} md={3}>
          Lorem
          <p style={{color:'#7F909F'}} >Lorem</p>
          </Grid>
          <Grid color='#fff'  item xs={2} sm={4} md={3}>
          Lorem
          <p style={{color:'#7F909F'}} >Lorem</p>
          <p style={{color:'#7F909F'}} >Lorem</p>
          <p style={{color:'#7F909F'}} >Lorem</p>         
          </Grid>
          <Grid color='#fff' item xs={2} sm={4} md={3}>
          Lorem
          <p style={{color:'#7F909F'}} >Lorem</p>
          </Grid>
          <Grid color='#fff' item xs={2} sm={4} md={3}>
          Social
          <div className='icons1' style={{
            
            padding: '10px 0px 1px',

          }}>
             <MuseumIcon style={{color:'#7F909F'}}></MuseumIcon>
             <LinkedInIcon style={{color:'#7F909F'}} ></LinkedInIcon>
             <TwitterIcon style={{color:'#7F909F'}}></TwitterIcon>
          
         

          </div>

          </Grid>
          </Container>
</div>
          
         </div>
         
    
  )
}

export default footer
