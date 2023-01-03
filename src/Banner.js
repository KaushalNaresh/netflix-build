import React from 'react'
import './Banner.css'

function Banner() {

  function truncate(string, n){
    return string.length > n ? string.substr(0, n)+'...' : string;
  }

  return (
    <header className='banner' 
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://motionball.com/wp-content/uploads/2019/09/black-header.jpg")`,
        backgroundPosition: "center center",
    }}>
        <div className='banner__contents'>
            <h1 className="banner__title">Movie Name</h1>
            <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <h1 className='banner__description'>
                {truncate(`This is a test description which is very long,
                This is a test description which is very long,
                This is a test description which is very long ,
                This is a test description which is very long `, 100)}
            </h1>
        </div>

        <div className='banner--fadeButton'/>
    </header>
  )
}

export default Banner