import { Tooltip } from 'antd';
import { IoIosArrowDown, IoMdColorFilter } from 'react-icons/io';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineBars, AiOutlineAlignLeft } from 'react-icons/ai';
import { BiUndo, BiRedo, BiPrinter, BiPaintRoll, BiZoomIn, BiCommentAdd } from 'react-icons/bi';
import { MdSpellcheck, MdOutlineFormatColorText, MdOutlineFormatListNumbered, MdOutlineFormatClear, MdOutlineEdit, MdKeyboardArrowUp } from 'react-icons/md';
import { BsTypeBold, BsLink } from 'react-icons/bs';
import { BiItalic, BiUnderline, BiAlignLeft } from 'react-icons/bi';
import { CiImageOn, CiIndent } from 'react-icons/ci';
import { VscChecklist } from 'react-icons/vsc';
// VscChecklist
//CiImageOn
import { Container } from './styles';

const Options = () => {
    return (
        <Container>
            <div className='options'>
                <div className='firstSet'>
                    <div className='icon'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Undo"}
                            >
                            <BiUndo />
                        </Tooltip> 
                    </div>
                    <div className='icon'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Redo"}
                            >
                            <BiRedo />
                        </Tooltip> 
                    </div>
                    <div className='icon'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Print"}
                            >
                            <BiPrinter />
                        </Tooltip> 
                    </div>
                    <div className='icon'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Spelling and Grammer check"}
                            >
                            <MdSpellcheck />
                        </Tooltip> 
                    </div>
                    <div className='icon'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Paint format"}
                            >
                            <BiPaintRoll />
                        </Tooltip> 
                    </div>
                    <div className='icon'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Zoom"}
                            >
                            <BiZoomIn />
                        </Tooltip> 
                    </div>
                </div>
                <div className='secondSet'>
                    <div className='normalText'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Styles"}
                            >
                                <div className='innerText'>
                                    <p> Normal text</p>
                                    <p><IoIosArrowDown className='arrow' /></p>
                                </div>
                        </Tooltip> 
                    </div>
                </div>
                <div className='thirdSet'>
                    <div className='normalText'>
                        <Tooltip 
                            placement="bottom" 
                            title={"font"}
                            >
                                <div className='innerText font'>
                                    <p>Arial</p>
                                    <p><IoIosArrowDown className='arrow' /></p>
                                </div>
                        </Tooltip> 
                    </div>
                </div>
                <div className='fourthSet'>
                    <div className='normalText'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Font size"}
                            >
                                <div className='innerText gap-5'>
                                    <p><AiOutlineMinus /></p>
                                    <p><input value={11} /></p>
                                    <p><AiOutlinePlus /></p>
                                </div>
                        </Tooltip> 
                    </div>
                </div>

                <div className='fifthSet'>
                    <div className='icon'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Bold"}
                            >
                            <BsTypeBold />
                        </Tooltip> 
                    </div>
                    <div className='icon'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Italic"}
                            >
                            <BiItalic />
                        </Tooltip> 
                    </div>
                    <div className='icon'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Underline"}
                            >
                            <BiUnderline />
                        </Tooltip> 
                    </div>
                    <div className='icon'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Text color"}
                            >
                            <MdOutlineFormatColorText />
                        </Tooltip> 
                    </div>
                    <div className='icon'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Highlight color"}
                            >
                            <IoMdColorFilter />
                        </Tooltip> 
                    </div>
                </div>

                <div className='sixthSet'>
                    <div className='icon'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Insert link"}
                            >
                            <BsLink />
                        </Tooltip> 
                    </div>
                    <div className='icon'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Add Comment"}
                            >
                            <BiCommentAdd />
                        </Tooltip> 
                    </div>
                    <div className='icon'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Insert Image"}
                            >
                            <CiImageOn />
                        </Tooltip> 
                    </div>
                </div>

                <div className='seventhSet'>
                    <div className='icon'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Align"}
                            >
                            <BiAlignLeft />
                        </Tooltip> 
                    </div>
                    <div className='icon'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Line & Paragraph spacing"}
                            >
                            <AiOutlineAlignLeft />
                        </Tooltip> 
                    </div>
                    <div className='icon'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Checklist"}
                            >
                            <VscChecklist />
                        </Tooltip> 
                    </div>
                    <div className='icon'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Bulleted list"}
                            >
                            <AiOutlineBars />
                        </Tooltip> 
                    </div>
                    <div className='icon'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Numbered list"}
                            >
                            <MdOutlineFormatListNumbered />
                        </Tooltip> 
                    </div>
                    <div className='icon'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Decrease Indent"}
                            >
                            <CiIndent />
                        </Tooltip> 
                    </div>
                    <div className='icon'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Increase Indent"}
                            >
                            <CiIndent />
                        </Tooltip> 
                    </div>
                    <div className='icon'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Clear formatting"}
                            >
                            <MdOutlineFormatClear />
                        </Tooltip> 
                    </div>
                    <div className='editingBox'>
                        <Tooltip 
                            placement="bottom" 
                            title={"Editing mode"}
                            >
                                <div className='edit'>
                                    <div>
                                        <p><MdOutlineEdit /></p>
                                        <p>Editing</p>
                                    </div>
                                    <div>
                                        <p><IoIosArrowDown className='arrow' /></p>
                                    </div>
                                </div>
                        </Tooltip>
                    </div>
                </div>
                <div className='eighthSet'>
                    <div>
                        <Tooltip 
                            placement="bottom" 
                            title={"Hide the menus"}
                            >
                            <MdKeyboardArrowUp />
                        </Tooltip> 
                    </div>
                </div>
            </div>
        </Container>
    )
};

export default Options;