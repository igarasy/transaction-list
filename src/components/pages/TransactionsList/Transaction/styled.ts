import styled from 'styled-components'
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  align-items: center;
  width: 100%;
  margin-bottom: 44px;
`

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;

  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  white-space: nowrap;
`

export const StyledButton = styled.button`
  background-color: #4f46e5;
  color: white;
  width: 189px;
  height: 56px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 22px;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  margin-top: 79px;
  margin: 61px;
  align-items: center;
`
