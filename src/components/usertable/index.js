import React, { useState, useEffect } from "react";
import { Table, Row, Col } from 'antd';
import { columns } from './data'
import { httpClient } from '../../utils/httpClient';
import { } from './data'
import CreateUserModal from "../createusermodal";

import './usertable.css'

function UserTable() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    function fetchData() {
        httpClient('users')
            .then(response => {
                setData(response)
            })
    }

    return (
        <div>
            <Row style={{ marginBottom: 14 }}>
                <Col span={24}>
                    <CreateUserModal onCreated={fetchData} ></CreateUserModal>
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

export default UserTable;