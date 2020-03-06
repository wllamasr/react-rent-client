import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { httpClient } from '../../utils/httpClient';
import CreateRentForm from '../createrentform';

function CreateRentModal({ onCreated }) {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    function showModal() {
        setVisible(true);
    }

    function handleOk(values) {
        try {
            httpClient('rent', { body: values, method: 'POST' })
                .then(response => {
                    onCreated()
                })

        } catch (e) {
            console.log("No onCreated function provided")
        }

        setVisible(false);
    }

    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Create new rental
            </Button>
            <Modal
                footer={false}
                visible={visible}
                title="Create new item"
                confirmLoading={loading}
                onCancel={()=>setVisible(false)}
            >
                <CreateRentForm onFinish={handleOk} onCancel={() => setVisible(false)} ></CreateRentForm>
            </Modal>
        </div>
    );
}

export default CreateRentModal;