import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './index.css';

export default function ContactMe() {
    const [isSend, setSend] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
                publicKey: process.env.REACT_APP_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSend(true);
                },
                (error) => {
                    alert("une erreur est survenue, veuillez retenter ultérieurement")
                    console.log('FAILED...', error.text);
                },
            );
    };

    useEffect(() => {
        isSend && setTimeout(() => (form.current.reset(), setSend(false)), 1500);
    }, [isSend])
    const SendIconValid = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z" /></svg>
        )
    }

    return (
        <div className="form-card1">
            <div className="form-card2">

                <form className="form" ref={form} onSubmit={sendEmail}>
                    <h2 className='title-page'>Me contacter</h2>
                    <div className="form-field">
                        <input required placeholder="Qui êtes vous ? (Nom)" className="input-field" type="text" name="user_name" />
                    </div>

                    <div className="form-field">
                        <input
                            required
                            placeholder="Votre Email"
                            className="input-field"
                            type="email"
                            name="user_email"
                        />
                    </div>

                    <div className="form-field">
                        <textarea
                            required
                            placeholder="Votre message"
                            cols="30"
                            rows="15"
                            className="input-field"
                            name="message"
                        ></textarea>
                    </div>
                    <button className={`send-message-container ${isSend && "Message envoyé"}`} type='submit'>
                        {isSend ? <SendIconValid /> : "Envoyer"}
                    </button>
                </form>
            </div >
        </div >

    )
}
