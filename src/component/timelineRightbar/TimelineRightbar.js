import './timelinerightbar.css'
import Timelineshare from './../share/Share';
import Post from './../post/Post';
import { Posts } from '../../dummyData'
export default function Timelinerightbar() {
    return (
        <div className='TimelinePosting'>
            {/* <div className="feedWraper"> */}
            <Timelineshare />
            {
                Posts.map((p) => {
                    return (
                        <Post
                            key={p.id} post={p}
                        />
                    )
                })
            }
            {/* </div> */}
        </div>
    )
}