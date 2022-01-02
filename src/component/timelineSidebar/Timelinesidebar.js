import './timelinesidebar.css'

export default function Right() {

    // inner component create to timelline page


    const ProfileRightbar = () => {
        return (
            <>
                <div className="timelineSidebarInfo">

                    <h4 className="timelineSidebarTitle">Intro</h4>
                    <div className="timelineSidebarInfoItem">
                        <span className="timelineSidebarInfoKey">City:</span>
                        <span className="timelineSidebarInfoValue">Jhannum</span>
                    </div>
                    <div className="timelineSidebarInfoItem">
                        <span className="timelineSidebarInfoKey">From:</span>
                        <span className="timelineSidebarInfoValue">Bhangistan</span>
                    </div>

                    <div className="timelineSidebarInfoItem">
                        <span className="timelineSidebarInfoKey">Relationship:</span>
                        <span className="timelineSidebarInfoValue">mjhy khud nhi pta ktna ha</span>
                    </div>
                    <div className="timelineSidebarinfoBtns">
                        <button className='timelineSidebarInfoBtn'>Edit Details</button>
                        <button className='timelineSidebarInfoBtn'>Add Hobbies</button>
                        <button className='timelineSidebarInfoBtn'>Add Featured</button>
                    </div>
                </div>

                <h4 className="timelineSidebarTitle">Photos</h4>
                <div className="timelineSidebarPhotos">
                    <div className="timelineSidebarPhoto">
                        <img src="assets/profile1.jpg" alt="" className="timelineSidebarphotoImg" />
                    </div>
                    <div className="timelineSidebarfollowing">
                        <img src="assets/profile2.jfif" alt="" className="timelineSidebarphotoImg" />
                    </div>
                    <div className="timelineSidebarfollowing">
                        <img src="assets/profile3.jpg" alt="" className="timelineSidebarphotoImg" />
                    </div>
                    <div className="timelineSidebarfollowing">
                        <img src="assets/profile1.jpg" alt="" className="timelineSidebarphotoImg" />
                    </div>
                    <div className="timelineSidebarfollowing">
                        <img src="assets/profile2.jfif" alt="" className="timelineSidebarphotoImg" />
                    </div>
                    <div className="timelineSidebarfollowing">
                        <img src="assets/profile3.jpg" alt="" className="timelineSidebarphotoImg" />
                    </div>
                </div>

                <h4 className="timelineSidebarTitle">Friends</h4>
                <div className="timelineSidebarFollowings">
                    <div className="timelineSidebarfollowing">
                        <img src="assets/profile1.jpg" alt="" className="timelineSidebarFollowingImg" />
                        <span className="timelineSidebarFollowingName">jhon cena</span>
                    </div>
                    <div className="timelineSidebarfollowing">
                        <img src="assets/profile2.jfif" alt="" className="timelineSidebarFollowingImg" />
                        <span className="timelineSidebarFollowingName">jhon cena</span>
                    </div>
                    <div className="timelineSidebarfollowing">
                        <img src="assets/profile3.jpg" alt="" className="timelineSidebarFollowingImg" />
                        <span className="timelineSidebarFollowingName">jhon cena</span>
                    </div>
                    <div className="timelineSidebarfollowing">
                        <img src="assets/profile1.jpg" alt="" className="timelineSidebarFollowingImg" />
                        <span className="timelineSidebarFollowingName">jhon cena</span>
                    </div>
                    <div className="timelineSidebarfollowing">
                        <img src="assets/profile2.jfif" alt="" className="timelineSidebarFollowingImg" />
                        <span className="timelineSidebarFollowingName">jhon cena</span>
                    </div>
                    <div className="timelineSidebarfollowing">
                        <img src="assets/profile3.jpg" alt="" className="timelineSidebarFollowingImg" />
                        <span className="timelineSidebarFollowingName">jhon cena</span>
                    </div>
                </div>

            </>
        )
    }

    return (
        <div className="timelineSidebar">
            <div className="timelineSidebarWrapper">
                <ProfileRightbar />
            </div>
        </div>
    )

}
