import React, { useState } from "react";
import "./PostList.css";

const PostList = ({ data }) => {
  const postsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="post-list">
      {currentPosts.map((post) => (
        <div key={post.id} className="post">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}

      <div className="pagination">
        {Array.from(
          { length: Math.ceil(data.length / postsPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default PostList;
