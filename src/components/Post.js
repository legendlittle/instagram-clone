import React from 'react'
import Avatar from './Avatar'
function Post() {
    return (
        <div>
            <h3>@kimbuckets_lovesdaayyviidd  <Avatar/></h3>
           

            {/* Header -> avatar + username*/}

            <img className="post__image" src='https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/90150927_585680332048206_8478256487297187840_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=EmPwslPaW70AX__6zhg&_nc_ht=scontent-lax3-1.xx&oh=246c74a04f81de247b61fb01ad8fb768&oe=5FF6D5B2'>

            </img>
            {/* image */}
            <h4>    @kimbuckets_lovesdaayyviidd: Look at how cute I am! :D #nofilter

            </h4>
            {/* username + caption */}
        </div>
    )
}

export default Post;
