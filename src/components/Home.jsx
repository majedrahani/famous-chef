import React, { useEffect, useState } from 'react';
import Header from './Header';
import ChefCard from './ChefCard';
import SiteInfo from './SiteInfo';
import Review from './Review';

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
            
           <div className='p-16'>
           <h2 className='text-[40px] font-medium text-center mb-8'>Top Chef</h2>
             <div className='grid grid-cols-3  gap-4'>
            
                {
                    data.map(info => <ChefCard
                        key={info.id}
                        data={info}
                    ></ChefCard>)
                }

            </div>
           <div className='grid grid-cols-3  gap-4'>
            
            {
                data.map(info => <ChefCard
                    key={info.id}
                    data={info}
                ></ChefCard>)
            }

        </div>
           </div>
            <Review></Review>
        </div>
    );
};

export default Home;