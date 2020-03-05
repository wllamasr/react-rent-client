import React, { useState } from 'react';
import { Modal } from 'antd';
import ItemDetail from '../itemdetail';

const Item = ({ item }) => {

    const [visible, setVisible] = useState();

    return (
        <div>
            <span onClick={() => setVisible(true)} >{item.name}</span>
            <Modal
                footer={false}
                visible={visible}
                title="Item details"
                destroyOnClose={true}
                onCancel={() => setVisible(false)}
            >
                <ItemDetail itemId={item.id}></ItemDetail>
            </Modal>
        </div>
    );
}

export default Item;