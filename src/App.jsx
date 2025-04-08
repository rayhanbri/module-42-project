

import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navbar/Navbar'

function App() {
   const  [bookmark,setBookmark] =useState([]);
   const [readingCount,setReadingCount]=useState(0);

  const handleBookMark = (blog) =>{
   setBookmark([...bookmark,blog])
  }
  // console.log(bookmark);

  const  handleMarkAsRead = (time,id) =>{
    const  newTime = readingCount + time;
    setReadingCount(newTime);
    // console.log(id)
    handleRemoveFromBookmarked(id)
    
  }
  //  console.log(readingCount)

  const handleRemoveFromBookmarked =(id) =>{
    const remainingBookMark = bookmark.filter(mark => mark.id !== id)
  //  console.log(remainingBookMark)
  setBookmark(remainingBookMark)
  }
  return (
    <>
      <Navbar></Navbar>
     
 
 <div className="mainn-contaienr flex text-center">
  <div className="left-container w-[70%]">
   
   <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
  </div>
  <div className="right-container w-[30%] ">
    <h1>Rading Time:  {readingCount}</h1>
    <h1>Bookmark Count:{bookmark.length}</h1>
    {
      bookmark.map(book => <p key={book.id}>{book.title}</p>)
    }

  </div>
 </div>

  

    </>
  )
}

export default App
      
      
