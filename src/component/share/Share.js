import './share.css'
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"

export default function Share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="assets/dpimage.jfif" alt="dpimage" className='shareProfileImg' />
                    <input type="text" placeholder="what's in you'r mind Sfak"
                        className='shareInput'
                    />
                </div>
                <hr className="shareHr" />
                <div className="shareButtom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className='shareIcon' />
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className='shareIcon' />
                            <span className="shareOptionText">Feeling</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className='shareIcon' />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            < EmojiEmotions htmlColor="goldenrod" className='shareIcon' />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
