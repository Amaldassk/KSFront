import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import logo from '../../assets/logo-ks.png'
import logoWhite from '../../assets/logo-ks-white.png'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../redux/slice/authSlice';
import {Transition} from '@headlessui/react';
import useHandleOutsideClick from '../../hooks/useHandleOutsideClick';
import { ImLocation2 } from "react-icons/im";
import { IoIosMail } from "react-icons/io";
import { MdPhoneEnabled } from "react-icons/md";
import useHeaderScroll from '../../hooks/useHeaderScroll';

const Navbar = ({userData}) => {

  const [loggingOut, setLoggingOut] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

  const dispatch = useDispatch();

  const headerFixed = useHeaderScroll();
  console.log(headerFixed,"headerFixed");

  const logoutHandler = async() => {
    setLoggingOut(true);
    await dispatch(logoutUser());
    setLoggingOut(false);
  }

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  }

  useHandleOutsideClick(dropdownRef,()=>setShowDropdown(false));

  return (
    <nav className={`fixed w-full font-ksN top-0 z-20 flex justify-center flex-wrap md:items-center md:justify-between ${headerFixed ? 'bg-[rgb(255,255,255)]/95 shadow-lg' : 'bg-transparent'}`}>
        <div className={`grid grid-cols-12 gap-4 w-full p-3 border-b md:px-10 ${headerFixed ? 'border-[rgb(0,0,0)]/20' : 'border-[rgb(255,255,255)]/20'}`}>
            <div className="col-span-6 flex justify-between">
              <div className='flex justify-center items-center'>
                <ImLocation2 className='text-ksC3 mr-1'/>
                <p className={`text-base ${headerFixed ? 'text-ksC5' : 'text-white'}`}>Thundathumkadavu, Varapuzha P O, Kochi</p>
              </div>
              <div className='flex justify-center items-center'>
                <IoIosMail className='text-ksC3 mr-1'/>
                <p className={`text-base ${headerFixed ? 'text-ksC5' : 'text-white'}`}>info@ksindustries.com</p>
              </div>
            </div>
            <div className="col-span-6 flex justify-around">
              <div className='flex justify-center items-center'>
                <MdPhoneEnabled className='text-ksC3 mr-1'/>
                <p className={`text-base ${headerFixed ? 'text-ksC5' : 'text-white'}`}>+1 234 056 78 90</p>
              </div>
              <div className='flex justify-center items-center'>
                <button type="button" className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full" onClick={handleProfileClick}>
                  <img src={userData.avatar} alt="profile" className="h-8 w-8 rounded-full object-cover"/>
                </button>
                <Transition
                show={showDropdown}
                enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
                >
                {()=>(
                  <div ref={dropdownRef} className="absolute right-0 top-10 mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    <div className="py-1" role="none">
                      <div className="flex flex-col items-center">
                        <img
                          src={userData.avatar}
                          alt="profile"
                          className="mb-2 h-16 w-16 rounded-full object-cover"
                        />
                        <div className="text-sm font-semibold text-gray-700 hover:underline">
                          <Link to={`/profile`} onClick={handleProfileClick}>{userData.name}</Link>
                        </div>
                        <div className="text-sm text-gray-500">{userData.email}</div>
                      </div>
                    </div>
                    <hr className="mt-2" />
                    <div className="flex justify-center">
                      <button type="button" className="block w-full px-4 py-2  text-left text-sm text-red-400 hover:cursor-pointer hover:text-red-600" role="menuitem"
                        onClick={()=>logoutHandler()} disabled={loggingOut}>Logout</button>
                    </div>
                  </div>
                )}
                </Transition>
              </div>
            </div>
        </div>
        <div className='w-full p-3 flex justify-between md:px-10'>
          <Link to='/' className="hidden md:inline-block">
            <img className="w-52" src={`${headerFixed ? logo : logoWhite}`} alt='ks industries'/>
          </Link>
          <div className="relative flex justify-end md:w-36">
            <ul className='flex'>
              <Link to="/products" className={`mx-1 whitespace-nowrap px-1 cursor-pointer ${headerFixed ? 'text-ksC5' : 'text-white'}`}>Products</Link>
              <Link to="/contact" className={`mx-1 whitespace-nowrap px-1 cursor-pointer ${headerFixed ? 'text-ksC5' : 'text-white'}`}>Contact Us</Link>
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navbar