import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utils";
import Blogcard from "./Blogcard";
import EmptyState from "../components/EmptyState";



const Bookmarks = () => {

    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        const storedBlogs= getBlogs()
        setBlogs(storedBlogs)
    },[])

    const handleDelete = id =>{
        deleteBlog(id)
        const storedBlogs= getBlogs()
        setBlogs(storedBlogs)
    }

        if (blogs.length<1) return <EmptyState message='No Bookmark available!' address={'/blogs'} label={'Read Blogs'}/>
        
    

    return (
        <div className="grid px-4 sm:px-6 lg:px-12 py-6 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        blogs.map(blog => (
                        <Blogcard handleDelete={handleDelete} deletable={true} key={blog.id} blog={blog} />)
                    )}

                </div>
    );
};

export default Bookmarks;