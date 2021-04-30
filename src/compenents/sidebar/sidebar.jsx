
import  "./sidebar.css";
import {RssFeed, HelpOutline, WorkOutline, Event, School, WorkOffOutlined} from '@material-ui/icons';
function sidebar() {
    return (
      <div className="sidebar">
           <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Reseau</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon"/>
                        <span className="sidebarListItemText">School</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarListItemText">Event</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon"/>
                        <span className="sidebarListItemText">Work</span>
                    </li>
                </ul>
                <button className="sidebarButton">Friends List</button>
                <hr className="sidebarHr"/>

                <ul className="sidebarListFriends">
                     <li className="sidebarFriend">
                         <img src="/assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="sidebarFriendImg"/>
                         <spam className="sidebarFriendName">chabrik abdellatif</spam>
                     </li>
                     <li className="sidebarFriend">
                         <img src="/assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="sidebarFriendImg"/>
                         <spam className="sidebarFriendName">yassine echchetouky</spam>
                     </li>
                     <li className="sidebarFriend">
                         <img src="/assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="sidebarFriendImg"/>
                         <spam className="sidebarFriendName">jalal zairi</spam>
                     </li>
                     <li className="sidebarFriend">
                         <img src="/assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="sidebarFriendImg"/>
                         <spam className="sidebarFriendName">ibrahima coulibaly</spam>
                     </li>
                     <li className="sidebarFriend">
                         <img src="/assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="sidebarFriendImg"/>
                         <spam className="sidebarFriendName">chabrik abdellatif</spam>
                     </li>
                     <li className="sidebarFriend">
                         <img src="/assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="sidebarFriendImg"/>
                         <spam className="sidebarFriendName">yassine echchetouky</spam>
                     </li>
                     <li className="sidebarFriend">
                         <img src="/assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="sidebarFriendImg"/>
                         <spam className="sidebarFriendName">jalal zairi</spam>
                     </li>
                     <li className="sidebarFriend">
                         <img src="/assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="sidebarFriendImg"/>
                         <spam className="sidebarFriendName">ibrahima coulibaly</spam>
                     </li>
                     <li className="sidebarFriend">
                         <img src="/assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="sidebarFriendImg"/>
                         <spam className="sidebarFriendName">chabrik abdellatif</spam>
                     </li>
                     <li className="sidebarFriend">
                         <img src="/assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="sidebarFriendImg"/>
                         <spam className="sidebarFriendName">yassine echchetouky</spam>
                     </li>
                     <li className="sidebarFriend">
                         <img src="/assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="sidebarFriendImg"/>
                         <spam className="sidebarFriendName">jalal zairi</spam>
                     </li>
                     <li className="sidebarFriend">
                         <img src="/assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="sidebarFriendImg"/>
                         <spam className="sidebarFriendName">ibrahima coulibaly</spam>
                     </li>
                </ul>
           </div>
      </div>
    );
  }
  
  export default sidebar;