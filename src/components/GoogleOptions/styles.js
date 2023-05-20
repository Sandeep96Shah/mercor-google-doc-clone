import styled from 'styled-components';
import { breakPoints } from '../../constant/breakPoints';

export const Container = styled.div`
    width: 70px;
    height: 300px;
    background-color: white;
    position: fixed;
    top: 80px;
    right: 5px;
    .options {
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
    }
    .options div {
        cursor: pointer;
        font-size: 23px;
    }
    .m-b {
        margin-bottom: 1px solid grey;
    }

    @media screen and (max-width: ${breakPoints.lm}){
        width: 60px;
    }
`;