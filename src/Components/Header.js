import React from 'react'
import { useDispatch } from 'react-redux'
import { search } from '../redux/notes/noteSlice'

function Header() {
  const dispatch = useDispatch()
  const searchHandler = (e) =>{
    dispatch(search(e.target.value))
  }
  return (
    <div>
      <h1 className='text-xl text-center text-gray-500 font-bold mb-4'>Notes App</h1>
      <input  className='w-80 border-2 border-gray-600 outline-2 px-4 py-2 rounded-full ' type="text" placeholder="Search.." onChange={searchHandler}/>
    </div>
  )
}

export default Header
