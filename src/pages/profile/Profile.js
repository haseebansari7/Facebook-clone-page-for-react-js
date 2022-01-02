import "./profile.css"
import Topbar from '../../component/topbar/Topbar';
import Sidebar from '../../component/sidebar/Sidebar';
import Feed from '../../component/feed/Feed';
import Right from '../../component/rightbar/Right';

export default function Profilepage() {

    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="assets/cover1.jfif" alt="" className="profileCoverImg" />
                            <img src="assets/dpimage.jfif" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Abhi Shek ki bv</h4>
                            <span className="profileInfoDesc">Hellow Miss Abhi Shek</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        {<Right profile />}{/*is just used for timeline page  */}
                    </div>
                </div>
            </div>
        </>
    );
}