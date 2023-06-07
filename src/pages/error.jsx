import React, { useContext } from 'react'
import { StyleContext } from '../contexts/style.context';

export default function Error() {
    const { PageContainer, titleStyle } = useContext(StyleContext);
    return (
        <PageContainer style={{height: "40vh" }} id='error'>
            <h1 style={{...titleStyle, margin: 0, padding: 0}}>Le site est actuellement en maintenace</h1>
        </PageContainer>
    )
};
