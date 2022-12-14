import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name);
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    };
    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
    };
    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name,
            photoURL: ''
        };
        updateUserProfile(profile)
            .then(() => { })
            .catch((error) => console.log(error))
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h2 className='text-center mb-3'>Register Here</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    onClick={handleAccepted}
                    label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
            </Form.Group>
            <Form.Text className="text-danger my-2">
                {error}
            </Form.Text>
            <br />
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
        </Form>
    );
};

export default Register;