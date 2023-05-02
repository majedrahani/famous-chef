import React, { useEffect, useState } from 'react';
import Header from './Header';
import ChefCard from './ChefCard';

const Home = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/data')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div className='grid grid-cols-3 p-16 gap-4'>
            {
                data.map(info => <ChefCard
                key={info.id}
                data={info}
                ></ChefCard>)
            }
            
        </div>
    );
};

export default Home;