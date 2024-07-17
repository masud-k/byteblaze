import { useEffect, useState } from "react";
import { getBlogs } from "../utils";
import Blogcard from "./Blogcard";



const Bookmarks = () => {

    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        const storedBlogs= getBlogs()
        setBlogs(storedBlogs)
    }
    ,[])
    return (
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        blogs.map((blog) => <Blogcard key={blog.id} blog={blog} />)
                    }

                </div>
    );
};

export default Bookmarks;