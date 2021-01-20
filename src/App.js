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
    const ContentTopBtn = withStyles(() => ({
        root: {
            backgroundColor: '#5DA443',
            color: '#fff',
            height: 55,
            width: 360,
            borderRadius: 30,
            marginTop: 60,
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: 17,


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

                <ContentTopBtn href={"#"}>OBTER SPOTIFY PREMIUM</ContentTopBtn>


                <ContentTopLink href={"#"}>* Sujeito a termos e condições</ContentTopLink>
            </ContentTop>
        </Container>
    );
}