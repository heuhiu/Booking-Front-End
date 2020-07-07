import React, { Component } from 'react';
import { connect } from 'react-redux';
class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div
                style={{ marginTop: "20px" }}
                className="row no-gutters" >
                <div
                    style={{ border: "solid 1px red" }}
                    className="col-9">
                    <h1>Tour Phố cổ hội An 2 ngày 1 đêm</h1>
                    <hr style={{ border: "2px solid #E3E3E3", borderRadius: "2px" }} />
                    <h2>Điểm nổi bật</h2>
                    <ul>
<li>Example</li>
<li>Example2</li>
<li>Example3</li>
</ul>
                </div>
                <div
                    style={{ border: "solid 1px blue" }}
                    className="col-3">

                </div>
            </div>
        );
    }

}

export default Detail;
