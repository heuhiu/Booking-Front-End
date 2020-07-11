import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TabDetail.css';
import { Tab, Row, Col, Nav } from 'react-bootstrap';

class TabDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav 
                        id="LeftTab"
                        variant="pills" className="flex-column">
                            <Nav.Item id="LeftTabItem">
                                <Nav.Link
                                eventKey="first">Thông tin</Nav.Link>
                            </Nav.Item>
                            <Nav.Item id="LeftTabItem">
                                <Nav.Link eventKey="second">Điều khoản</Nav.Link>
                            </Nav.Item>
                            <Nav.Item id="LeftTabItem">
                                <Nav.Link eventKey="third">Hướng Dẫn</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content
                        >
                            <Tab.Pane eventKey="first">
                                Content 1
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            Content 2
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            Content 3
                            </Tab.Pane>

                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        );
    }
    

}

export default TabDetail;
