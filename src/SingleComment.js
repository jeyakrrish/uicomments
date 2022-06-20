import React from 'react';
// import sarah from './image/sarah.jpg';

const SingleComment = (probs) => {           

	return (
		<div className='comment'>
			<a href={probs.picture} className='avatar'><img src={probs.picture} alt='profile picture'/></a>
					<div className='content'>
						<a className='author' href='/'>{probs.name}</a>
						<div className='metadata'><span className='date'>{probs.date}</span></div>
						<div className='text'>{probs.text}</div>       
			</div>
			</div>
		)
}

export default SingleComment;