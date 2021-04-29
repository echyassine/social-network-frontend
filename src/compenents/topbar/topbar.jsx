import './topbar.css'
import { Search, Person, Chat, Notifications } from '@material-ui/icons'

function Topbar() {
    return (

      <div className="topbarContainer">

           <div className="topbarLeft"> <span className="logo">social network</span> </div>
           <div className="topbarCenter">
             <div className="searchbar">
               <Search className="searchIcon" />
               <input placeholder="serach for friends" className="searchInput"/>
             </div>
           </div>
           <div className="topbarRight">
             <div className="topbarLinks">
               <span className="topbarLink">homepage</span>
               <span className="topbarLink">Timeline</span>
             </div>
             <div className="topbarIcons">
               <div className="topbarIconItem">
                 <Person/>
                 <span className="topbarIconBadge">1</span>
               </div>
               <div className="topbarIconItem">
                 <Chat/>
                 <span className="topbarIconBadge">1</span>
               </div>
               <div className="topbarIconItem">
                 <Notifications/>
                 <span className="topbarIconBadge">1</span>
               </div>
             </div>
             <img src="/assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="topbarImage"/>
           </div>
      </div>
    );
  }
  
  export default Topbar;