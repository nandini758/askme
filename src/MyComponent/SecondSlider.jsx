
import Slider from "react-slick";
import './SecondSlider.css'
function SecondSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <>
    <div className="contain">
        <h3>Training</h3>
        <h1>Providing training programs with insightful skills to
        build strategic IAM solutions</h1>
        </div>
    <div className="sliders-container">
    
      <Slider {...settings}>
        <div>
          <div className="img">
            <img src="https://firebasestorage.googleapis.com/v0/b/askmeidentity-website.appspot.com/o/website_data%2Fdownloadca.png?alt=media&token=b011412c-b956-4de8-aa56-266f8af43322" alt="" />
         <h2>CyberArk</h2>
         <p>Sumit K Tiwari</p>
         <p>4 ⭐⭐⭐⭐</p>
          </div>
        </div>
        <div>
          <div className="img">
            <img src="https://www.turing.com/blog/wp-content/uploads/2022/08/6-Best-DevOps-Practices-to-Know-scaled.jpg" alt="" />
         <h2>DevOps for Okta</h2>
         <p>Sumit K Tiwari</p>
         <p>4 ⭐⭐⭐⭐</p>
          </div>
        </div>
        <div>
          <div className="img">
            <img src="https://firebasestorage.googleapis.com/v0/b/askmeidentity-website.appspot.com/o/website_data%2FPing.png?alt=media&token=fa43c7fd-7fdc-4759-9678-6c319e0b5dbd" alt="" />
         <h2>Ping Identity Consultant</h2>
         <p>Sumit K Tiwari</p>
         <p>4 ⭐⭐⭐⭐</p>
          </div>
        </div>
        <div>
          <div className="img">
            <img src="https://firebasestorage.googleapis.com/v0/b/askmeidentity-website.appspot.com/o/website_data%2FWebsite-Vendor-Certification-logos-1024-x-683px-6.webp?alt=media&token=3c12e67e-6212-4896-b0aa-5bbafc3275e1&_gl=1*we9x6h*_ga*ODk0MDU3ODI4LjE2NTQ2MDc2NTg.*_ga_CW55HF8NVT*MTY5Nzc4Mjc0OS40OTYuMS4xNjk3Nzg0NDQ0LjUyLjAuMA.." alt="" />
         <h2>Forgerock Administrator essentials</h2>
         <p>Askmeidentity</p>
         <p>4 ⭐⭐⭐⭐</p>
          </div>
        </div>
        <div>
          <div className="img">
            <img src="https://firebasestorage.googleapis.com/v0/b/askmeidentity-website.appspot.com/o/website_data%2FOkta.png?alt=media&token=9debd8af-6ac6-4077-8eee-8f4737676e69" alt="" />
         <h2>Okta Administrator Essentials</h2>
         <p>Sumit K Tiwari</p>
         <p>4 ⭐⭐⭐⭐</p>
          </div>
        </div>
      </Slider>
    </div>
    </>
  );
}

export default SecondSlider;
