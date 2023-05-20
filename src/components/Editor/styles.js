import styled from 'styled-components';
import { breakPoints } from '../../constant/breakPoints';

export const Container = styled.div`
    background-color: transparent;
    .editorClassName {
        display: flex ;
        justify-content: center ;
        align-items: center;
        height: 80vh;
        overflow-y: scroll;
        width: 95%
    }
    .DraftEditor-root {
        width: 60% ;
        background-color: #efefef;
        padding: 20px 40px;
        height: 80%;
    }

    @media screen and (max-width: ${breakPoints.tablet}){
        .editorClassName {
            height: 65vh;
        }
    }
    @media screen and (max-width: ${breakPoints.lm}){
        width: 93%;
        .editorClassName {
            height: 52vh;
        }
    }
`;