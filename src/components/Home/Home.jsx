import React, { useEffect, useState } from "react";
import {  Data1, Data2 } from "../../data/data";
import {
  Box,
  BoxImage,
  BoxText,
  Container,
  Container1,
  Container2,
  ContentWrapper,
  InnerTitle,
  Maxwidth,
  Responsive,
  Title,
} from "./style";
import Particles from './Particles';
import {useNavigate} from 'react-router-dom';
import Skeleton from "./Skeleton";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(true);

  let searchword = localStorage.getItem('search') !==null ? localStorage.getItem('search') : ''

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 2000);
  }, []);

  return (
    <>
      <Particles />
      <Container>
        <Maxwidth>
          <Title>NASA</Title>
          <ContentWrapper>
            <Container1>
              <InnerTitle>Earth</InnerTitle>
              <Responsive>
                {
                  loading ?
                  Data1?.slice(0,8).map((item,i)=>(
                    <Skeleton key={i} />
                  )) :
                  Data1?.filter((r)=>{
                    return r.search?.toLowerCase().includes(searchword?.toLowerCase()) 
                  }).map((item, i) => (
                    <Box check={loading} key={i} onClick={()=>navigate('/detail',{state:item})}>
                      <BoxImage src={item.img} />
                      <BoxText>{item.title?.slice(0,29)}...</BoxText>
                    </Box>
                  ))}
              </Responsive>
            </Container1>
            <Container2>
              <InnerTitle>Cosmos</InnerTitle>
              <Responsive>
                 {
                  loading ?
                  Data1?.slice(0,8).map((item,i)=>(
                    <Skeleton key={i} />
                  )) :
                  Data2?.filter((r)=>{
                    return r.search?.toLowerCase().includes(searchword?.toLowerCase()) 
                  }).map((item, i) => (
                    <Box check={loading} key={i} onClick={()=>navigate('/detail',{state:item})}>
                      <BoxImage src={item.img} />
                      <BoxText>{item.title?.slice(0,29)}...</BoxText>
                    </Box>
                  ))}
              </Responsive>
            </Container2>
          </ContentWrapper>
        </Maxwidth>
      </Container>
    </>
  );
};

export default Home;
