import React, { Component } from 'react';
import Slider from "react-slick";
import Rectangle from '../../../../img/Rectangle 17.png';
import RightOwl from '../../../../img/RightOwl.png';
import LeftOwl from '../../../../img/LeftOwl.png';
import './style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
      selectedOption: null,
      bla: []
    }
  }

  componentDidMount = () => {
    this.getPlacebyCityId();
  }

  getPlacebyCityId = () => {
    axios.get('http://localhost:8090/topPlace', {
      params: {
        cityId: 1
      }
    }).then(res => {
      console.log(res.data);
      this.setState({
        bla: res.data
      })
    }).catch(function (error) {
      console.log(error.response.data);
    });
  }

  showPlaceOfTopCity = (topCity) => {
    var result = null;
    if (topCity.length > 0) {
      result = topCity.map((item, index) => {
        return (
          <Link
            key={index}
            className="decoNone"
            to={`/placeDetail/${item.id}`}>
            <div className="owlStyle">
              <h3 className="owlStyleChil">
                <div
                  style={{
                    borderRadius: "10px",
                    backgroundImage: `linear-gradient(180deg, rgba(255, 112, 98, 0.0677083) 0%, #FF7062 140.38%)
                ,url(${item.placeImageLink ? item.placeImageLink : "https://toandqse05372-bucket.s3-ap-southeast-1.amazonaws.com/Place_1_2.jpg"})`
                  }}
                  className="overflowName owlCom3">{item.name}
                </div>
                <div className="containerOwlChil">
                  <p className="owlStyleChil1">somnething</p>
                  <p className="owlStyleChil2">đ 100.000</p>
                  <p className="owlStyleChil3">đ 86.000</p>
                  <p className="owlStyleChil4">Có thể đặt ngay hôm nay</p>
                </div>
              </h3>
            </div >
          </Link>
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

  render() {
    const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />

    };
    const { topCity } = this.props;
    const { bla } = this.state;
    console.log(bla)
    console.log(topCity)
    return (
      <section className="py-5">
        <div className="container">
          <h2 className="headerOwl">Vòng quanh thủ đô</h2>
          <h2 className="desHeaderOwl">Khám phá mọi nẻo đường thủ đô</h2>
          <Slider {...settings}>
            {/* {this.showPlaceOfTopCity(bla)} */}
            {/* {this.getPlacebyCityId()} */}
          </Slider>
        </div>
      </section>
    );

  }
}

export default Slick1;
