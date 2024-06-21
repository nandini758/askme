import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './SimpleSlider.css'
function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true
  };
  return (
    <>
    <div className="simple">
      <h1 className="h1">Unlocking Success with Askmedietity</h1>
      <p className="p1">A Journey Through Our Exceptional Case Studies Showcasing Innovative Solutions and Transformative Impact</p>
    </div>
    <div className="slider-container">
      
      <Slider {...settings}>
        <div className="slider-container2">
            <div className="elip_image">
                <img src="Ellipse-4.png" alt="" />
            </div>
            <div className="details">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABzElEQVR4nO2Wvy8EQRTHV0RIVEJCFPfm4uIPoFGpUSm8h4tEJzqtkvgTNP4FCrHzNhKJRFQaPRIVUSnJiYiszO6dHLdhf836ce+TbPX25jPfmTdz6ziCIAifIV0aI4ZN1OqEWF2gVo/Eynf+hMd3OpDLc8RwaQaLenKZvU0PuqUysjp7H0zDC2nloYZ1YpjJK4hVD3lqEhnu64PUkGEDPRj68E4OQax6yFOTxPBsfowaTs2KRb6XMYhVDwbb3Fgh2J06rHRHTQAZdrIEsevxzYELexVZHeOe09lcrnqlPmQ4yHwIbXswuDWCwe8W9ehAc235BHreD6SGW9RQNcLEIax7fKejcfWhhtVWOWyFNXW94JYH0wQoxEPBn5BZJbhZOR/vaq7N7g/3o1ZPyOqVXJhIHaIIDzFs1rdz+3MNWa3V5TpDhmI8GH4O+PMaplsFoAOBC4upBUV5UMNVOMhIJUJwE9ai7/lf5SGGBzPI0tFgb2tN1UzN3CipBUV56Iu7Os+PQ+seaqcglOD5MQ+1Q5AkZAmSBAkSF9mRhJCckZhIayWEpLViIq2VEJLWiom0VkJIWism0lp5txbl9Hw3AWse+i9BBEEQBKGdeQNSGvR4g8uUEAAAAABJRU5ErkJggg==" alt="" />
          <p>Successfully delivered Workday HR integration with Okta. Automated User onboarding process starting right at source. Advanced Lifecycle management for both way user synchronisation and provisioning.</p>
          <h2>Mark Robinson</h2>
          <h2>CEO, TRUE LOGIC CONSULTAING  (USA)</h2>
          </div>
        </div>
        <div className="slider-container2">
        
            <div className="elip_image">
                <img src="photo1.png" alt="" />
            </div>
            <div className="details">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABzElEQVR4nO2Wvy8EQRTHV0RIVEJCFPfm4uIPoFGpUSm8h4tEJzqtkvgTNP4FCrHzNhKJRFQaPRIVUSnJiYiszO6dHLdhf836ce+TbPX25jPfmTdz6ziCIAifIV0aI4ZN1OqEWF2gVo/Eynf+hMd3OpDLc8RwaQaLenKZvU0PuqUysjp7H0zDC2nloYZ1YpjJK4hVD3lqEhnu64PUkGEDPRj68E4OQax6yFOTxPBsfowaTs2KRb6XMYhVDwbb3Fgh2J06rHRHTQAZdrIEsevxzYELexVZHeOe09lcrnqlPmQ4yHwIbXswuDWCwe8W9ehAc235BHreD6SGW9RQNcLEIax7fKejcfWhhtVWOWyFNXW94JYH0wQoxEPBn5BZJbhZOR/vaq7N7g/3o1ZPyOqVXJhIHaIIDzFs1rdz+3MNWa3V5TpDhmI8GH4O+PMaplsFoAOBC4upBUV5UMNVOMhIJUJwE9ai7/lf5SGGBzPI0tFgb2tN1UzN3CipBUV56Iu7Os+PQ+seaqcglOD5MQ+1Q5AkZAmSBAkSF9mRhJCckZhIayWEpLViIq2VEJLWiom0VkJIWism0lp5txbl9Hw3AWse+i9BBEEQBKGdeQNSGvR4g8uUEAAAAABJRU5ErkJggg==" alt="" />
         <p>Before we used the services provided by AMI, we've always had problems in setting the network ourselves and keeping them stable even for just a month. Now, after we cooperated with AMI those problems seem so far away</p>
          <h2>Mark Robinson</h2>
          <h2>Director, Panzer Technologies (USA)</h2>
        </div>
        </div>
        <div className="slider-container2">
        
            <div className="elip_image">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKPklEQVR4nO1caXAUxxXuSsWpxJVKqnJVDuesSvIrv/wnP1JFKobpRZCAicEBgsuObWzsgOMEBzs2rB2wuoUQIMACCYwkJA5jQFxasDmNUPfqQBc6WQFCEuKQkNCJ0PVSr2d6kYgAIe3szkp8Va8YLTPT3d90v9fv9esm5BEeYUxj8orc71AuZhhcrKZMfE65OG9w2Wgw2UOZaLP+FpTJta5IGTE9RnyNjHW43fAlFxNPG0weplx2Uy5hqGJweZ0y8dZkd+7jZCyCcu8kg8lyTcjEKC+8nFgK7x+ogbjTjZCa1w5ppV2Q7uuF/eU98EnRLdjovQnu/dUwJ77oDplMlE7k4jdkrGA8z/2mwcR2TcCMtfkQebgO9pR2gaeyb8iSIG/CrPWFZm9kssXFvb8lox0Tor0/N7iowEZPXpGtiDvg630o4vrL/ooeeGObz+qJ8kZEdOZPyWjFUyz7F5TJy9jYv24ogu2Ft4ZN3ADx9cFrWyr0kD5ERiOMGPEtysQ5bORLm0tgX3l3YMizBIf/n2JyLOMi2imXPspkEmXeKWioSLjDYGI3Nu65hLOwN8DkaflP2qXBrTUTxS4uf0fCFRO49xlsyJSYHGVJ7SCvv+yr6IGUvHZYduiyMlCWpe4yuJxHwg1Pxuc+Rpm4gI2IPnrVdvLuFjRQi/dVg8sksQ8/JgknGFFiNpI3e32hUvbBJlALWnutH13c+wQJF1AuT2PFY45dCxl5Wv6ees7SiyKehAOMpdk/xmGD8z30JGwdqhUPfv+2gg5wca/Sh64PT32XOB0Gly/gF389tcJW8vDjzIwrgDd3VD7Qm3k1uczshZGZM4nTQZlIwMpGHqqzlUAkTk9ZnlmTB5uzW+5574eHLmtdmEicDoOLDKwsBgDsIC69sg/e3l2lCJkSkwULks+q60krsuCjjMZBn0FyLbcvizgdBpe1WNlPijoDTl5aWZfffZscnQVZlU3Q09sHsYcvmCRGZw364XAeas0LLxCng3LZipUNpOeBvQ4t+rTYM+aQXZ0DeRdvQn+s+9wkcerKHNhZ3Pl/+tIisI04HQZGkrlU8byREofGAfUXGgut7/6ZWgxXb3bC3ejrA3hvp2ksML54t7W2nr9FnA6Di2asbFrZg3vg7pLbkJTTqmJ86zJuwIqj12Bpei0s3HkBZsUVmJ6EJc+tz4NjJfXQB/dGU3sXzFiTq+7/KOOGv5ydZzu1EakjTofBZBVWdsdgYStfn1L087eeg2mxZkPvJ2gkFn9aBtLXCL3YxYaAtJwr6tk5G4r85SblturlgCLidBhcZmNlP85qHkBean47PL+xeABB02Nz4MWEAngzpRjcu8ohJr0SNp24BHty6qCktgW6e4dGWn909fTCX9aaH2fLmTZV9srj17UO/JQ4HRTjcVzC8iN3ggjYEFTueijuzb0C15tvg12IPXxelYXrLFj+u3vNkJfBhZs4HZSJt7Cyi3ZdVJU/6Ov1GwHsZR23e8Bu4JDH8v62qUTVAf/Fvycw8UfidFAmf690ULypg3D6oRoTnw+3unohGKhu6FBlop7F6dTE5V78u9vl9n6DOB3j3Ce+itMFdOBxefK1FHPii8M2WMBejmVGLDe9E8sLySThAsMyJGtONig/Fa9rbnRAMKENlXb7DCbXk3AAZWI8ZV6VbYBLj+ij4nUwdN9gBGr9azDRNYF5/0CcDsqFV1der5ihBBv9p0sRpg7EeaAgTofBZIdypzaZ2QNOIHDJHp8/tE+cDspkE1Y24YvLjiFw15l63QMbSbish+w6U69CTqEmcNrqHEgraNB68BRxOigX72Bl/5FaCu/t9oWcwMgDF+CNlFJtiRcRpyNiedb3tR5MyqwLOYFJmVfuLG2Gw6ISAn1ONXxWhd4KP32nDotJuGCc+8SXKRfH+ivyziC5cf09EVeUP6v1CNaJhBMmu3Mfp0ymagIHiyLbhbomM4BKucChmxLWedWUi0JsTFF1c9AILLzUrHt+AQl3UC7XYGO2ZtYGjcCUjBodQFhFwh2UeadgY/6VWhw0AnHhKWzifw8CxuDMZHAJF6+3207e+WvtetrSPM594utkNIAyuQobtSK90nYCow5Yfi8TMWS0gDL5M4OL2zitOFvTYht5aKiwpxtMdo7nGT8howkGE0tUaD8hH9o6Ax8bxHe+EG+m9hpcvktGG56Mz33M4DIPG7hwawnc7g7cxBrfhUbK8nfPhN2k+aGSL7moxoa+s6MUWm51j5i85o5uWLTdHyyowjLIaAaNOv1rg4kreo0YF9CHi+KaFpgTl+dP2xgfJX9JxgImLRM/0i4eKv1le89BVf3QF51wOrQ0rWJA7sz4qNM/JGMJtF/+i76et7kQdshaaB1kaONv+H94j75/6sps/zUZa6BWwxvbuiDuyEWVJ6N/w2F5srQB2jt7lHU9UdrgH6o6p2b90Yvq2TFPoAYmEmHG6XwrZXcwwf/De/onHT0i8C509/TBwbyrKmMLhzcKXuNvg2VrjQkCIzDMz8Usg4lYysVnaldlgCLV/XqoD9+tyojMnIllknDGU5FZ36ZcLqBM5NxrSKJgPt9wgc/e792YYmIwMR/rQsIFLu59Ak/gsPbvqobgrqVXksvgv+k1KvV2W34HzI4zrWnyqephE4jP6j15W/Pb1bs/OFgDrySVDVhSVad/MLkKp0/E4a7a2+ZRJeb8bm5iGcR+0TDolizcjkCjzHWL4yX1D00ePqPWPKJwT8rAbFidWB57sh7mJpbemS+ax6j8G+tKnOZdUC4K9BfHlLYUK732frLUY2YvYAMTjlcNKX8Q79l4vMpPCmbxP6gcrMu8LeX9eqTMnxiZ9SviBBhM/lnvDZmxNk9l3D/sllQ8+kTv/9hwtEpNVa41d6qVPBS89lY2qrkf3oP34jPss4fbThYvmmD6Wsv1Y7IVz64JKXk0Uryq94VgKttwz0RIzG6BFz8203CHInhvYk7rsMraW9atdglYJPYYzDs3ZORRa/i9f7BG7SYa6cYa3I6AB+xgTvOz6/KVIUDBa/xtyf5qdc9Iy8G6YgK6VgNBJxGHLX49F+aeHLZ3V6adgjtKrQh2jxGVOTWIBsPUeR8cNLcRhLNgT7SGc4vt4bDp7uKvaGu7YJsvIMM21IJt8OtELvNsneKoeR5a2zV5Shl7HEBAIATbopPhDe5daF8Q1Jokxwt7NlN7QigbMpu0lW+ly3J/EHAC1QGJOEneYu9ZCJ4QyrzkcnvWlNEZN89ekUPyMDxhKtg267CetoAGIFRUhUvlpIe6kR6bBX1n093LfD1wBFohKdx5FOoGemwWDEAE9IAKVKj6IJ2hHHTjCXPB8xVUKAzP3IrO/N6ICcRIshq+yaN/+HoswTCcMiaR8tmRE6jC8Oh11Ia8YZ4gCfr2AUvQtNYwIO4eh9p4RqHgARhWANYTCALP48vweOJQN8wTJMHzHfRC1cgJZPLGUON0dJSJwUT9iAnExMixS6DsHDGBj/AIxE78DxW2IaAtH4N3AAAAAElFTkSuQmCC" alt="" />
            </div>
            <div className="details">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABzElEQVR4nO2Wvy8EQRTHV0RIVEJCFPfm4uIPoFGpUSm8h4tEJzqtkvgTNP4FCrHzNhKJRFQaPRIVUSnJiYiszO6dHLdhf836ce+TbPX25jPfmTdz6ziCIAifIV0aI4ZN1OqEWF2gVo/Eynf+hMd3OpDLc8RwaQaLenKZvU0PuqUysjp7H0zDC2nloYZ1YpjJK4hVD3lqEhnu64PUkGEDPRj68E4OQax6yFOTxPBsfowaTs2KRb6XMYhVDwbb3Fgh2J06rHRHTQAZdrIEsevxzYELexVZHeOe09lcrnqlPmQ4yHwIbXswuDWCwe8W9ehAc235BHreD6SGW9RQNcLEIax7fKejcfWhhtVWOWyFNXW94JYH0wQoxEPBn5BZJbhZOR/vaq7N7g/3o1ZPyOqVXJhIHaIIDzFs1rdz+3MNWa3V5TpDhmI8GH4O+PMaplsFoAOBC4upBUV5UMNVOMhIJUJwE9ai7/lf5SGGBzPI0tFgb2tN1UzN3CipBUV56Iu7Os+PQ+seaqcglOD5MQ+1Q5AkZAmSBAkSF9mRhJCckZhIayWEpLViIq2VEJLWiom0VkJIWism0lp5txbl9Hw3AWse+i9BBEEQBKGdeQNSGvR4g8uUEAAAAABJRU5ErkJggg==" alt="" />
          <p>Created business automation using Okta Workflows. Helped customers in their CIAM solution in registration, authentication and progressive profiling. Orchestrated Okta events to various 3rd party systems and APIs.</p>
          <h2>Mark Robinson</h2>
          <h2>CEO IDENTITY HUB SOLUTIONS  (USA)</h2>
        </div>
        </div>
        <div className="slider-container2">
        
            <div className="elip_image">
                <img src="photo2.png" alt="" />
            </div>
            <div className="details">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABzElEQVR4nO2Wvy8EQRTHV0RIVEJCFPfm4uIPoFGpUSm8h4tEJzqtkvgTNP4FCrHzNhKJRFQaPRIVUSnJiYiszO6dHLdhf836ce+TbPX25jPfmTdz6ziCIAifIV0aI4ZN1OqEWF2gVo/Eynf+hMd3OpDLc8RwaQaLenKZvU0PuqUysjp7H0zDC2nloYZ1YpjJK4hVD3lqEhnu64PUkGEDPRj68E4OQax6yFOTxPBsfowaTs2KRb6XMYhVDwbb3Fgh2J06rHRHTQAZdrIEsevxzYELexVZHeOe09lcrnqlPmQ4yHwIbXswuDWCwe8W9ehAc235BHreD6SGW9RQNcLEIax7fKejcfWhhtVWOWyFNXW94JYH0wQoxEPBn5BZJbhZOR/vaq7N7g/3o1ZPyOqVXJhIHaIIDzFs1rdz+3MNWa3V5TpDhmI8GH4O+PMaplsFoAOBC4upBUV5UMNVOMhIJUJwE9ai7/lf5SGGBzPI0tFgb2tN1UzN3CipBUV56Iu7Os+PQ+seaqcglOD5MQ+1Q5AkZAmSBAkSF9mRhJCckZhIayWEpLViIq2VEJLWiom0VkJIWism0lp5txbl9Hw3AWse+i9BBEEQBKGdeQNSGvR4g8uUEAAAAABJRU5ErkJggg==" alt="" />
          <p>The increasing use of digital service pushed us to look for trusted network vendors that can provide reliable services with friendly prices. After using the services of Askmeldentity, we were able to impliment our IAM solutions on time.</p>
          <h2>Mark Robinson</h2>
          <h2>CEO of Informatica  (USA)</h2>
        </div>
        </div>


      </Slider>
    </div>
    </>
  );
}

export default SimpleSlider;
