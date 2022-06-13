import React, { useState } from 'react';
import { Form, Modal } from 'antd';
import LateCheckin from './laterCheckin/lateCheckin';
import ConfirmCheck from './cofirmCheck/confirmCheck';
import comfirmLate from '../../../../../api/cofirmLate';
import './popup.scss';

const Popup = ({ Visible, setVisibles, item }) => {
  const [click, setClick] = useState(false);
  const [form] = Form.useForm();

  const handleConfirm = async value => {
    try {
      await comfirmLate.post(value);
    } catch (error) {
      console.log('error :', error);
    }
    setClick(true);
  };

  const handleCancel = () => {
    setVisibles(false);
  };

  return (
    <>
      <Modal
        visible={Visible}
        onCancel={handleCancel}
        footer={null}
        className="popup"
        style={{ width: '100%' }}
      >
        {click ? (
          <ConfirmCheck />
        ) : (
          <LateCheckin handleConfirm={handleConfirm} item={item} />
        )}
      </Modal>
    </>
  );
};
export default Popup;
