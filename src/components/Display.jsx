import React, { use } from 'react'
import { Route, Routes } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../../assets/assets'
import { useLocation } from 'react-router-dom'
import { useRef, useEffect } from 'react'



const Display = () => {

  const displayRef = useRef();
  const location = useLocation();
  const isalbum = location.pathname.includes("album");
  const albumid = isalbum ? location.pathname.slice(-1) : "";
  const bgcolor = albumsData[Number(albumid)].bgColor;

  useEffect(() => {
    if (isalbum) {
      displayRef.current.style.background = `linear-gradient(${bgcolor},#121212)`;

    }

    else {
      displayRef.current.style.background = `#121212`
    }
  })
 



  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
        <Routes>
            <Route path="/" element={<DisplayHome/>} />
            <Route path="/album/:id" element={<DisplayAlbum />} />
        </Routes>
      
    </div>
  )
}

export default Display