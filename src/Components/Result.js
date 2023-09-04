import React from 'react'
import { useSelector } from 'react-redux'

function Result() {
  const items = useSelector(state=>state.notes.items)
  const search = useSelector(state=>state.notes.searchFilter)
  const selectedColour = useSelector(state=>state.notes.selectedColour)

  console.log(search)  
  
  return (
    <div className='w-full max-h-80 overflow-y-scroll no-scrollbar '>
      <div className='grid grid-cols-2  gap-2 px-2 py-1 '>
      {items.filter(item=>item.colour===selectedColour).filter(item=>{return search.trim()===""? item:item.text.toLowerCase().includes(search.trim())}).map((item)=>(
        <div key={item.id} className={`w-full h-40  bg-${item.colour}-500 px-2 py-1 break-words rounded-sm text-center  overflow-y-scroll no-scrollbar`}>
           {item.text}  
        </div>
      ))}
      </div>
    </div>
  )
}

export default Result
