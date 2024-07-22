import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { LiaLanguageSolid } from "react-icons/lia";
import { FaRegUserCircle } from "react-icons/fa";
import carLogo from "./Image/carLogo.png"
import './Navbar.scss'
import './grid.css'
export const Navbar =()=>{
    return(
        
            <header className='head'>
               <div className="container">
                <div className='row'>
                    <div className='col-2'>
                        <div class='NavIcon'>
                            <img src={carLogo} style={{width:"70%"}} alt='carLogo' />
                            {/* <h2> car wale</h2> */}
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className='NavIlst'>
                            <ul>
                                <li>
                                    new cars
                                </li>
                                <li>used cars</li>
                                <li>reviews&news</li>
                            </ul>
                        </div>

                    </div>
                    <div className='col-3'>
                        <div className='NavSearch'>
                            <form className='form'>
                                <input  type='search' placeholder='Seach'/><h2>< CiSearch/></h2>
                            </form>
                        </div>
                    </div>

                    <div className='col-2'>
                        <div class='NavDetails'>
                       <ul><li><IoLocationOutline/></li>
                       <li><LiaLanguageSolid /></li>
                       <li><FaRegUserCircle /></li>
                       </ul>
                        </div>
                    </div>
                </div>
                </div>     
            </header>

    
    )
}