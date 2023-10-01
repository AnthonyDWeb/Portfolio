// LIBRARY //
import React, { useContext } from 'react';
// STYLE //
import '../App.css'
// CONTEXT //
import { StyleContext } from '../contexts/style.context';
// PAGE //
// COMPONENT //
import GlassmorphismComponent from '../components/glassmorphism/glassmorphism-component';
import Slider from '../components/slider/slider';
// OTHER //

export default function Tools() {
    const { PageContainer, isLoad } = useContext(StyleContext);

    const toolsArr = [
        { imgFileName: "html.png", imgLabel: "HTML" },
        { imgFileName: "css.png", imgLabel: "CSS" },
        { imgFileName: "bootstrap.png", imgLabel: "Bootstrap" },
        { imgFileName: "javascript.png", imgLabel: "Javascript" },
        { imgFileName: "jquery.png", imgLabel: "Jquery" },
        { imgFileName: "typescript.png", imgLabel: "Typescript" },
        { imgFileName: "react.png", imgLabel: "React/Native" },
        { imgFileName: "expressJS.webp", imgLabel: "ExpressJs" },
        { imgFileName: "nodejs.png", imgLabel: "NodeJs" },
        { imgFileName: "nestjs.png", imgLabel: "NestJs" },
        { imgFileName: "mongoDB.svg", imgLabel: "MongoDB" },
        { imgFileName: "mysql.png", imgLabel: "Mysql" },
        { imgFileName: "postgreSQL.png", imgLabel: "PostgreSQL" },
        { imgFileName: "java.png", imgLabel: "Java" },
        { imgFileName: "swiftui.png", imgLabel: "SwiftUI" },
        { imgFileName: "androidstudio.png", imgLabel: "AndroidStudio" },
        { imgFileName: "github.svg", imgLabel: "Github" },
        { imgFileName: "gitlab.png", imgLabel: "Gitlab" },
        { imgFileName: "figma.png", imgLabel: "Figma" },
        { imgFileName: "trello.png", imgLabel: "Trello" },
        { imgFileName: "slack.png", imgLabel: "Slack" },
        { imgFileName: "notion.png", imgLabel: "Notion" },
    ];

    return (isLoad &&
        <PageContainer id='tools' className={"animate__animated animate__backIn"}>
            <GlassmorphismComponent>
                <h2 style={{color: "white"}}>Outils</h2>
                <Slider data={toolsArr} />
            </GlassmorphismComponent>
        </PageContainer>
    )
};