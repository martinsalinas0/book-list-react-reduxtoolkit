"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../../store/slices/posts";

const PostsShow = () => {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const post = useSelector(({ posts }) => {
    return posts.posts.find((post) => {
      return post.id === parseInt(id);
    });
  });

  const onDeleteClick = () => {
    dispatch(deletePost(id));
    router.push("/");
  };

  const renderCategories = () => {
    return (post?.categories || []).map((category, i) => {
      if (post.categories.length - 1 === i) {
        return <span key={i}>{category}</span>;
      } else {
        return <span key={i}>{category}, </span>;
      }
    });
  };

  return (
    <div className="container text-center mt-4">
      <div className="card justify-content-center" style={{width: '23rem'}}>
        <Link href="/">Back To Index</Link>
      
        <br></br>
        <h3 className="card-title tex">{post?.title}</h3>

        <h6>
          <strong>Categories:</strong> {renderCategories()}
        </h6>
        <p className="card-text text-center"> {post?.content}</p>
        <button
          className="btn btn-danger btn-sm"
          onClick={onDeleteClick}
        >
          Delete Post
        </button>
      </div>
    </div>
  );
};

export default PostsShow;
