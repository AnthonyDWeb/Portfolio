// LIBRARY //
import React, { useContext } from 'react';
// STYLE //
import { StyleContext } from '../contexts/style.context';
// CONTEXT //
// PAGE //
// COMPONENT //
// OTHER //

export default function Error() {
    const { PageContainer, homeTitleStyle } = useContext(StyleContext);
    return (
        <PageContainer style={{ height: "40vh" }} id='error'>
            <h1 style={{ ...homeTitleStyle, margin: 5, padding: 0, textAlign: "center" }}>Le site est actuellement en maintenance, désolé de la gène occasionné</h1>
        </PageContainer>
    )
};
