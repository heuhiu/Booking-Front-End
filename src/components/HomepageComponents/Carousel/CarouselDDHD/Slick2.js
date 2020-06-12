import React, { Component } from 'react';
import Slider from "react-slick";
import Rectangle from '../../../../img/Rectangle 17.png';
import RightOwl from '../../../../img/RightOwl.png';
import LeftOwl from '../../../../img/LeftOwl.png';
import './style.css';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    // <div
    //     className={className}
    //     style={{ ...style, display: "block", background: "red" }}
    //     onClick={onClick}>
    //     <img ></img>
    // </div>
    <img
      onClick={onClick}
      className={className}
      src={LeftOwl}
      alt="?" >
    </img>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    // <div
    //     className={className}
    //     style={{ ...style, display: "block" }}
    //     onClick={onClick}
    // />
    <img
      onClick={onClick}
      className={className}
      src={RightOwl}
      style={{ ...style, margin: "5em" }}
      alt="?" >
    </img>
  );
}


class Slick2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null
    }
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />

    };

    return (
      <section className="py-5">
        <div className="container">
          <h2 className="headerOwl">Điểm đến hàng đầu</h2>
          <h2 className="desHeaderOwl">Bạn đã sẵn sàng khám phá những địa điểm tốt nhất cùng chúng tôi?</h2>
          <Slider {...settings}>
            <div className="owlStyle">
              <h3 className="owlStyleChil">
                {/* <img className="lol" className="coverImg" 
                src={Rectangle} alt="?" /> */}
                <div className="owlCom1">Hà Nội</div>
                {/* <div className="containerOwlChil">
                  <p className="owlStyleChil1">[GIẢM ĐẾN 37%] Vé Jump Arena Big C Thăng Long Hà Nội 1</p>
                  <p className="owlStyleChil2">đ 100.000</p>
                  <p className="owlStyleChil3">đ 86.000</p>
                  <p className="owlStyleChil4">Có thể đặt ngay hôm nay</p>
                </div> */}
              </h3>
            </div >
            <div className="owlStyle">
              <h3 className="owlStyleChil">
                {/* <img className="lol" className="coverImg" 
                src={Rectangle} alt="?" /> */}
                <div className="owlCom2">Đà Nẵng</div>
                {/* <div className="containerOwlChil">
                  <p className="owlStyleChil1">[GIẢM ĐẾN 37%] Vé Jump Arena Big C Thăng Long Hà Nội 1</p>
                  <p className="owlStyleChil2">đ 100.000</p>
                  <p className="owlStyleChil3">đ 86.000</p>
                  <p className="owlStyleChil4">Có thể đặt ngay hôm nay</p>
                </div> */}
              </h3>
            </div >
            
            <div className="owlStyle">
              <h3 className="owlStyleChil">
                {/* <img className="lol" className="coverImg" 
                src={Rectangle} alt="?" /> */}
                <div className="owlCom3">TP HCM</div>
                {/* <div className="containerOwlChil">
                  <p className="owlStyleChil1">[GIẢM ĐẾN 37%] Vé Jump Arena Big C Thăng Long Hà Nội 1</p>
                  <p className="owlStyleChil2">đ 100.000</p>
                  <p className="owlStyleChil3">đ 86.000</p>
                  <p className="owlStyleChil4">Có thể đặt ngay hôm nay</p>
                </div> */}
              </h3>
            </div >

            
    </Slider>
        </div>
      </section>
    );

  }
}

export default Slick2;
