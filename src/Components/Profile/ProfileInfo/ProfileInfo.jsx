import React from "react";
import cls from './ProfileInfo.module.css'

const ProfileInfo = () => {
	return (
		<div>
			<div className={cls.main__background}>
				<img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' />
			</div>
			<div className={cls.main__photo_description_profile}>
				<img src='https://www.imgonline.com.ua/examples/bee-on-daisy.jpg' />
				<div className={cls.main__description_profile}>
					Andrew learnts react Andrew learnts react Andrew learnts react Andrew learnts react Andrew learnts react Andrew learnts react Andrew learnts react 
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo;