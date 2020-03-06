import { Form, Input, Button, InputNumber } from 'antd';
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

const CreateItemForm = ({ onFinish, onCancel }) => {

    const [form] = Form.useForm();

    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Item name="name" label="Name" rules={[{ required: true }]}>
                <Input />
            </Item>
            <Item name="price" label="Price" rules={[{ required: true, type: 'number' }]}>
                <InputNumber />
            </Item>
            <Item name="amount" label="Amount" rules={[{ required: true, type: 'number' }]}>
                <InputNumber />
            </Item>
            <Item {...tailLayout}>
                <Button type="danger" onClick={onCancel}>Cancel</Button>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Item>
        </Form>
    );
}

export default CreateItemForm;