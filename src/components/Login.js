import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="./images/cta-logo-one.svg" />
                <SignUp>Get All There</SignUp>
                <Description>Get Premier Access to Raya and the Last Dragon for an 
                    additional fee with a Disney+ subscription. As of 03/26/21, the price of the Disney+
                    and the Disney Bundle will increase by $1.
                </Description>
                <CTALogoTwo src="./images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        content: "";
        background-image: url("./images/login-background.jpg");
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -1;
        opacity: 0.7
    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`

const CTALogoOne = styled.img`

`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063E5;
    font-weight: bold;
    cursor: pointer;
    padding: 17px 0px;
    color: #F9F9F9;
    border-radius: 10px;
    text-align: center;
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    transition: all 250ms;
    
    &:hover {
        background-color: #0483EE;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled.img`
    width: 100%;
    margin-top: 16px;
`