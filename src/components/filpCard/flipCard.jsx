import React from 'react'
import styled from 'styled-components'

export function FlipCard({ children, width, height, device }) {
    return (
        <CardContainer device={device}>
            <Card className="card" height={height} width={width} device={device}>
                {children}
            </Card>
        </CardContainer>
    )
}

const CardContainer = styled.div`
display: flex;
perspective: 190vw;

&:hover > .card {
    cursor: pointer;
    transform: ${props => props.device === "desktop" && 'rotateY(180deg)'};
}`;

//  check width image and with container !!!

const Card = styled.div`
    margin: 10px;
    width: ${props => props.width ? `${props.width}px` : "60vw"};
    height: ${props => props.height ? `${props.height}px` : "60vh"};
    position: relative;
    transition: transform 1.5s ease;
    transform-style: preserve-3d;

    &  .front,
    &  .back {
    color: black;
    width: ${props => props.width ? `${props.width}px` : "60vw"};
    height: ${props => props.height ? `${props.height}px` : "60vh"};
    max-height: 90vh;
    border-radius: 1rem;
    position: absolute;
    backface-visibility: hidden;
    }

    & > .back {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #d6d3d3;
    transform: rotateY(180deg);
    gap: 5rem;
    padding: 0 1rem;
    }
`;
