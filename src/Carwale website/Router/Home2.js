import React, { useEffect,useContext, useState } from 'react';


import './style.scss';
//import { FaSistrix } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { globalstate } from '../Context/Context';


export const Home2 =()=>{
    const {a,b} =useContext(globalstate)
    const [c,setC]=useState([])

    const nav=useNavigate()
    // const brandView = () => {
    //  let x = a.arr.map((e, i) => { return { ...e, isView: !e.isView } })
    //    console.log(x)
    //     b({type:"update",payload:x})
    // }

   

    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: (
            <div>
              <div className="next-slick-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
              </div>
            </div>
          ),
      
          prevArrow: (
            <div>
              <div className="next-slick-arrow rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
              </div>
            </div>
          )
    };
    const cardetail=(ind)=>{
        nav(`/cardet?id=${ind}`)
    }
    const feature=(index,ename,e)=>{
        // e.preventDefault();
        console.log(index,ename);
        let x=a.arr.map((e,i)=>{return {...e,feature:e.feature.map((ee,ii)=>{return index===ii?{...ee,isfea:true}:{...ee,isfea:false}})}})
        // console.log(x)
        let y=a.arr.map((e,i)=>{return e.carousel.filter((el)=>{return el.tname===ename})});
        console.log(y)
        setC(y)
        b({type:"update",payload:x})
    }
    const brandDetail=(b)=>{
        nav(`/brand?name=${b}`)
    }
    useEffect((e)=>{
        // e.preventDefault()
        let x=a.arr.map((e)=>{return e.carousel.filter((el)=>{return el.tname==="TRENDING"})});
        console.log(x.map((e)=>{return e.map((el)=>{return el.carName})}))
        setC(x)
    },[setC])
    const comparePage=()=>{
        nav('/cpr')
    }
    return (
        <>
        
            <div className='ban-sec'>
                <div className='container'>
                    <div className='ban-row'>
                        <h2 style={{ color: "#fff", padding: "20px 0" }}>FIND THE RIGHT CAR</h2>
                        <div className='ban-search'>
                            <div>
                              
                                <form>
                                <span className="new">new<span style={{fontSize:"12px",paddingLeft:"8px"}} ><SlArrowDown/> </span></span><span className="searIcon">< CiSearch/></span><input type='text' placeholder="Type to select car name" />

                 

                             <div className='search-btn'>
                                <button type='submit'>Search</button>
                            </div>
                           </form>
                            </div>

             
                            
                            {/* <div>
                                Choose your Budget
                            </div> */}
                            {/* <div className='search-btn'>
                                <button>Search</button>
                            </div> */}
                            
                        </div>
                        <div className="bannerLink">
                <h1>e.g<a href="#"> Hyundai Creta N Line</a></h1>
                <ul>
                    <li><a href="#">New Car Discounts </a>|</li>
                    <li><a href="#">Help Me Find A Car  </a>|</li>
                    <li><a href="#">Sell My Car </a></li>
                </ul>
             </div>
                    </div>
                </div>
                {/* <h1>{a.arr}</h1> */}
            </div>
           {/* // <p onClick={nav()}>about</p> */}
            <div className='carousal-sec'>
                <div className='container'>
                    <div className='carousel-row'>
                        <h2>Featured Cars</h2>
                        <div className='feature-row'>
                            {a.arr.map((e1,i1)=>{
                                return e1.feature.map((e2,i2)=>{
                                    return (
                                        <div key={i2} className='feature-col'>
                                            <div  className='feature-card' onClick={()=>feature(i2,e2.t1)}>
                                            {e2.isfea?
                                                <div>
                                                  
                                                    <p style={{color:"#00afa0"}}>{e2.t1}</p>
                                                    <div className='feature'></div>
                                                </div>:
                                                <p>{e2.t1}</p>
                                            }
                                            </div>
                                            
                                        </div>
                                    )
                                })
                            })}
                        </div>
                        <Slider {...settings}>
                                {c.map((e,i)=>{
                                    return e.map((el,ind)=>{
                                        return(
                                            <div  key={ind} >
                                                <div style={{padding:"10px"}} className='carousel-col' >
                                                {
                                                    
                                                    <div  style={{border:"1px solid #ccc",borderRadius:"5px",backgroundColor:"#484848"}} className='carousel-card' >
                                                    <div title={el.carName} onClick={()=>cardetail(el.id)}>
                                                        <img src={el.carurl} alt="cars" style={{width:"100%"}}/>
                                                    </div>
                                                    <div style={{backgroundColor:"#f6f6f6",padding:"20px 5px"}}>
                                                    <p style={{padding:"5px 0"}}>{el.carName}</p>
                                                    <h3>Rs. {el.carRate} Lakh <span style={{color:"#999",fontWeight:"normal",fontSize:"14px"}}>onwards</span></h3>
                                                    <p style={{color:"#999",fontSize:"14px",padding:"5px 0"}}>{el.avg}</p>
                                                    <button style={{backgroundColor:"#fff",padding:"5px 10px",border:"1px solid #00afa0",color:"#00afa0",borderRadius:"5px"}}>Show price in my city</button>
                                                    </div>
                                                </div>
                                                }
                                                </div>
                                            </div>
                                        )
                                    })
                                })}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className='brand-sec'>
                <div className='container'>
                    <div className='brand-row'>
                        <h2>All Brands</h2>
                        {
                            a.arr.map((e, ind) => {
                                return (
                                    <div key={ind}>
                                        <div className='brand-col'>
                                            {
                                                e.brands.map((el, i) => {
                                                    return (
                                                        <div className='brand-card' key={i}>
                                                            <div className='brand-det' title={el.cname} onClick={()=>brandDetail(el.cname)}>
                                                                <div className='logos'>
                                                                    <img src={el.logo} alt='logo' />
                                                                </div>
                                                                <p>{el.cname}</p>
                                                            </div>

                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        {/* <div className='view-brand-btn' onClick={brandView}>
                                            {e.isView ?
                                                <p>View Less Brands</p> : <p>View More Brands</p>
                                            }
                                        </div> */}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='choice-sec'>
                <div className='container'>
                    <div className='choice-row'>
                        <div className='choice-col'>
                            <h2>Find The Cars Of Your Choice</h2>
                            <div>
                                {a.arr.map((e, inde) => {
                                    return (
                                        <div className='choice-type-row' key={inde}>
                                            <div className='under-rate-row'>
                                                {e.chRate.map((e, index) => {
                                                    return (
                                                        <div key={index} className='under-rate-col'>
                                                            <p>{e.uRate}</p>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='compr-sec'>
                <div className='container'>
                    <div className='compr-row'>
                        <h2>Compare Cars</h2>
                        <div className='compr-col'>
                            <p onClick={comparePage}>Compare Cars of Your Choice<IoIosArrowForward /></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 