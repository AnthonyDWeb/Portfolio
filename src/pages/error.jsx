import React, { useContext } from 'react'
import { StyleContext } from '../contexts/style.context';

export default function Error() {
    const { PageContainer, titleStyle } = useContext(StyleContext);
    return (
        <PageContainer style={{height: "40vh" }} id='error'>
            <h1 style={{...titleStyle, margin: 5, padding: 0, textAlign: "center"}}>Le site est actuellement en maintenance, désolé de la gène occasionné</h1>
        </PageContainer>
    )
};
