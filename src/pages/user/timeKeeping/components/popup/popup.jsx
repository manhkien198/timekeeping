import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import LateCheckin from './laterCheckin/lateCheckin';
import ConfirmCheck from './cofirmCheck/confirmCheck';
import comfirmLate from '../../../../../api/cofirmLate';
import './popup.scss';

export default function PopupLaterCheckin({ Visible, setVisibles }) {
  const [click, setClick] = useState(false);
  const [mess, setMess] = useState('');

  const getChekin = async () => {
    try {
      const { request } = await comfirmLate.post(mess);
      setMess(request);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getChekin();
  }, [mess]);

  const handleConfirm = msg => {
    setClick(true);
    setMess(msg);
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
          <LateCheckin HandleConfirm={handleConfirm} mess={mess} />
        )}
      </Modal>
    </>
  );
}
