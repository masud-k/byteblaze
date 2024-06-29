import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div>
      <div className="hero bg-base-200 ">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold">Welcome to ByteBlaze</h1>
            <p className="py-6">
              ByteBlaze is a cutting-edge technology web page dedicated the latest news, trends, and insights in the tech industry.
            </p>
            <div className="flex gap-2 justify-center">
              <Link to='/blogs'>Read blogs</Link>
              <Link to='/bookmarks'>Bookmarks</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;