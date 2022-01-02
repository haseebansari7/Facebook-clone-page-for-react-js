import './closefriend.css'
export default function Closefriend({ users }) {
    return (
        <li className="sidebarFriend">
            <img src={users.profilePicture} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{users.username}</span>
        </li>
    )
}
