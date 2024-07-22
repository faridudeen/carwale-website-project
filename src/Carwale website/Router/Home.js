// import React, { useContext } from "react";
// import './Home.scss'
// import { CiSearch } from "react-icons/ci";
// import { SlArrowDown } from "react-icons/sl";
// import { globalstate } from "../Context/Context";
// import { SlArrowRight } from "react-icons/sl";

// export const Home =()=>{
//     const {a,b} =useContext(globalstate)
//     return(
//         <section className="fristSection">
        
//             <div className="banner">
//                 <h1>FIND THE RIGHT CAR</h1>
//                 <div className="bannerSearch">
           

//                 <span className="new">new<span style={{fontSize:"14px",paddingLeft:"8px"}} ><SlArrowDown/> </span></span><span className="searIcon">< CiSearch/></span>  <input type="Search" placeholder="type to select car name"></input>
//              <button>Search</button> 
       
             
//              </div>
            //  <div className="bannerLink">
            //     <h1>e.g<a href="#"> Hyundai Creta N Line</a></h1>
            //     <ul>
            //         <li><a href="#">New Car Discounts </a>|</li>
            //         <li><a href="#">Help Me Find A Car  </a>|</li>
            //         <li><a href="#">Sell My Car </a></li>
            //     </ul>
            //  </div>
//             </div>
//             <div className="container">
//           <div className="cardHeadIlne">
//             <h1>Featured Cars</h1>

//             <div className="carSection">
            
//             {
//                 state.arr.map((v,i)=>{
//                     console.log(v)
//            return(
//                         <div key={i}>
//                             <div className="cardH">
                            
//                                {
//                                v.card.map((val,int)=>{
//                                 console.log(val)
//                                 return (
                                    
//                                     <div className="col-4">
                                              
//                                               <div className="cardStyle">
//                             <div className="ImageCar">
//                             <img src={val.Image} alt="CarImage" style={{width:'380px'}} />
//                             </div>
//                             <h2>{val.CarName}</h2>
//                             <h3>Rs.{val.price} <span style={{color:"#aaaaaa",fontSize:"15px",paddingLeft:'6px'}}>onwards</span></h3>
//                             <h4>{val.ShowRoom}</h4>
//                          <a href="#">Show price my in city</a>
//                          <div>
                     
                         
//                          </div>
//                             </div>
//                                     </div>
//                                 )
        
                                
//                             })
//                         }
                            
                          
                      
//                 </div>
                
//                   </div>
                  
//                   )         
//                 })
//             }
           
//            </div>
//            </div>
          
//         </div>
      
        
//      {/* bands section start
//          */}
//          <div className="container">
//             <div className="brandHeadIlne">
//                 <h1>all brands</h1>

//                 <div className="brandSection">
//                     {
//                         state.arr.map((v,i)=>{
//                             return(
//                                 <div key={i}>
//                                     <div className="bandRow">
                                  
//                                   {
//                                       v.bands.map((val,ind)=>{
//                                         return(
//                                             <div className="col-2">
//                                         <div className="bandsCss">
                                          
//                                             <img src={val.Img} alt="brandImage" style={{width:'60%'}}></img>
//                                             <h2>{val.Name}</h2>
                                            
//                                             </div>
//                                             </div>)
//                                     })
//                                   }
//                                     </div>
                                 
//                                 </div>
//                             )
                               

                            
//                         })
//                     }
//                 </div>
                
//             </div>


//          </div>

//          {/* bansd section over */}

//          {/* cars price choice section */}
//          <div>
//             <div className="container">
//                 <div className="carsChoice">
//                     <h1> find the cars of your choice</h1>
//                     <div>
//                       {
//                         state.arr.map((v,i)=>{
//                             return(
//                                 <div key={i}>
//                                     <div className="priceRow">
//                                     {
//                                         v.choice.map((val,ind)=>{
//                                             return(
//                                                 <div className="col-2">
//                                                 <div className="priceSytle">
//                                                    <h2>{val.price}</h2>
//                                                 </div>
//                                                 </div>
//                                             )
//                                         })
//                                     }
//                                     </div>

//                                 </div>
//                             )

//                         })
//                       }
//                     </div>

//                 </div>

//             </div>
//          </div>
//         </section>
        
//     )
// }