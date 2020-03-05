import React from 'react';
import User from '../user/user';
import Item from '../item/item';

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
];

