import React from 'react'
import './StudentLogin.css'
import img from '../Assets/leftbox.jpg'
import img1 from '../Assets/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'




function TeacherLogin() {
  return (
    <div class="studentlogin">
      <img src={img} alt="logo" height="570px" weight="200px"></img>
      <div class='rightBox'>
        <div class="logoAndname">
          <div class='profile'><img src={img1} alt="logo" height='100px' weight='100px'></img></div>
          <div class='text1'>TEACHER LOGIN</div>
        </div>
        <form>
          <div className="login1">
            <div className='both1' >
              <div className='both2' >
                <div className="username">
                  <FontAwesomeIcon icon={faUser} style={{ border: "2px white solid", padding: "10px", borderRadius: "50%", color: "white" }} />
                  <input name="" className="user" placeholder="Email or Phone" type="text" />
                </div>
                <div className="username">
                  <FontAwesomeIcon icon={faLock} style={{ border: "2px white solid", padding: "10px", borderRadius: "50%", color: "white" }} />
                  <input name="" className="user" placeholder="Password" type="text" />
                </div>
              </div>
              <div className="remember">
                <div>
                  <input type="checkbox" id="rem" className="terms" required />
                  <span class="text4">Remember Me</span>
                </div>
                <a href=" " class="link1">forget password</a>
              </div>
            </div>
            <div className='distance'>
              <button type="submit" class="b1">Login</button>
              <div className='bottom'>
                <div className='text2'>Not a member?</div>
                <button type="submit" className='b2'><a href=" " className='link2'>Create account</a></button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TeacherLogin