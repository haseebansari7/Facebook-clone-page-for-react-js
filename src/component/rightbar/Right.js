import './right.css'
import { Users } from '../../dummyData';
import Online from '../online/Online';
export default function Right({ profile }) {

    // inner component create to timelline page
    // const TimelineRightbar = () => {
    //     return (
    //         <>
    //             <h4 className="rightbarTitle">User Information</h4>
    //             <div className="rightbarInfo">
    //                 <div className="rightbarInfoItem">
    //                     <span className="rightbarInfoKey">City:</span>
    //                     <span className="rightbarInfoValue">Jhannum</span>
    //                 </div>
    //                 <div className="rightbarInfoItem">
    //                     <span className="rightbarInfoKey">From:</span>
    //                     <span className="rightbarInfoValue">Bhangistan</span>
    //                 </div>

    //                 <div className="rightbarInfoItem">
    //                     <span className="rightbarInfoKey">Relationship:</span>
    //                     <span className="rightbarInfoValue">mjhy khud nhi pta ktna ha</span>
    //                 </div>
    //             </div>
    //             <h4 className="RightbarTitle">User Friends</h4>
    //             <div className="rightbarFollowings">
    //                 <div className="rightbarfollowing">
    //                     <img src="assets/profile1.jpg" alt="" className="rightbarFollowingImg" />
    //                     <span className="rightbarFollowingName">jhon cena</span>
    //                 </div>
    //                 <div className="rightbarfollowing">
    //                     <img src="assets/profile2.jfif" alt="" className="rightbarFollowingImg" />
    //                     <span className="rightbarFollowingName">jhon cena</span>
    //                 </div>
    //                 <div className="rightbarfollowing">
    //                     <img src="assets/profile3.jpg" alt="" className="rightbarFollowingImg" />
    //                     <span className="rightbarFollowingName">jhon cena</span>
    //                 </div>
    //                 <div className="rightbarfollowing">
    //                     <img src="assets/profile1.jpg" alt="" className="rightbarFollowingImg" />
    //                     <span className="rightbarFollowingName">jhon cena</span>
    //                 </div>
    //                 <div className="rightbarfollowing">
    //                     <img src="assets/profile2.jfif" alt="" className="rightbarFollowingImg" />
    //                     <span className="rightbarFollowingName">jhon cena</span>
    //                 </div>
    //                 <div className="rightbarfollowing">
    //                     <img src="assets/profile3.jpg" alt="" className="rightbarFollowingImg" />
    //                     <span className="rightbarFollowingName">jhon cena</span>
    //                 </div>
    //             </div>

    //         </>
    //     )
    // }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Wrestle mania</b> and 3 other friend <b> have a birthday today</b>
                    </span>
                </div>
                <img src="assets/sponcerdimage1.jfif" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friend</h4>
                <ul>
                    {
                        Users.map((u) => {
                            return (
                                <Online key={u.id} users={u} />
                            )
                        })
                    }
                </ul>
                {/* <TimelineRightbar /> */}
            </div>
        </div>
    )

}
