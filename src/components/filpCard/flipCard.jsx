import React from 'react'
import styled from 'styled-components'

export function FlipCard({ children, width }) {
    return (
        <CardContainer width={width}>
            <Card className="card" width={width}>
                {children}
            </Card>
        </CardContainer>
    )
}

const CardContainer = styled.div`
display: flex;
perspective: ${props => props.width && (props.width * 1.2)}px;

&:hover > .card {
    cursor: pointer;
    transform: rotateY(180deg);
}`;

const Card = styled.div`
    margin: 10px;
    width: ${props => props.width && (props.width - 20)}px;
    height: ${props => props.height ? `${props.height}px` : "50vh"};
    position: relative;
    transition: transform 1.5s ease;
    transform-style: preserve-3d;

    & >.front,
    & >.back {
    width: ${props => props.width && (props.width - 20)}px;
    height: ${props => props.height ? `${props.height}px` : "50vh"};
    border-radius: 2rem;
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
