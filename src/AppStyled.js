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
`;
export const HeaderLogo = styled.img`
    width: 135px;
    height: 135px;
    margin: 0 0 20px 40px;
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
    margin-right: 32px;
`;
export const LineDiv = styled.div`
    height: 15px;
    width: 1px;
    background-color: #fff;
    margin-right: 35px;
`;
export const UserLink = styled.a`
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const UserImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 20px;
`;
export const UserText = styled.span`
    color: #fff;
    font-weight: bold;
    margin-left: 15px;
`;
export const DropdownImg = styled.img`
    width: 15px;
    height: 15px;
    margin: 5px 0 0 10px;

`;