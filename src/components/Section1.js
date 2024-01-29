import React from 'react'
// import SearchIcon from '@mui/icons-material/Search';


import './Section1.css'
export default function Section1() {
  return (
    <>
    <div className='mainsection'>
    <div className='sectionone'>
      <span style={{fontWeight:800}}>Search, Find &</span>
      <span style={{fontWeight:800,color:'orange'}}>Apply</span>
    </div>
    <div className='sectiontwo'>
        Get the most exciting jobs from all around the world and grow your career
        fast with others
    </div>
    <div className='sectionthree'>
        
        <input type='text' name='search' placeholder='Job title or keyword' className='inputfield1'></input>
        <input type='text' name='location' placeholder='Location' className='inputfield2' ></input>
        <button style={{color:'white',backgroundColor:'orange'}} id='buttoncss'>All Jobs</button>
        
    </div>
    <div className='sectionfour'>
        Most Popular Searches:
        <span style={{color:'orange'}}>
            Python Developer, Andriod Developer, Project Manage
        </span>
    </div>
    
</div>
    </>
  )
}
