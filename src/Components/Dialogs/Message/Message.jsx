import React from "react";
import cls from './Message.module.css'

const Message = (props) => {
	return (
		<div className={cls.dialogs__message}>{props.message}</div>
	)
}

export default Message;