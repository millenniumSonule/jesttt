/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './pagination.css'

const Pagination = () => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            setData(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='container'>
            {
                data.map(item => (
                    <div key={item.id} className='col-12 col-sm-6 col-md-4 col-lg-2 mb-4'>
                        <div className='card'>
                            <img className='img-product'
                                src={item.image}
                            />
                            <p>{item.title}</p>
                            <p>₹{item.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Pagination