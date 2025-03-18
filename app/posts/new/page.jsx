'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { createPost } from '../../store/slices/posts';

const PostsNew = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const [title, setTitle] = useState('');
	const [categories, setCategories] = useState('');
	const [content, setContent] = useState('');

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const id = Math.floor(Math.random() * 1000000000);
		dispatch(
			createPost({
				title,
				categories: categories.split(','),
				content,
				id,
			})
		);
		router.push('/');
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<div className='form-group'>
				<label>Title for Post</label>
				<input
					className='form-control'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				></input>
			</div>

			<div className='form-group'>
				<label>Categories</label>
				<input
					className='form-control'
					value={categories}
					onChange={(e) => setCategories(e.target.value)}
				></input>
			</div>

			<div className='form-group'>
				<label>Post Content</label>
				<textarea
					type='text-area'
					className='form-control'
					value={content}
					onChange={(e) => setContent(e.target.value)}
				></textarea>
			</div>

			<button className='btn btn-primary' type='submit'>
				Submit
			</button>
		</form>
	);
};

export default PostsNew;