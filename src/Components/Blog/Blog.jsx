import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog,handleBookMark}) => {
  // console.log(blog)
  // console.log(handleBookMark)
  const {cover,title,author_img,author} = blog;
  return (
    <div>
      
      <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={cover}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className="author flex justify-around items-center">
      <h3>{author}</h3>
      <img className='w-16' src={author_img} alt="" />
      <button  onClick={()=>handleBookMark(blog)}><FaBookmark size={30 }/></button>
    </div>
    <h2 className="card-title">{title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="flex">
      {
        blog.hashtags.map(has => <p > {has} </p>)
      }
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">mark as read</button>
    </div>
  </div>
</div>
      
    </div>
  );
};

export default Blog; 