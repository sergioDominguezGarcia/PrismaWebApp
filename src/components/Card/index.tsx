import { FC, memo } from 'react'
import * as S from './styles'

const Card: FC = () => {
  return (
    <S.CardContainer>
      <S.CardContent>
        <S.CardHeader>Post</S.CardHeader>
        <S.CardInfo>
          CARDINFO
        </S.CardInfo>
      </S.CardContent>
    </S.CardContainer>
  )
}

export default memo(Card)
