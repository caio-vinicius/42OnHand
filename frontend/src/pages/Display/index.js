import React, { useState, useEffect } from 'react';
import { FiArrowRight, FiX } from 'react-icons/fi'
import { Waypoint } from 'react-waypoint'
import Modal from 'react-modal'

import api from '../../services/api'

import './styles.css';

import logo from '../../assets/42logo.svg'

function Display() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);

    const [modalIsOpen,setIsOpen] = useState(false);

    async function getAmount() {
        await api.get(`/v2/campus?page[size]=100`)
            .then((res) => {
                setTotal(res.data.length)
            })
    }

    async function loadData() {
        if (loading)
            return;

        setLoading(true);
        
        await api.get(`/v2/campus?sort=id&page[size]=10&page[number]=${page}`)
            .then((res) => {
                setPage(page + 1)
                setData([...data, ...res.data]);
            })
            .catch((err) => {
                console.log(err)
            })

        setLoading(false);
    }

    useEffect(() => {
        getAmount();
        loadData();
    }, [])

    return (    
        <div className="display">
            <header>
                <img src={logo} alt="42 Logo"/>
                <p>Are <strong>{total}</strong> campuses in registry</p>
            </header>
            <main>
                <h1>Campus around the world</h1>
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
                            <button onClick={() => {
                                setIsOpen(true)
                            }} type="button">
                                <FiArrowRight size={20} color="#000000" />
                            </button>
                        </li>
                    ))}
                </ul>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose="false"
                    contentLabel="Example Modal"
                >
                    <button onClick={() => {
                        setIsOpen(false)
                    }} type="button">
                        <FiX size={20} color="#000000" />
                    </button>
                </Modal>
                <Waypoint
                    onEnter={loadData}
                />
            </main>
        </div>
    );
}

export default Display;

