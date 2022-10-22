import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [catagotries, setCatagories] = useState([]);

    useEffect(() => {
fetch('http://localhost:5000/news-catagories')
.then(res => res.json())
.then(data => setCatagories(data))
    }, [])
    return (
        <div>
            <h5 className='bg-danger text-white p-1 text-center'>Total Catagory: {catagotries.length}</h5>
            <div>
                {
                    catagotries.map(catagory => <p key={catagory.id}>
                        <Link to={`/catagory/${catagory.id}`}>{catagory.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;