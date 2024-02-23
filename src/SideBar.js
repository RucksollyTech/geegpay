import React, { useState } from 'react'
import { Tooltip } from 'react-tooltip'
const SideBar = () => {
    const [open,setOpen]= useState(false)
  return (
    <div className={`background sideBar ${open ? "Open" : ""}`}>
        <div className='relative'>
            <div className='logoContainer'>
                <img className='Logo' src="/Icons/Logo.svg" alt="Logo" />
            </div>
            <div className='IconsContainer'>
                <span className='relative active'>
                    <samp></samp>
                    <img src="/Icons/menu.svg" alt="Menu" data-tooltip-delay-show={500} data-tooltip-id="my-tooltip" data-tooltip-content="Menu" />
                    <label>Menu</label>
                </span>
                <span className='relative'>
                    <samp></samp>
                    <img src="/Icons/icon1.svg" alt="Data" data-tooltip-delay-show={500} data-tooltip-id="my-tooltip" data-tooltip-content="Data" />
                    <label>Data</label>
                </span>
                
                <span className='relative'>
                    <samp></samp>
                    <img src="/Icons/icon2.svg" alt="Users" data-tooltip-delay-show={500} data-tooltip-id="my-tooltip" data-tooltip-content="Users" />
                    <label>Users</label>
                </span>
                <span className='relative'>
                    <samp></samp>
                    <img src="/Icons/icon3.svg" alt="Packages" data-tooltip-delay-show={500} data-tooltip-id="my-tooltip" data-tooltip-content="Packages" />
                    <label>Packages</label>
                </span>
                <span className='relative'>
                    <samp></samp>
                    <img src="/Icons/icon4.svg" alt="Rate" data-tooltip-delay-show={500} data-tooltip-id="my-tooltip" data-tooltip-content="Rate" />
                    <label>Rate</label>
                </span>
                <span className='relative'>
                    <samp></samp>
                    <img src="/Icons/icon5.svg" alt="Warnings" data-tooltip-delay-show={500} data-tooltip-id="my-tooltip" data-tooltip-content="Warnings" />
                    <label>Warnings</label>
                </span>
                <div className='modeSwitch'>
                    <span className='relative'>
                        <img src="/Icons/brightness.svg" alt="Menu" />
                    </span>
                    <span className='relative'>
                        <img src="/Icons/moon.svg" alt="Menu" />
                    </span>
                </div>
                
                <div className='bottomIcons'>
                    <span className='relative'>
                        <samp></samp>
                        <img className={open ? "Open" : "Close"} onClick={()=>setOpen(!open)} src="/Icons/icon7.svg" alt="Expand" data-tooltip-delay-show={500} data-tooltip-id="my-tooltip" data-tooltip-content="Expand" />
                        <label onClick={()=>setOpen(!open)}>Minimize</label>
                    </span>
                    <span className='relative'>
                        <samp></samp>
                        <img src="/Icons/Icon8.svg" alt="Settings" data-tooltip-delay-show={500} data-tooltip-id="my-tooltip" data-tooltip-content="Settings"/>
                        <label>Settings</label>
                    </span>
                    <span className='relative'>
                        <samp></samp>
                        <img src="/Icons/icon9.svg" alt="Logout" data-tooltip-delay-show={500} data-tooltip-id="my-tooltip" data-tooltip-content="Logout" />
                        <label>Logout</label>
                    </span>
                </div>
                <Tooltip id="my-tooltip" />
            </div>
        </div>
    </div>
  )
}

export default SideBar