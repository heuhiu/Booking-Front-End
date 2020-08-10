import React, { Component } from 'react';
import Slider from "react-slick";
// import Rectangle from '../../../../img/Rectangle 17.png';
import RightOwl from '../../../../img/RightOwl.png';
import LeftOwl from '../../../../img/LeftOwl.png';
import './style.css';
import callApi from '../../../../config/utils/apiCaller';
import wtf from '../../../../img/TPHCM.png';
import { Link } from 'react-router-dom';

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
      topCity: []
    }
  }

  componentDidMount = () => {
    callApi("topCity", 'GET', null)
      .then(res => {
        console.log(res);
        this.setState({
          topCity: res.data
        })
      }).catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
        }
      });
  }

  showTopcity = (listTopcity) => {
    var result = null;
    if (listTopcity.length > 0) {
      result = listTopcity.map((item, index) => {
        return (
          <Link 
          key={index}
         className="decoNone"
          to={`/searchedPlace?listCityID=${item.id}`}>
            <div className="owlStyle">
              <h3 style={{border: "none"}} className="owlStyleChil">
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
        );
      });
    } else {
      return (
        <div>not found</div>
      )
    }
    return result;
  }
  render() {
    const { topCity } = this.state;
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
            {/* <div className="owlStyle">
              <h3 className="owlStyleChil">

                <div className="owlCom1">Hà Nội</div>

              </h3>
            </div >
            <div className="owlStyle">
              <h3 className="owlStyleChil">

                <div className="owlCom2">Đà Nẵng</div>

              </h3>
            </div >

            <div className="owlStyle">
              <h3 className="owlStyleChil">
                <div
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(255, 112, 98, 0.0677083) 0%, #FF7062 140.38%)
                  ,url(${wtf})`
                  }}
                  className="owlCom3">TP HCM</div>
              </h3>
            </div >
          */}
            {this.showTopcity(topCity)}
          </Slider>
        </div>
      </section>
    );

  }
}

export default Slick2;
