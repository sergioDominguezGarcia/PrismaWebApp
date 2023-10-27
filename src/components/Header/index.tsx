import { FC, memo } from 'react'
import images from '../../assets/images'
import * as S from './styles'

const Header: FC = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.Logo>
          <img src={images.img2} width="100%" height="auto" />
        </S.Logo>
        <S.Title>PRISMA • SEVILLA</S.Title>

      </S.HeaderContent>
    </S.HeaderContainer>
  ) 

}

export default memo(Header)
