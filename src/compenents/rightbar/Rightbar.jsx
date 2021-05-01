
import  "./rightbar.css";

function Rightbar() {
    return (
      <div className="rightbar">

          <div className="rightbarWrapper">
                    
          </div> 
          <img src="/assets/online.jpeg" alt="" className="hello"/> 
          <hr/><hr/>
          <ul className="rightbarFriendsList">
              <li className="rightbarFriend"> 
                   <div className="rightbarProfileImgContainer">
                       <img src="/assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="rightbarProfileImg"/>
                       <span className="rightbarOnline"></span>
                   </div>
                   <span className="rightbarUserName">chabrik abdellatif</span>
              </li>  
              <li className="rightbarFriend"> 
                   <div className="rightbarProfileImgContainer">
                       <img src="/assets/birthday.png" alt="" className="rightbarProfileImg"/>
                       <span className="rightbarOnline"></span>
                   </div>
                   <span className="rightbarUserName">zairi jalal</span>
              </li>  
              <li className="rightbarFriend"> 
                   <div className="rightbarProfileImgContainer">
                       <img src="/assets/hello.png" alt="" className="rightbarProfileImg"/>
                       <span className="rightbarOnline"></span>
                   </div>
                   <span className="rightbarUserName">echchetouky  yassine</span>
              </li>  
              <li className="rightbarFriend"> 
                   <div className="rightbarProfileImgContainer">
                       <img src="/assets/online.jpeg" alt="" className="rightbarProfileImg"/>
                       <span className="rightbarOnline"></span>
                   </div>
                   <span className="rightbarUserName">ibrahimaa</span>
              </li>  
              <li className="rightbarFriend"> 
                   <div className="rightbarProfileImgContainer">
                       <img src="/assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="rightbarProfileImg"/>
                       <span className="rightbarOnline"></span>
                   </div>
                   <span className="rightbarUserName">chabrik abdellatif</span>
              </li>  
              <li className="rightbarFriend"> 
                   <div className="rightbarProfileImgContainer">
                       <img src="/assets/birthday.png" alt="" className="rightbarProfileImg"/>
                       <span className="rightbarOnline"></span>
                   </div>
                   <span className="rightbarUserName">chabrik abdellatif</span>
              </li>  
          </ul> 
      </div>
    );
  }
  
  export default Rightbar;