import React, { useState } from 'react';
import { Button, Modal, Row, Col, message } from 'antd';
import moment from 'moment';
import { httpClient } from '../../utils/httpClient';

function PayRentModal({ rent }) {
    const [visible, setVisible] = useState(false);
    const { item, user } = rent;

    const days = moment(moment().format()).diff(rent.toDate, 'days');

    function showModal() {
        setVisible(true);
    }

    function handleOk() {
        setVisible(false);
    }

    function updateRent() {
        httpClient(`rent/${rent.id}`, {
            method: 'PUT',
            body: {
                status: 'returned'
            }
        }).then(result => {
            console.log(result)

            message.info('Rent status updated')

            setVisible(false);
        })
    }

    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Rented
            </Button>
            <Modal
                visible={visible}
                title="Rent detail"
                onCancel={() => setVisible(false)}
                onOk={handleOk}
            >
                <Row>
                    <Col span={12}>Item</Col>
                    <Col span={12}>{item.name}</Col>
                </Row>
                <Row>
                    <Col span={12}>User</Col>
                    <Col span={12}> {user.name} </Col>
                </Row>
                <Row>
                    <Col span={12}>Status</Col>
                    <Col span={12}> {rent.status} </Col>
                </Row>
                <Row>
                    <Col span={12}> From date </Col>
                    <Col span={12}> {rent.fromDate} </Col>
                </Row>
                <Row>
                    <Col span={12}> To date </Col>
                    <Col span={12}> {rent.toDate} </Col>
                </Row>
                {
                    days > 0 &&
                    <>
                        <hr />
                        <span>User has {days} days of delay. Has to pay an extra</span>
                        <Row>
                            <Col span={12}>
                                Service
                            </Col>
                            <Col span={12}>
                                {rent.total}
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                Fine
                            </Col>
                            <Col span={12}>
                                {rent.toPay - rent.total}
                            </Col>
                        </Row>
                    </>
                }

                <Row>
                    <Col span={12}> Total to pay </Col>
                    <Col span={12}> {rent.toPay} </Col>
                </Row>
                <Row>
                    <Col span={24}><Button type="primary" onClick={updateRent}>PAGAR</Button></Col>
                </Row>
            </Modal>
        </div>
    );
}

export default PayRentModal;