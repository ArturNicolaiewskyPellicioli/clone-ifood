
import styled from 'styled-components';

export const BoxAddress = styled.div`
  width:100vw;
  background-color: #eeeeee;
  display: grid;
  font-family: Roboto;
`

export const AddressTitle = styled.p`
    display: inline-block;
    width:100%;
    grid-area:"Label";
    color: #b8b8b8;
    font-weight: none;
    margin: 3vh;
    margin-bottom:2vh;
`

export const Info = styled.div`
grid-area:"Info";
font-family: Roboto;
`
export const Img = styled.img`
  background-color: #eeeeee;
  height: 3vh;
`
export const Button = styled.button`
grid-area:"Button";

text-align:center;
  color: black;
  border:none;
  background-color:white;
  background-color: #eeeeee;
  margin-right: 4vh;
`
export const MiniBlock =styled.div`
margin-top: 0;
margin-bottom: 3vh;
margin-left:3vh;
display:grid;
grid-template-columns: 3fr 1fr;
font-family: Roboto;

`