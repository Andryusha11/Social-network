import {rerenderEntireTree} from '../render'
let state = {
	profilePage: {
		posts: [
			{id:1, message: 'Hi, how are you?', likesCount: 12},
			{id:2, message: 'It is my first post', likesCount: 11},
			{id:3, message: 'It is my second post', likesCount: 11},
		],
		newPostText: 'it-kamasutra.com',
	},
	
	dialogsPage: {
		dialogs: [
			{id: 1, name: 'Sergiy'},
			{id: 2, name: 'Yulia'},
			{id: 3, name: 'Masha'},
			{id: 4, name: 'Denis'},
			{id: 5, name: 'Brother'},
			{id: 6, name: 'Dad'},
		],
		messages: [
			{id: 1, message: 'Hi'},
			{id: 2, message: 'How are you?'},
			{id: 3, message: 'Yo, i am fine'},
		],
	},
	
};

export let addPost = (postMessage) => {
	let newPost = {
		id: 4,
		message: postMessage,
		likesCount: 0,
	};
	state.profilePage.posts.push(newPost);
	rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
};


export default state;