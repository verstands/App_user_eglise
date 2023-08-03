import React from 'react';

const Token = () => {
    return `Bearer ${localStorage.getItem("token")}`;
};

export default Token;