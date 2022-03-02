import React from 'react'
import "./header.css";
import Logo from "../assets/6.png";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link, Outlet } from "react-router-dom";
// import Gigs from '../gigs/pages.js';
// import Jobs from '../gigs/pages.js'
// import { color } from '@mui/system';


const BootstrapButton = styled(Button)({
    display: 'flex',
    boxShadow: 'none',
    textTransform: 'none',
    color: 'white',
    fontSize: 16,
    padding: '6px 12px',
    // border: '1px solid',
    lineHeight: 1.5,
    // backgroundColor: '#0063cc',
    // borderColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        //   backgroundColor: '#0069d9',
        //   borderColor: '#0062cc',
        //   boxShadow: 'none',
    },
    '&:active': {
        //   boxShadow: 'none',
        //   backgroundColor: '#0062cc',
        //   borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});
const header = () => {
    return (
<>
        <div className='bg'>

            <div className='header-main'>

                <div className='brand'>
                <Link to="/" color="white"  ><img src={Logo} alt='logo' /></Link>
                </div>
                <div className='main-menu'>
                    <ul>
                        <Link to="/jobs" color="white"  ><Button variant="text" style={{textTransform:'none', color:'#fff', fontSize:'20px', padding: '11px'}}>Jobs </Button></Link>
                        <li>
                        <Button variant="text" style={{textTransform:'none', color:'#C5CDD3', fontSize:'20px'}}><Link to="/gigs" color="white"  > Gigs </Link></Button>
                        </li>
                        <li>
                        <Button variant="text" style={{textTransform:'none', color:'#C5CDD3', fontSize:'20px'}}><Link to="/freelancers" style={{ textDecoration: 'none', color:'lightgrey' }} color="white"  > FreeLancers </Link></Button>
                        </li>
                        <li>
                        <Button variant="text" style={{textTransform:'none', color:'#C5CDD3', fontSize:'20px'}}><Link to="/Dashboard" style={{ textDecoration: 'none', color:'lightgrey' }}   > Blog </Link></Button>
                        </li>
                        <li>
                            <Button variant="contained" color="error"><Link to="Dashboard" style={{ textDecoration: 'none', color:'white'}} color="white"   >Dashboard </Link></Button>
                        </li>
                    </ul>
                   

                </div>



            </div>
            {/* <div className='header-leftContent'>
                <h1 style={{ color: 'white' }}>
                    BlockChain-Based <br></br>Freelancer Platform
                </h1>
                <p>Loram has built a decades-long partnership<br></br> with the rail industry offering the most innovative portfolio of<br></br> equipment crewed by our expertly-trained operators and technicians. </p>
            </div> */}
            <div className='img-bg'>
            </div>
            <div className='container'>
                <h1>BlockChain Based Freelancer Platform</h1>
                <p>Future of the freelance is now.Earn and pay with crypto with <br></br> efficient teansitions a and robust protections through smart <br></br>contracts  wherever your're based. </p>
                <div className='button' style={{textTransform:'none', margin: '43px 24px'}}>
                    <Button variant="contained" color="error" style={{padding: '5px 26px',textTransform: 'none'}}>Explore Gigs</Button>
                    <Button variant="contained" color="secondary" style={{padding: '5px 26px',textTransform: 'none', backgroundColor: 'white', color: 'black', fontWeight: 'bold'}}>Find Jobs</Button>
                </div>

            </div>
        </div>
            <Outlet/>

        </>


    )
}

export default header
