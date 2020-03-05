import React from 'react';
import './admin.css'
import { Tabs } from "antd";
import ItemTable from '../../itemtable';
import UserTable from '../../usertable';
import RentTable from '../../renttable';

const { TabPane } = Tabs;

const Admin = () => {
    return (
        <Tabs>
            <TabPane
                tab="ITEMS"
                key="items"
            >
                <ItemTable></ItemTable>
            </TabPane>
            <TabPane
                tab="USERS"
                key="users"
            >
                <UserTable></UserTable>
            </TabPane>
            <TabPane
                tab="RENTS"
                key="rents"
            >
                <RentTable></RentTable>
            </TabPane>
        </Tabs>
    );
}

export default Admin;