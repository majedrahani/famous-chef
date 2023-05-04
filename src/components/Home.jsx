import React, { useEffect, useState } from 'react';
import Header from './Header';
import ChefCard from './ChefCard';
import SiteInfo from './SiteInfo';

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/data')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <SiteInfo></SiteInfo>
            <div className='grid grid-cols-3 p-16 gap-4'>
                {
                    data.map(info => <ChefCard
                        key={info.id}
                        data={info}
                    ></ChefCard>)
                }

            </div>
        </div>
    );
};

export default Home;