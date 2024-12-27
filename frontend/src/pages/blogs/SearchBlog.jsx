import React from 'react'

const SearchBlog = ({search, handleSearchChange, handleSearch}) => {
  const handleKeyPress = (event) => {
    if(event.key === "Enter"){
      handleSearch()
    }
  }
  return (
    <div className='w-full flex'>
        <input type="text"
        value={search}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
        placeholder='Search here...'
        className='py-2 px-4 mr-5 w-full bg-[#f7f8f9] focus:outline-none focus:border'
        />
        <button 
        onClick={handleSearch}
        className='bg-[#1E79BE] px-4 py-2 text-white'>Search</button>

    </div>
  )
}

export default SearchBlog
