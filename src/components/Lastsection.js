import React from 'react'
import logo from './logo.jpg'
import './Lastsection.css'
export default function Lastsection() {
  return (
    <>
      <div className='lastsecctioncontainer'>
          <div className='lastsubsection'>
            <img src={logo} alt='youpallogo' ></img>
            <p>Youpal Group is focused on making the
                products that are relevant both today and tomorrow.
                Our endeavour is to design the best digital infrastructure
                roadmap solutions.
            </p>
          </div>
          <div className='lastsubsection1'>
            <table cellPadding={10} cellSpacing={10}>
                <tr>
                    <td style={{fontWeight:'bold'}}>Company</td>
                    <td style={{fontWeight:'bold'}}>Company</td>
                    <td style={{fontWeight:'bold'}}>Contact Us</td>
                </tr>
                <tr>
                    <td>About Us</td>
                    <td>About Us</td>
                    <td>Contact Us</td>
                </tr>
                <tr>
                <td>Terms and condition</td>
                <td>Terms and condition</td>
                <td>Press Center</td>
                </tr>
                <tr>
                <td>Blog</td>
                <td>Blog</td>
                <td>Careers</td>
                <td></td>
                </tr>
            </table>
          </div>
      </div>
    </>
  )
}
