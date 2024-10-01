/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './pagination.css'

const Pagination = () => {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

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
              <div className="row"> {/* Added row for proper grid layout */}
                {
                    data.map(item => (
                        <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
                            <div className="card">
                                <img 
                                    className="img-product"
                                    src={item.image}
                                    alt={item.title} 
                                />
                                <p>{item.title}</p>
                                <p>₹{item.price}</p>
                            </div>
                        </div>
                    ))
                }
                <div className='prev-next-btns'>
                <button>Prev</button>
                {0}                <button>Next</button>
            </div>
            </div>
            
        </div>
    )
}

export default Pagination