import React from 'react';
import './admin.css'
import { Tabs } from "antd";
import ItemTable from '../../itemtable';

const { TabPane } = Tabs;

const Admin = () => {
    return (
        <Tabs>
            <TabPane
                tab="ITEMS"
                key="Items"
            >
                <ItemTable></ItemTable>
            </TabPane>
            <TabPane
                tab={<span>WILMER2</span>}
                key="2"
            >
                Tab 2
            </TabPane>
        </Tabs>
    );
}

export default Admin;