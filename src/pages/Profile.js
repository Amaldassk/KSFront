import React from 'react'
import UserProfile from '../components/profile/UserProfile'
import { useSelector } from 'react-redux'
import ProductBanner from '../components/products/ProductBanner';

const Profile = () => {

  const userData = useSelector(state=>state.auth?.userData);

  return (
    <>
    <ProductBanner title="Admin" mainthread="Home" thread="Profile"/>
    <div className='main-section'>
      <UserProfile userData={userData}/>
    </div>
    </>
  )
}

export default Profile