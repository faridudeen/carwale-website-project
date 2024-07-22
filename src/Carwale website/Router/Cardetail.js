import React, { useContext, useEffect, useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Slider from "react-slick";
import { FaRegClock,FaCheck  } from "react-icons/fa";
import { GrFilter } from "react-icons/gr";
import { MdOutlineHandshake } from "react-icons/md";
import { globalstate } from "../Context/Context";
//import { update } from "./store/Slice";
export const Cardetail=()=>{
    const {a,b}=useContext(globalstate)
    const [parem]=useSearchParams();
    const [aob,setAob]=useState([])
//    const a=useSelector((d)=>d.data);
  //  const b=useDispatch();
    // console.log(a.arr)
    useEffect(()=>{
        let x=a.arr.map((e,i)=>{return e.carousel.filter((el,index)=>{return el.id===Number(parem.get("id"))?el:"" })});
        console.log(a.arr.map((ele)=>{return ele.carousel.filter((e)=>{return e.carName})}))
        setAob(x)
    },[parem,a.arr])
    var setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
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
    const [isum,setSum]=useState(false);
    const [isindia,setIndia]=useState(false);
    const [isfuel,setFuel]=useState(false);
    // const [isFilter,setFilter]=useState(true);
    const sumView=()=>{
        setSum(!isum)
    }
    const cityPrice=()=>{
        setIndia(!isindia)
    }
    const fuelFilter=(index)=>{
        // let x=a.arr.map((e,i)=>{return {...e,carousel:e.carousel.map((el,ind)=>{return el.id===Number(parem.get("id"))?  {...el,fuelType:el.fuelType.map((ell,iin)=>{return index===iin?{...ell,isfilter:!ell.isfilter}:''})}:""})}});
        // console.log(x);
        //
        // 
        let x=a.arr.map((e,i)=>{return {...e,carousel:e.carousel.map((el,il)=>{return Number(parem.get("id"))===el.id?{...el,fuelType:el.fuelType.map((ell,ill)=>{return index===ill?{...ell,isfilter:!ell.isfilter}:ell})}:el})}});
        console.log(x)
        b({type:"update",payload:x})
        // setAob(x)
    }
    const viewFueltype=()=>{
        setFuel(!isfuel);
    }
    const addCompare=(i9)=>{
        let x=a.arr.map((e,i)=>{return {...e,carousel:e.carousel.map((el,il)=>{return el.id===Number(parem.get("id"))?{...el,filterPrice:el.filterPrice.map((ell,ill)=>{return ill===i9?{...ell,iscom:!ell.iscom}:ell})}:el})}});
        console.log(x);
        b({type:"update",payload:x})
    }
    return(
        <div className="det-sec">
            <div className="container">
                {/* {console.log(aob)} */}
                    {aob.map((e)=>{
                        return e.map((el,ind)=>{
                            return (
                                <div className="det-row" style={{paddingTop:"3%"}} key={ind}>
                                    <h1>{el.carName}</h1>
                                    <div className="det-row1">  
                                        <div className="det-col1">
                                         {/* <div className="det-col1"> */}
                                            <Slider {...setting}>
                                                {el.cardet.map((ele,inde)=>{
                                                    return(
                                                        <div key={inde}>
                                                            <div className="det-carousel-img">
                                                                <img src={ele.uurl} alt="det"/>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            
                                            </Slider>
                                        {/* </div> 
                                        <h1>hlo col1 </h1> */}
                                        </div>
                                        <div className="det-col1 det-col2" style={{paddingLeft:"3%"}}>
                                            <div className="col2-row">
                                                <div className="col2-col">
                                                    <div className="vari-col">
                                                        <span>Variant</span>
                                                        <p>Select Variant</p>
                                                    </div>
                                                </div>
                                                <div className="col2-col">
                                                    <div className="city-col">
                                                        <span>City</span>
                                                        <p>Show price in my city</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {
                                                el.carRate>3.00?
                                                <h3 style={{padding:"10px 0"}}>Rs. {el.carRate}- {el.toRate} Lakh</h3>:
                                                <h3 style={{padding:"10px 0"}}>Rs. {el.carRate}- {el.toRate} Core</h3>
                                            }
                                            
                                            <p style={{padding:"10px 0"}}>{el.avg}</p>
                                            <div className="col2-offer-row">
                                                <div className="offer-col">
                                                    <p>Calculate your EMI</p>
                                                    <h5 style={{cursor:"pointer"}}>EMI Calculator</h5>
                                                </div>
                                                <div className="offer-col">
                                                    <button>Get EMI Offers</button>
                                                </div>
                                            </div>
                                            <h4 style={{padding:"10px 0"}}><FaRegClock /> {el.wp}</h4>
                                            <div className="col2-offer-btn">
                                            <button>Get February Offers</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="det-row2">
                                        <div className="row2-col1" >
                                            <h3 style={{padding:"20px 0"}}>{el.carName} car specification</h3>
                                            <div className="speci-sec">
                                                {
                                                    el.carspeci.map((e1,i1)=>{
                                                        return(
                                                            <div key={i1} className="speci-col">
                                                                <div className="speci-card">
                                                                    <p>{e1.stype}</p>
                                                                </div>
                                                                <div className="speci-card">
                                                                    <p>{e1.svalue}</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <h3 style={{padding:"20px 0"}}>All New {el.carName} Summary</h3>
                                            <div className="summary-sec">
                                                {
                                                    el.summary.slice(0,isum?el.summary.length:2).map((e2,i2)=>{
                                                        return(
                                                            <div key={i2}>
                                                                <h4 style={{padding:"10px 0",color:"#6f6f6f"}}>{e2.sutype}</h4>
                                                                <p>{e2.suvalue}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                <div onClick={sumView} className="sum-view">
                                                {console.log(el.issum)}
                                                {isum?<p>Collapse</p>:<p>Read More</p>}
                                                </div>
                                            </div>
                                            <h3 style={{padding:"20px 0"}}>{el.carName} Price</h3>
                                            <div className="price-sec">
                                                <p>{el.carPrice}</p>
                                                <div className="filter-sec">
                                                    <span><GrFilter /> Filter By Fuel type & Transmission</span>
                                                    <div className="filter-type-row">
                                                        {
                                                            el.fuelType.map((e5,i5)=>{
                                                                return(
                                                                    <div key={i5}>
                                                                        <div  className="filter-type-col">
                                                                            <div className="fuel-type-card" onClick={()=>fuelFilter(i5,ind)} style={e5.isfilter?{borderColor:"#00afa0",color:"#00afa0"}:{color:"#7e7c7c"}}>
                                                                                <p className="fuel-type">{e5.type}</p>
                                                                                <p className="check" style={e5.isfilter?{display:"block"}:{display:"none"}}><FaCheck /></p>
                                                                            </div>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                    <div className="fuel-compare-row">
                                                        <div className="fuel-cpr-tle">
                                                            <p style={{width:"20%"}}>Variants</p>
                                                            <p>Ex-Showroom price</p>
                                                            <p>Compare</p>
                                                        </div>
                                                        {
                                                            el.filterPrice.slice(0,isfuel?el.filterPrice.length:4).map((e9,i9)=>{
                                                                return(
                                                                    <div className="fuel-compare-col" key={i9}>
                                                                        <div className="fuel-cpr-vrnt">
                                                                            <p title={e9.tname}>{e9.tname}</p>
                                                                            <p style={{color:"#999"}} title={e9.ft}>{e9.ft}</p>
                                                                        </div>
                                                                        <div className="fuel-cpr-spe">
                                                                            {e9.rt>3?
                                                                            <p>Rs. {e9.rt} Lakh</p>:
                                                                            <p>Rs. {e9.rt} Core</p>}
                                                                        </div>
                                                                        <div className="fuel-cpr">
                                                                            <div className="fuel-cpr-upr-row">
                                                                                <div onClick={()=>addCompare(i9)} style={{display:"flex"}}>
                                                                                {
                                                                                e9.iscom?
                                                                                <p className="iscom-true">Do not compare</p>:
                                                                                <p className="iscom-false">Add to compare</p>
                                                                                 }
                                                                                 <div style={e9.iscom?{width:"15px",height:"15px",border:"1px solid #00afa0",borderRadius:"5px",backgroundColor:"#00afa0"}:{width:"15px",height:"15px",border:"1px solid #ccc",borderRadius:"5px",backgroundColor:"#fff"}}></div>
                                                                                </div>
                                                                                {/* <div className="fuel-cpr-check" style={e9.iscom?{backgroundColor:"#00afa0",borderColor:"##00afa0"}:{backgroundColor:"#fff"}}></div> */}
                                                                            </div>
                                                                            <div className="fuel-cpr-undr-row">
                                                                                <p style={{borderRight:"1px solid #ccc"}}>Show price in my city</p>
                                                                                <p>Get Offers</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                        <div className="fuel-view" onClick={()=>viewFueltype()}>
                                                            {isfuel?
                                                            "":<p>View More Variants</p>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 style={{padding:"20px 0"}}>{el.carName} Mileage</h3>
                                            <p style={{padding:"5px 0"}}>{el.milpara}</p>
                                            <div className="mileage-sec">
                                                <table>
                                                    <tr style={{backgroundColor:"#f9f9f9"}}>
                                                        {el.miltitle.map((e3,i3)=>{
                                                            return(
                                                                <th key={i3}>{e3.title}</th>
                                                            )
                                                        })}
                                                    </tr>
                                                    {
                                                        el.mileage.map((e4,i4)=>{
                                                            return(
                                                                <tr>
                                                                    <td>{e4.t1}</td>
                                                                    <td>{e4.t2}</td>
                                                                    <td>{e4.t3}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </table>
                                            </div>
                                        </div>
                                        <div className="row2-col2">
                                            <div className="row2-col2-mainrow">
                                                <div className="deal-box-card">
                                                    <div className="deal-box-outline">
                                                        <p className="deal-hand-icon"><MdOutlineHandshake /></p>
                                                        <p className="deal-box-fcont">Get in touch with Authorized {el.brandName} Dealership on call for best buying options like:</p>
                                                        <div className="deal-box-detcard">
                                                            {
                                                                // console.log(e)
                                                                a.arr.map((ee,i0)=>{
                                                                    return ee.deal.map((e3,i10)=>{
                                                                        return(
                                                                            <div key={i10} className="deal-box-col">
                                                                                <p>{e3.d}</p>
                                                                            </div>
                                                                        )
                                                                    })
                                                                })
                                                            }
                                                        </div>
                                                        <h3 className="deal-btn">Get The Best Deal</h3>
                                                    </div>
                                                </div>
                                                <h2 className="row2-col2-tle">{el.carName} Price in India</h2>
                                                <div className="row2-col2-price">
                                                    <div className="view-price-tle">
                                                        <p style={{color:"#7e7c7c",fontWeight:"500"}}>City</p>
                                                        <p style={{color:"#7e7c7c",fontWeight:"500"}}>On-Road Prices</p>
                                                    </div>
                                                    {
                                                        el.indiaprice.slice(0,isindia?el.indiaprice.length:4).map((e8,i8)=>{
                                                            return(
                                                                <div key={i8} className="view-price-city">
                                                                    <p className="view-price-cname">{e8.city}</p>
                                                                    {
                                                                        e8.rte>3.00?

                                                                        <p>Rs .{e8.rte} Lakh onwards</p>:
                                                                        <p>Rs. {e8.rte} Core onwards</p>
                                                                    }
                                                                    
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                    <div className="view-price-btn" onClick={()=>cityPrice()}>
                                                        {isindia?<p>View Less Cities</p>:<p>View More Cities</p>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                                
                    })}
            </div>
        </div>
    )
}