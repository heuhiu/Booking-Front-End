import React, { Component } from 'react';
import Slider from "react-slick";
// import Rectangle from '../../../../img/Rectangle 17.png';
import RightOwl from '../../../../img/RightOwl.png';
import LeftOwl from '../../../../img/LeftOwl.png';
import './style.css';
// import axios from 'axios';
import { showLoader, hideLoader } from '../../../../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { id } from 'date-fns/locale';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

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
            listPlace: [],
            compareId: null,
        }
    }

    convertCurrecyToVnd = (currency) => {
        return currency.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
    }

    showPlaceOfTopCity = (topCity) => {
        
        var result = null;
        if (topCity !== undefined)
            if (topCity.length > 0) {
                result = topCity.map((item, index) => {
                    // console.log(item.weekDays)
                    const availableDay = item.weekDays.sort()
                    var availableDate = ""
                    const today = new Date().getDay()
                    if (availableDay.indexOf(today) !== -1) {
                        availableDate = "Mở cửa ngay hôm nay."
                    } else {
                        availableDate = "Không mở cửa ngày hôm nay."
                    }
                    
                        if (index > 4) {
                            return (
                                <Fade>
                                    <Link
                                        key={index}
                                        className="decoNone"
                                        to={`/placeDetail/${item.id}`}>
                                        <div className="owlStyle">
                                            <h3 className="owlStyleChil">
                                                <div
                                                    className="owlCom3"
                                                    style={{
                                                        borderRadius: "10px 10px 0px 0px",
                                                        backgroundImage: `url(${item.placeImageLink ? item.placeImageLink[0] : "https://toandqse05372-bucket.s3-ap-southeast-1.amazonaws.com/Place_1_2.jpg"})`
                                                    }}
                                                >
                                                </div>
                                                <div className="containerOwlChil">
                                                    <div style={{ height: "45px" }}>
                                                        <p className="owlStyleChil1">{item.name}</p>
                                                    </div>
                                                    <div>
                                                        {/* <p className="owlStyleChil2">{item.basicPrice}</p> */}
                                                        <p className="owlStyleChil3">{this.convertCurrecyToVnd(item.basicPrice)}</p>
                                                        {/* <p className="owlStyleChil4">Có thể đặt ngay hôm nay</p> */}
                                                        <p style={{ color: availableDate === "Mở cửa ngay hôm nay." ? "#FF7062" : "#A5A5A5" }} className="owlStyleChil4">{availableDate}</p>
                                                    </div>

                                                </div>
                                            </h3>
                                        </div >
                                    </Link >
                                </Fade >
                            );
                        } else
                            return (
                                <Fade key={index} duration={index * 235}>
                                    <Link
                                        className="decoNone"
                                        to={`/placeDetail/${item.id}`}>
                                        <div className="owlStyle">
                                            <h3 className="owlStyleChil">
                                                <div
                                                    className="owlCom3"
                                                    style={{
                                                        borderRadius: "10px 10px 0px 0px",
                                                        backgroundImage: `url(${item.placeImageLink ? item.placeImageLink[0] : "https://toandqse05372-bucket.s3-ap-southeast-1.amazonaws.com/Place_1_2.jpg"})`
                                                    }}
                                                >
                                                </div>
                                                <div className="containerOwlChil">
                                                    <div style={{ height: "45px" }}>
                                                        <p className="owlStyleChil1">{item.name}</p>
                                                    </div>
                                                    <div>
                                                        {/* <p className="owlStyleChil2">{item.basicPrice}</p> */}
                                                        <p className="owlStyleChil3">{this.convertCurrecyToVnd(item.basicPrice)}</p>
                                                        {/* <p className="owlStyleChil4">Có thể đặt ngay hôm nay</p> */}
                                                        <p style={{ color: availableDate === "Mở cửa ngay hôm nay." ? "#FF7062" : "#A5A5A5" }} className="owlStyleChil4">{availableDate}</p>
                                                    </div>

                                                </div>
                                            </h3>
                                        </div >
                                    </Link >
                                </Fade >
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
    forByCityId = (topCity, listData1, listData2, listData3) => {
        // const settings = {
        //     // dots: true,
        //     infinite: true,
        //     slidesToShow: 4,
        //     slidesToScroll: 1,
        //     nextArrow: <SampleNextArrow />,
        //     prevArrow: <SamplePrevArrow />
        // };
        const settings = {
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            beforeChange: this.beforeChange
        };
        var result = null;
        if (topCity.length > 0) {
            result = topCity.map((item, index) => {
                if (index === 0) {
                    return (
                        <section key={index} className="py-5">
                            <div className="container">
                                <div >
                                    <Flip top cascade>
                                        <h2 className="headerOwl">{item.shortDescription}</h2>
                                        <h2 className="desHeaderOwl">{item.name}</h2>

                                    </Flip>
                                    <Slider {...settings}>
                                        {this.showPlaceOfTopCity(listData1)}
                                    </Slider>
                                    {/* <Fade   >
                                        <Slider {...settings}>
                                            {this.showPlaceOfTopCity(listData1)}
                                        </Slider>
                                    </Fade> */}
                                    {/* </Slide> */}
                                </div>
                            </div>
                        </section>
                    );
                }
                if (index === 1) {
                    return (
                        <section key={index} className="py-5">
                            <div className="container">
                                <div >
                                    <Flip top cascade>
                                        <h2 className="headerOwl">{item.shortDescription}</h2>
                                        <h2 className="desHeaderOwl">{item.name}</h2>

                                    </Flip>
                                    <Slider {...settings}>
                                        {this.showPlaceOfTopCity(listData2)}
                                    </Slider>
                                    {/* <Fade  >
                                        <Slider {...settings}>
                                            {this.showPlaceOfTopCity(listData2)}
                                        </Slider>
                                    </Fade> */}
                                    {/* </Slide> */}

                                </div>
                            </div>
                        </section>
                    );
                }
                if (index === 2) {
                    return (
                        <section key={index} className="py-5">
                            <div className="container">
                                <div>
                                    <Flip top cascade>
                                        <h2 className="headerOwl">{item.shortDescription}</h2>
                                        <h2 className="desHeaderOwl">{item.name}</h2>

                                    </Flip>
                                    <Slider {...settings}>
                                        {this.showPlaceOfTopCity(listData3)}
                                    </Slider>
                                    {/* <Fade  >
                                        <Slider {...settings}>
                                            {this.showPlaceOfTopCity(listData3)}
                                        </Slider>
                                    </Fade> */}
                                    {/* </Slide> */}
                                </div>
                            </div>
                        </section>
                    );
                } else {
                    return (
                        null
                    )
                }
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

        // const settings = {
        //     // dots: true,
        //     infinite: true,
        //     slidesToShow: 4,
        //     slidesToScroll: 1,
        //     nextArrow: <SampleNextArrow />,
        //     prevArrow: <SamplePrevArrow />
        // };
        const { topCity, listData1, listData2, listData3 } = this.props;

        return (
            this.forByCityId(topCity, listData1, listData2, listData3)
            // <section className="py-5">
            //   <div className="container">

            //     {/* <h2 className="headerOwl">Vòng quanh thủ đô</h2>
            //     <h2 className="desHeaderOwl">Khám phá mọi nẻo đường thủ đô</h2>
            //     <Slider {...settings}>
            //       {this.showPlaceOfTopCity(listPlace)}
            //     </Slider> */}
            //   </div>
            // </section>
        );

    }
}

// export default Slick1;

const mapStateToProps = state => {
    return {
        // visitorType: state.Ticket
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        showLoader: () => {
            dispatch(showLoader())
        },
        hideLoader: () => {
            dispatch(hideLoader())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slick1);