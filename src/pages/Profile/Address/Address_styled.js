
import styled from 'styled-components';





export const BoxAddress = styled.div`
width:100%;
    background-color: #eeeeee;
    display: grid;
    font-family: Roboto;

`

export const Label = styled.label`
    display: inline-block;
    width:100%;
    grid-area:"Label";
    color: #b8b8b8;
    font-family: Roboto;
    margin: 3vh;
    margin-bottom:1vh;

    /* background-color: pink; */

    /* grid-row-start: 1;
    grid-row-end:2; */
    
`

export const Info = styled.div`
grid-area:"Info";
font-family: Roboto;
    /* background-color:green; */
    /* grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end:2;
    */
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