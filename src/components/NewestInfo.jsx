import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewestInfo = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };
  return (
    <Slider {...settings} className="slider py-2">
      <div className="text-center">
        <span>Join our club & get 15% off*</span>
      </div>
      <div className="text-center">
        <span>20% off (almost) everything, excluding gifts.</span>
      </div>
      <div className="text-center">
        <span>Free delivery on orders over $35</span>
      </div>
    </Slider>
  );
};

export default NewestInfo;
