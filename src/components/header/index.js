import { useState } from 'react';
import { TITLE, SHOW_MODAL } from '../../action/types';
import { useSelector, useDispatch } from 'react-redux';
import { Tooltip } from 'antd';
import { FcDocument } from 'react-icons/fc';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { AiOutlineStar, AiOutlineVideoCamera } from 'react-icons/ai';
import { TfiCommentAlt } from 'react-icons/tfi';
import { IoIosArrowDown } from 'react-icons/io';
import { HiOutlineLockOpen } from 'react-icons/hi';
import { updateTitle } from '../../action/index';
import { options } from '../../constant/options';
import { handleShowModal } from '../../action/index';
import { Container, TitleOptionsContainer, ProfileContainer } from './styles';

const Header = () => {
    
    const data = useSelector((state) => state);
    const { title, showModal } = data || {};
    const [ val, setVal ] = useState(title)
    const dispatch = useDispatch();

    const handleTitleChange = (event) => {
        console.log("event", event.target.value);
        setVal(event.target.value);
    }

    const handleTitleUpdate = () => {
        dispatch(updateTitle({data: val, type: TITLE}));
    }

    const handleModal = () => {
        dispatch(handleShowModal({type: SHOW_MODAL, data: !showModal}))
    }
    return (
        <Container>
            <TitleOptionsContainer>
                <div className='file-icon'>
                <Tooltip 
                    placement="bottom" 
                    title={"Docs Home"}
                    >
                    <FcDocument />
                </Tooltip>
                </div>
                <div className='title-options'>
                    <div className='title'>
                        <input 
                            type="text"
                            value={val}
                            onChange={handleTitleChange}
                            onBlur={handleTitleUpdate}
                        />
                        <p className='star'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Star"}
                            >
                            <AiOutlineStar />
                        </Tooltip>
                        </p>
                    </div>
                    <div className='options'>
                        <p>{options.file}</p>
                        <p>{options.edit}</p>
                        <p>{options.view}</p>
                        <p>{options.insert}</p>
                        <p>{options.format}</p>
                        <p>{options.tools}</p>
                        <p>{options.extensions}</p>
                        <p>{options.help}</p>
                    </div>
                </div>
            </TitleOptionsContainer>
            <ProfileContainer>
                <div className='comment'>
                    <Tooltip 
                        placement="bottom" 
                        title={"Open comment history"}
                        >
                        <TfiCommentAlt />
                    </Tooltip>
                </div>
                <div className='video'>
                    <Tooltip 
                        placement="bottom" 
                        title={"Join a call here or present this tab to the call"}
                        >
                        <AiOutlineVideoCamera />
                        <IoIosArrowDown className='arrow' />
                    </Tooltip>
                </div>
                <div className='share tabletHide' onClick={handleModal}>
                    <p className='lock'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Private to only me"}
                            >
                            <HiOutlineLockOpen />
                        </Tooltip>
                    </p>
                    <p>Share</p>
                </div>
                <div className='share tabletShow' onClick={handleModal}>
                    <p className='lock'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Private to only me"}
                            >
                            <BsFillPersonPlusFill />
                        </Tooltip>
                    </p>
                </div>
                <div className='profile'>
                    <Tooltip 
                        placement="bottom" 
                        title={"Google Profile"}
                        >
                        <img 
                            src='https://static.vecteezy.com/system/resources/thumbnails/015/409/989/small/elegant-man-in-business-suit-with-badge-man-business-avatar-profile-picture-illustration-isolated-vector.jpg' 
                            alt="Profile"
                        />
                    </Tooltip>
                </div>
            </ProfileContainer>
        </Container>
    )
}

export default Header;