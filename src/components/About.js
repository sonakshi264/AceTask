import React from 'react'
import './About.css'
import logo3 from './logo3.jpg'
export default function About() {
  return (
    <>
     <div className='aboutcontainer'>
    <div className='aboutsubsection1'>
    <h2>About <span style={{color:'orange'}}>Youpal Group</span></h2>
    <p>Youpal group is focused on making the products that are relevant both today and tomorrow.
        Our endeavour is to design the best digital infrastructure roadmap solutions.As see
        it ,the sky is the limit.And for that,we build upon the cloud.
    </p>
    <p>Youpal group builds and own and invests in the foundation of a variety of
        companies.The industries in which it operates includes med-tech,ed-tech and a plethora
        of other services and solutions.We own a cloud ,we dream upon this cloud and build upon it 
        continuously
    </p>
    </div>
        <div className='aboutsubsection2'>
              <img src={logo3} alt='logo3'></img>
        </div>
    </div> 
    </>
  )
}
