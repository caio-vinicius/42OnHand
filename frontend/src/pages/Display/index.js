import React, { useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css';

import logo from '../../assets/42logo.svg'

function Display() {
    const [data, setData] = useState([])

    useEffect(() => {
        api.get("/v2/campus?sort=id&page[size]=5")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (    
        <div className="display">
            <header>
                <img src={logo} alt="42 Logo"/>
                <h1>Campus</h1>
            </header>
            <main>
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            <strong>Name</strong>
                            <p>42 {item.name}</p>
                            <strong>Country</strong>
                            <p>{item.country}</p>
                            <strong>Language</strong>
                            <p>{item.language.name}</p>
                            <strong>Registry</strong>
                            <p>{item.users_count}</p>
                            <button type="button">
                                <FiArrowRight size={20} color="#000000" />
                            </button>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}

export default Display;

