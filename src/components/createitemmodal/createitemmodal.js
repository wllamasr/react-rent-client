import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import CreateItemForm from '../createitemform/createitemform';
import { httpClient } from '../../utils/httpClient';

function CreateItemModal({ onCreated }) {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    function showModal() {
        setVisible(true);
    }

    function handleOk(values) {
        console.log(values)
        try {
            httpClient('item', { body: values, method: 'POST' })
                .then(response => {
                    console.log(response);

                    onCreated()
                })

        } catch (e) {
            console.log("No onCreated event provided")
        }
        setVisible(false);
    }

    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Create new item
            </Button>
            <Modal
                footer={false}
                visible={visible}
                title="Create new item"
                confirmLoading={loading}
                closable={false}
            >
                <CreateItemForm onFinish={handleOk} onCancel={() => setVisible(false)} ></CreateItemForm>
            </Modal>
        </div>
    );
}

export default CreateItemModal;