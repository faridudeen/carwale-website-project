import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import './style.scss'
//import { useSelector } from "react-redux";
import { IoStar } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { globalstate } from "../Context/Context";
export const BrandShow = () => {
    const {a,b}=useContext(globalstate)
 //   const a = useSelector((d) => d.data);
    const [state, setState] = useState([])
    const [p] = useSearchParams();
    const [v, setV] = useState(false);
    const [aa,setAa]=useState([])
    const [bname,setbname]=useState();
    const nav=useNavigate();
    useEffect(() => {
        if(bname==="Tata"){
            let x = a.arr.map((e) => { return e.carousel.filter((el) => { return el.brandName === bname }) })
        // console.log(x)
        // console.log(x.map((e) => { return e.map((el) => { return el.carName }) }))
        setState(x);
        const y=a.arr.map((e)=>{return e.brands.filter((e)=>{return e.cname!==bname})});
        console.log(y)
        setAa(y)
        }
        else{
            let x = a.arr.map((e) => { return e.carousel.filter((el) => { return el.brandName === p.get("name") }) })
        // console.log(x)
        // console.log(x.map((e) => { return e.map((el) => { return el.carName }) }))
        setState(x);
        const y=a.arr.map((e)=>{return e.brands.filter((e)=>{return e.cname!==p.get("name")})});
        // console.log(y)
        setAa(y)
        }
    }, [setState,setbname])
    const brandView = () => {
        setV(!v)
    }
    const detcar=(id)=>{
        nav(`/cardet?id=${id}`)
    }
    const brandDetail=(b)=>{
        nav(`/brand?name=${b}`);
        setbname(b);
        window.location.reload();
        
    }
    return (
        <div className="bndshow-sec">
            <div className="container">
                <div className="bndshow-row">
                    <div>

                    </div>
                    <h2 style={{ fontWeight: "500", color: "#484848" }}>{p.get("name")} Car Models</h2>
                    <div className="bnd-row-one">
                        <div className="bnd-row">
                            {
                                state.map((el, i1) => {
                                    return el.map((e, i2) => {
                                        return (
                                            <div key={i2} className="bnd-col">
                                                <div className="bnd-card">
                                                    <div className="bnd-card-col1" onClick={()=>detcar(e.id)}>
                                                        <img src={e.carurl} />
                                                    </div>
                                                    <div className="bnd-card-col2">
                                                        <p style={{ color: "#000",cursor:"pointer" }} onClick={()=>detcar(e.id)}>{e.carName} <IoIosArrowForward/> </p>
                                                        <p>{e.kmpl}</p>
                                                        <h4>Rs. {e.carRate} Lakh <span>onwards</span></h4>
                                                        <p>{e.avg}</p>
                                                        <h5>Get Best Offer</h5>
                                                        <div className="bnd-card-star-rate">
                                                            <p><span><IoStar /> {e.star}</span> /5 | {e.rating} Ratings</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                })
                            }
                        </div>
                        <div className="bnd-row2">
                            <h3>Similar Brands</h3>
                            <div className="main-simi-row">
                                {
                                    aa.map((e) => {
                                        return (
                                            <div className="simi-row">
                                                {
                                                    e.slice(0, v ? 9 : 6).map((el, i2) => {
                                                        return (
                                                            <>
                                                                
                                                                        <div key={i2} className="simi-col">
                                                                            <div className="simi-card" onClick={()=>brandDetail(el.cname)}>
                                                                                <img src={el.logo} />
                                                                                <p>{el.cname}</p>
                                                                            </div>
                                                                        </div>
                                                                         
                                                            </>
                                                        )
                                                    })
                                                }
                                                <div className="view-more-brand" onClick={brandView}>
                                                    {v ? <p>View Less Brands</p> : <p>View More Brands</p>}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <h3>Popular Brands</h3>
                            <div className="main-simi-row">
                                {
                                    aa.map((e,i3)=>{
                                        return(
                                            <div key={i3} className="simi-row">
                                                {
                                                    e.slice(9).map((e4,i4)=>{
                                                        return(
                                                            <>
                                                                
                                                            <div key={i4} className="simi-col">
                                                                <div className="simi-card">
                                                                    <img src={e4.logo} />
                                                                    <p>{e4.cname}</p>
                                                                </div>
                                                            </div>
                                                             
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}