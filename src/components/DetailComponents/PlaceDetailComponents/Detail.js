import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Detail.css';
import TicketType from '../TicketType/TicketType';
import RightPartDetail from '../RightPartDetail/RightPartDetail';
import DetailPic from '../../../img/Detailpic.png';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import TabDetail from '../TabDetail/TabDetai';

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
                    <div id="inline">
                        <div className="bulletListCustome"></div>
                        <div className="content">Bạn được trải nghiệm những gì?</div>
                    </div>
                    <span className="longDescription">
                        Một chuyến tham quan miền Trung Việt Nam sẽ không thể gọi là hoàn hảo
                        nếu bạn không làm một chuyến đến khu phức hợp giải trí lớn nhất đất nước -
                        Vinpearl Land Nam Hội An.
                        Tại đây, bạn sẽ trải nghiệm một công viên giải trí đầy hấp dẫn kết hợp giữa khám phá
                        trường sinh thái với 5 khu vực khác nhau trong công viên thêm
                        vào đó là 95 trò chơi giải trí trong nhà hấp dẫn du khách ở mọi lứa tuổi!
                        Đi đến Tháp Thụy Sĩ rơi xuống từ độ cao uốn lượn 80m,
                        hoặc Cây Swing sẽ đưa bạn đến một vòng quay cuộc đời.
                        Khám phá Làng thủ công mỹ nghệ Folk Island và xem người dân của các dân tộc thiểu số
                        dệt và tạo ra đồ gốm bằng hai bàn tay theo phong cách của riêng họ.
                        Tham quan Thế giới nước, nơi trẻ em và người lớn có thể ngâm mình thư giãn trong hồ bơi,
                        và đừng bỏ lỡ River Safari - khu bảo tồn động vật hoang dã đầu tiên và duy nhất
                        trong nước cho phép bạn khám phá vùng đất bằng đường sông.
                        Tận hưởng một ngày vui chơi và phiêu lưu ngay tại Vinpearl Land Nam Hội An!
                    </span>
                    <div
                        style={{
                            marginTop: "40px",
                            overflow: "hidden",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >
                        <img src={DetailPic} alt="FAIL TO LOAD" width="auto" height="auto" />
                    </div>

                    <div
                        style={{ paddingTop: "40px" }}
                        id="inline">
                        <div className="bulletListCustome"></div>
                        <div className="content">Chi tiết</div>
                        
                    </div>
                    <div className="placeDetail">
                        <TabDetail />
                    </div>
                </div>





                <div
                    style={{ border: "solid 1px blue" }}
                    className="col-3">
                    <RightPartDetail />
                </div>

            </div >
        );
    }

}

export default Detail;
