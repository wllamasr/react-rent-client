import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import CreateUserForm from '../createuserform/createuserform'
import { httpClient } from '../../utils/httpClient';

function CreateUserModal({ onCreated }) {
    const [visible, setVisible] = useState(false);

    function showModal() {
        setVisible(true);
    }

    function handleOk(values) {

        try {
            httpClient('users', { body: values, method: 'POST' })
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
                Create new user
            </Button>
            <Modal
                footer={false}
                visible={visible}
                title="Create new user"
                closable={false}
                onCancel={()=>setVisible(false)}
            >
                <CreateUserForm onFinish={handleOk} onCancel={() => setVisible(false)} ></CreateUserForm>
            </Modal>
        </div>
    );
}

export default CreateUserModal;