import styled from 'styled-components';


export const LabelsProfile = styled.div`
 width: 100%;
 font-family: Roboto;
`

export const UserBox = styled.div`
  display: grid;
  width: 100%;
  font-family: Roboto;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  margin-top: 3vh;
  gap: 5px;
`
export const Button = styled.button`
  text-align:center;
  color: black;
  border:none;
  background-color:white;
  grid-column-start:2;
  grid-row-start:1;
  grid-row-end: 4;
`

export const Img = styled.img`
  height: 3vh;
`
export const LabelOrder = styled.label`
  margin-top: 3vh;
  margin-bottom:3vh;
  text-align:center;
  grid-column-start: 1;
  grid-column-end: 2;
  font-family: Roboto;
  width:100%;
  /* border-bottom: solid black 1px; */
`

export const MiniGrid = styled.div`
  /* display:grid; */
  border-bottom: 1px solid black;
    width: 100%;
  margin: 1rem 0;
  grid-template-columns: 1fr 1fr 1fr;
`