import './timelineshare.css'
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"

export default function Share() {
    return (
        <div className='shareTimeline'>
            <div className="shareTimelineWrapper">
                <div className="shareTimelineTop">
                    <img src="assets/dpimage.jfif" alt="dpimage" className='shareTimelineProfileImg' />
                    <input type="text" placeholder="what's in you'r mind Sfak"
                        className='shareTimelineInput'
                    />
                </div>
                <hr className="shareTimelineHr" />
                <div className="shareTimelineButtom">
                    <div className="shareTimelineOptions">
                        <div className="shareTimelineOption">
                            <PermMedia htmlColor="tomato" className='shareTimelineIcon' />
                            <span className="shareTimelineOptionText">Photo or Video</span>
                        </div>
                        <div className="shareTimelineOption">
                            <Label htmlColor="blue" className='shareTimelineIcon' />
                            <span className="shareTimelineOptionText">Feeling</span>
                        </div>
                        <div className="shareTimelineOption">
                            <Room htmlColor="green" className='shareTimelineIcon' />
                            <span className="shareTimelineOptionText">Location</span>
                        </div>
                        <div className="shareTimelineOption">
                            < EmojiEmotions htmlColor="goldenrod" className='shareTimelineIcon' />
                            <span className="shareTimelineOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareTimelineButton">shareTimeline</button>
                </div>
            </div>
        </div>
    )
}
