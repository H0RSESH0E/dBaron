import React, { useState } from 'react'
import HighlightText from './HighlightText.js';

import { validateEmail } from '../utils/helpers';

import { paintStrokes } from './states.js';

function randPaint() {
    let i = Math.floor(Math.random() * 6)
    return require(`../../public/images/${paintStrokes[i].fileName}`);
}


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

    // style={{ height: '65vh' }}
    // style={{ height: '100%' }}
    return (
        <section className="main-container container ">
            <div className="row d-flex flex-column justify-content-around align-items-center" >
                <div className="col-12 d-flex flex-column justify-content-center align-items-center " >

                            <HighlightText key={{name: "Contact me: "}} item={{name: "Contact me: "}} />

                    {/* <h4 data-testid="h1tag" className="paint-stroke-shadow">Contact me</h4> */}
                    <a href="mailto:dcpb777@gmail.com" rel="noopener noreferrer" target="_blank"><h5>Email Me</h5></a>
                    <p style={{ maxWidth: '400px', textAlign: 'center' }}>If you would like to connect with me, please leave me your name, email and a brief message.</p>
                </div>

                <div className="d-flex justify-content-center ">
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
                    <button className="btn btn-primary" data-testid="button" type="submit">Submit <i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                </div>
            </div>
        </section>
    );
}
export default Contact