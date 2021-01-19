import {
    Container,

    Header,
    HeaderLogo,
    HeaderRight,
    HeaderLink,
    LineDiv,
    UserLink,
    UserImg,
    UserText,
    DropdownImg,
} from './AppStyled'

import Logo from './img/logo_spotify.png';
import User from './img/user_img.jpeg';
import Dropdown from './img/dropdown.png';


export default () => {
    return (
        <Container>
            <Header>
                <HeaderLogo src={Logo}/>

                <HeaderRight>
                    <HeaderLink>Premium</HeaderLink>
                    <HeaderLink>Suporte</HeaderLink>
                    <HeaderLink>Baixar</HeaderLink>

                    <LineDiv></LineDiv>

                    <UserLink>
                        <UserImg src={User}/>
                        <UserText>Perfil</UserText>
                        <DropdownImg src={Dropdown}/>
                    </UserLink>
                </HeaderRight>


            </Header>
        </Container>
    );
}