// MyProvider.js
import React, { useState } from 'react';
import MyContext from './QuestionContext';

const MyProvider = ({ children }) => {
    const [value, setValue] = useState('Hello from context!');
    const [QuesData, setQuesData] = useState([]);

    return (
        <MyContext.Provider value={{ value, setValue, QuesData, setQuesData }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
