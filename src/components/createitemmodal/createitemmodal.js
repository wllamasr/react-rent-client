import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { httpClient } from '../../utils/httpClient';
import CreateRentForm from '../createrentform';

function CreateRentModal({ onCreated }) {
    const [visible, setVisible] = useState(false);

    function showModal() {
        setVisible(true);
    }

    function handleOk(values) {
        console.log(values)
        try {
            httpClient('rent', { body: values, method: 'POST' })
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
                closable={false}
            >
                <CreateRentForm onFinish={handleOk} onCancel={() => setVisible(false)} ></CreateRentForm>
            </Modal>
        </div>
    );
}

export default CreateRentModal;