import React, { Component } from 'react';
import Slider from "react-slick";
import Rectangle from '../../../img/Rectangle 17.png';
import './style.css';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
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
            // dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />

        };

        return (
            <section className="py-5">
            <div className="container">
              <h2>Custom Arrows</h2>
              <Slider {...settings}>
                <div>
                  <h3>
                    <img src={Rectangle} alt="" />
                lmao 1
              </h3>
                </div>
                <div>
                  <h3>
                    <img src={Rectangle} alt="" />
                lmao 2
              </h3>
                </div><div>
                  <h3>
                    <img src={Rectangle} alt="" />
                lmao 3
              </h3>
                </div><div>
                  <h3>
                    <img src={Rectangle} alt="" />
                lmao 4
              </h3>
                </div><div>
                  <h3>
                    <img src={Rectangle} alt="" />
                lmao 5
              </h3>
                </div><div>
                  <h3>
                    <img src={Rectangle} alt="" />
                lmao 6
              </h3>
                </div>
              </Slider>
            </div>
          </section>
        );

    }
}

export default Slick1;
