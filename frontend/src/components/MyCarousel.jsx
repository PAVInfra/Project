import React ,{useState,useEffect}from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/css/MyCarousel.css'; // Import the custom CSS for the carousel
import { getServices } from '../Services/services';
const MyCarousel = () => {

 const [services, setServices] = useState([]);
  useEffect(() => {
    getServices().then((data)=>{
    setServices(data);
    })
  }, []);


    return (
        <Carousel showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={3000}
        transitionTime={500}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button type="button" onClick={onClickHandler} title={label} className="control-arrow control-prev">
              &#10094;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button type="button" onClick={onClickHandler} title={label} className="control-arrow control-next">
              &#10095;
            </button>
          )
        }
  >
            {services.map((s)=>(<div >
                <img src="https://wbsconstruction.com/wp-content/uploads/2018/10/contract-workers-banner.jpg" alt="Slide 1" className="carousel-image" />
                <h2 className="text-overlay">{s.name}</h2>
            </div>))}
           
        </Carousel>
    );
}

export default MyCarousel;
