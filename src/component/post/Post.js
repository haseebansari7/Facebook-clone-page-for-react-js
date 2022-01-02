import './post.css'
import { MoreVert } from '@material-ui/icons'
import { Users } from '../../dummyData'
import { useState } from 'react';

export default function Post({ post }) {
    // console.log(post)
    const [like, setLike] = useState(post.like);
    const [isLike, setIsLike] = useState("")

    const likeHandler = () => {
        // setLike(like + 1);
        setLike(isLike ? like - 1 : like + 1);
        setIsLike(!isLike)
    }
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="alfhal" className="postProfileImg" />
                        <span className="postUserName">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>

                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>

                <div className="postBottm">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="likeIcon" onClick={likeHandler} />
                        <img src="/assets/heart.png" alt="" className="likeIcon" onClick={likeHandler} />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div >

    )
}
