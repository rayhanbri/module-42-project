

import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navbar/Navbar'

function App() {
  
  return (
    <>
      <Navbar></Navbar>
     
 
 <div className="mainn-contaienr flex text-center">
  <div className="left-container w-[70%]">
   
   <Blogs></Blogs>
  </div>
  <div className="right-container w-[30%] ">
    <h1>Rading Time:  0</h1>
    <h1>Bookmark Count: 0</h1>

  </div>
 </div>

  

    </>
  )
}

export default App
      
      
