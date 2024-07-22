// import React from "react";
// import './footer.scss'
// import { TiSocialFacebook } from "react-icons/ti";
// import { TiSocialTwitter } from "react-icons/ti";
// import { TiSocialYoutube } from "react-icons/ti";
// import { TiSocialLinkedin } from "react-icons/ti";
// import { TiSocialInstagram } from "react-icons/ti";
//  export const Footer =()=>{
//     return(
//         <div>
//             <div className="logoStyles">
           
//             <img src="https://imgd.aeplcdn.com/0x0/cw/static/logos/absure/cw-absure-badge-white.svg" alt="logo" style={{backgroundColor:"#ddd",width:"10%"}}></img>
//             <img src="https://imgd.aeplcdn.com/0x0/bw/static/icons/logo/bikewale-new-footer-logo-v2.svg" alt="logo" style={{backgroundColor:"#ddd",width:"10%"}}></img>
  
        
//            </div>
//            <div className="footerStyle">
//             <div className="aboutStyle">
//                 <div className="col-12">
                
//                 <ul>
                   
//                 <li><a href="#">language :english </a></li>
//                 <li><a href="#">about us </a></li>
//                 <li><a href="#"> careers </a></li>
//                 </ul>
//                 <ul>
//                 <li><a href="#">Terms & Condition </a></li>
//                 <li><a href="#">Advertise </a></li>
                   

//                 </ul>
//                 </div>
//             </div>
//             <div className="socimalMedia">
//                 <div className="col-12">
//                 <h5>Download Mobile App</h5>
//                 <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/112015/untitled-1_43.png?itok=GKivX2ic" alt="logo" style={{backgroundColor:"#ddd", width:"20%"}}></img>
//                 <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/112015/untitled-1_43.png?itok=GKivX2ic" alt="logo"></img>
//                 <h5>Connect with us</h5>

//                 <div className="socialMicons">
//                     {/* <ul>
//                         <li><TiSocialFacebook /></li>
//                         <li><TiSocialTwitter /></li>
//                         <li><TiSocialYoutube /></li>
//                         <li>< TiSocialLinkedin  /></li>
//                          <li>< TiSocialInstagram /></li>
//                     </ul> */}
//                     <i><TiSocialFacebook /></i>
//                     <i><TiSocialTwitter /></i>
//                     <i><TiSocialYoutube /></i>
//                     <i><TiSocialLinkedin /></i>
//                     <i><TiSocialInstagram /></i>



//                 </div>
//                 </div>

//             </div>
//            </div>
//            </div>
    
//     )

// }



import React, { useContext } from "react";
import './footer.scss'
// import './style.scss'
//import { useSelector } from "react-redux";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { globalstate } from "../Context/Context";
export const Footer = () => {
    // const a = useSelector((d) => d.data)
    const {a,b}=useContext(globalstate)
    console.log(a)
    return (
        <footer>
            <div className="foot-sec">
                <div className="container">
                    <div className="foot-row">
                       <div className="container">
                       <div className="foot-logo-row">
                            <div className="foot-logo-col">
                                <img src="https://imgd.aeplcdn.com/0x0/cw/static/icons/new-header/logo.svg" alt="hlo"/>
                            </div>
                            
                                            <div className="foot-logo-col">
                                <img src="https://imgd.aeplcdn.com/0x0/cw/static/logos/absure/cw-absure-badge-white.svg" alt="hlo"/>
                            </div>
      
                            
                      
                        <div className="foot-logo-col">
             <img src="https://d5x4wettsjecf.cloudfront.net/images4/cartrade_logo_238-48.png" alt="hlo"/>
                            </div>
                            <div className="foot-logo-col">
                                <img src="https://imgd.aeplcdn.com/0x0/bw/static/icons/logo/bikewale-new-footer-logo-v2.svg" alt="hlo"/>
                            </div>
                              </div>

                           <div className="foot-det-row">
                            <div className="foot-det-col">
                                <p>language: English हिंदी</p>
                                <div>
                                    {
                                        // a.arr.map((el,i)=>{
                                        //     return(
                                        //         <div className="foot-nav-det" key={i}>
                                        //             {
                                        //                 el.foot.map((e)=>{
                                        //                     return(
                                        //                         <p>{e.txt}</p>
                                        //                     )
                                        //                     })
                                        //             }
                                        //         </div>
                                        //     )
                                        // })
                                    }
                                    {a.arr.map((el,i) => {
                                        return (
                                            <div className="foot-nav-det" key={i}>
                                                {el.foot.map((e) => {
                                                    return (
                                                        <p>{e.me}</p>
                                                    )
                                                })}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="foot-det-col foot-det-col2">
                                <p>Download Mobile App</p>
                                <div className="foot-img-row">
                                    <div className="foot-img-col">
                                        <img src='https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/app-store.svg?v2' alt='app-logo'/>
                                    </div>
                                    <div className="foot-img-col">
                                        <img src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/play-store.svg?v2" alt="google-play"/>
                                    </div>
                                </div>
                                <div className="foot-social-sec">
                                    <p>Connect with us</p>
                                    <div className="foot-social-link-row">
                                        <div className="foot-social-link-col">
                                            <div className="foot-social-icon">
                                            <FaFacebookF/>
                                            </div>
                                        </div>
                                        <div className="foot-social-link-col">
                                            <div className="foot-social-icon">
                                            <FaTwitter/>
                                            </div>
                                        </div>
                                        <div className="foot-social-link-col">
                                            <div className="foot-social-icon">
                                                <FaYoutube/>
                                            </div>
                                        </div>
                                        <div className="foot-social-link-col">
                                            <div className="foot-social-icon">
                                            <FaLinkedin/>
                                            </div>
                                        </div>
                                        <div className="foot-social-link-col">
                                            <div className="foot-social-icon">
                                            <FaInstagram/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       </div>
                        <div className="foot-media-row">
                            <div className="foot-media-col">
                                <p>© 2006 - 2024. www.carwale.com</p>
                            </div>
                            <div className="foot-media-col foot-media-col2">
                                <div>
                                    <a href="https://www.carwale.com/visitor-agreement/">Visitor Agreement </a>
                                </div>
                                <span>&</span>
                                <div>
                                    <a href="https://www.carwale.com/privacy-policy/"> Privacy Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}