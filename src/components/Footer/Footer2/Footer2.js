import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './Footer2.css';
import {Link} from 'react-router-dom'

class Footer2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <footer
        style={{ fontFamily: "Inter"}}
        className="footer">

        <svg className="wvSVG" viewBox="0 0 120 28">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="
                     1 0 0 0 0  
                     0 1 0 0 0  
                     0 0 1 0 0  
                     0 0 0 13 -9" result="goo" />
              <xfeBlend in="SourceGraphic" in2="goo" />
            </filter>
            <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
          </defs>
          <use id="wave3" className="wave" href="#wave" x="0" y="-2" ></use>
          <use id="wave2" className="wave" href="#wave" x="0" y="0" ></use>
          <g className="gooeff" filter="url(#goo)">
            {/* <circle className="drop drop1" cx="20" cy="2" r="8.8"  />
            <circle className="drop drop2" cx="25" cy="2.5" r="7.5"  />
            <circle className="drop drop3" cx="16" cy="2.8" r="9.2"  />
            <circle className="drop drop4" cx="18" cy="2" r="8.8"  />
            <circle className="drop drop5" cx="22" cy="2.5" r="7.5"  />
            <circle className="drop drop6" cx="26" cy="2.8" r="9.2"  />
            <circle className="drop drop1" cx="5" cy="4.4" r="8.8"  />
            <circle className="drop drop2" cx="5" cy="4.1" r="7.5"  />
            <circle className="drop drop3" cx="8" cy="3.8" r="9.2"  />
            <circle className="drop drop4" cx="3" cy="4.4" r="8.8"  />
            <circle className="drop drop5" cx="7" cy="4.1" r="7.5"  />
            <circle className="drop drop6" cx="10" cy="4.3" r="9.2"  />
            
            <circle className="drop drop1" cx="1.2" cy="5.4" r="8.8"  />
            <circle className="drop drop2" cx="5.2" cy="5.1" r="7.5"  />
            <circle className="drop drop3" cx="10.2" cy="5.3" r="9.2"  />
              <circle className="drop drop4" cx="3.2" cy="5.4" r="8.8"  />
            <circle className="drop drop5" cx="14.2" cy="5.1" r="7.5"  />
            <circle className="drop drop6" cx="17.2" cy="4.8" r="9.2"  />
            
            <circle className="drop drop1" cx="50" cy="2" r="8.8"  />
            <circle className="drop drop2" cx="55" cy="2.5" r="7.5"  />
            <circle className="drop drop3" cx="46" cy="2.8" r="9.2"  />
            <circle className="drop drop4" cx="48" cy="2" r="8.8"  />
            <circle className="drop drop5" cx="62" cy="2.5" r="7.5"  />
            <circle className="drop drop6" cx="66" cy="2.8" r="9.2"  />
            <circle className="drop drop1" cx="10" cy="4.4" r="8.8"  />
            <circle className="drop drop2" cx="10" cy="4.1" r="7.5"  />
            <circle className="drop drop3" cx="12" cy="3.8" r="9.2"  />
            <circle className="drop drop4" cx="7" cy="4.4" r="8.8"  />
            <circle className="drop drop5" cx="12" cy="4.1" r="7.5"  />
            <circle className="drop drop6" cx="14" cy="4.3" r="9.2"  />
            
            <circle className="drop drop1" cx="5.2" cy="5.4" r="8.8"  />
            <circle className="drop drop2" cx="9.2" cy="5.1" r="7.5"  />
            <circle className="drop drop3" cx="14.2" cy="5.3" r="9.2"  />
              <circle className="drop drop4" cx="4.2" cy="5.4" r="8.8"  />
            <circle className="drop drop5" cx="18.2" cy="5.1" r="7.5"  />
            <circle className="drop drop6" cx="22.2" cy="4.8" r="9.2"  /> */}
            <use id="wave1" className="wave" href="#wave" x="0" y="1" />

          </g>
          <path id="wave1" className="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
          {/* </g> */}

        </svg>

        <div
        
        className="container">
          <div
            className="row no-gutters">
            <div
              className="col">
                <Link to="/"><svg id="svgLG2" width="168" height="51.8" viewBox="0 0 241 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.6695 8.87899H41.9779C43.4625 8.87899 44.6852 7.65633 44.6852 6.17168V3.11503C44.6852 1.63037 43.4625 0.407715 41.9779 0.407715H37.6695C36.1848 0.407715 34.9622 1.63037 34.9622 3.11503V6.17168C34.9622 7.65633 36.1848 8.87899 37.6695 8.87899Z" fill="white" />
                <path d="M41.4248 16.0982H38.6884C36.5051 16.0982 35.3989 17.2917 35.3989 18.8346V19.1257C33.594 17.8739 31.5562 16.8842 29.402 16.2146C27.7718 15.5742 25.734 15.1084 23.2014 15.1084C23.0267 15.1084 22.8812 15.1084 22.7065 15.1084C22.5318 15.1084 22.3572 15.1084 22.1825 15.1084C9.89771 15.1084 0 24.0454 0 36.5923C0 49.2264 9.89771 58.0761 22.1825 58.0761C26.7529 58.0761 30.974 56.8534 34.5255 54.6701V55.3397C34.5255 62.6465 29.2274 65.3247 22.9394 65.3247C19.155 65.3247 16.5932 64.5096 14.6719 63.7818C12.4886 63.0541 11.295 63.6072 10.4217 65.6449L9.78127 67.4789C8.90794 69.5749 9.46105 70.9431 11.557 71.8165C14.3808 73.0391 18.9512 73.9998 23.5507 73.9998C33.6813 73.9998 44.7726 68.7016 44.7726 54.6119V19.475C44.7435 17.2917 43.6081 16.0982 41.4248 16.0982ZM22.5901 49.4884C15.749 49.4884 10.2179 43.7535 10.2179 36.6796C10.2179 29.6056 15.749 23.8708 22.5901 23.8708C22.8812 23.8708 23.1723 23.8708 23.4343 23.8999C23.4634 23.8999 23.4634 23.8999 23.4634 23.8999C23.5507 23.8999 23.6381 23.929 23.7545 23.929C30.0425 24.5403 34.9622 30.0132 34.9622 36.6796C34.9622 43.7535 29.4311 49.4884 22.5901 49.4884Z" fill="white" />
                <path d="M68.7892 15.1375C81.2486 15.1375 91.3792 24.0745 91.3792 36.5922C91.3792 49.2263 81.2486 58.0469 68.7892 58.0469C56.3297 58.0469 46.2864 49.1972 46.2864 36.5922C46.2573 24.0454 56.3297 15.1375 68.7892 15.1375ZM68.7892 49.3719C75.4556 49.3719 81.0158 44.2193 81.0158 36.5922C81.0158 29.0234 75.4556 23.8125 68.7892 23.8125C62.1228 23.8125 56.6499 29.0525 56.6499 36.5922C56.6499 44.2484 62.0937 49.3719 68.7892 49.3719Z" fill="white" />
                <path d="M164.71 15.1375C177.169 15.1375 187.3 24.0745 187.3 36.5922C187.3 49.2263 177.169 58.0469 164.71 58.0469C152.25 58.0469 142.207 49.1972 142.207 36.5922C142.178 24.0454 152.221 15.1375 164.71 15.1375ZM164.71 49.3719C171.376 49.3719 176.936 44.2193 176.936 36.5922C176.936 29.0234 171.376 23.8125 164.71 23.8125C158.043 23.8125 152.57 29.0525 152.57 36.5922C152.541 44.2484 158.014 49.3719 164.71 49.3719Z" fill="white" />
                <path d="M117.113 15.1377C117.026 15.1377 116.909 15.1377 116.822 15.1377C116.735 15.1377 116.647 15.1377 116.56 15.1377C115.658 15.1377 114.784 15.1959 113.998 15.3414C110.33 15.7781 106.953 17.0299 104.101 18.9221C104.101 18.7183 104.101 18.5145 104.101 18.3108V3.37687C104.101 1.19355 102.965 0 100.724 0H97.2595C95.0762 0 93.8826 1.19355 93.8826 3.37687V53.7096C93.8826 55.9512 95.0762 57.0865 97.2595 57.0865H99.9959C102.237 57.0865 103.373 55.9512 103.373 54.2045V53.8261C105.585 55.3981 108.118 56.5625 110.883 57.2903C112.31 57.7561 113.998 58.0763 115.92 58.0763C116.094 58.0763 116.298 58.0763 116.473 58.0763C116.676 58.0763 116.909 58.0763 117.113 58.0763C129.573 58.0763 139.703 49.2266 139.703 36.5924C139.703 24.0456 129.573 15.1377 117.113 15.1377ZM115.687 49.3139C109.661 48.6443 104.945 43.6955 104.945 36.5924C104.945 29.7514 109.428 24.8316 115.221 23.9583C115.832 23.8709 116.473 23.8127 117.113 23.8127C123.78 23.8127 129.34 29.0527 129.34 36.5924C129.34 44.2195 123.78 49.3721 117.113 49.3721C116.618 49.3721 116.152 49.343 115.687 49.3139Z" fill="white" />
                <path d="M190.269 3.37687C190.269 1.19355 191.462 0 193.646 0H197.11C199.352 0 200.487 1.19355 200.487 3.37687V30.5665H205.552L214.082 18.3399C215.042 16.7388 216.265 16.0983 218.099 16.0983H221.942C224.678 16.0983 225.551 17.9614 224.038 20.1156L213.82 34.4382V34.6129L225.872 53.0983C227.24 55.4272 226.366 57.1156 223.63 57.1156H219.293C217.429 57.1156 216.236 56.3878 215.363 54.7867L205.785 39.1833H200.487V53.7388C200.487 55.9803 199.352 57.1156 197.11 57.1156H193.646C191.462 57.1156 190.269 55.9803 190.269 53.7388V3.37687Z" fill="white" />
                <path d="M229.918 5.79307V3.37687C229.918 1.19355 231.053 0 233.207 0H236.759C238.942 0 240.136 1.19355 240.136 3.37687V5.79307C240.136 7.97639 238.942 9.0826 236.759 9.0826H233.207C231.024 9.11172 229.918 7.97639 229.918 5.79307ZM229.918 19.4752C229.918 17.2919 231.053 16.0983 233.207 16.0983H236.759C238.942 16.0983 240.049 17.2919 240.049 19.4752V53.7388C240.049 55.9803 238.913 57.1156 236.759 57.1156H233.207C231.024 57.1156 229.918 55.9803 229.918 53.7388V19.4752Z" fill="white" />
              </svg>
           </Link>
              
            </div>
            <div
              className="col">
              <h1 className="headerFooter">Về Goboki</h1>
              <Link className="fp1" to="/aboutUs/us"><p className="fp1">Về chúng tôi</p></Link>
              <Link className="fp1" to="/aboutUs/howToOrder"><p className="fp1">Cách đặt chỗ</p></Link>
              <Link className="fp1" to="/aboutUs/contact"> <p className="fp1">Liên hệ</p></Link>
              
             
            </div>
            <div
              className="col">
              <h1 className="headerFooter">Khác</h1>
              <Link className="fp1" to="/aboutUs/policy"><p className="fp1">Chính sách quyền riêng tư</p></Link>
              <Link className="fp1" to="/aboutUs/termsConditions"><p className="fp1">Điều khoản & Điều kiện</p></Link>
              <Link className="fp1" to="/aboutUs/howItWorks"> <p className="fp1">Quy chế hoạt động</p></Link>
              <Link className="fp1" to="/aboutUs/FAQ"> <p className="fp1">Trợ giúp</p></Link>
            </div>
            {/* <div
              className="col">
              <h1 className="headerFooter">Theo dõi chúng tôi</h1>
              <p className="fp1">Facebook</p>
              <p className="fp1">Instagram</p>
              <p className="fp1">Youtube</p>
            </div> */}
          </div>
        </div>
        <div style={{marginTop: "50px", marginBottom: "20px"}} className="container-fluid">
            <div className="row no-gutters">
              <div
                className="copyRight col-12">
                <hr style={{ border: "1.5px solid white", borderRadius: "2px" }} />
                <h1 className="copyRight">Copyright © 2020 Goboki</h1>
              </div>

            </div>
          </div>

      </footer>
    );
  }

}

export default Footer2;
