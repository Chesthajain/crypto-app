import React, {useEffect, useState} from 'react';
import axios from "axios";
import { server } from "../index";
import {
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack
} from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent"


const Exchnages = () => {

  const [loading,setLoading] = useState(true);



  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ):(
        <>
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
          {Exchnages.map((i) => (
            <ExchangeCard
            key={i.id}
            name={i.id}
            img={i.image}
            rank={i.trust_score_rank}
            url={i.url}
            />
          ))}
        </HStack>
        </>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, img, rank, url}) => (
  <a href={url} target={"blank"}>
    <VStack
    w={"52"}
    shadow={"lg"}
    p={"8"}
    borderRadius={"lg"}
    transition={"all 0.3s"}
    m={"4"}
    css={{
      "&:hover": {
        transform: "scale(1.1)",
      },
    }}
    >
      <Image 
      src={img}
      w={"10"}
      h={"10"}
      objectFit={"contain"}
      alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1}>
        {rank}
      </Heading>
      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
);

export default Exchnages