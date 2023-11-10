import styled from 'styled-components'
// import MenuIcon from '@mui/icons-material/Menu'

export const HeaderContainer = styled.div`
  /* border: 1px solid red; */
`
export const HeaderContent = styled.div`
  /* border: 1px solid green; */
  background-color: #000000;
  height: 5rem;
  display: flex;
`

export const ItemContainer = styled.h2`
  border: 1px solid blue;
  width: 100%;
  justify-content: right;
  display: flex;

  gap: 1rem;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #000000eb;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
  }
`

export const Item = styled.h2`
  border: 1px solid blue;

  gap: 2.5rem;
  text-align: center;
  color: white;
  font-size: 18px;
  margin-right: 18px;

`

export const Logo = styled.div`

  /* border: 1px solid blue; */
  height: auto;
  width: 7rem;
`

// export const Burguer = styled(MenuIcon)`

// `