import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import '../Post.css'
function Post() {
    return (
        <div className='post'>
            <div className='post__header'>
                <Avatar
                    className="post__avatar"
                    alt='notwdjw'
                    src='https://picsum.photos/200/300'> </Avatar>


                <h3>username </h3>
            </div>

            {/* Header -> avatar + username*/}

            <img className="post__image" src='https://picsum.photos/200/300'>

            </img>
            {/* image */}
            <h4 className='post__text'>  <strong>
                username:
                </strong> caption



            </h4>
            {/* username + caption */}
        </div>
    )
}

export default Post;
