// LIBRARY //
import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
// STYLE //
import '../App.css';
// CONTEXT //
import { StyleContext } from '../contexts/style.context';
// PAGE //
// COMPONENT //
import GlassmorphismComponent from '../components/glassmorphism/glassmorphism-component';
// OTHER //
import useDevice from '../utils/hooks/useDevice';
import github from '../assets/toolsIcone/github.svg';
import linkedin from '../assets/linkedin.png';
import { ThemeContext } from '../contexts/theme.context';

export default function Contact() {
    const { isMobile } = useDevice();
    const { PageContainer, pageContainerStyle, isLoad } = useContext(StyleContext);
    const { theme,themeColor } = useContext(ThemeContext);

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

    const Field = ({ label, placeholder, type, name }) => {
        return (
            <FormFields theme={themeColor} type={type} isSpecial={theme === "Spécial"}>
                {name === "message" ?
                    <TextAreaContainer name="message" wrap="soft" rows="15" cols="20" placeholder={placeholder} />
                    :
                    <input type={type} name={name} placeholder={placeholder} />
                }
            </FormFields>
        )
    }

    const Form = () => {
        const btnValue = isSend ? "Email envoyé !" : "Envoyer"
        return (
            <GlassmorphismComponent width={"80vw"}>
                <h2 style={{ color: themeColor.text, marginBottom: 10 }}>Me Contacter</h2>
                <FormContainer ref={form} onSubmit={sendEmail}>
                    <Field label={"Nom :"} placeholder={"Qui êtes-vous? ..."} type={"text"} name={"user_name"} />
                    <Field label={"E-mail :"} placeholder={"Votre e-mail ..."} type={"email"} name={"user_email"} />
                    <Field label={"Message :"} placeholder={"Votre message ..."} type={""} name={"message"} />
                    <SubmitButtonContainer type="submit" value={btnValue} theme={themeColor} />
                </FormContainer>
            </GlassmorphismComponent>
        )
    };


    // Media
    const IconesLink = ({ source, link, label, className }) => <IconeLink href={link} target="_blank" theme={themeColor}><Icone src={source} className="iconsocialnetworks" />{label}</IconeLink>;

    const Media = () => {
        const githubLabel = isMobile ? <span style={{ textAlign: "center" }}>Mon<br />Github</span> : "AnthonyDWeb";
        const linkedinLabel = isMobile ? <span>Anthony<br />Delforge</span> : "Anthony Delforge";
        return (
            <div style={{ display: "flex", justifyContent: "space-around", width: "100%", marginTop: 20, }}>
                <IconesLink source={github} link={"https://github.com/AnthonyDWeb"} label={githubLabel} />
                <IconesLink source={linkedin} link={"https://www.linkedin.com/in/anthony-delforge-9b0805214"} label={linkedinLabel}/>
            </div>
        )
    }


    return (isLoad &&
        <PageContainer style={{ ...pageContainerStyle }} id='contact' className={"animate__animated animate__backIn"}>
            <Form />
            <Media />
        </PageContainer>
    )

}


const FormContainer = styled.form`
display: flex; flex-direction: column; width: 100%; justify-content: center; align-items: center;
`;
const FormFields = styled.div`
display: flex; align-items: center; flex-wrap: wrap; width: 100%; margin-bottom: 1rem;
& textArea, input {
    min-width: ${props => props.type === "email" ? "60%" : "40%"}; color: ${props => props.theme.text};
    &::placeholder { color: ${props => props.theme.text}};
}
& input {
    flex-grow: 0; flex-basis: 200px; border-radius: 8px; padding: 5px 10px; outline: none; background: none;
    border-color: ${props => props.isSpecial && props.theme.text}
}
& textArea { text-align: justify; border-color: ${props => props.isSpecial && props.theme.text}}
`;

const TextAreaContainer = styled.textarea`
background-color: transparent; width: 100%; border-radius: 5px; padding: 5px; text-align: justify; margin-top: 10px;
`;

const SubmitButtonContainer = styled.input`
cursor: pointer; background: none; padding: 5px 8px; border-radius: 5px; color: ${props => props.theme.text}; border: 1px solid ${props => props.theme.text};
&:hover {
    background-color: ${props => props.theme.text}; color: ${props => props.theme.navbar}; font-weight: bold;
}
`;

const IconeLink = styled.a`
display: flex;
flex-direction: column;
align-items: center;
margin: 5px;

`;

const Icone = styled.img`
width: 50px;
height: 50px;
`;
