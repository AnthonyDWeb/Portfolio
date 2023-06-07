import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import '../App.css';
import emailjs from '@emailjs/browser';
import GlassmorphismComponent from '../components/glassmorphism/glassmorphism-component';
import github from '../assets/toolsIcone/github.svg';
import linkedin from '../assets/linkedin.png';
import useDevice from '../utils/hooks/useDevice';
import { StyleContext } from '../contexts/style.context';

export default function Contact() {
    const { isMobile, orientation } = useDevice();
    const { PageContainer, pageContainerStyle, } = useContext(StyleContext);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_pb82yvi', 'template_lcxba0u', form.current, '690lTCyUWZ-OdtxkO')
    };

    const Form = () => {
        return (
            <FormContainer ref={form} onSubmit={sendEmail}>
                <h2 >Me Contacter</h2>
                <FormField label={"Nom :"} placeholder={"Qui êtes-vous? ..."} type={"text"} name={"user_name"}/>
                <FormField label={"E-mail :"} placeholder={"Votre e-mail..."} type={"email"} name={"user_email"}/>
                <TextArea placeholder={"Votre message..."} />
                <SubmitButtonContainer type="submit" value="Envoyer !" />
            </FormContainer>
        )
    };

    const FormField = ({ label, placeholder, type, name }) => {
        const formfielddiv = { display: "flex", flexDirection: isMobile && "column", width: "100%", justifyContent: "center", alignItems: isMobile ? "center" : "center", marginBottom: 20 };
        const formfieldlabel = { padding: isMobile && "0 0 5px 30px", width: isMobile && "100%", marginRight: !isMobile && 10 };
        const inputStyle = { background: "none", border: "none", borderRadius: "10px", padding: "5px", width: "100%" };
        return (
            <div style={formfielddiv}>
                <label style={formfieldlabel}>{label}</label>
                <GlassmorphismComponent width={isMobile ? orientation === "landscape" ? "65vw" : "55vw" : "80%"} >
                    <input type={type} name={name} placeholder={placeholder} style={inputStyle} />
                </GlassmorphismComponent>
            </div>
        )
    };
    const TextArea = ({ placeholder }) => {
        return (
            <TextAreaContainer>
                <GlassmorphismComponent width={"100%"}>
                    <label>Votre message</label>
                    <textarea name="message" placeholder={placeholder} wrap="soft" rows="15" cols="20" style={{ backgroundColor: "transparent", width: "90%", borderRadius: 5, padding: 5, textAlign: "justify" }} />
                </GlassmorphismComponent>
            </TextAreaContainer>
        )
    };


    // Media
    const IconesLink = ({ source, link, label }) => <IconeLink href={link} target="_blank"><Icone src={source} />{label}</IconeLink>
    const Media = () => {
        return (
            <div style={{ display: "flex", justifyContent: "space-around", width: "100%", marginTop: 20 }}>
                <IconesLink source={github} link={"https://github.com/AnthonyDWeb"} label={"AnthonyDWeb"} />
                <IconesLink source={linkedin} link={"https://www.linkedin.com/in/anthony-delforge-9b0805214"} label={"Anthony Delforge"} />
            </div>
        )
    }


    return (
        <PageContainer style={pageContainerStyle} id='contact'>
            <GlassmorphismComponent width={"70%"}>
                <Form />
                <Media />
            </GlassmorphismComponent>
        </PageContainer>
    )

}


const FormContainer = styled.form`display: flex; flex-direction: column; width: 100%; justify-content: center; align-items: center;
textarea::placeholder { color: white};
input::placeholder { color: white};
`;

const TextAreaContainer = styled.div`
display: flex; width: 100%; justify-content: center; align-items: center; margin-bottom: 20px;
`;

const SubmitButtonContainer = styled.input`
background-color: transparent; border: 1px solid; border-radius: 5px; padding: 5px; margin: 10px; width: fit-content;
:hover {
    color: green;
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
