
import  "./feed.css";
import Share from '../../compenents/share/Share'
import Post from '../../compenents/post/Post' 

function Feed() {
    return (
      <div className="feed" >
            <div className="Wrapper">
                  <Share/>
                  <Post/>
                  <Post/>
                  <Post/>
                  <Post/>
                  <Post/>
            </div>
      </div>
    );
  }
  
  export default Feed;