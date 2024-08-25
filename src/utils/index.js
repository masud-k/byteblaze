import toast from "react-hot-toast"
export const getBlogs = () => {
    let blogs = []
    const storeBlogs = localStorage.getItem('blogs')

    if (storeBlogs) {
        blogs = JSON.parse(storeBlogs)
    }

    return blogs

}

export const saveBlog = blog => {
    let blogs = getBlogs()
    const isExist = blogs.find(b => b.id === blog.id)

    if (isExist) {
       return toast.error("Blog already exists")
    }

    blogs.push(blog)
    localStorage.setItem('blogs', JSON.stringify(blogs))
    toast.success("Blog saved successfully")
}

export const deleteBlog = id => {
    let blogs = getBlogs()
    const updatedBlogs = blogs.filter(b => b.id!== id)
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs))
    toast.success("Blog deleted successfully")
}