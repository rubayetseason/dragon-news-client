import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Catagory = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
           <h4>This catagory has {news.length} news</h4>
        </div>
    );
};

export default Catagory;