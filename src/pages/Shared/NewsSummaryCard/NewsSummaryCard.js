import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaRegBookmark, FaShareAlt , FaEye} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NewsSummaryCard = ({ news }) => {

    const { author, title, _id, details, image_url, total_view } = news;
    return (
        <Card className='my-4'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image
                        roundedCircle
                        className='me-2'
                        src={author?.img}
                        style={{ height: '40px' }}
                    ></Image>
                    <div>
                        <p className='mb-0'>{author?.name}</p>
                        <p>{author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-2'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 250 ?
                            <>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link> </>
                            :
                            details
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <div className='d-flex justify-content-between'>
                    <div>2 days ago</div>
                    <div><FaEye></FaEye> Total views: {total_view}</div>
                </div>
            </Card.Footer>
        </Card >
    );
};

export default NewsSummaryCard;