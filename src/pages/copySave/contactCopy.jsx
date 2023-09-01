// LIBRARY //
import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
// STYLE //
import '../App.css';
// CONTEXT //
import { StyleContext } from '../../contexts/style.context';
// PAGE //
// COMPONENT //
import GlassmorphismComponent from '../../components/glassmorphism/glassmorphism-component';
// OTHER //
import useDevice from '../../utils/hooks/useDevice';
import github from '../assets/toolsIcone/github.svg';
import linkedin from '../assets/linkedin.png';

export default function Contact() {
    const { isMobile, orientation } = useDevice();
    const { PageContainer, pageContainerStyle, isLoad, sectionTitle } = useContext(StyleContext);
    const [isSend, setSend] = useState(false);
    const form = useRef();

    useEffect(() => { isSend && setTimeout(() => setSend(false), 1000); }, [isSend])

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_pb82yvi', 'template_lcxba0u', form.current, '690lTCyUWZ-OdtxkO')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                setSend(true);
            }, function (error) {
                console.log('FAILED...', error);
            });
    };

    const Form = () => {
        const btnValue = isSend ? "Email envoyé !" : "Envoyer"
        const isSendStyle = isSend ? { color: "black", backgroundColor: "green", fontWeight: "bold" } : { backgroundColor: "rgba(255,255,255,0.3)", borderWidth: 0.1 };
        return (
            <FormContainer ref={form} onSubmit={sendEmail}>
                <h2 style={sectionTitle}>Me Contacter</h2>
                <FormField label={"Nom :"} placeholder={"Qui êtes-vous? ..."} type={"text"} name={"user_name"} />
                <FormField label={"E-mail :"} placeholder={"Votre e-mail..."} type={"email"} name={"user_email"} />
                <TextAreaContainer name="message" placeholder={"Votre message"} wrap="soft" rows="15" cols="20" style={{ width: isMobile && "90%" }} />
                <SubmitButtonContainer type="submit" value={btnValue} style={isSendStyle} />
            </FormContainer>
        )
    };

    const FormField = ({ label, placeholder, type, name }) => {
        const formfielddiv = { display: "flex", width: "100%", justifyContent: "center", alignItems: "center", marginBottom: 20 };
        const formfieldlabel = { padding: isMobile && "0 0 5px 30px", width: isMobile && "100%", marginRight: !isMobile && 10 };
        const inputStyle = { background: "none", border: "none", borderRadius: "10px", padding: "5px", width: "100%" };
        return (
            <div style={formfielddiv}>
                <label style={formfieldlabel}>{label}</label>
                <GlassmorphismComponent width={isMobile ? orientation === "landscape" ? "80vw" : "55vw" : "80vw"} >
                    <input type={type} name={name} placeholder={placeholder} style={inputStyle} />
                </GlassmorphismComponent>
            </div>
        )
    };



    // Media
    const IconesLink = ({ source, link, label }) => <IconeLink href={link} target="_blank"><Icone src={source} className='iconsocialnetworks' />{label}</IconeLink>
    const Media = () => {
        const githubLabel = isMobile ? <span style={{color: "crimson", textAlign: "center"}}>Mon<br/>Github</span> : "AnthonyDWeb";
        const linkedinLabel = isMobile ? <span style={{color: "crimson"}}>Anthony<br/>Delforge</span> : "Anthony Delforge";
        return (
            <div style={{ display: "flex", justifyContent: "space-around", width: "100%", marginTop: 20, }}>
                <GlassmorphismComponent rad={"30%"} background={"rgba(255,255,255,0.3)"}>
                    <IconesLink source={github} link={"https://github.com/AnthonyDWeb"} label={githubLabel} />
                </GlassmorphismComponent>
                <GlassmorphismComponent rad={"30%"} background={"rgba(255,255,255,0.3)"}>
                    <IconesLink source={linkedin} link={"https://www.linkedin.com/in/anthony-delforge-9b0805214"} label={linkedinLabel} />
                </GlassmorphismComponent>
            </div>
        )
    }


    return (isLoad &&
        <PageContainer style={{ ...pageContainerStyle }} id='contact' className={"animate__animated animate__backIn"}>
            <div>
                <Form />
                <Media />
            </div>
        </PageContainer>
    )

}


const FormContainer = styled.form`
display: flex; flex-direction: column; width: 100%; justify-content: center; align-items: center;
textarea::placeholder { color: white};
input::placeholder { color: white};
`;

const TextAreaContainer = styled.textarea`
background-color: transparent; width: 100%; border-radius: 5px; padding: 5px; text-align: justify; margin-top: 10px;
`;

const SubmitButtonContainer = styled.input`
background-color: transparent; border: 1px solid; border-radius: 5px; padding: 5px; margin: 10px; width: fit-content;
:hover {
    color: black;
    background-color: white;
    cursor: pointer;
}
`;

const IconeLink = styled.a`
display: flex;
flex-direction: column;
align-items: center;
color: red;
margin: 5px;
`;

const Icone = styled.img`
width: 50px;
height: 50px;
`;
