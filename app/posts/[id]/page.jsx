'use client';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from '../../store/slices/posts';

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
		router.push('/');
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
		<div>
			<Link href='/'>Back To Index</Link>
			<br></br>
			<br></br>
			<button
				className='btn btn-danger pull-xs-right'
				onClick={onDeleteClick}
			>
				Delete Post
			</button>
			<br></br>
			<br></br>
			<h3>{post?.title}</h3>
			<h6>
				<strong>Categories:</strong> {renderCategories()}
			</h6>
			<p>{post?.content}</p>
		</div>
	);
};

export default PostsShow;