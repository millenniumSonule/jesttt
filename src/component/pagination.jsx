import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Pagination = () => {

    const [data,setData] = useState('');

    const fetchData = async ()=>{
        try{
            const x = await axios.get('https://fakestoreapi.com/products')
            setData(x);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='contianer'>
           
        </div>
    )
}

export default Pagination