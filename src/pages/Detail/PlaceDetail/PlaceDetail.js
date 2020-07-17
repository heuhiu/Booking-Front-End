import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Menu from '../../../components/Menu/Menu';
import Slider from 'react-slick';
import SliderPic from '../../../img/Slider.png';
import RightOwl from '../../../img/VectorArowRight.png';
import LeftOwl from '../../../img/VectorArowLeft.png';
import Detail from '../../../components/DetailComponents/PlaceDetailComponents/Detail';
import Footer2 from '../../../components/Footer/Footer2/Footer2';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            onClick={onClick}
            className={className}
            src={RightOwl}
            style={{
                ...style, marginRight: "50px",
                zIndex: "1", width: "25px", height: "50px"
            }}
            alt="Fail to load" >
        </img>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            onClick={onClick}
            className={className}
            src={LeftOwl}
            style={{
                ...style, marginLeft: "50px",
                zIndex: "1", width: "25px", height: "50px"
            }}
            alt="Fail to load" >
        </img>
    );
}

class PlaceDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 2000,
            cssEase: "ease-in-out",
            pauseOnHover: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        const { location } = this.props;

        return (

            <div >
                <div
                    className="container"
                    style={{ marginTop: "100px", padding: "0px" }}>
                    <Menu />
                    <Slider {...settings}>
                        <div
                        >
                            <img
                                style={{ borderRadius: "2px" }}
                                width="100%"
                                height="100%"
                                src={SliderPic}
                                alt="Failt to load" />
                        </div>
                        <div>
                            <img
                                style={{ borderRadius: "2px" }}
                                width="100%"
                                height="100%"
                                src={SliderPic}
                                alt="Failt to load" />
                        </div>
                        <div>
                            <img
                                style={{ borderRadius: "2px" }}
                                width="100%"
                                height="100%"
                                src={SliderPic}
                                alt="Failt to load" />
                        </div>
                    </Slider>
                    <Detail place={location.data} />

                </div>
                <div>
                    <Footer2 />
                </div>
            </div>
        );
    }

}

export default PlaceDetail;
