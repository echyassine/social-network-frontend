import {MoreVert} from '@material-ui/icons'
import  "./post.css"; 

function Post() {
    return (
      <div className="post" >
            <div className="postWrapper">
                  <div className="postTop">
                      <div className="postTopLeft">
                             <img src="/assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="postProfileImage"/>
                             <span className="postUserName">yassine echchetouky</span>
                      </div>
                      <div className="postTopRight"> 
                            <MoreVert/>
                      </div>
                  </div>
                  <div className="postCenter">
                      <span className="postText">hey this is my first post</span>
                      <img src="/assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="postImage"/>
                  </div>
                  <div className="postBottom">

                        <div className="postBottomLeft">
                            <img src="/assets/j'aime.jpg" alt="" className="aimer"/>
                            <span className="nombreAimer">32</span>
                        </div>

                        <div className="postBottomright">
                            <span className="nombreComments">19 comments</span>
                        </div>

                  </div>
            </div>
      </div>
    );
  }
  
  export default Post;

