// LIBRARY //
import React, { useContext } from 'react';
import styled from 'styled-components';
// STYLE //
import '../App.css'
// CONTEXT //
import { StyleContext } from '../contexts/style.context';
// PAGE //
// COMPONENT //
import GlassmorphismComponent from '../components/glassmorphism/glassmorphism-component';
// OTHER //

export default function Tools() {
    const { PageContainer, pageContainerStyle, } = useContext(StyleContext);
    const toolsArr = [
        { file: "html.png", name: "HTML" },
        { file: "css.png", name: "CSS" },
        { file: "bootstrap.png", name: "Bootstrap" },
        { file: "javascript.png", name: "Javascript" },
        { file: "jquery.png", name: "Jquery" },
        { file: "typescript.png", name: "Typescript" },
        { file: "react.png", name: "React/Native" },
        { file: "expressJS.webp", name: "ExpressJs" },
        { file: "nodejs.png", name: "NodeJs" },
        { file: "nestjs.png", name: "NestJs" },
        { file: "mongoDB.svg", name: "MongoDB" },
        { file: "mysql.png", name: "Mysql" },
        { file: "postgreSQL.png", name: "PostgreSQL" },
        { file: "java.png", name: "Java" },
        { file: "swiftui.png", name: "SwiftUI" },
        { file: "androidstudio.png", name: "AndroidStudio" },
        { file: "github.svg", name: "Github" },
        { file: "gitlab.png", name: "Gitlab" },
        { file: "figma.png", name: "Figma" },
        { file: "trello.png", name: "Trello" },
        { file: "slack.png", name: "Slack" },
        { file: "notion.png", name: "Notion" },
    ];

    const Slide = ({ n }) => {
        return (
            <div className="slide">
                {toolsArr.map(e => {
                    return (
                        <div key={`${e.file}${n}`} style={{  padding: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", maxWidth: 250 }}>
                            <img src={require(`../assets/toolsIcone/${e.file}`)} width={50} height={50} alt={`icone ${e.name}`} style={{objectFit: "contain"}}/>
                            <p style={{ textAlign: "center" }}>{e.name}</p>
                        </div>
                    )
                })}
            </div>
        )
    }


    return (
        <PageContainer style={pageContainerStyle} id='tools'>
            <GlassmorphismComponent>
                <h2>Outils</h2>
                <div className="wrapper">
                    <div className="slider">
                        <Slide n={1} />
                        <Slide n={2} />
                        <Slide n={3} />
                    </div>
                </div>
            </GlassmorphismComponent>
        </PageContainer>
    )
}


