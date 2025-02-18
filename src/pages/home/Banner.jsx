import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic1 from '../../assets/camp images/medical camp-1.jpg';
import pic2 from '../../assets/camp images/medical camp-2.jpg';
import pic3 from '../../assets/camp images/medical camp -3.jpg';
import pic4 from '../../assets/camp images/camp-4.jpg';
import pic5 from '../../assets/camp images/medical camp -5.jpg';
import pic6 from '../../assets/camp images/medical-camp-6.jpg';


const Banner = () => {
    return (
        <div className="my-5">
            <Carousel >
        <div>
            <img src={pic1}/>
            
        </div>
        <div>
            <img src={pic2}/>
           
        </div>
        <div>
            <img src={pic3} />
            
        </div>
        <div>
            <img src={pic4} />
            
        </div>
        <div>
            <img src={pic5} />
            
        </div>
        <div>
            <img src={pic6} />
            
        </div>
    </Carousel>
        </div>
    );
};

export default Banner;