import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [
			{
				id: 1,
				title: 'Starting 2021 Right',
				categories: ['health'],
				content: "I'm stating 2021 off the right way!",
			},
			{
				id: 2,
				title: 'Learn to Code',
				categories: ['career'],
				content: "I'm learning to code!",
			},
			{
				id: 3,
				title: 'Get Rich Quick!',
				categories: ['finances'],
				content: 'Save your money!',
			},
		],
	},
	reducers: {
		createPost: (state, action) => {
			state.posts.push(action.payload);
		},
		deletePost: (state, action) => {
			state.posts = state.posts.filter(
				(post) => post.id !== parseInt(action.payload)
			);
		},
	},
});

export const { deletePost, createPost } = postsSlice.actions;

export default postsSlice.reducer;