import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import sarah from './image/sarah.jpg';
import jeya from './image/friends.jpg';
import kudikaran from './image/kudikaran.jpg';
import saran from './image/teddy.jpg';
import tamil from './image/tamil.png';
import santh from './image/santh.png';
import banu from './image/banu.png';
import UserCard from './UserCard';
function Blogs () {
    return (
        <div className='ui comments'>
        <h1 style={{color:'red', fontSize:'15px'}}>
        <q><ins>DISCLAIMER:</ins> Following data used for entertaiment purpose only  &#128056; </q>
        </h1>
        <UserCard name = 'Sarah'>
            <SingleComment 
                picture = {sarah}
                name = 'Sarah'
                date = 'Today at 5:00PM'
                text = 'Hi friends, How are you?'
            />
	    </UserCard>
        <UserCard name='Thanam'>
            <SingleComment
                picture = {kudikaran}
                name = 'Thanam'
                date = 'Today at 5:10PM'
                text = 'I&apos;m fine, Can you give me your number? &#128513;'
            />
        </UserCard>
      
        <UserCard name='Thanam'>
            <SingleComment
                picture = {saran}
                name = 'Saran'
                date = 'Today at 6:00PM'
                text = 'Who are you? You don&apos;t giveup even an one girl'
            />
        </UserCard>    
        <UserCard name = 'Thanam'>    
            <SingleComment
                picture = {kudikaran}
                name = 'Thanam'
                date = 'Today at 6:01PM'
                text = 'So what? Who the hell are you? '
            />
        </UserCard>
        <UserCard name = 'Saran'>
            <SingleComment
                picture = {saran}
                name = 'Saran'
                date = 'Today at 6:02PM'
                text = 'I&apos;m her brother &#128544;'
            />
	    </UserCard>
	    <UserCard name = 'Jeya'>
            <SingleComment
                picture = {jeya}
                name = 'Jeya'
                date = 'Today at 6:10PM'
                text = 'That&apos;s why he was called as Facebook mama &#128515;&#128515;&#128515;'
            />
        </UserCard>
        <UserCard name = 'Chat Guru Jijo'>
        <SingleComment
            picture = {banu}
            name = 'Chat Guru Jijo'
            date = 'Today at 6:15PM'
            text = 'Ivan antha thenavanthan thane &#128517;'
        />
        </UserCard>
        <UserCard name = 'Jeya'>
            <SingleComment
                picture = {jeya}
                name = 'Jeya'
                date = 'Today at 6:17PM'
                text = 'Ama...&#129315;'
            />
        </UserCard>
        <UserCard name = 'Tamil'>
            <SingleComment
                picture = {tamil}
                name = 'Tamil'
                date = 'Today at 6:20M'
                text = 'Ivan oru naal adipattu saga poranya..'
            />
        </UserCard>
        <UserCard name = 'Santhosh'>
            <SingleComment
                picture = {santh}
                name = 'Santhosh'
                date = 'Today at 6:21PM'
                text = 'Yov Mangalam, konjamavathu vayasukku thaguntha mathiri nanthukoya...&#129318;'
            />
        </UserCard>
        <UserCard name='Thanam'>
            <SingleComment
                picture = {kudikaran}
                name = 'Thanam'
                date = 'Today at 6:30PM'
                text = '&#128515;&#128515;&#128515;'
            />
        </UserCard>
        </div>
    )
};


ReactDOM.render (
    <Blogs/>,
    document.getElementById('root')
)