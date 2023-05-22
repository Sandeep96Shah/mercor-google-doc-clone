import { Modal, Button, AutoComplete, Select } from "antd";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { useSelector, useDispatch } from "react-redux";
import { MdContactSupport } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { SHOW_MODAL } from "../../action/types";
import { handleShowModal } from "../../action";
import "./styles.css";

const emailOptions = [
  {
    value: "sandeep2016shah@gmail.com",
  },
  {
    value: "sandeep@gamil.com",
  },
  {
    value: "shah@gmail.com",
  },
  {
    value: "kumar@gmail.com",
  },
];

const Share = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const { title, showModal } = data || {};

  const handleOk = () => {
    NotificationManager.success('Document share', 'Successfully!');
    dispatch(handleShowModal({ type: SHOW_MODAL, data: false }));
  };
  const handleCancel = () => {
    NotificationManager.success('Link Copied', 'Successfully!');
    dispatch(handleShowModal({ type: SHOW_MODAL, data: false }));
  };
  return (
    <>
    <NotificationContainer />
      <Modal
        open={showModal}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        className="newStyle"
        footer={[
          <Button 
            key="copyLink" 
            className="copyLink" 
            onClick={handleCancel}
            >
            Copy link
          </Button>,
          <Button 
            key="done" 
            type="primary" 
            className="done" 
            onClick={handleOk}
            >
            Done
          </Button>,
        ]}
      >
        <div className="titleContainer">
          <div className="title">
            <p>Share {title}</p>
          </div>
          <div className="options">
            <p className="option">
              <MdContactSupport />
            </p>
            <p className="option">
              <IoSettingsOutline />
            </p>
          </div>
        </div>
        <div className="inputField">
          <AutoComplete
            className="emailOptions"
            options={emailOptions}
            placeholder="Add people and groups"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />
        </div>
        <div className="peopleWithAccess">
          <p className="peopleWithAccessTitle">People With Access</p>
          <div className="container">
            <div className="content">
              <div className="leftSection">
                <div className="profile">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/015/409/989/small/elegant-man-in-business-suit-with-badge-man-business-avatar-profile-picture-illustration-isolated-vector.jpg"
                    alt="Profile"
                  />
                </div>
                <div className="self">
                  <p>Sandeep Shah (You)</p>
                  <p>sandeep2016shah@gmail.com</p>
                </div>
              </div>
              <div className="rightSection">
                <p>Owner</p>
              </div>
            </div>
          </div>
        </div>

        <div className="generalAccess">
          <p className="generalAccessTitle">General Access</p>
          <div className="container">
            <div className="content">
              <div className="leftSection">
                <div className="profile">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Uz2MfgrOjz8_8QAek93k1MhUPYNgqDhDrA&usqp=CAU"
                    alt="Profile"
                  />
                </div>
                <div className="self">
                  <p>
                    <Select
                      bordered={false}
                      defaultValue="Restricted"
                      style={{ width: 170 }}
                      options={[
                        {
                          value: "restricted",
                          label: "Restricted",
                        },
                        {
                          value: "Anyone with the link",
                          label: "anyone with the link",
                        },
                      ]}
                    ></Select>
                  </p>
                  <p>Anyone on the internet with the link can view</p>
                </div>
              </div>
              <div className="rightSection">
                <p>
                  <Select
                    bordered={false}
                    defaultValue="viewer"
                    style={{ width: 90 }}
                    options={[
                      {
                        value: "viewer",
                        label: "Viewer",
                      },
                      {
                        value: "commenter",
                        label: "Commenter",
                      },
                      {
                        value: "editor",
                        label: "Editor",
                      },
                    ]}
                  ></Select>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Share;
