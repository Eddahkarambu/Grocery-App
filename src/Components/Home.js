import './Home.css';
import Navbar from './Navbar.js';
import { useNavigate } from "react-router-dom";


function Home() {
    return (
      <div className="home">
           <Navbar />
            <div className="Heading">
              <div className='delivery'>
                  <div className='delivery1'>
                    <h2>We deliver faster at your door step,</h2>
                </div>
                <div className='delivery2'>
                    <h2>We are a trusted grocery shop where you can buy your necessary prducts by just  using your phone. </h2>
                </div>
          </div> 
          </div>
 
      </div>
    );
  }
  
  export default Home;