import React from 'react';
import { Link } from 'react-router-dom';
import placeholderimage from "../assets/404.jpg"

const Blogcard = ({ blog }) => {

    const { cover_image, title, description, published_at, id } = blog

    return (
        <Link to={`/blog/${id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || placeholderimage} />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <span className="text-xs text-gray-600">published_at</span>
                <p>{description}</p>
            </div>
        </Link>
    );
};

export default Blogcard;