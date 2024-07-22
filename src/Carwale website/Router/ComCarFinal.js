import React, { useContext, useEffect, useState } from "react";
//import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { globalstate } from "../Context/Context";
export const ComCarFinal=()=>{
    const [parem]=useSearchParams();
    // const a=useSelector((d)=>d.data);
    const {a,b}=useContext(globalstate)
    const [acar,setAcar]=useState([]);
     const [bcar,setBcar]=useState([]);
 
   
    useEffect(()=>{
        let x=a.arr.map((e)=>{return e.carousel.filter((el)=>{return el.id===Number(parem.get("id1"))?el:""})})
        setAcar(x);
        let y=a.arr.map((e)=>{return e.carousel.filter((el)=>{return el.id===Number(parem.get("id2"))?el:""})})
        setBcar(y);
    },[])
    return(
        <div style={{paddingTop:"10%"}} className="container">
           {
            // console.log(acar.map((e)=>{return e.map((el)=>{return el.brandName})}))
            a.arr.map((e)=>{
                return e.carousel.map((el)=>{
                    return (
                        <div className="container">
                            <div>
                                <div>
                                {el.id===Number(parem.get("id1"))?
                            <div>
                                <h3>Hlo car1</h3>
                            </div>:
                            <div></div>
                            }
                            {
                                el.id===Number(parem.get("id2"))?
                                <div>
                                    <h1>hlo car2</h1>
                                </div>:<div></div>
                            }
                                </div>
                            </div>
                        </div>
                    )
                })
            })
           }
        </div>
    )
}