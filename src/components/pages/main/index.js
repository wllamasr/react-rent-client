
import React from 'react';
import { Redirect } from "react-router-dom";
import './main.css'

const Main = () => {
    return (
        <Redirect to="/admin" />
    );
}

export default Main;