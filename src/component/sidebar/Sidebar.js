import './sidebar.css'
import { RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from "@material-ui/icons"
import { Users } from '../../dummyData';
import Closefriend from '../closeFriend/Closefriend';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListeItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListeItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListeItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListeItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListeItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListeItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Question</span>
          </li>
          <li className="sidebarListeItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListeItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListeItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {
            Users.map((u) => {
              return (
                <Closefriend key={u.id} users={u} />
              )
            })
          }
        </ul>
      </div>
    </div>

  )
}
