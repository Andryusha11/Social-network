import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Music from './Components/Music/Music';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Profile from './Components/Profile/Profile';
import Setting from './Components/Setting/Setting';

const App = (props) => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<div className='app-wrapper__main'>
					<Routes>
						<Route path='/Profile/' element={<Profile profilePage={props.state.profilePage} 
																				addPost={ props.addPost }
																				updateNewPostText={ props.updateNewPostText }/>} />
						<Route path='/Dialogs/' element={<Dialogs state={props.state.dialogsPage}  />} />
						<Route path='/Music/' element={<Music/>} />
						<Route path='/News/' element={<News/>} />
						<Route path='/Setting/' element={<Setting/>} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App;
