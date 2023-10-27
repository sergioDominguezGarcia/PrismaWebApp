import { FC, memo } from 'react'
import * as S from './styles'

const Header: FC = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.Title>PRISMA SEVILLA</S.Title>
        
        </S.HeaderContent>
    </S.HeaderContainer>
  ) 

}

export default memo(Header)
