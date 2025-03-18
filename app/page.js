"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Home() {
  const posts = useSelector((state) => state.posts.posts);

  const renderPosts = () => {
    if (posts.length > 0) {
      return posts.map((post) => {
        return (
          <li className="list-group-item" key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        );
      });
    } else {
      return <div>No posts to show</div>;
    }
  };

  return (
    <main className={styles.main}>
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" href="/posts/new">
            Add a Post
          </Link>
        </div>
        <br></br>
        <div className="container">
          <div className="card">
            <h3 className="card-title">Posts</h3>
            <ul className="list-group">{renderPosts()}</ul>
          </div>
        </div>
      </div>
    </main>
  );
}
