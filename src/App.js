import Logo from './img/logo_spotify.png';
import User from './img/user_img.jpeg';
import Dropdown from './img/dropdown.png';
import Logo2 from './img/logo2.jpg';
import Logo3 from './img/logo3.jpg';
import Logo5 from './img/logo5.png';
import Logo4 from './img/logo4.jpg';
import Logo6 from './img/logo6.png';

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

    ContentBottom,
    ContentBottomText,
    ContentBottomLogos,
    ContentBottomImgRow,
    ContentBottomImg,
    ContentBottomHiddenDiv
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

    const ContentBottomBtn = withStyles(() => ({
        root: {
            color: '#666',
            height: 50,
            width: 280,
            borderRadius: 30,
            marginTop: 30,
            fontWeight: 'bold',
            textDecoration: 'none',
            border: '2px solid #666',

            '&:hover': {
                backgroundColor: '#666',
                color: '#fff',
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

            <ContentBottom>
                <ContentBottomText font={"40px"} bolder={"800"}>É música que você quer?</ContentBottomText>

                <ContentBottomText font={"18px"} mTop={"15px"}>
                    Continue curtindo suas favoritas de onde parou.
                </ContentBottomText>

                <ContentBottomBtn href={"#"}>ABRIR O WEB PLAYER</ContentBottomBtn>

                <ContentBottomLogos>

                    <ContentBottomImgRow>

                        <ContentBottomImg bg={Logo2}>
                            <ContentBottomHiddenDiv></ContentBottomHiddenDiv>
                        </ContentBottomImg>

                        <ContentBottomImg bg={Logo2}>
                            <ContentBottomHiddenDiv></ContentBottomHiddenDiv>
                        </ContentBottomImg>

                        <ContentBottomImg bg={Logo3}>
                            <ContentBottomHiddenDiv></ContentBottomHiddenDiv>
                        </ContentBottomImg>

                    </ContentBottomImgRow>

                    <ContentBottomImgRow>

                        <ContentBottomImg bg={Logo4}>
                            <ContentBottomHiddenDiv></ContentBottomHiddenDiv>
                        </ContentBottomImg>

                        <ContentBottomImg bg={Logo5}>
                            <ContentBottomHiddenDiv></ContentBottomHiddenDiv>
                        </ContentBottomImg>

                        <ContentBottomImg bg={Logo6}>
                            <ContentBottomHiddenDiv></ContentBottomHiddenDiv>
                        </ContentBottomImg>

                    </ContentBottomImgRow>


                </ContentBottomLogos>
            </ContentBottom>
        </Container>
    );
}