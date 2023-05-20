import styled from 'styled-components';
import {breakPoints} from '../../constant/breakPoints';
import { colors } from '../../constant/color';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;
`;

export const TitleOptionsContainer = styled.div`
    min-width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;

    .file-icon {
        font-size: 35px;
        display: flex;
        cursor: pointer;
    }
    .title-options {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    .title {
        display: flex;
        align-items: center;
        gap: 10px;
        color: ${colors.title};
        height: 20px;
        line-height: 22px;
        font-size: 18px;
        padding-left: 6px;
        .star {
            height: 30px;
            width: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
        .star:hover {
            background-color: ${colors.starHover};
            border-radius: 50%;
        }
    }

    .title input {
        max-width: min-content;
        font-weight: 500;
        border: none;
        font-size: 18px;
        font-variant-ligatures: no-contextual;
        height: 20px;
        line-height: 22px;
        min-width: 1px;
        padding: 1px 6px;
        color: ${colors.title};
    }
    .title input:hover {
        border: 1px solid ${colors.titleHover};
        border-radius: 4px;
    }
    .options {
        display: flex;
        color: ${colors.options};
        font-size: 14px;
        letter-spacing: .2px;
        cursor: pointer;
        p {
            padding: 2px 7px;
            border-radius: 4px;
        }
        p:hover {
            background-color: ${colors.optionsHover};
        }
    }

    @media screen and (max-width: ${breakPoints.tablet}){
        .title input {
            text-overflow: ellipsis;
        }
    }

    @media screen and (max-width: ${breakPoints.lm}){
        justify-content: start;
        min-width: 1px;
        .options {
            display: none;
        }
        .title input {
            max-width: 40px;
        }
    }
`;

export const ProfileContainer = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    padding-right: 20px;
    .profile {
        height: 40px;
        width: 40px;
        cursor: pointer;
        img {
            height: 100%;
            width: 100%;
            border-radius: 50%;
        }
    }

    .comment, 
    .video {
        font-size: 23px;
        height: 40px;
        width: max-content;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 50px;
        border-radius: 20px;
        cursor: pointer;
    }
    .video {
        padding: 2px 10px;
    }
    .arrow {
        margin-left: 5px;
        font-size: 20px;
    }
    .comment:hover,
    .video:hover {
        background-color: ${colors.videoCommentHover};
    }

    .share {
        display: flex;
        height: 40px;
        align-items: center;
        gap: 5px;
        border-radius: 20px;
        padding: 0px 18px;
        cursor: pointer;
        background-color: ${colors.shareBG};
        color: ${colors.share};
        font-size: 14px;
        font-weight: 500;
        .lock {
            font-size: 22px;
        }
    }
    .share:hover {
        box-shadow: 0px 0px 2px 1px ${colors.shareHover};
    }

    .tabletShow {
        display: none;
    }

    @media screen and (max-width: ${breakPoints.tablet}) {
        gap: 8px;
        .tabletShow {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .tabletHide {
            display: none;
        }
    }

    @media screen and (max-width: ${breakPoints.lm}) {
        width: auto;
        gap: 4px;
        .comment,
        .video {
            width: auto;
        }
    }
`;