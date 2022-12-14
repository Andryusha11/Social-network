import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import cls from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	return (
		<main>
			<ProfileInfo />
			<MyPosts posts={props.profilePage.posts}
						newPostText={ props.profilePage.newPostText }
						updateNewPostText={ props.updateNewPostText }
						addPost={ props.addPost } />
		</main>
	)
}

export default Profile;