import React, { useContext } from 'react';
import styled from 'styled-components';
import '../App.css'
import GlassmorphismComponent from '../components/glassmorphism/glassmorphism-component';
import { StyleContext } from '../contexts/style.context';

export default function Tools() {
    const { PageContainer, pageContainerStyle, } = useContext(StyleContext);
    const toolsArr = [
        { file: "html.png", name: "HTML" },
        { file: "css.png", name: "CSS" },
        { file: "bootstrap.png", name: "Bootstrap" },
        { file: "javascript.png", name: "Javascript" },
        { file: "jquery.png", name: "Jquery" },
        { file: "typescript.png", name: "Typescript" },
        { file: "react.png", name: "React/ Native" },
        { file: "expressJS.webp", name: "Express Js" },
        { file: "nodejs.png", name: "Node Js" },
        { file: "nestjs.png", name: "Nest Js" },
        { file: "mongoDB.svg", name: "Mongo DB" },
        { file: "mysql.png", name: "Mysql" },
        { file: "postgreSQL.png", name: "PostgreSQL" },
        { file: "java.png", name: "Java" },
        { file: "swiftui.png", name: "Swift UI" },
        { file: "androidstudio.png", name: "Android Studio" },
        { file: "github.svg", name: "Github" },
        { file: "gitlab.png", name: "Gitlab" },
        { file: "figma.png", name: "Figma" },
        { file: "trello.png", name: "Trello" },
        { file: "slack.png", name: "Slack" },
        { file: "notion.png", name: "Notion" },
    ];


    return (
        <PageContainer style={pageContainerStyle}  id='tools'>
            <GlassmorphismComponent>
                <h2>Outils</h2>
                <div className="wrapper">
                    <div className="slider">
                        <div className="slide">
                            {toolsArr.map(e => {
                                return (
                                    <div key={e.file}>
                                        <img src={require(`../assets/toolsIcone/${e.file}`)} width={80} height={80} alt={`icone ${e.name}`} />
                                        <p style={{ textAlign: "center" }}>{e.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="slide">
                            {toolsArr.map(e => {
                                return (
                                    <div key={`${e.file}2`}>
                                        <img src={require(`../assets/toolsIcone/${e.file}`)} width={80} height={80} alt={`icone ${e.name}`} />
                                        <p style={{ textAlign: "center" }}>{e.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </GlassmorphismComponent>
        </PageContainer>
    )
}


