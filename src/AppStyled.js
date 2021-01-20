import styled from 'styled-components';

export const Container = styled.div``;
export const Header = styled.div`
    height: 80px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 999;
    
    @media(min-width: 1200px) {
       justify-content: space-around;
    }
`;
export const HeaderLogo = styled.img`
    width: 135px;
    height: 135px;
    margin: 0 0 20px 28px;
`;
export const HeaderRight = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-right: 35px;
`;
export const HeaderLink = styled.a`
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    height: 80px;
    margin-right: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    :hover {
        color: #38D45F;
    }
`;
export const LineDiv = styled.div`
    height: 15px;
    width: 1px;
    background-color: #fff;
    margin-right: 35px;
`;
export const UserLink = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    
    :hover {
        color: #38D45F;
    }
`;
export const UserImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: 15px;
`;
export const DropdownImg = styled.img`
    width: 15px;
    height: 15px;
    margin: 5px 0 0 10px;
`;


export const ContentTop = styled.div`
    height: 640px;
    width: 100%;
    background-color: #F2B155;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const ContentTopText = styled.span`
    color: #fff;
    font-size: 80px;
    font-weight: bold;
    text-align: center;
    width: 80%;
`;
export const ContentTopLink = styled.a`
    color: #eee;
    font-size: 12px;
    position: relative;
    top: 115px;
    
    :hover {
        color: #fff;
    }
`;


export const ContentBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70px;
`;
export const ContentBottomText = styled.span`
    font-size: ${props => props.font || '16px'};
    margin-top: ${props => props.mTop};
    font-weight: ${props => props.bolder || 'normal'};
    font-family:  'Noto Sans JP', sans-serif;
`;
export const ContentBottomLogos = styled.div`
    margin: 70px 0;
`;
export const ContentBottomImgRow = styled.div`
    display: flex;
`;
export const ContentBottomImg = styled.div`
    background-image: url(${props => props.bg});
    max-width: 350px;
    height: 310px;
    margin: 8px;
    box-shadow: 0px -2px 6px 0px rgba(0,0,0,0.44);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    @media(min-width: 1200px) {
        width: 360px;
        height: 360px;
    }
`;
export const ContentBottomHiddenDiv = styled.div`
    background-color: transparent;
    width: 310px;
    height: 310px;

    :hover {
        background-color: rgba(0, 0, 0, 0.6);
        animation: fadein 0.5s;
        cursor: pointer;
    }
    
    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
    
    @media(min-width: 1200px) {
        width: 360px;
        height: 360px;
    }
`;