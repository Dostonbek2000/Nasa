import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    padding-top: 30px;
`
export const Title = styled.h1`

    padding: 15px;
    padding-left: 10px;
    font-size: 40px;
    color: #287eff;
`

export const Maxwidth = styled.div`
    width: 98%;
    max-width: 1450px;
`
export const ContentWrapper = styled.div`
    width: 100%;
`

export const Image = styled.img`
    width: 100%;
    height: 600px;
    border-radius: 10px;
    object-fit: cover;
    margin-top: 30px;
    @media (max-width:800px){
        height: 400px;
    }
    @media (max-width:500px){
        height: 300px;
    }
`
export const TextBig = styled.h3`
    margin-top: 25px;
`

export const Text = styled.div`
    margin-top: 20px;
`