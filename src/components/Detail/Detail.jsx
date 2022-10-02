import React from "react";
import {
  Container,
  ContentWrapper,
  Image,
  Maxwidth,
  Text,
  TextBig,
  Title,
} from "./style";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const { state } = useLocation();

  return (
    <>
      <Container>
        <Maxwidth>
          <Title>Wikipedia</Title>
          <ContentWrapper>
            <Image src={state?.img} alt="" />
            <TextBig>{state?.title}</TextBig>
            <Text>{state?.des}</Text>
          </ContentWrapper>
        </Maxwidth>
      </Container>
      
    </>
  );
};

export default Detail;
