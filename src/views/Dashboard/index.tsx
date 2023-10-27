import { FC, memo } from "react";
import Header from '../../components/Header'
import * as S from "./styles";

const Dashboard: FC = () => {

return(
    <div>
        <Header />
        <S.DashboardContent>
        
        </S.DashboardContent>
    </div>

)
}

export default memo(Dashboard);