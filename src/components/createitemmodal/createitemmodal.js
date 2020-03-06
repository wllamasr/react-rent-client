import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { httpClient } from '../../utils/httpClient';
import CreateItemForm from '../createitemform';

function CreateRentModal({ onCreated }) {
    const [visible, setVisible] = useState(false);

    function showModal() {
        setVisible(true);
    }

    function handleOk(values) {
        try {
            httpClient('item', { body: values, method: 'POST' })
                .then(response => {
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
                onCancel={()=>setVisible(false)}
            >
                <CreateItemForm onFinish={handleOk} onCancel={() => setVisible(false)} ></CreateItemForm>
            </Modal>
        </div>
    );
}

export default CreateRentModal;