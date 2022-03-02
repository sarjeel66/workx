import React from 'react'
// import './cards.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Imgpic from '../assets/pic.jpg'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
// import { height } from '@mui/system';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 264, height:258 }}>
      <CardActionArea>
        <CardMedia
        // height= "64px"
        width= "64px"
        
          borderRadius="96px"
          component="img"
          height="140"
          image={Imgpic}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <p style={{fontWeight:'bold', }}>Skills</p>

        </CardContent>
      </CardActionArea>
      <div className='content1'>
      <Stack direction="row" spacing={1}>
      <Chip style={{}} label="BlocChain and Crypto" size='small' />
      <Chip label="Solidity" size='small'/>
      <Chip label="Dappz" size='small'/>
     
    </Stack>
    </div>
    </Card>
  );
}
