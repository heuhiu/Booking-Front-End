import React, { Component } from 'react';
import Slider from "react-slick";
// import Rectangle from '../../../../img/Rectangle 17.png';
import RightOwl from '../../../../img/RightOwl.png';
import LeftOwl from '../../../../img/LeftOwl.png';
import './style.css';
import { Link } from 'react-router-dom';
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
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
      selectedOption: null,
    }
  }

  showTopcity = (listTopcity) => {
    var result = null;
    if (listTopcity.length > 0) {
      result = listTopcity.map((item, index) => {
        return (
          <Bounce duration={index*235}>
            <Link
              className="decoNone"
              to={`/searchedPlace?listCityID=${item.id}`}>
              <div className="owlStyle">
                <h3 style={{ border: "none" }} className="owlStyleChil">
                  <div className="topPlace"
                    style={{
                      borderRadius: "10px",
                      backgroundImage: `linear-gradient(180deg, rgba(255, 112, 98, 0.0677083) 0%, #FF7062 140.38%)
                  ,url(${item.imageLink ? item.imageLink : "https://toandqse05372-bucket.s3-ap-southeast-1.amazonaws.com/Place_1_2.jpg"})`
                    }}
                    className="owlCom3">{item.name}</div>
                </h3>
              </div >
            </Link>
          </Bounce>
        );
      });
    } else {
      return (
        <div style={{ width: "200px", visibility: "hidden" }}>
        </div >
      )
    }
    return result;
  }
  next = () => {
    this.slider.slickNext();
};
previous = () => {
    this.slider.slickPrev();
};
beforeChange = (prev, next) => {
    this.setState({ index: next });
};
  render() {
    const { topCity } = this.props;
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   slidesToShow: 3,
    //   slidesToScroll: 3,
    //   nextArrow: <SampleNextArrow />,
    //   prevArrow: <SamplePrevArrow />
    // };
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      beforeChange: this.beforeChange
    };
    return (
      <section className="py-5">
        <div className="container">
          <Flip top cascade>

            <h2 className="headerOwl">Điểm đến hàng đầu</h2>
            <h2 className="desHeaderOwl">Bạn đã sẵn sàng khám phá những địa điểm tốt nhất cùng chúng tôi?</h2>
          </Flip>
          <Slider {...settings}>

            {this.showTopcity(topCity)}

          </Slider>


        </div>
      </section>
    );

  }
}

export default Slick2;
