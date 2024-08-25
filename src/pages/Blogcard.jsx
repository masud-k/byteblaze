
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import placeholderimage from "../assets/404.jpg"

const Blogcard = ({ blog, deletable }) => {

    const { cover_image, title, description, published_at, id } = blog

    return (
        <>
        <Link to={`/blog/${id}`} className="max-w-7xl transition border-2 hover:scale-105 border-primary hover:border-secondary hover:no-underline focus:no-underline bg-gray-50">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || placeholderimage} />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl text-black font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <span className="text-xs text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                <p className='text-black'>{description}</p>
            </div>
        </Link>
        {deletable && <div className='absolute bg-primary p-3 ml-3 rounded-full hover:bg-secondary group cursor-pointer hover:scale-105 -right-4 '><MdDelete size={20} className='text-secondary group-hover:text-primary' /></div>}
        </>
        
    );
};

export default Blogcard;