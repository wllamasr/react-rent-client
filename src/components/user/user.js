import React, { useState } from 'react';
import { Modal } from 'antd';
import UserDetail from '../userdetail';

const User = ({ user }) => {
    const [visible, setVisible] = useState();

    return (
        <div>
            <span onClick={() => setVisible(true)} >{user.name}</span>
            <Modal
                footer={false}
                visible={visible}
                title="User details"
                destroyOnClose={true}
                onCancel={() => setVisible(false)}
            >
                <UserDetail userId={user.id}></UserDetail>
            </Modal>
        </div>
    );
}

export default User;