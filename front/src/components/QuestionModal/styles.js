import styled from 'styled-components';

export const Label = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #444444;
  text-align: left;
`;

export const Answer = styled.p`
  font-family: 'Roboto';
  color: #4d85ee;
  font-size: 15px;
  cursor: pointer;
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #dddddd;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #444444;
  text-align: left;
`;

export const Text = styled.p`
  margin-top: 15px;
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #666666;
  line-height: 26px;
  text-align: left;
`;

export const Button = styled.button`
  width: 100%;
  height: 36px;
  padding: 5px;
  border: 0;
  border-radius: 4px;
  background-color: #ee4d64;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
`;
