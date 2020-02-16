import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  height:130px;
  background: #f2f2f2;
  margin-right: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  text-decoration: none;
  border-radius: 5px;
`;

export const Image = styled.img`
  width: 120px;
  height: 100px;
  margin-right: 10px;
  border-radius: 5px;
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
