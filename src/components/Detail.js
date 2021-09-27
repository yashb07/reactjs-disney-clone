import React from 'react'
import styled from 'styled-components';

function Detail() {
    return (
        <Container>
            <Background>
                <img src="./images/details-loki.jpg"/>
            </Background>
            <ImageTitle>
                <img src="./images/details-loki-title.png"/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="./images/play-icon-black.png"/>
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img src="./images/play-icon-white.png"/>
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="./images/group-icon.png"/>
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                1 Season . 6 Episodes . Superhero . U/A . 13+ . Marvel
            </SubTitle>
            <Description>
                The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes places after the events of "Avengers: Endgame".
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    // min-height: 170px;
    width: 35vw;
    // min-width: 200px;
    margin-top: 60px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb(249, 249, 249);
    border: none;
    padding: 0px 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`

const AddButton = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    margin-right: 16px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        font-size: 30px;
        color: white;
    }
    
`

const GroupWatchButton = styled(AddButton)`
    background: black;
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    // padding
    margin-top: 16px;
    color: rgb(249, 249, 249);
    width: 45%;
`