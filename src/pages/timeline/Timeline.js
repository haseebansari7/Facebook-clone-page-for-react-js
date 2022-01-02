import './timeline.css';
import Topbar from './../../component/topbar/Topbar';
import Timelinesidebar from './../../component/timelineSidebar/Timelinesidebar';
import Timelinerightbar from './../../component/timelineRightbar/TimelineRightbar';


export default function Timeline() {
    return (
        <>
            <Topbar />
            <div className="check">
                <div className="timelineContainerTop">
                    <div className="timelineCoverDpContainer">
                        <div className="profileCover">
                            <img src="assets/cover1.jfif" alt="" className="timelineCoverImg" />
                            <img src="assets/dpimage.jfif" alt="" className="timelineUserImg" />
                            <div className="timelineInfo">
                                <h4 className="timelinefoName">Abhi Shek ki bv</h4>
                                <a href="#" className="timelinefoDesc">Add Bio</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="timelineContainerbottom">
                    <Timelinesidebar />
                    <Timelinerightbar />
                </div>
            </div>
        </>
    )
}
