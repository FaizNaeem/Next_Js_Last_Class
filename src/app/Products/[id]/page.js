import details from '@/lib/detalis'
import React from 'react'
import './details.css'
export default async function Id({params}) {
    const detail = await details(params.id)
    console.log(detail);
  return (
    <>
        
    <div className="hl">
    <div className="card p-4" style={{width: "20rem;" }}>
      
  <img src={`${detail.image}`}  style={{width:"10rem"}} className="card-img-top p-3" alt="..."/>
       
  <div className="card-body">
    <h5 class="card-title">Title: {detail.title}</h5>
    <p class="card-text"> Price : {detail.price}</p>
    <h5 class="card-title">Age: {}</h5>
    <a href="#" className="bg-green-500 hn"  s>Hello everyOne</a>
  </div>
</div>
 
    </div>
      
  {/* <Users/> */}
    </>
  )
}
