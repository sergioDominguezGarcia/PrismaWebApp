import { FC, memo } from 'react'
import Header from '../../components/Header'
import Card from '../../components/Card'
import { cards } from './constants'
import * as S from './styles'
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from 'reactstrap'

const Dashboard: FC = () => {
  return (
    <S.DashboardContainer>
      <Header />
      
      <S.DashboardContent>
        {cards.map(card => (<Card />))}
      </S.DashboardContent>

    </S.DashboardContainer>
  )
}

export default memo(Dashboard)
