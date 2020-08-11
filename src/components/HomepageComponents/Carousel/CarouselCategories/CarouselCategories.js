import React, { Component } from 'react';
import Slider from "react-slick";
// import Rectangle from '../../../../img/Rectangle 17.png';
import RightOwl from '../../../../img/RightOwl.png';
import LeftOwl from '../../../../img/LeftOwl.png';
import TempPic from '../../../../img/entertainment.png';
import './CarouselCategories.css';
import callApi from '../../../../config/utils/apiCaller';
import wtf from '../../../../img/TPHCM.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showLoader, hideLoader } from '../../../../actions/index';

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <img
            onClick={onClick}
            className={className}
            src={LeftOwl}
            alt="FAIL TO LOAD" >
        </img>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            onClick={onClick}
            className={className}
            src={RightOwl}
            style={{ ...style, margin: "5em" }}
            alt="FAIL TO LOAD" >
        </img>
    );
}



class CarouselCategories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
        }
    }

    showAllCategory = (listCategory) => {
        var result = null;
        if (listCategory.length > 0) {
            result = listCategory.map((item, index) => {
                return (
                    <Link
                        key={index}
                        className="decoNone"
                        to={`/searchedPlace?listCatID=${item.id}`}>
                        <div className="owlStyle">
                            <h3 style={{ border: "none" }} className="owlStyleChil">
                                <div
                                style={{ height: "170px" }}
                                >
                                    <img
                                        className="coverImg"
                                        src={item.iconLink}
                                        alt="FAIL TO LOAD" />
                                </div>
                                <div className="containerOwlChil">
                                    {/* <div style={{height: "5px"}}> */}
                                    <p className="catOwlStyleChil1">{item.categoryName}</p>
                                    {/* </div> */}
                                    <p className="catOwlStyleChil2">{item.description}
                                    </p>
                                </div>
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
        const { listCategory } = this.props;
        // console.log(listCategory);
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (

            <section className="py-5">
                <div className="container">
                    <h2 className="headerOwl">Khám phá các danh mục có tại Goboki</h2>
                    <h2 className="desHeaderOwl">Vui hết sức, chơi hết mình</h2>
                    <Slider {...settings}>
                        {this.showAllCategory(this.props.listCategory)}
                    </Slider>
                </div>
            </section>
        );

    }
}

// export default CarouselCategories;
const mapStateToProps = state => {
    return {
        listCategory: state.Categories

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

// export default MyCounter;
export default connect(mapStateToProps, mapDispatchToProps)(CarouselCategories);