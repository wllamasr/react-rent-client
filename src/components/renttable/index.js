import React, { useState, useEffect } from "react";
import { Table, Row, Col } from 'antd';
import { columns } from './data';
import { httpClient } from '../../utils/httpClient';

import './renttable.css';
import CreateRentModal from "../createrentmodal";

function RentTable() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    function fetchData() {
        httpClient('rent')
            .then(response => {
                setData(response)
            })
    }

    return (
        <div>
            <Row style={{ marginBottom: 14 }}>
                <Col span={24}>
                    <CreateRentModal onCreated={fetchData} ></CreateRentModal>
                </Col>
            </Row >
            <Row>
                <Col span={24}>
                    <Table columns={columns} dataSource={data}></Table>
                </Col>
            </Row>
        </div>
    );
}

export default RentTable;