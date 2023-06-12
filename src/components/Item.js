import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
    
      
      <a href="#" class="group">
      <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
      <img src={'./imgs/'+ this.props.item.img} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75"/>
      </div>
      <div class='navbar'>
      <div class="navbar-start">
      <h3 class="font-normal mt-4 text-2xl text-gray-700">{this.props.item.title}</h3>
      
      </div>
      <div class="navbar-end">     
      <h3 class="text-right mt-1 text-xl font-medium text-gray-900">{this.props.item.price} руб</h3>
     
    </div>
    </div>
    <div class='navbar'>
      <div class="navbar-start">
    <p class="">{this.props.item.desc}</p>
    </div>
      <div class="navbar-end">
      <div class="card-actions justify-end">
      <button class="btn btn-circle">
  +
</button>
    </div>
    </div>
    </div>
      
      
      
    </a>
    
   
   
    )
  }
}





export default Item