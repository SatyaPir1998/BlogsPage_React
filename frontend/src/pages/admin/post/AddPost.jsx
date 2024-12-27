import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from "react-router-dom"
import {useSelector} from "react-redux"
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import { usePostBlogMutation } from '../../../redux/features/blogs/blogsApi';

const AddPost = () => {
  const editorRef = useRef(null)
  const [title, setTitle] = useState("");
  const [coverImg, setCoverImg] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const [postBlog, {isloading}] = usePostBlogMutation()

  const {user} = useSelector((state) => state.auth);

  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editorjs' ,
      onReady: () => {
        editorRef.current = editor;
      },
      autofocus: true,
      tools: {
        header: {
          class: Header, 
          inlineToolbar: true,
        }, 
        list: {
          class: List,
          inlineToolbar: true,
        },
      }
    })
    return () => {
      editor.destroy();
      editorRef.current = null;
    }
  }, [])

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const content = await editorRef.current.save();
      const newPost = {
        title,
        coverImg,
        content,
        description: metaDescription,
        author: user?._id,
        rating
      }

      //console.log(newPost);
      const response = await postBlog(newPost).unwrap();
      console.log(response);
      alert("Blog is posted successfully!")
      navigate('/')

      
    } catch (error) {
      console.error("Failed to submit post", error);
      setMessage("Failed to submit post. Please try again")
    }

  }
  return (
    <div className='bg-white md:p-8 p-2'>
      <h2 className='text-2xl font-semibold'>Create A New Blog Post</h2>
      <form
       onSubmit={handleSubmit}
       className='space-y-5 pt-8'>
         <div className='space-y-4'>
           <label className='font-semibold text-xl'>Blog Title: </label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
              placeholder=' Blog Title here...' required 
            />
         </div>

        {/* blog details */}
        <div className='flex flex-col md:flex-row justify-between items-start gap-4'>
           {/* left side */}
          <div className='md:w-2/3 w-full'>
            <p className=" font-semibold text-xl mb-5">Content Section</p>
            <p className="text-xs italic">Write your post here...</p>
            <div id="editorjs"></div>
          </div>

           {/* right side */}
          <div className='md:w-1/3 w-full border p-5 space-y-5'>
           <p className='text-xl font-semibold'>Choose Blog Format</p>

           {/* for images */}
            <div className='space-y-4'>
             <label className='font-semibold'>Blog Cover:</label>
             <input 
               type="text" 
               value={coverImg}
               onChange={(e) => setCoverImg(e.target.value)}
               className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
               placeholder="https://image/cover-photo/link.png......"
              />
            </div>

            {/* category */}
            <div className='space-y-4'>
             <label className='font-semibold'>Category:</label>
             <input 
               type="text" 
               value={category}
               onChange={(e) => setCategory(e.target.value)}
               className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
               placeholder="AI/Cloud Computing/somethig"
              />
            </div>
             
            {/* metadescription */}
            <div className="space-y-3">
              <label className=" font-semibold">Meta Data: </label>
              <textarea
                type="text"
                cols={4}
                rows={4}
                value={metaDescription}
                className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
                onChange={(e) => setMetaDescription(e.target.value)}
                placeholder="Add Meta Data to increase SEO performance..."
                required
              />
            </div>

            {/* rating */}
            <div className="space-y-3">
              <label className=" font-semibold">Rating: </label>
              <input
                type="number"
                value={rating}
                className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
                onChange={(e) => setRating(e.target.value)}
                placeholder="add rating: 5"
                required
              />
            </div>
           
            {/* author */}
            <div className="space-y-3">
              <label className=" font-semibold">Author: </label>
              <input
                type="text"
                value={user.username}
                className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
                placeholder={`{user.username} (not editable)`}
                disabled
              />
            </div>
          </div>
        </div>


        {
          message && <p className='text-red-500'>{message}</p>
        }
        <button type="submit"
        disabled={isloading}
        className='w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md'
        >Add New Blog</button>
      </form>
    </div>
  );
};

export default AddPost;
