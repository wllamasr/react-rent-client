import React, { useState } from 'react';
import { Button, Modal, message } from 'antd';
import { httpClient } from '../../utils/httpClient';
import CreateRentForm from '../createrentform';

function CreateRentModal({ onCreated }) {
    const [visible, setVisible] = useState(false);

    function showModal() {
        setVisible(true);
    }

    function handleOk(values) {
        httpClient('rent', { body: values, method: 'POST' })
            .then(response => {
                if (response.error) throw new Error(response.error);
                onCreated();
                setVisible(false);
            })
            .catch(error => {
                message.error(error.message);
            })

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
                confirmLoading={false}
                onCancel={() => setVisible(false)}
                destroyOnClose={true}
            >
                <CreateRentForm onFinish={handleOk} onCancel={() => setVisible(false)} ></CreateRentForm>
            </Modal>
        </div>
    );
}

export default CreateRentModal;