import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  #app {
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 30px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    height: 100hv;
  }

  #app main {
    margin-left: 30px;
    height: 100hv;
  }

  @media (max-width: 1000px) {
    #app {
      flex-direction: column;
      height: 100hv;
    }

    #app main {
      margin-left: 0;
      margin-top: 30px;
      height: 100hv;
    }

    #app aside {
      width: 100hv; 
      height: 100hv;
    }
  }

  .div-main-body{
    height: 75vh;
    border-radius: 15px;
  }

  .program-card-link:link{
    text-decoration: none;  
  }

  .program-card-link{
    color: black; 
  }
`;

export const Item = styled(Link)`
  width: 200px;
  height:200px;
  background: red;
`;



