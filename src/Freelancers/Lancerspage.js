import React from 'react'
import "./lancerspage.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import Header from '../header/header';
import Cards from '../Freelancers/Lancerspage';
import { height } from '@mui/system';


const Lancerspage = () => {
  return (
      <>
      {/* <Header /> */}

      
    <div>
        <div className='head1'>
            <div className='head2'>
                <p>22,997 jobs Found</p>
            </div>
            <div className='head3'>
                All Freelancers
            </div>
            <div className='head4'>
                <p>Search for freelancer for your work, you can include skills<br></br>minimum rating and other creteria</p>
            </div>
            <div className='button'>
                <Button variant="contained" color="error"style={{textTransform:"none"}} >
                    Get Started
                </Button>
            </div>
            <div class="search-container">
                <p style={{fontWeight:'bold' }}>Search</p>
  
      <input type="text" placeholder="Enter Services Rating.." name="search" style={{ padding: '6px 205px'}} />
      <button type="submit" style={{fontSize: '13px', paddingBottom: '7px', paddingTop: '7px'}}><i class="fa fa-search"></i>Search</button>
    
       
  </div>
</div>
            <div className='rating'>
                <p>Rating</p>

                <div className='rating1'>
            <Autocomplete
      disablePortal
      id="combo-box-demo"
     
      sx={{ width: 300, height: '30px' }}
      renderInput={(params) => <TextField {...params} label="Select Rating" />}
    />
    
    
            </div>

          
 
      </div>
    </div>
    <div className='sortby'>
    <p>Sort By</p>
            <Autocomplete
      disablePortal
      id="combo-box-demo"
     
      sx={{ width: 300, height: '30px' }}
      renderInput={(params) => <TextField {...params} label="Sort By" />}
    />
    </div>

    <div className='allfreelancers'>
        <p>All Freelancers</p>

    </div>
   
    </>
  )
}

export default Lancerspage
