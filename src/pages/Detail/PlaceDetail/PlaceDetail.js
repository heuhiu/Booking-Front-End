import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Menu from '../../../components/Menu/Menu';
import Slider from 'react-slick';
import SliderPic from '../../../img/Slider.png';
import RightOwl from '../../../img/VectorArowRight.png';
import LeftOwl from '../../../img/VectorArowLeft.png';
import Detail from '../../../components/DetailComponents/PlaceDetailComponents/Detail';
import Footer2 from '../../../components/Footer/Footer2/Footer2';
import callApi from '../../../config/utils/apiCaller';

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
            place: null
        }
    }

    componentDidMount = () => {
        // debugger
        const { match } = this.props;
        var id = match.params.id;
        callApi(`placeClient/${id}`, 'GET', null).then(res => {
            // console.log(res);
            this.setState({ place: res.data })
        }).catch(error => {
            console.log(error);
        });
    }

    renderSlider = (array) => {
        var result = null;
        if (array.length > 0) {
            result = array.map((item, index) => {
                return (
                    <div>
                        <div>
                            <img
                                // style={{ borderRadius: "2px",
                                // // maxWidth: "200%",
                                // // maxHeight: "200%",
                                // // margin: "auto",
                                // // display: "block",
                                // // width: "100%",
                                // // objectFit: "contain"
                                // width: "100%"

                                // }}
                                width="100%"
                                height="600px"
                                src={item}
                                alt="Failt to load" />
                        </div>
                    </div>
                );
            })
        } else if (array.length === 0) {
            return (
                <p>Not Found</p>
            );
        }
        return result;
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
        const { place } = this.state;
        if (place !== null) {
            console.log(place.placeImageLink);
            // {this.renderSlider2}
            for (let index = 0; index < place.placeImageLink.length; index++) {
                const element = place.placeImageLink[index];
                console.log(element);
            }
        }
        if (place != null) {
            return (

                <div >
                    <div
                        className="container"
                        style={{ marginTop: "100px", padding: "0px" }}>
                        <Menu />
                        <Slider {...settings}>
                            {this.renderSlider(place.placeImageLink)}
                            {/* <div>
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
                            </div> */}
                        </Slider>
                        <Detail place={place} />

                    </div>
                    <div>
                        <Footer2 />
                    </div>
                </div>
            );
        } else {
            return ""
        }
    }

}

export default PlaceDetail;
