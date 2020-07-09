import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Detail.css';
import TicketType from '../TicketType/TicketType';
class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div
                style={{
                    marginTop: "20px",
                    fontFamily: 'Inter'
                }}
                className="row no-gutters" >
                <div
                    style={{ border: "solid 1px red" }}
                    className="col-9">
                    <h3>Tour Phố cổ hội An 2 ngày 1 đêm</h3>
                    <hr style={{ border: "1.5px solid #E3E3E3", borderRadius: "2px" }} />

                    <div id="inline">
                        <div className="bulletListCustome"></div>
                        <div className="content">Điểm nổi bật</div>
                    </div>
                    <ul className="a">
                        <li className="b">Khám phá Phố cổ Hội An, được UNESCO công nhận là di sản văn hoá thể giới, trong nửa ngày  </li>
                        <li className="b">Tham quan các địa điểm lịch sử như Miếu Quan Công, Hội quán Phúc Kiến, Chùa Cầu, và một vài nhà cổ </li>
                        <li className="b">Tìm hiểu lịch sử lâu đời của Hội An Chụp những tấm hình tuyệt đẹp của khu phố cổ nên thơ</li>
                    </ul>
                    <div id="inline">
                        <div className="bulletListCustome"></div>
                        <div className="content">Các lựa chọn vé</div>
                    </div>
                    <TicketType />
                    
                </div>

                <div
                    style={{ border: "solid 1px blue" }}
                    className="col-3">
                </div>

            </div >
        );
    }

}

export default Detail;
