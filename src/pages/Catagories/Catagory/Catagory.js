import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Catagory = () => {
    const catagoryNews = useLoaderData();
    return (
        <div>
           <h4>This catagory has {catagoryNews.length} news</h4>
           {
                catagoryNews.map(news =><NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Catagory;