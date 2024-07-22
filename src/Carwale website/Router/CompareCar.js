import React, { useContext, useState } from 'react';
import './style.scss';
// import { BsCarFront } from "react-icons/bs";
//import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
//import { update } from './store/Slice';
import { useNavigate } from 'react-router-dom';
import { globalstate } from '../Context/Context';
export const CompareCar = () => {
    const {a,b}=useContext(globalstate)
    // const a = useSelector((d) => d.data);
    // const b = useDispatch();
    const [iscar, setCar] = useState(false);
    const [iscar1, setCar1] = useState(false);
    const [isselect, setSelect] = useState(false);
    const [isselect1, setSelect1] = useState(false);
    const [carX, setcarX] = useState();
    const [carY, setcarY] = useState([]);

    const [fcom, setFcom] = useState(false);

    const [x, sx] = useState(0);
    const [y, sy] = useState(0);

    const nav = useNavigate();
    const selectcar = () => {
        setCar(true)
    }
    const selectcar1 = () => {
        setCar1(true)
    }
    const carselect = (index) => {
        console.log(index)
        const x = a.arr.map((e, i) => { return { ...e, brands: e.brands.map((el, il) => { return il === index ? { ...el, isbnd: !el.isbnd } : { ...el, isbnd: false } }) } });
        // console.log(x);
        b({type:"update",payload:x})
    }
    const carselect1 = (index) => {
        console.log(index)
        const x = a.arr.map((e, i) => { return { ...e, brands: e.brands.map((el, il) => { return il === index ? { ...el, isbnd: !el.isbnd } : el }) } });
        // console.log(x);
        b({type:"update",payload:x})
    }

    const finalSelect = (id, cn) => {
        setSelect(true);
        setCar(false);
        console.log(id)
        // console.log(a.arr.map((e)=>{return e.carousel}))

        let x = a.arr.map((e) => { return e.carousel.filter((el) => { return el.id === id }) });
        console.log(x)
        const y = a.arr.map((e, i) => { return { ...e, brands: e.brands.map((el, il) => { return { ...el, isbnd: false } }) } });
        // console.log(x);
        b({type:"update",payload:y})
        // 
        setcarX(x)
        sx(id)
        // 
    }
    const finalSelect1 = (id) => {
        setSelect1(true);
        setCar1(false);
        let y = a.arr.map((e) => { return e.carousel.filter((el) => { return el.id === id }) });
        setcarY(y)
        const x = a.arr.map((e, i) => { return { ...e, brands: e.brands.map((el, il) => { return { ...el, isbnd: false } }) } });
        // console.log(x);
        b({type:"update",payload:x})
        sy(id)
    }
    const compare = () => {
        if (isselect && isselect1) {
            alert("success");
            nav(`/cpr?id1=${x}&id2=${y}`)
            setFcom(true);
        }
        else {
            alert("faild")
        }
    }
    return (
        <>
            {
                fcom ?
                    <div className='container'>
                        <div className='is-com-sec'>
                            <div>
                                <div style={{ display: "flex" }}>
                                    <div>
                                        <p>Key Highlights</p>
                                        <p>Price</p>
                                        <p>Engine Capacity</p>
                                        <p>Fuel Type</p>
                                        <p>Power</p>
                                        <p>Transmission</p>

                                    </div>
                                    <div>
                                        {
                                            carX.map((e, i1) => {
                                                return e.map((e2, i2) => {
                                                    return e2.carspeci.map((e3, i3) => {
                                                        return (
                                                            <div>
                                                                <p>{e3.svalue}</p>
                                                            </div>
                                                        )
                                                    })
                                                })
                                            })
                                        }
                                    </div>
                                    <div>
                                        {
                                            carY.map((e, i1) => {
                                                return e.map((e2, i2) => {
                                                    return e2.carspeci.map((e3, i3) => {
                                                        return (
                                                            <div>
                                                                <p>{e3.svalue}</p>
                                                            </div>
                                                        )
                                                    })
                                                })
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='com-row'>
                                <div className='com-row-in'>
                                    <div className='com-col-in col-in1' onClick={() => selectcar()}>
                                        {isselect ?
                                            <div>
                                                {carX.map((el1, in1) => {
                                                    return el1.map((el2, in2) => {
                                                        return (
                                                            <>
                                                                <div className='img-parent-col' style={{ position: "relative" }}>
                                                                    <img src={el2.carurl} style={{ width: "100%" }} alt='non' />
                                                                    <p style={{ position: "absolute", top: "0", right: "0" }}><RxCross2 /></p>
                                                                </div>
                                                                <p>{el2.carName}</p>
                                                                <h4>RS {el2.carRate} {el2.carRate > 3 ? "Core" : "Lakhs"}</h4>
                                                                <span>{el2.avg}</span>
                                                                <button>Get Offers</button>
                                                            </>
                                                        )
                                                    })
                                                })}

                                            </div> :
                                            <div>
                                                <div className='col-in-icon'><img src='https://imgd.aeplcdn.com/0x0/cw/static/icons/circle/select-car.svg' alt='car-icon' /></div>
                                                <p>Select Car</p>
                                            </div>}
                                        <p className='col-in-vs'>vs</p>
                                    </div>
                                    <div className='com-col-in' onClick={() => selectcar1()}>
                                        {
                                            isselect1 ?
                                                <div>
                                                    {carY.map((el1, in1) => {
                                                        return el1.map((el2, in2) => {
                                                            return (
                                                                <>
                                                                    <div className='img-parent-col'>
                                                                        <img src={el2.carurl} style={{ width: "100%" }} alt='car-url' />
                                                                    </div>
                                                                    <p>{el2.carName}</p>
                                                                    <h4>RS {el2.carRate} {el2.carRate > 3 ? "Core" : "Lakhs"}</h4>
                                                                    <span>{el2.avg}</span>
                                                                </>
                                                            )
                                                        })
                                                    })}
                                                </div> :
                                                <div>
                                                    <div className='col-in-icon'><img src='https://imgd.aeplcdn.com/0x0/cw/static/icons/circle/select-car.svg' alt='car-icon' /></div>
                                                    <p>Select Car</p>
                                                </div>
                                        }
                                    </div>
                                </div>
                                {
                                    iscar ?
                                        <div className='com-sel-car-row'>
                                            <div>
                                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1em 2em" }}>
                                                    <h3 style={{ color: "#484848", fontWeight: "500", paddingBottom: "1em" }}>Select Your Brand or Model</h3>
                                                    <p onClick={setCar(false)} style={{ cursor: "pointer", backgroundColor: "#fff", boxShadow: "0 0 10px #ccc", borderRadius: "50%", width: "25px", height: "25px", padding: "4px" }}><RxCross2 /></p>
                                                </div>
                                                <div className='com-sel-car-select'>
                                                    <input type='text' placeholder='Type to Select Brand or Model' />
                                                </div>
                                                <p style={{ padding: "20px 2em", color: "#ccc", fontSize: "12px" }}>POPULAR BRANDS</p>
                                                <div className='com-car-row-in'>
                                                    {/* {console.log(a.arr.map((e) => { return e.brands }))} */}
                                                    {
                                                        a.arr.map((e, i) => {
                                                            return (
                                                                <div key={i} className='com-car-col-in'>
                                                                    {
                                                                        e.brands.map((e1, i1) => {
                                                                            return (
                                                                                <div key={i1} className='com-car-logo-name-col'>
                                                                                    <div className='com-car-logoname-card' onClick={() => carselect(i1)}>
                                                                                        <div className='com-car-only-brandname'>
                                                                                            <div className='com-car-only-brandLogo'>
                                                                                                <img src={e1.logo} alt='lo-go' />
                                                                                            </div>
                                                                                            <p>{e1.cname}</p>
                                                                                        </div>
                                                                                        {
                                                                                            e1.isbnd ?
                                                                                                <p><IoIosArrowUp /></p> : <p><IoIosArrowDown /></p>
                                                                                        }
                                                                                    </div>
                                                                                    {
                                                                                        e1.isbnd ?
                                                                                            <div>
                                                                                                {
                                                                                                    // console.log(e.carousel.map((el,i)=>{return el.brandName}));
                                                                                                    e.carousel.map((e2, i2) => {
                                                                                                        return e2.brandName === e1.cname ?
                                                                                                            <div style={{ padding: "5px 2em", borderBottom: "1px solid #ccc" }}>
                                                                                                                <p onClick={() => finalSelect(e2.id)} style={{ color: "#484848", cursor: "pointer" }}>{e2.carName}</p>
                                                                                                            </div>
                                                                                                            : ""



                                                                                                    })
                                                                                                }
                                                                                            </div> : ""
                                                                                    }
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                    {/* <h3>hii</h3> */}
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div> :
                                        <div></div>
                                }
                                {
                                    iscar1 ?
                                        <div className='com-sel-car-row'>
                                            <div>
                                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1em 2em" }}>
                                                    <h3 style={{ color: "#484848", fontWeight: "500", paddingBottom: "1em" }}>Select Your Brand or Model</h3>
                                                    <p onClick={() => setCar1(false)} style={{ cursor: "pointer", backgroundColor: "#fff", boxShadow: "0 0 10px #ccc", borderRadius: "50%", width: "25px", height: "25px", padding: "4px" }}><RxCross2 /></p>
                                                </div>
                                                <div className='com-sel-car-select'>
                                                    <input type='text' placeholder='Type to Select Brand or Model' />
                                                </div>
                                                <p style={{ padding: "20px 2em", color: "#ccc", fontSize: "12px" }}>POPULAR BRANDS</p>
                                                <div className='com-car-row-in'>
                                                    {/* {console.log(a.arr.map((e) => { return e.brands }))} */}
                                                    {
                                                        a.arr.map((e, i) => {
                                                            return (
                                                                <div key={i} className='com-car-col-in'>
                                                                    {
                                                                        e.brands.map((e1, i1) => {
                                                                            return (
                                                                                <div key={i1} className='com-car-logo-name-col'>
                                                                                    <div className='com-car-logoname-card' onClick={() => carselect1(i1)}>
                                                                                        <div className='com-car-only-brandname'>
                                                                                            <div className='com-car-only-brandLogo'>
                                                                                                <img src={e1.logo} alt='logo-1' />
                                                                                            </div>
                                                                                            <p>{e1.cname}</p>
                                                                                        </div>
                                                                                        {
                                                                                            e1.isbnd ?
                                                                                                <p><IoIosArrowUp /></p> : <p><IoIosArrowDown /></p>
                                                                                        }
                                                                                    </div>
                                                                                    {
                                                                                        e1.isbnd ?
                                                                                            <div>
                                                                                                {
                                                                                                    // console.log(e.carousel.map((el,i)=>{return el.brandName}));
                                                                                                    e.carousel.map((e2, i2) => {
                                                                                                        return e2.brandName === e1.cname ?
                                                                                                            <div style={{ padding: "5px 2em", borderBottom: "1px solid #ccc" }}>
                                                                                                                <p onClick={() => finalSelect1(e2.id, e2.carName)} style={{ color: "#484848", cursor: "pointer" }}>{e2.carName}</p>
                                                                                                            </div>
                                                                                                            : ""
                                                                                                    })
                                                                                                }
                                                                                            </div> : ""
                                                                                    }
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                    {/* <h3>hii</h3> */}
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div> :
                                        <div></div>
                                }
                            </div>
                            <div>
                                <div>
                                    <h3>Specifications and Finance</h3>
                                </div>
                                <div>
                                    <h4>Engine & Transmission</h4>

                                </div>
                                <div>
                                    <h4>Dimensions & Weight</h4>
                                </div>
                                <div>
                                    <h4>Capacity</h4>
                                </div>
                                <div>
                                    <h4>Suspentions,Brakes,Steering & Tyres</h4>
                                </div>
                            </div>
                        </div>
                    </div> :
                    // middle




                    <div className='com-sec' style={iscar || iscar1 ? { background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8))" } : { opacity: "1" }}>
                        <div className='container'>
                            <div className='com-row'>
                                <h3>Compare Cars</h3>
                                <p>Important decisions like car purchase are often confusing. The “Compare Cars” tool from CarWale is designed to help you in car comparison on the basis of prices, mileage, power, performances and hundreds of other features and specifications. Our car comparison tool now comes with enhanced capabilities to compare cars at version level.</p>
                                <div className='com-row-in'>
                                    <div className='com-col-in col-in1' onClick={() => selectcar()}>
                                        {isselect ?
                                            <div style={{ position: "relative" }}>
                                                {carX.map((el1, in1) => {
                                                    return el1.map((el2, in2) => {
                                                        return (
                                                            <>
                                                                <div className='img-parent-col'>
                                                                    <img src={el2.carurl} style={{ width: "100%" }} alt='non' />

                                                                </div>
                                                                <p style={{ position: "absolute", top: "0", right: "0" }} onClick={() => setSelect(false)}><RxCross2 /></p>
                                                                <p>{el2.carName}</p>
                                                                <h4>RS {el2.carRate} {el2.carRate > 3 ? "Core" : "Lakhs"}</h4>
                                                                <span>{el2.avg}</span>
                                                            </>
                                                        )
                                                    })
                                                })}

                                            </div> :
                                            <div>
                                                <div className='col-in-icon'><img src='https://imgd.aeplcdn.com/0x0/cw/static/icons/circle/select-car.svg' alt='car-icon' /></div>
                                                <p>Select Car</p>
                                            </div>}
                                        <p className='col-in-vs'>vs</p>
                                    </div>
                                    <div className='com-col-in' onClick={() => selectcar1()}>
                                        {
                                            isselect1 ?
                                                <div>
                                                    {carY.map((el1, in1) => {
                                                        return el1.map((el2, in2) => {
                                                            return (
                                                                <>
                                                                    <div className='img-parent-col'>
                                                                        <img src={el2.carurl} style={{ width: "100%" }} alt='car-url' />
                                                                    </div>
                                                                    <p>{el2.carName}</p>
                                                                    <h4>RS {el2.carRate} {el2.carRate > 3 ? "Core" : "Lakhs"}</h4>
                                                                    <span>{el2.avg}</span>
                                                                </>
                                                            )
                                                        })
                                                    })}
                                                </div> :
                                                <div>
                                                    <div className='col-in-icon'><img src='https://imgd.aeplcdn.com/0x0/cw/static/icons/circle/select-car.svg' alt='car-icon' /></div>
                                                    <p>Select Car</p>
                                                </div>
                                        }
                                    </div>
                                </div>
                                <div className='com-btn' onClick={() => compare()}>
                                    <h3>Compare</h3>
                                </div>
                                {
                                    iscar ?
                                        <div className='com-sel-car-row'>
                                            <div>
                                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1em 2em" }}>
                                                    <h3 style={{ color: "#484848", fontWeight: "500", paddingBottom: "1em" }}>Select Your Brand or Model</h3>
                                                    <p onClick={() => setCar(false)} style={{ cursor: "pointer", backgroundColor: "#fff", boxShadow: "0 0 10px #ccc", borderRadius: "50%", width: "25px", height: "25px", padding: "4px" }}><RxCross2 /></p>
                                                </div>
                                                <div className='com-sel-car-select'>
                                                    <input type='text' placeholder='Type to Select Brand or Model' />
                                                </div>
                                                <p style={{ padding: "20px 2em", color: "#ccc", fontSize: "12px" }}>POPULAR BRANDS</p>
                                                <div className='com-car-row-in'>
                                                    {/* {console.log(a.arr.map((e) => { return e.brands }))} */}
                                                    {
                                                        a.arr.map((e, i) => {
                                                            return (
                                                                <div key={i} className='com-car-col-in'>
                                                                    {
                                                                        e.brands.map((e1, i1) => {
                                                                            return (
                                                                                <div key={i1} className='com-car-logo-name-col'>
                                                                                    <div className='com-car-logoname-card' onClick={() => carselect(i1)}>
                                                                                        <div className='com-car-only-brandname'>
                                                                                            <div className='com-car-only-brandLogo'>
                                                                                                <img src={e1.logo} alt='lo-go' />
                                                                                            </div>
                                                                                            <p>{e1.cname}</p>
                                                                                        </div>
                                                                                        {
                                                                                            e1.isbnd ?
                                                                                                <p><IoIosArrowUp /></p> : <p><IoIosArrowDown /></p>
                                                                                        }
                                                                                    </div>
                                                                                    {
                                                                                        e1.isbnd ?
                                                                                            <div>
                                                                                                {
                                                                                                    // console.log(e.carousel.map((el,i)=>{return el.brandName}));
                                                                                                    e.carousel.map((e2, i2) => {
                                                                                                        return e2.brandName === e1.cname ?
                                                                                                            <div style={{ padding: "5px 2em", borderBottom: "1px solid #ccc" }}>
                                                                                                                <p onClick={() => finalSelect(e2.id)} style={{ color: "#484848", cursor: "pointer" }}>{e2.carName}</p>
                                                                                                            </div>
                                                                                                            : ""



                                                                                                    })
                                                                                                }
                                                                                            </div> : ""
                                                                                    }
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                    {/* <h3>hii</h3> */}
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div> :
                                        <div></div>
                                }
                                {
                                    iscar1 ?
                                        <div className='com-sel-car-row'>
                                            <div>
                                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1em 2em" }}>
                                                    <h3 style={{ color: "#484848", fontWeight: "500", paddingBottom: "1em" }}>Select Your Brand or Model</h3>
                                                    <p onClick={() => setCar1(false)} style={{ cursor: "pointer", backgroundColor: "#fff", boxShadow: "0 0 10px #ccc", borderRadius: "50%", width: "25px", height: "25px", padding: "4px" }}><RxCross2 /></p>
                                                </div>
                                                <div className='com-sel-car-select'>
                                                    <input type='text' placeholder='Type to Select Brand or Model' />
                                                </div>
                                                <p style={{ padding: "20px 2em", color: "#ccc", fontSize: "12px" }}>POPULAR BRANDS</p>
                                                <div className='com-car-row-in'>
                                                    {/* {console.log(a.arr.map((e) => { return e.brands }))} */}
                                                    {
                                                        a.arr.map((e, i) => {
                                                            return (
                                                                <div key={i} className='com-car-col-in'>
                                                                    {
                                                                        e.brands.map((e1, i1) => {
                                                                            return (
                                                                                <div key={i1} className='com-car-logo-name-col'>
                                                                                    <div className='com-car-logoname-card' onClick={() => carselect1(i1)}>
                                                                                        <div className='com-car-only-brandname'>
                                                                                            <div className='com-car-only-brandLogo'>
                                                                                                <img src={e1.logo} alt='logo-1' />
                                                                                            </div>
                                                                                            <p>{e1.cname}</p>
                                                                                        </div>
                                                                                        {
                                                                                            e1.isbnd ?
                                                                                                <p><IoIosArrowUp /></p> : <p><IoIosArrowDown /></p>
                                                                                        }
                                                                                    </div>
                                                                                    {
                                                                                        e1.isbnd ?
                                                                                            <div>
                                                                                                {
                                                                                                    // console.log(e.carousel.map((el,i)=>{return el.brandName}));
                                                                                                    e.carousel.map((e2, i2) => {
                                                                                                        return e2.brandName === e1.cname ?
                                                                                                            <div style={{ padding: "5px 2em", borderBottom: "1px solid #ccc" }}>
                                                                                                                <p onClick={() => finalSelect1(e2.id, e2.carName)} style={{ color: "#484848", cursor: "pointer" }}>{e2.carName}</p>
                                                                                                            </div>
                                                                                                            : ""
                                                                                                    })
                                                                                                }
                                                                                            </div> : ""
                                                                                    }
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                    {/* <h3>hii</h3> */}
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div> :
                                        <div></div>
                                }
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}