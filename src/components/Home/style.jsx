import { Skeleton } from "@mui/material";
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
    display: flex;
    justify-content: space-between;
    @media (max-width:600px){
        flex-direction: column;
    }
`


export const Container1 = styled.div`
    width: 50%;
    @media (max-width:600px){
        width: 100%;
    }
`
export const Container2 = styled.div`
    width: 50%;
    @media (max-width:600px){
        width: 100%;
    }
`


export const InnerTitle = styled.h2`
    font-family: 'Lexend';
    margin: 10px;
    color: white;

`
export const Responsive = styled.div`
    width: 100%;
    border: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 10px;
`

export const Box = styled.div`
    width: 300px;
    height: 200px;
    border: ${p=>p.check !==true ? '1px solid #28282e' : ''};
    border-radius: 5px;
    overflow: hidden;
    margin: 10px;
    margin-top: 15px;
    transition: .3s linear;
    &:hover{
        outline: 2px solid #a5a7ff;
        box-shadow: 0px 0px 7px white;
    }
    @media (max-width:1340px){
        width: 100%;
        height: 400px;
    }
    @media (max-width:1000px){
        width: 100%;
        height: 300px;
    }
    @media (max-width:800px){
        width: 100%;
        height: 250px;
    }
    @media (max-width:650px){
        width: 100%;
        height: 220px;
    }
    @media (max-width:600px){
        height: 270px;
        width: 100%;
    }
`

export const BoxImage = styled.img`
    width: 100%;
    height: 160px;
    object-fit: cover;
    cursor: pointer;
    @media (max-width:1340px){
        width: 100%;
        height: 340px;
    }
    @media (max-width:1000px){
        width: 100%;
        height: 260px;
    }
    @media (max-width:800px){
        width: 100%;
        height: 220px;
    }
    @media (max-width:650px){
        width: 100%;
        height: 190px;
    }
    @media (max-width:600px){
        height: 235px;
        width: 100%;
    }

`
export const SkeletonM = styled(Skeleton)`
    width: 100% !important;
    height: 160px !important;
    object-fit: cover !important;
    background-color: rgba(222,222,222,0.2) !important;
    border-radius: 8px !important;
    @media (max-width:1340px){
        width: 100% !important;
        height: 340px !important;
    }
    @media (max-width:1000px){
        height: 260px !important;
    }
    @media (max-width:800px){
        height: 220px !important;
    }
    @media (max-width:650px){
        height: 190px !important;
    }
    @media (max-width:600px){
        height: 235px !important;
        width: 100% !important;
    }

`
export const SkeletonM1 = styled(Skeleton)`
    width: 100% !important;
    height: 30px !important;
    border-radius: 5px !important;
    margin-top: 7px !important;
    background-color: rgba(222,222,222,0.2) !important;



`
export const BoxText = styled.div`
    font-size: 17px;
    margin-top: 2px;
    margin-left: 2px;
    margin-right: 2px;
    cursor: pointer;
    color: white;
    /* transition: .3s linear; */
    &:hover{
        color: rgb(125, 89, 255);
        text-decoration: underline;
    }
`

