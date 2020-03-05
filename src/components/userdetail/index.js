import React, { useState, useEffect } from 'react';
import { httpClient } from '../../utils/httpClient';
import { Row, Col } from 'antd';

function UserDetail({ userId }) {
    const [user, setUser] = useState({});
    useEffect(() => {
        httpClient(`users/${userId}`)
            .then(result => setUser(result))
    }, []);

    return (
        <div>
            <Row>
                <Col span={12} >Name</Col>
                <Col span={12} >{user.name}</Col>
            </Row>
            <Row>
                <Col span={12} >Phone</Col>
                <Col span={12} >{user.phone}</Col>
            </Row>
            <Row>
                <Col span={12} >Email</Col>
                <Col span={12} >{user.email}</Col>
            </Row>
            <Row>
                <Col span={12} >Address</Col>
                <Col span={12} >{user.address}</Col>
            </Row>
            <Row>
                <Col span={12} >DNI</Col>
                <Col span={12} >{user.dni}</Col>
            </Row>
        </div>
    );
}

export default UserDetail;