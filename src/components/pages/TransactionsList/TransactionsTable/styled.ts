import styled from "styled-components";

export const Card = styled.div`
width: 1390px;
height: 100%;
background: #FFFFFF;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
border-radius: 5px;
`
export const Wrapper = styled.div`
padding: 33px;
display: flex;
`
export const Table = styled.table`
font-family: "Roboto", sans-serif;
width: 1300px;
display: flex;
flex-direction: column;
flex: 1;
`

export const TableHeaderRow = styled.tr`
display: flex;
justify-content: space-between;
padding: 20px;
`
export const TableHeader = styled.th`
display: flex;
flex: 1;
`
export const TableRow = styled.tr`
border-top: 1px solid #E9E9E9; 
display: flex;
padding: 20px;
`

export const TableCell = styled.td`
display: flex;
flex: 1;
`