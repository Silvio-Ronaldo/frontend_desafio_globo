import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  width: 250px;
  height:100px;
  background: #f2f2f2;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  text-decoration: none;
`;

export const Image = styled.img`
  width: 100px;
  height: 80px;
  margin-right: 10px;
`;

export const Info = styled.div`

`;

export const Title = styled.h1`
  font-size:20px;
  color: #333;
`;

export const Description = styled.p`
  font-size: 15px;
  color: gray;
`;
