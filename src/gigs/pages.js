// import { backdropClasses } from '@mui/material'
import React from 'react'
// import "./pages.css"
import Grid from '@mui/material/Grid';

// import EditOffIcon from '@mui/icons-material/EditOff';
// import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Gigs from '../gigs/gigs'
// import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
// import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
// import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Icon from '@mui/icons-material/StarRate';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import Gigs from "../gigs/gigs"
// import Chip from '@mui/material/Chip';
// import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
// import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
// import PopperUnstyled from '@mui/base/PopperUnstyled';
// import { styled } from '@mui/system';
// import Box from '@mui/material/Box';
// import OutlinedInput from '@mui/material/OutlinedInput';
// // import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// // import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import Chip from '@mui/material/Chip';




const pages = () => {
  return (
    <div className='headings1' style={{
      height: '148px',
      width: '1128px',
      color: 'Black',
      backgroundColor: 'lightgrey',
      margin: '0 160px'
    }}>
 
      <div style={{ margin: '0 80px 0 61px', padding: '0 29px' }}>
        <h1>Catageries</h1>
        <p style={{fontColor:'darkgray'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br></br> eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
      <div style={{display:'flex' }}>
        
      </div>
      <FormControl variant="standard" ></FormControl>
      <InputLabel shrink htmlFor=" Search " style={{ borderColor: 'green',
    borderWidth: 2,}} >
          Search
        </InputLabel>
        
        <SearchIcon style={{margin: '-11px -52px',
    paddingTop: '23px'}} /><InputBase defaultValue="Enter Service Name" id="bootstrap-input"  style={{backgroundColor:'lightgray', margin: '59px 74px',
    padding: '0 109px 0px'}} />
        
        <div className='sortby' style={{margin:'0 5px'}}>
    <p>Sort By</p>
            <Autocomplete
      disablePortal
      id="combo-box-demo"
     
      sx={{ width: 300, height: '30px' }}
      renderInput={(params) => <TextField {...params} label="Sort By" />}
    />
    </div>
    <div className='sortby' style={{ color: 'black',
    fontWeight: 'bold',
    float: 'center',
    margin: '-84px 123px',
    height: '5%'}}>
    <p>Sort By</p>
            <Autocomplete
      disablePortal
      id="combo-box-demo"
     
      sx={{ width: 300, height: '30px' }}
      renderInput={(params) => <TextField {...params} label="Sort By" />}
    />
    </div>
    <div>
      <Grid container>
      <Grid item xs={3}>
      <><Gigs/></>
    </Grid>
    <Grid item xs={3}>
    <><Gigs/></>
      </Grid>
    <Grid item xs={3}>
    <><Gigs/></>
      </Grid>
    <Grid item xs={3}>
    <><Gigs/></>
    </Grid>
      </Grid>

    </div>
       
    </div>
    

  );
}




    export default pages
