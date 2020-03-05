import React, { useState, useEffect } from 'react';
import { httpClient } from '../../utils/httpClient';
import { Row, Col } from 'antd';

function ItemDetail({ itemId }) {
    const [item, setItem] = useState({});
    useEffect(() => {
        httpClient(`item/${itemId}`)
            .then(result => setItem(result))
    }, []);

    return (
        <div>
            <Row>
                <Col span={12} >Name</Col>
                <Col span={12} >{item.name}</Col>
            </Row>
            <Row>
                <Col span={12} >Price</Col>
                <Col span={12} >{item.price}</Col>
            </Row>
            <Row>
                <Col span={12} >Amount</Col>
                <Col span={12} >{item.amount}</Col>
            </Row>
        </div>
    );
}

export default ItemDetail;