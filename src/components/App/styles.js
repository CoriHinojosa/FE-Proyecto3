import styled from 'styled-components';

const AppHeader = styled.header`
padding: 25px;
border-radius: 30px 4px 0px 0px;
background-color: #B5DBEA;
`;

const AppContainer = styled.main`
background-color: #CCECF9;
width: 100%;
height: 1100px;
border-radius: 0px 0px 30px 4px;
margin-right: 10px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
color: #0D3F53;
p {
    font-size: 20px;
}
h1 {
    font-size: 35px;
}
img {
    border-radius: 20px;
    width: 650px;
}
form{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    label {
        font-size: 18px;
        font-style: italic;
    }
    input {
        width: 300px;
        margin-bottom: 20px;
        margin-left: 20px;
        padding: 5px;
    }
}
`;



export { AppContainer, AppHeader };