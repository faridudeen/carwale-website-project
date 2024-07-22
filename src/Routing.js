import React, { useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { Home } from "./Carwale website/Router/Home";
//import { Sample } from "./Carwale website/Router/Sample";
import { Navbar } from "./Carwale website/Navbar/Navbar";
import { globalstate } from "./Carwale website/Context/Context";
import { initial,Reducer } from "./Carwale website/Context/Reducer";
import { Footer } from "./Carwale website/footer/footer";
import { Home2 } from "./Carwale website/Router/Home2";
import { BrandShow } from "./Carwale website/Router/BrandShow";
import { Cardetail } from "./Carwale website/Router/Cardetail";
import { ComCarFinal } from "./Carwale website/Router/ComCarFinal";
import { CompareCar } from "./Carwale website/Router/CompareCar";


 export const Routing =()=>{
    
  const [a,b] =useReducer(Reducer,initial)
  console.log(a)
    return(
          // <globalstate.provider value={{state,dispatch}}> 
        <globalstate.Provider value={{a,b}}>
     
        <BrowserRouter>
        <Navbar/>
    <Routes>
        
        <Route path="/" element={<Home2/>}/>
        <Route path="/brand"  element={<BrandShow/>}/>
        <Route path="/cardet"  element={<Cardetail/>}/>
        <Route path="/comcarfinal"  element={<ComCarFinal/>}/>
        <Route path="/cpr"  element={<CompareCar/>}/>


        
      


            </Routes>
           
       
    </BrowserRouter>
    <Footer/>
 </globalstate.Provider>

    
   
    )
}