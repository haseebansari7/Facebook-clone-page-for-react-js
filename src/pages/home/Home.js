import "./home.css"
import Topbar from '../../component/topbar/Topbar';
import Sidebar from '../../component/sidebar/Sidebar';
import Feed from '../../component/feed/Feed';
import Right from '../../component/rightbar/Right';

export default function Homepage() {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Right />
            </div>
        </>
    );
}