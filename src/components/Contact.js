import React, { useState } from 'react'
import RandomHighlight from './RandomHighlight.js';

import { validateEmail } from '../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    };

    return (
        <section className="main-container container ">
            <div className="row d-flex flex-column justify-content-around align-items-center" >
                <div className="col-12 d-flex flex-column justify-content-center align-items-center " >
                    <RandomHighlight key={{ name: "Contact me: " }} item={{ name: "Contact me: " }} />
                    <p style={{ maxWidth: '400px', textAlign: 'center' }}>If you would like to connect, please feel free to email me a brief message.</p>
                    <a href="mailto:dcpb777@gmail.com" rel="noopener noreferrer" target="_blank"><h5>Email Me</h5></a>
                </div>

                {/* <div className="d-flex justify-content-center ">
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input className="form-control" placeholder="name" type="text" name="name" defaultValue={name} onBlur={handleChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="email" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" placeholder="message" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                        </div>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                    </form>
                </div>

                <div className="d-flex justify-content-center  ">
                    <button className="btn btn-primary" data-testid="button" type="submit">Send <i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                </div> */}
            </div>
        </section>
    );
}
export default Contact