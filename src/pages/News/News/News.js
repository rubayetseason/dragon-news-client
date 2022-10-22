import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();
    const { title, details, image_url, catagory_id } = news;
    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/catagory/${catagory_id}`}>
                    <Button variant="primary">All news in this category</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;