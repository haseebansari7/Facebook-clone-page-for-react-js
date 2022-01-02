import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import { NavLink } from "react-router-dom"
export default function topbar() {
    return (
        <>
            {window.onscroll = () => {
                if (window.scrollY > 0) {
                    document.querySelector('.topbarContainer').classList.add('active')
                }
                else {
                    document.querySelector('.topbarContainer').classList.remove('active')
                }
            }
            }    <div className="topbarContainer">
                <div className="topbarLeft">
                    <span className="logo">HAsocial</span>
                </div>

                <div className="topbarCenter">
                    <div className="searchbar">
                        <Search className="searchIcon" />
                        <input placeholder="Search for friend, post or video" className="searchInput" />
                    </div>
                </div>

                <div className="topbarRight">
                    <div className="topbarLinks">
                        <NavLink to="/" className="topbarLink">Homepage</NavLink>
                        <NavLink to="/timeline" className="topbarLink">Timeline</NavLink>
                    </div>
                    <div className="topbarIcon">
                        <div className="topbarItemIcon">
                            <span className="topbarIconBadge">1</span>
                            <Person />
                        </div>
                        <div className="topbarItemIcon">
                            <span className="topbarIconBadge">2</span>
                            <Chat />
                        </div>
                        <div className="topbarItemIcon">
                            <span className="topbarIconBadge">5</span>
                            <Notifications />
                        </div>
                    </div>
                    <img src="/assets/dpimage.jfif" alt="dpimage" className="topbarImg" />
                </div>
            </div>

        </>
    )
}
