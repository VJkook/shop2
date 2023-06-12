import React, { Component } from 'react'
import Item from './Item'


export  class Itemss extends Component {
  
  render() {
    return (
    
      <div class="bg-white">
        
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

  {/* <div class="carousel w-full z-10 ">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="/imgs/presKitchen.jpg" class="w-full z-0 " />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="/imgs/presKitchen.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="/imgs/presKitchen.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  
</div> */}

<div class="w-full carousel rounded-box">
  <div class="carousel-item w-full">
    <img src="/imgs/presKitchen.jpg" class="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div class="carousel-item w-full">
    <img src="/imgs/presKitchen.jpg" class="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div class="carousel-item w-full">
    <img src="/imgs/presKitchen.jpg" class="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  
</div>



<div class="navbar bg-base-100 py-16">
  <div class="flex-1">
    <a class=" text-xl">Кухня</a>
  </div>
  <div class="flex-none gap-2">
    <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
    </div>
   
  </div>
</div>

    <h2 class="sr-only">Products</h2>
    <div class=' grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8'>
  
        {this.props.items.map(el=>(
           <Item key={el.id} item={el}/>
        ))}
       
      </div>
      </div>
     </div>
        
      
    )
  }
}
export default Itemss