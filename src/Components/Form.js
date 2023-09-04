import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote, changeSelectedColor } from '../redux/notes/noteSlice'

function Form() {
  const [colour,setColour]=useState("green")
  const [text,setText]=useState('')
  const colours = ["green","red","blue","purple","orange"]
  const dispatch = useDispatch()

  const changeColour= (colour)=>{
      setColour(colour)
      dispatch(changeSelectedColor(colour))
  }

  const submitHandler = (e) =>{
    if(!text) return
    e.preventDefault()
    dispatch(addNote({id:nanoid(),text:text,colour:colour}))
    setText('')
  }
  return (
    <form className='flex flex-col  w-full shadow-sm px-4 py-4' onSubmit={submitHandler}>
        <textarea type="text" className="px-2 py-4 h-40 resize-none" placeholder='Take a note' value={text} onChange={(e)=>setText(e.target.value)}></textarea>
        <div className='flex justify-between items-center mt-3'>
            <ul className='flex gap-2'>{
              colours.map((col,index)=>(
                <li key={index}  onClick={()=>changeColour(col)} className={`h-4 w-4 hover:cursor-pointer rounded-full bg-${col}-500 flex items-center justify-center text-white`}>{colour===col && "✓"}</li>
              ))}
            </ul>
            <button type='submit' className='bg-green-500 px-2 py-1 border-none outline-none text-white w-24 rounded-full'>Add</button>
        </div>
    </form>
  )
}

export default Form
