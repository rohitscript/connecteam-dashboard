import React from 'react'
import { IoMdSearch } from "react-icons/io";


const Search = () => {
  return (
    <div className='search flex items-center border rounded-xl px-2 border-grey-900 bg-white focus:outline-none '>
        <input type='text' className='border-none focus:outline-none' name='search' id='search' placeholder='Search Anything'/>
        <IoMdSearch />

    </div>
  )
}

export default Search