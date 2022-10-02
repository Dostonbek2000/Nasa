import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    color: white;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:500px) {
        align-items: flex-start;
        padding-top: 30px;
    }
`

export const Wrapper = styled.div`
    width: 97%;
    max-width: 900px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const Image = styled.img`
    width: 300px;
    
`

export const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
    box-sizing: border-box;
    width: 100%;
    @media (max-width:500px) {
        flex-direction: column;
    }
`

export const Input = styled.input`
    width: calc(98% - 150px);
    height: 50px;
    border-radius: 8px;
    border: none;
    outline:  none;
    padding-left: 8px;
    padding-right: 8px;
    color: white;
    font-size: 20px;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    transition: .3s linear;
    background: rgba(19,87,152,0.3);
    &::placeholder{
        color: rgba(244,244,244,0.5);
    }
    &:focus{
        transition: .3s linear;
        outline: 2px solid blue;
    }
    @media (max-width:500px) {
        width: 100%;
        text-align: center;
    }
`

export const Button = styled.button`
    width: 150px;
    height: 50px;
    font-size: 20px;
    border: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    outline: none;
    border-radius: 8px;
    &:focus{
        outline: 2px solid blue;
    }
    background: rgba(19,87,152,0.3);
    color: white;
    transition: .3s linear;
    &:hover{
        cursor: pointer;
        color: #9a9aff;
    }
    @media (max-width:500px) {
        width: 100%;
        margin-top: 20px;
    }
`