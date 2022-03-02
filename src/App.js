// import { margin } from '@mui/system';
// import './App.css';
import Header from './header/header'
// import Home from './'
import Jobs from './JobDetails/jobsdetails'
import Gigs from './gigs/cards'

// import Jobsdetails from './JobDetails/jobsdetails'
// import Freelancers from './Freelancers/lancers'

import Home from './Home'
// import Crypto  from './crypto/crypto'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Home from './gigs/gigs'


function App() {
  return (

      <BrowserRouter>
    <Routes> 
       <Route path="/" element={<Header />}>  
       <Route index element={<Home />}/>  
         <Route path="gigs" element={<Gigs />}/>
         <Route path="jobs" element={<Jobs />}/> 
         {/* <Route path="freelancers" element={<Freelancers />}/> */}
        
         {/* <Route path="dashboard" element={<Dashboard />}/> */}
         </Route>
        
     </Routes>
    
  
   
 </BrowserRouter>


     
    


    // </div>

  );
}

export default App;
