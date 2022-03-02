import React from 'react'
import './jobdetails.css'
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TwitterIcon from '@mui/icons-material/Twitter';
import Jobscards from "../JobDetails/jobscards"
// import Footer from "../footer/footer"



const jobsdetails = () => {
  return (
    <div style={{paddingTop:'38px'}}>
    <div className='main-container'>
    <div className='hide1'>
      <p style={{width:'153px', height:'28px', fontSize:'18px',fontWeight:'bold' }}>Request Network</p>
      <p style={{float:'right',marginTop: '-41px',padding: '0px 53px',fontWeight:'bold'}}>REP:</p>
      <span style={{color:'red', float:'right', marginTop: '-42px',padding: '0px 23px', fontWeight:'bold'}}>491</span>

      <p>Feb 28, 2018</p>

      <h1>Full Stack Engineer (remote) at request<br></br> Network (REQ) </h1>

      <p style={{fontSize: '19px', fontWeight: 'bold'}}>Budget</p>
      <Chip label="$10,000.00" color="error" />

      <div className='catagery1'>
      <p style={{margin: '-73px 347px', fontSize:'20px', fontWeight:'bold'}}>Category</p>
      <p style={{margin: '86px 317px'}}>Blockchain $ Crypto</p>
      </div>


      <div className='paymentmethods'>
        <h1 style={{fontSize: '21px'}}>Payment Method</h1>
        <p style={{fontSize: '11px', fontWeight: 'bold'}}>ETHEREUM Blockchain</p>
        <Chip label="ETH" size="small" />
        <Chip label="DAI" size="small" />
        <Chip label="USDT" size="small" />
        <Chip label="USDC" size="small" />
        <Chip label="AUDT" size="small" />
        <Chip label="WBTC" size="small" />
        <Chip label="TIME" size="small" />

      </div>

      <div className='paymentmethods'>
        <h1 style={{fontSize: '21px'}}>Payment Method</h1>
        <p style={{fontSize: '11px', fontWeight: 'bold'}}>BINANCE SMART CHAIN</p>
        <Chip label="BNB" size="small" />
        <Chip label="BUSD" size="small" />
        <Chip label="DAI" size="small" />
        <Chip label="USDC" size="small" />
        <Chip label="BTCB" size="small" />
        <Chip label="WBTC" size="small" />
        <Chip label="TIME" size="small" />

      </div>

      <h2>Description</h2>
      <h2 style={{fontSize:'15px'}}>Work Your Resposibilities</h2>
      
      <p style={{fontSize: '11px'}}>Participate in the Request Invoicing development to allow freelancer workers to get paid in crypto</p>
      <p style={{fontSize: '11px'}}>Keep yourself up-to-date with our stack: Typescript, Node, React, Mongo, Kubernetes, Docker, NPM, Circle CI.</p>
      <p style={{fontSize: '11px'}}>Participate in the continuous improvement of the Request Network library, make it easy to pay and get paid on Ethereum and other<br></br> public blockchains with open-source packages: request-client.js, payment-processor, payment-detection, etc.</p>
      <p style={{fontSize: '11px'}}>Propose functional and design improvements, challenge the infrastructure, the development & release process.</p>
      <p style={{fontSize: '11px'}}>Design and implement integrations with partners (Invoicing REST API, payment detection on other blockchains, accounting software, etc.)</p>
      <p style={{fontSize: '11px'}}>Optionally gain knowledge and responsibility for our decentralized framework: ethers.js, IPFS, Solidity, Infura.</p>



      <h1 style={{fontSize:'15px'}}>Qualifications</h1>
      <p style={{fontSize: '11px'}}>Solid knowledge of computer science fundamentals: algorithms, data structures, databases, distributed systems, operating systems, networking</p>
      <p style={{fontSize: '11px'}}>Strong interest in blockchain technology, and the future of payments</p>
      <p style={{fontSize: '11px'}}>Strong knowledge of Typescript and Node.js</p>
      <p style={{fontSize: '11px'}}>Used to open-source development</p>
      <p style={{fontSize: '11px'}}>Understanding of API design (REST, RPC)</p>
      <p style={{fontSize: '11px'}}>Good understanding of git and continuous integration tools</p>
      <p style={{fontSize: '11px'}}>Self-motivated, innovative, and proactive</p>
      <p style={{fontSize: '11px'}}>Ability to take responsibility for projects and the willingness to learn and grow professionally in a team environment</p>
      <p style={{fontSize: '11px'}}>Willingness to improve by giving and asking for feedback</p>
      <p style={{fontSize: '11px'}}>Team spirit above personal results</p>
    </div>
    </div>
    <div className='dheetpan'>
      <div className='textside1'>
      <h1 style={{fontSize: '16px',
    margin: '17px 38px'}}>Network Request</h1>
    <p style={{margin: '-15px 37px'}}>REP:</p>
    <p style={{margin: '-21px 71px', color:'red'}}>491</p>

    <p style={{margin: '48px 39px', fontSize: '11px', fontWeight: 'bold'}}>FINISHED JOBS</p>
    <p style={{margin: '-38px 38px'}}>16</p>

    <p style={{margin: '-8px 10px', fontSize: '11px', fontWeight: 'bold', float:'right'}}>FINISHED JOBS</p>
    <p style={{margin: '15px 199px'}}>16</p>


    <Button style={{margin: '19px 23px', borderColor: 'gainsboro', color: 'white', padding: '13px 70px', textTransform: 'none', fontSize:'9px',  }} variant="outlined">Send Massage</Button>
      </div>
      <Divider variant="middle" />


      <div className='stack1'>
        <h1 style={{fontSize: '20px', padding: '14px'}}>Full Stack Engineer (remote) at request<br></br> Network (REQ) </h1>
        <Chip style={{margin:'-15px 16px'}} label="$10,000..00" color="error" />

        <Button style={{margin: '19px 23px', borderColor: 'gainsboro', color: 'white', padding: '13px 70px', textTransform: 'none', fontSize:'6px',backgroundColor: 'red', fontWeight:'bold'  }} variant="outlined">Apply As A Freelancer</Button>
        <p style={{fontWeight:'bold', margin:'-15px 48px'}}> Post a Gig Like This </p>

        <Divider variant="middle" style={{margin:'20px'}} />
      


      </div>
      <div className='stack2'>
        <p style={{margin: '-14px 26px'}}>Share This Gigs</p>
        <div style={{float: 'right', margin: '-6px 33px'}}>
        <TwitterIcon></TwitterIcon>
       <TwitterIcon></TwitterIcon>
       <TwitterIcon></TwitterIcon>
        </div>
      </div>  
    </div>
    <div className='morehide' style={{color: 'Black',
    margin: '17px 40px', fontWeight:'bold', fontSize:'30px'}}>
      <p>More Jobs For Request Network</p>

      
    </div>
    <div style={{display:'flex'}}>
   <Jobscards />
   <Jobscards />
   </div>
   <div>
     <p style={{margin: '40px', fontSize: '24px', fontWeight: 'bold'}}>More Jobs In Blockchain and Crypto</p>
     
     <div style={{float: 'right',
    margin: '-69px -525px'}}><Button variant="contained" disableElevation style={{backgroundColor:'lightgray', color:'black'}}>
  See More Gigs ></Button></div>
     <div className='cardsdata' style={{display:'flex', height:'288px', width: '264px'}}>
     <Jobscards />
     <Jobscards />
     <Jobscards />
     <Jobscards />
     </div>
   </div>
    </div>
    
    
   
  )
}

export default jobsdetails
