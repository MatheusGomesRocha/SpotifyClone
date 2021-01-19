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
    text-decoration: none;
    
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
    margin-right: 20px;
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
`;
