import { Form, Input, Button, InputNumber, DatePicker, Select } from 'antd';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { httpClient } from '../../utils/httpClient';

const { Item } = Form;
const { Option } = Select;

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 20,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    }
};
const dateFormat = 'YYYY-MM-DD';

const CreateRentForm = ({ onFinish, onCancel }) => {

    const [users, setUsers] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        httpClient('users')
            .then(result => setUsers(result))

        httpClient('item')
            .then(result => setItems(result))
    }, [])

    const [form] = Form.useForm();

    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Item name="user_id" label="Usuario" rules={[{ required: true }]}>
                <Select>
                    {users.map(user => (
                        <Option value={user.id} >{user.name}</Option>
                    ))}
                </Select>
            </Item>
            <Item name="item_id" label="Item" rules={[{ required: true, type: 'number' }]}>
                <Select>
                    {items.map(item => (
                        <Option value={item.id} >{item.name}</Option>
                    ))}
                </Select>
            </Item>
            <Item name="from_date" label="From date">
                <DatePicker format={dateFormat} />
            </Item>
            <Item name="to_date" label="To date" rules={[{ required: true }]}>
                <DatePicker format={dateFormat} />
            </Item>
            <Item {...tailLayout}>
                <Button type="danger" onClick={onCancel}>Cancel</Button>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Item>
        </Form>
    );
}

export default CreateRentForm;