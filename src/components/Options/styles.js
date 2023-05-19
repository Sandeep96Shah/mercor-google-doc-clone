import styled from 'styled-components';

export const Container = styled.div`
    height: 40px;
    padding: 0px 20px;
    .options {
        height: 100%;
        background-color: #edf2fa;
        border-radius: 20px;
        display: flex;
        align-items: center;
        padding: 0px 10px;
    }

    .firstSet,
    .fifthSet,
    .sixthSet,
    .seventhSet {
        display: flex;
        justify-content: center;
        width: max-content;
        border-right: 0.7px solid grey;
        gap: 2px;
        padding: 0px 10px;
    }

    .icon {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: 5px 7px;
        border-radius: 10px;
        color: black;
        font-size: 18px;
    }
    .icon:hover{
        background-color: #e6e8ea;
    }

    .arrow {
        margin-left: 5px;
    }

    .secondSet,
    .thirdSet, 
    .fourthSet {
        display: flex;
        justify-content: center;
        width: max-content;
        border-right: 0.7px solid grey;
        padding-left: 10px;
        cursor: pointer;
        padding: 5px 10px;
    }

    .secondSet:hover,
    .thirdSet:hover,
    .fourthSet:hover {
        background-color: #e6e8ea;
    }

    .innerText {
        display: flex;
        align-items: center;
        gap: 5px;
        p{
            display: flex;
            font-size: 14px;
            font-weight: 500;
        }
        input {
            width: 25px;
            height: 20px;
            padding-left: 5px;
        }
    }

    .font {
        gap: 20px;
    }

    .gap-5 {
        gap: 5px;
    }

    .editingBox {
        display: flex;
        align-items: center;
        margin-left: 50px;
        padding: 5px 7px;
        border-radius: 20px;
        cursor: pointer;
        .edit {
            display: flex;
            gap: 45px;
            div {
                display: flex;
                gap: 5px;
            }
        }
    }
    .editingBox:hover {
        background-color: #e6e8ea;
    }

    .eighthSet {
        display: flex;
        align-items: center;
        margin-left: 10px;
        padding: 5px 7px;
        border-radius: 10px;
        cursor: pointer;
        font-size: 17px;
    }

    .eighthSet:hover {
        background-color: #e6e8ea;
    }
`;