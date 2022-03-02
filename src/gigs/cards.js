import React from 'react'
import '../gigs/pages';
import '../gigs/cards.css'
import '../gigs/cards'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Icon from '@mui/icons-material/StarRate';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Img11 from "../assets/11.png";
import Header from './../header/header'
import Page from '../gigs/pages'
import Footer from '../footer/footer'
import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';


const cards = () => {
  return (
    <>
    
    
    {/* <Header/> */}
    
    {/* <Page/> */}
    <div className='cardscomponents'>
    <div style={{height:'412', width:'264'}}>
      <div className='cards4'>
    <Card sx={{ maxWidth: 320 }}>
      <CardMedia
        component="img"
        height="130"
        // padding: "120";
        // maxWidth= "55"
        image={Img11}
    

       
        
      />
            {/* <image src='../assets/image1.png' /> */}

          
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontSize="13px" fontFamily={'Sourse Sans Pro'}>
        <Box sx={{ fontWeight: 'light', }}>Augest 13, 2013</Box>
        </Typography>
        <Typography variant="body2" color="text.secondary" className='text1' fontFamily={'Sourse Sans Pro'}>
           <h2>Loram ipsam dolor sit amet, consectetor</h2>
        </Typography>
        <Chip label="$2500.00" color="error" fontFamily={'Sourse Sans Pro'}  />
        <p margin="10px" padding="10px">Skills:</p>
      
        <Chip style={{margin:'2px'}} label="Blockchain and crypto" size="small" />
        <Chip label="solidity" size="small" />
        <Chip label="Smart contract development" size="small" />        
      </CardContent>
      <Divider variant="middle" />
      
      <CardActions> 
     
      <Chip avatar={<Avatar>SK</Avatar>} label="Mr Sarjeel" style={{backgroundColor:'white'}} /> 

    
      <Icon style={{margin: '0 86px', color:'yellow'}}>
      
    
     
      </Icon>
     
     
    
       
     
      </CardActions>   
    
      
    </Card>
    
   
    
        
    </div>
    </div>
    </div>
    <Pagination style={{display: 'flex', alignItems:'center', justifyContent:'center', margin:'66px', padding:'22px' }} count={10} />
    <Footer />
    </>
      
   
    
  )
}

export default cards
