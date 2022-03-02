import React from 'react'
import './login.css'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MuseumIcon from '@mui/icons-material/Museum';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
// import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
// import FormControl from '@mui/material/FormControl';
// import Paper from '@mui/material/Paper';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';
// import { width } from '@mui/system';
// import Grid from '@mui/material/Grid';
// import TextField from '@mui/material/TextField';
// import InputLabel from '@mui/material/InputLabel';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);

    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment  >
            <Button onClick={handleOpen}>Login Page</Button>
              
            <Modal

                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"

            >
                
                <Box sx={{ ...style, width: 200 }} >
                    <h2 id="child-modal-title" style={{ fontSize: '13px' }} >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h2>
                    <Button variant="contained" style={{ backgroundColor: 'red', fontSize: '10px', textTransform: 'none', fontWeight:'bold' }}>FreeLancers</Button>
                    <Button variant="contained" style={{ backgroundColor: 'white', fontSize: '10px', textTransform: 'none', color: 'black', fontWeight:'bold' }}>Coustomers</Button>


                    <h1 style={{ fontSize: '20px' }}>Sign Up With</h1>
                    <MuseumIcon style={{ color: '#7F909F', margin: '1px 4px' }}></MuseumIcon>
                    <LinkedInIcon style={{ color: '#7F909F', margin: '1px 9px' }} ></LinkedInIcon>
                    <TwitterIcon style={{ color: '#7F909F' }}></TwitterIcon>



                    <Divider>OR</Divider>

                    <h3 style={{ width: '173', height: '28' }}>Create a New Account</h3>
                    <div style={{ width: '320', height: '40' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                            <TextField
                                label="First Nameeee"
                                id="outlined-size-small"
                                defaultValue=" "
                                size="/"
                            />
                            <TextField
                                label="Last name"
                                id="outlined-size-small"
                                defaultValue=" "
                                size=" "
                            />
                        </div>

                    </div>
                    <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField
                            label="Email Address"
                            id="outlined-size-small"
                            defaultValue=" "
                            size="/"
                        />
                        <TextField
                            label="Password"
                            id="outlined-size-small"
                            defaultValue=" "
                            size="/"
                        />
                        <div style={{ display: 'flex', margin: '-10px -13px' }}>
                            <Checkbox />
                            < p style={{ color: 'black', fontSize: '13px', marginTop: '15px' }}>I agree On </p>
                            <span style={{ color: 'red', fontSize: '12px', marginTop: '16px', padding: '0px 4px', fontWeight:'bold' }}>Terms and Services</span>
                        </div>

                        <div style={{height:'76px', width:'488px'}}>
                               

                                </div>

                        <div style={{margin: '0 25px'}}>
                            <Button variant="contained" style={{ fontWeight: 'bold', backgroundColor: 'white', fontSize: '10px', textTransform: 'none',color: 'black' }}>Cancel</Button>
                            <Button variant="contained" style={{ fontWeight: 'bold', backgroundColor: 'red', fontSize: '10px', textTransform: 'none', color: 'white' }}>Sign Up</Button>
                        </div>




                    </Box>








                    {/* <TextField
                label="First Name"
                id="outlined-size-small"
                defaultValue=""
                size="small"
                /> */}

                </Box>
            </Modal>
         
        </React.Fragment>
    );
}

export default function NestedModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleOpen}>Sign in/Sign Out</Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="parent-modal-title"> Lets Get Started! </h2>
                    <p id="parent-modal-description">
                        Already have an Account?
                        <span style={{ color: 'red' }}>Login here</span>
                    </p>

                    <ChildModal />
                </Box>
            </Modal>
            
        </div>
        
    );
}
