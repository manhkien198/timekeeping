import React, {useState} from 'react'
import { Button, Modal} from 'antd'
import LateCheckin from './laterCheckin/lateCheckin'
import Close from '../../icon/close'

export default function PopupLaterCheckin({Visible,setVisibles}) {

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(<LateCheckin />);


  const handleOk = () => {
    setModalText();
    setConfirmLoading(true);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisibles(false);
  };
  console.log(Visible)
  return (
    <div>
      <Modal
        title="Title"
        visible={Visible}
        
        onCancel={handleCancel}
        footer={null}
      >
        <p>{modalText}</p>
        <Button type='submit' onClick={handleOk}>Lý do Check in Muộn</Button>
        
      </Modal>
    </div>
  )
}
