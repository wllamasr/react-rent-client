import { Form, Input, Button } from 'antd';
import React from 'react';

const { Item } = Form;

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

const CreateUserForm = ({ onFinish, onCancel }) => {

    const [form] = Form.useForm();

    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>

            <Item name="name" label="Name" rules={[{ required: true }]}>
                <Input />
            </Item>
            <Item name="email" label="Email" rules={[{ required: true, type: 'string' }]}>
                <Input />
            </Item>
            <Item name="phone" label="Phone" rules={[{ required: true, type: 'string' }]}>
                <Input />
            </Item>
            <Item name="dni" label="DNI" rules={[{ required: true, type: 'string' }]}>
                <Input />
            </Item>
            <Item name="address" label="Address" rules={[{ required: true, type: 'string' }]}>
                <Input />
            </Item>

            <Item {...tailLayout}>
                <Button type="danger" onClick={onCancel}>Cancel</Button>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Item>
        </Form>
    );
}

export default CreateUserForm;