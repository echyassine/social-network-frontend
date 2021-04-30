import { PermMedia, Room, Label, EmojiEmotions} from '@material-ui/icons'
import  "./share.css";

function Share() {
    return (
      <div className="share" >
          <div className="Wrapper">
              <div className="shareTop">
                  <img src="/assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="shareTopImg"/>
                  <input placeholder="what's in your mind" className="shareInput"/>
              </div>
              <hr/>
              <div className="shareButtom">
                  <div className="shareOptions">
                      <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Photo or Video</span>
                      </div>
                      <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText">tag</span>
                      </div>
                      <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                      </div>
                      <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                            <span className="shareOptionText">Feeling</span>
                      </div>
                  </div>
                  <button className="shareButton">share</button>
              </div>
          </div>
      </div>
    );
  }
  
  export default Share;