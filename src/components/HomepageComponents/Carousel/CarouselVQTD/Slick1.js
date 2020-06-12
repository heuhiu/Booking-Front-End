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


class Slick1 extends Component {

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
          <h2 className="headerOwl">Vòng quanh thủ đô</h2>
          <h2 className="desHeaderOwl">Khám phá mọi nẻo đường thủ đô</h2>
          <Slider {...settings}>
            <div className="owlStyle">
              <h3 className="owlStyleChil">
                <img className="coverImg" src={Rectangle} alt="?" />
                <div className="containerOwlChil">
                  <p className="owlStyleChil1">[GIẢM ĐẾN 37%] Vé Jump Arena Big C Thăng Long Hà Nội 1</p>
                  <p className="owlStyleChil2">đ 100.000</p>
                  <p className="owlStyleChil3">đ 86.000</p>
                  <p className="owlStyleChil4">Có thể đặt ngay hôm nay</p>
                </div>
              </h3>
            </div >
            <div className="owlStyle">
              <h3 className="owlStyleChil">
                <img className="coverImg" src={Rectangle} alt="?" />
                <div className="containerOwlChil">
                  <p className="owlStyleChil1">[GIẢM ĐẾN 37%] Vé Jump Arena Big C Thăng Long Hà Nội 2</p>
                  <p className="owlStyleChil2">đ 100.000</p>
                  <p className="owlStyleChil3">đ 86.000</p>
                  <p className="owlStyleChil4">Có thể đặt ngay hôm nay</p>
                </div>
              </h3>
            </div >
            <div className="owlStyle">
              <h3 className="owlStyleChil">
                <img className="coverImg" src={Rectangle} alt="?" />
                <div className="containerOwlChil">
                  <p className="owlStyleChil1">[GIẢM ĐẾN 37%] Vé Jump Arena Big C Thăng Long Hà Nội 3 </p>
                  <p className="owlStyleChil2">đ 100.000</p>
                  <p className="owlStyleChil3">đ 86.000</p>
                  <p className="owlStyleChil4">Có thể đặt ngay hôm nay</p>
                </div>
              </h3>
            </div >


          
            <div className="owlStyle">
              <h3 className="owlStyleChil">
                <img className="coverImg" src={Rectangle} alt="?" />
                <div className="containerOwlChil">
                  <p className="owlStyleChil1">[GIẢM ĐẾN 37%] Vé Jump Arena Big C Thăng Long Hà Nội 4</p>
                  <p className="owlStyleChil2">đ 100.000</p>
                  <p className="owlStyleChil3">đ 86.000</p>
                  <p className="owlStyleChil4">Có thể đặt ngay hôm nay</p>
                </div>
              </h3>
            </div >
            <div className="owlStyle">
              <h3 className="owlStyleChil">
                <img className="coverImg" src={Rectangle} alt="?" />
                <div className="containerOwlChil">
                  <p className="owlStyleChil1">[GIẢM ĐẾN 37%] Vé Jump Arena Big C Thăng Long Hà Nội 5</p>
                  <p className="owlStyleChil2">đ 100.000</p>
                  <p className="owlStyleChil3">đ 86.000</p>
                  <p className="owlStyleChil4">Có thể đặt ngay hôm nay</p>
                </div>
              </h3>
            </div >
            <div className="owlStyle">
              <h3 className="owlStyleChil">
                <img className="coverImg" src={Rectangle} alt="?" />
                <div className="containerOwlChil">
                  <p className="owlStyleChil1">[GIẢM ĐẾN 37%] Vé Jump Arena Big C Thăng Long Hà Nội 6</p>
                  <p className="owlStyleChil2">đ 100.000</p>
                  <p className="owlStyleChil3">đ 86.000</p>
                  <p className="owlStyleChil4">Có thể đặt ngay hôm nay</p>
                </div>
              </h3>
            </div >
            
          </Slider>
        </div>
      </section>
    );

  }
}

export default Slick1;
