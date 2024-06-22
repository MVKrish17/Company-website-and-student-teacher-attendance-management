import React from "react"
import './Login.css'
import image from '../Assets/logo.jpg'
import student from '../Assets/student.png'
import admin from '../Assets/Admin.png'

function Login() {
  return (
    <div class="loginPage">
      <div class="register">
        <div class="title">Register</div>
        <form action="" >
          <div className="form-filling">
            <div className="feilds">
              <label for="name"><b>NAME</b></label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="feilds">
              <label for="email"><b>EMAIL ADDRESS</b></label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="feilds">
              <label for="phone"><b>PHONE NUMBER</b></label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="feilds">
              <label for="password"><b>PASSWORD</b></label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="feilds">
              <label for="confirm_password" ><b>CONFORM PASSWORD</b></label>
              <input type="password" id="confirm_password" name="confirm_password" required />
            </div>

            <div className="TandC">
              <label for="terms">
                <input type="checkbox" className="terms" name="terms" required />
              </label>
              <div>I accept the Terms of Use and Privacy Policy</div>
            </div>
          </div>
          <button className="submit" type="submit" value="Create an account">Create an account</button>
        </form>
      </div>
      <div class="login">
        <div className="title1">Login</div>
        <div className="people">
          <div className="student">
            <a href=" "><img src={student} alt="logo" width="100px" height="100px"></img></a>
          </div>
          <div className="adminlogo">
            <a href=" "><img src={admin} alt="logo" width="100px" height="100px"></img></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login