import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h4>Dragon News Home: Total News {allNews.length}</h4>
            {
                allNews.map(news => <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;