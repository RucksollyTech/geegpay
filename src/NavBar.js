import React, { useState } from 'react'

const NavBar = () => {
    const [display,setDisplay] = useState(false)
  return (
    <div className='sticky_top'>
        <div className='pageAnnotation'>
            Dashboard
        </div>
        <div className='flex searchBarTop'>
            <div className="searchBar">
                <img src="/Icons/search.svg" alt="Search ICon" />
                <input type="text" placeholder='Search...' />
            </div>
            <div className="calender flex">
                <span>
                    <img src="/Icons/calender.svg" alt="Calender Icon" />
                </span>
                <span className='pl_08 pointer'>
                    November 15,2023
                </span>
            </div>
            <div className="bellContainer">
                <div>
                    <img src="/Icons/bell.svg" alt="Notification Icon" />
                </div>
            </div>
            <div className="userContainer">
                <div className='ProfileImg'>
                    <img src="/Images/Profile.svg" alt="Profile" />
                </div>
                <div className='mid'>
                    <span className='Name d_block'>
                        Justin Bergson
                    </span>
                    <span className='email'>
                        Justin@gmail.com
                    </span>
                </div>
                <div className='center pr_05'>
                    <img className='rotateDropDown' src="/Icons/drop_down.svg" alt="Drop down icon" />
                </div>
            </div>
            <div className="breadCrumbs">
                <img onClick={()=>setDisplay(!display)} width="27" height="27" src="https://img.icons8.com/ios-filled/27/000000/menu--v6.png" alt="menu--v6"/>
            </div>
        </div>
        <div className={display ? "breadCrumbsMenu display" : "breadCrumbsMenu"}>
            <div className='cancelButton'>
                <img onClick={()=>setDisplay(!display)} width="25" height="25" src="https://img.icons8.com/ios-glyphs/25/416058/delete-sign.png" alt="delete-sign"/>
            </div>
            
            <div className="center">
                <span className='pointer'>
                    Dashboard
                </span>
            </div>
            <div className="center" data-aos="fade-up" data-aos-duration="1000">
                <span className='pointer'>
                    Menu
                </span>
            </div>
            <div className="center">
                <span className='pointer'>
                    Users
                </span>
            </div>
            <div className="center">
                <span className='pointer'>
                    Settings
                </span>
            </div>
        </div>
    </div>
  )
}

export default NavBar