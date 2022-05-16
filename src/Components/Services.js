import './Services.css';
import Navbar from './Navbar.js';
import work1 from '../images/grocery1.jpg'
import work2 from '../images/grocery2.jpg'
import work3 from '../images/grocery3.jpg'



function Services() {
    return (
      <div className="services">  
           <Navbar />
             <div className="veges">
                 <div className="heading">
                      EXPERIENCE PURE SHOPPING POWER
                 </div>
                 <div className="needs">
               Stress not, we will deliver your groceries to your door step.
               Order before 12pm for same day within Nairobi, next day delivery countrywide.
                 </div>

                 <div className="pictures">
                <img className="grocery" src={work1} alt="grocery1"/>
                <img class="grocery" src={work2} alt="grocery2"/>
                 <img class="grocery" src={work3} alt="grocery3"/>
            </div>

            <div className="Every">
                <div className="Explanation">
                WHY US?
            </div>

            <div className="Paragraph">
            We believe that beautifully grown food should be available to everyone. Our heroes are the farmers, cooks and producers who help us find honestly good food. The journey so far has been exciting to say the least; we’ve found artisan producers all over the region, many of whom started by operating out of their kitchens. But most of all, we’ve found a huge amount of passion for authentic ingredients that aren’t mass produced.
            </div>
            
            <div className="Paragraph">
            This platform exists to bring you closer to the producers of your food. At the same time, we provide a platform for small, artisanal producers, to bring their products to market. Some of our producers are very small enterprises. Others are larger. But every single one on this site has been carefully curated for you. We look at quality (which includes ingredients and flavour), environmental impact (which includes how the products are made and packaged), and community impact (which includes things like fair pay, and great conditions for workers).
            </div>
            </div>
             </div>
      </div>
    );
  }
  
  export default Services;