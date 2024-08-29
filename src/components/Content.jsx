import { useLoaderData } from "react-router-dom";
import placeholderimage from "../assets/404.jpg";
import Markdown from 'react-markdown';
import rehypeRaw from "rehype-raw";



const Content = () => {

    const blog = useLoaderData()
    const { cover_image, title, tags, body_html, url } = blog
    console.log(blog)

    return (
        <div className="mx-auto group transition border-2 p-2  hover:no-underline focus:no-underline bg-gray-50">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || placeholderimage} />
             <div className="flex flex-wrap py-6 gap-2  border-gray-600">
                {
                    tags.map((tag) => <a key={tag.id} className="px-3 py-1 rounded-sm hover:underline bg-violet-600 text-gray-50">#{tag}</a>)
                }

            </div>
            <div className=" space-y-2 ">
                <a href={url} target='_blank' className=" text-2xl font-semibold group-hover:underline group-focus:underline">{title}</a>
                <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>

            </div>

        </div>
    );
};

export default Content;