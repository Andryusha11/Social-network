import React from 'react';
import cls from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';





const Dialogs = (props) => {

	let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
	
	let messagesElements = props.state.messages.map(m => <Message message={m.message} />)

	let newMessageElement = React.createRef();

	let sendMessage = () => {
		let newMessage = newMessageElement.current.value;
		alert(newMessage);
	}
	return (
		<div className={cls.dialogs}>
			<div className={cls.dialogs__users}>
				{ dialogsElements }
			</div>
			<div>
				<div className={cls.dialogs__messages}>
					{ messagesElements }
				</div>
				<div>
					<div><textarea ref={ newMessageElement }></textarea></div>
					<div><button onClick={ sendMessage }>Отправить</button></div>
				</div>
			</div>
			
		</div>
	)
}

export default Dialogs;