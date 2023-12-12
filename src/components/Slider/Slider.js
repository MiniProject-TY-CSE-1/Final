import React from 'react'
import "./Slider.css"
const Slider = () => {
  return (

     <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="https://tse2.mm.bing.net/th?id=OIP.N6hEEnHyVmT1YHfuKj-k6QHaE8&pid=Api&P=0&h=180" class="d-block w-100" alt="..." height={300} width={100}/>
    </div>
    <div class="carousel-item">
    <img src="http://res.cloudinary.com/sagacity/image/upload/c_crop,h_681,w_1000,x_0,y_0/c_limit,w_1080/v1441296572/shutterstock_219438958_dj5jit.jpg" class="d-block w-100" alt="..." height={300} width={100}/>
    </div>
    <div class="carousel-item">
    <img src="https://stylesatlife.com/wp-content/uploads/2021/06/Yoga-Asanas-That-Every-Beginner-Should-Know.jpg" class="d-block w-100" alt="..." height={300} width={100}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  )
}

export default Slider