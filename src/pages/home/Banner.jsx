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
        <div className="mb-10 mt-20 w-full ">
          <Carousel
  autoPlay={true}
  infiniteLoop={true}
  interval={3000}          // 3 seconds between slides
  transitionTime={600}     // Slide transition speed
  showThumbs={false}       // Hide thumbnail previews
  showStatus={false}       // Hide status indicator (1/6, etc.)
  showArrows={true}        // Show left/right arrows
>
  <div className="h-[630px]">
    <img src={pic1} className="w-full h-full object-cover" alt="Medical Camp 1" />
  </div>
  <div className="h-[630px]">
    <img src={pic2} className="w-full h-full object-cover" alt="Medical Camp 2" />
  </div>
  <div className="h-[630px]">
    <img src={pic3} className="w-full h-full object-cover" alt="Medical Camp 3" />
  </div>
  <div className="h-[630px]">
    <img src={pic4} className="w-full h-full object-cover" alt="Medical Camp 4" />
  </div>
  <div className="h-[630px]">
    <img src={pic5} className="w-full h-full object-cover" alt="Medical Camp 5" />
  </div>
  <div className="h-[630px]">
    <img src={pic6} className="w-full h-full object-cover" alt="Medical Camp 6" />
  </div>
</Carousel>

        </div>
    );
};

export default Banner;