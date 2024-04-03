import React from 'react'
import { useContext } from 'react'
import {UserContext} from './MyContext'
const Profile = () => {
    const {Input, setInput} = useContext(UserContext)
  return (
    <div>
      <h1 className='text-black text-2xl'>Hey Your Data is {Input}</h1>
      <button onClick={() => setInput("Your Data has changed")}>Change The Data </button>
    </div>
  )
}

export default Profile
