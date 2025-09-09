import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ id, image, date, author, comments, title }) => {
  return (
    <div className="bg-[#f1eae6] rounded-md overflow-hidden shadow-md max-w-sm">
      <Link to={`/blog/${id}`} aria-label={`Read more about ${title}`}>
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-60 object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-2 right-2 bg-[#a87e6b] text-white text-xs px-3 py-1 rounded">
            {new Date(date).toLocaleDateString()}
          </div>
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-center text-sm text-[#a87e6b] mb-2">
          <span className="mr-4 flex items-center gap-1">
            <span role="img" aria-label="admin">👤</span> {author}
          </span>
          <span className="flex items-center gap-1">
            <span role="img" aria-label="comments">💬</span> {comments} Comments
          </span>
        </div>

        <Link to={`/blog/${id}`} aria-label={`Read more about ${title}`}>
          <h3 className="text-xl font-semibold text-gray-900 hover:text-[#a87e6b] transition duration-200">
            {title}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
