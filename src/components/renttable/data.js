import React from 'react';
import User from '../user/user';
import Item from '../item/item';
import PayRentModal from '../payrentmodal';

export const columns = [
    {
        title: 'Item',
        dataIndex: ['item', 'name'],
        render: (text, record) => {
            return <Item item={record.item} ></Item>
        }
    },
    {
        title: 'User',
        dataIndex: ['user', 'name'],
        render: (text, record) => {
            return <User user={record.user} ></User>;
        }
    },
    {
        title: 'From date',
        dataIndex: 'from_date',
    },
    {
        title: 'To date',
        dataIndex: 'to_date',
    },
    {
        title: 'Total',
        dataIndex: 'total',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render: (text, record) => {
            return (text === 'rented' ?
                <PayRentModal rent={record}></PayRentModal> :
                <span>{text.toUpperCase()}</span>
            );
        }
    },
];

