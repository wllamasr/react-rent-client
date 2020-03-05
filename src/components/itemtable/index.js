import React, { useState, useEffect } from "react";
import { Table, Row, Col } from 'antd';
import { columns } from './data'
import { httpClient } from '../../utils/httpClient';
import CreateItemModal from "../createitemmodal/createitemmodal";

function ItemTable() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    function fetchData() {
        httpClient('item')
            .then(response => {
                setData(response)
            })
    }

    return (
        <div>
            <Row style={{ marginBottom: 14 }}>
                <Col span={24}>
                    <CreateItemModal onCreated={fetchData} ></CreateItemModal>
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

export default ItemTable;