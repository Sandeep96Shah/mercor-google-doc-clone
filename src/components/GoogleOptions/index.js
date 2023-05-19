import { Tooltip } from 'antd';
import { AiOutlinePlus} from 'react-icons/ai';
import { FcManager, FcCalendar, FcCheckmark, FcIdea } from 'react-icons/fc';
import { urls } from '../../constant/urls';
import { Container } from "./styles";

const GoogleOptions = () => {
    return (
        <Container>
            <div className='options'>
                <div>
                    <Tooltip 
                        placement="bottom" 
                        title={"Calender"}
                        >
                            <a href={`${urls.calender}`}>
                                <FcCalendar />
                            </a>
                    </Tooltip> 
                </div>
                <div>
                    <Tooltip 
                        placement="bottom" 
                        title={"Keep"}
                        >
                            <a href={`${urls.keep}`}>
                                <FcIdea />
                            </a>
                    </Tooltip> 
                </div>
                <div>
                    <Tooltip 
                        placement="bottom" 
                        title={"Tasks"}
                        >
                            <a href={`${urls.task}`}>
                                <FcCheckmark />
                            </a>
                    </Tooltip> 
                </div>
                <div className='m-b'>
                    <Tooltip 
                        placement="bottom" 
                        title={"Contact"}
                        >
                            <a href={`${urls.contact}`}>
                                <FcManager />
                            </a>
                    </Tooltip> 
                </div>
                <div>
                    <Tooltip 
                        placement="bottom" 
                        title={"Get add-ons"}
                        >
                            <a href={`${urls.plus}`}>
                                <AiOutlinePlus />
                            </a>
                    </Tooltip> 
                </div>
            </div>
        </Container>
    )
}

export default GoogleOptions;