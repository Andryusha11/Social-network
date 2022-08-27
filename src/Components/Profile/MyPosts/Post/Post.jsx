import React from "react";
import cls from './Post.module.css';

const Post = (props) => {
	return (
			<div>
				<div className={cls.item}>
					<img src="https://mir-s3-cdn-cf.behance.net/projects/404/d81a0a141367499.Y3JvcCwyNTQ5LDE5OTMsMCwyNzc.png" />
					{ props.message }
				</div>
				<div className={cls.likes}>
					{ props.likesCount } likes
				</div>
			</div>
				
	)
}

export default Post;

