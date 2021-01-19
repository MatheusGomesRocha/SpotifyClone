import Logo from './img/logo_spotify.png';
import User from './img/user_img.jpeg';
import Dropdown from './img/dropdown.png';

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

    ContentTop,
    ContentTopText,
    ContentTopLink,
} from './AppStyled'

import {Button} from '@material-ui/core';

import {
    withStyles,
} from '@material-ui/core/styles';


export default () => {
    const DefaultBtn = withStyles(() => ({
        root: {
            backgroundColor: '#5DA443',
            color: '#fff',
            height: 40,
            width: 400,
            borderRadius: 20,
            marginTop: 45,
            textAlign: 'center',
            fontWeight: 'bold',
            textDecoration: 'none',


            '&:hover': {
                backgroundColor: '#38D45F',
            }
        },
    }))(Button);

    return (
        <Container>
            <Header>
                <HeaderLogo src={Logo}/>

                <HeaderRight>
                    <HeaderLink href={"#"}>Premium</HeaderLink>
                    <HeaderLink href={"#"}>Suporte</HeaderLink>
                    <HeaderLink href={"#"}>Baixar</HeaderLink>

                    <LineDiv></LineDiv>

                    <UserLink href={"#"}>
                        <UserImg src={User}/>
                        Perfil
                        <DropdownImg src={Dropdown}/>
                    </UserLink>
                </HeaderRight>

            </Header>

            <ContentTop>
                <ContentTopText>Vá de Premium. E seja feliz!</ContentTopText>

                <DefaultBtn href={"#"}>OBTER SPOTIFY PREMIUM</DefaultBtn>

                <ContentTopLink href={"#"}>*Pode obter regras de uso</ContentTopLink>
            </ContentTop>
        </Container>
    );
}