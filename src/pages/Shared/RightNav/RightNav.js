import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FcGoogle } from "react-icons/fc";
import { FaWhatsapp } from "react-icons/fa";
import { FiGithub , FiFacebook, FiTwitch, FiTwitter, FiYoutube } from "react-icons/fi";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../Carousel/BrandCarousel';

const RightNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant='outline-primary'><FcGoogle /> Login with Google</Button>
                <Button variant='outline-dark'><FiGithub /> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5 className='mb-3'>Find Us On:</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FiFacebook></FiFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FiTwitter></FiTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FiYoutube></FiYoutube> Youtube</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FiTwitch></FiTwitch> Twitch</ListGroup.Item>
                </ListGroup> 
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightNav;