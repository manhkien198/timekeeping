import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import LateCheckin from './laterCheckin/lateCheckin';
import ConfirmCheck from './cofirmCheck/confirmCheck';

import './popup.scss';

export default function PopupLaterCheckin({ Visible, setVisibles }) {
  const [confirm, setConfirm] = useState(false);

  const handleConfirm = () => {
    return setConfirm(true);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisibles(false);
  };
  console.log(confirm);
  return (
    <>
      <Modal visible={Visible} onCancel={handleCancel} footer={null}>
        {confirm ? (
          <ConfirmCheck />
        ) : (
          <LateCheckin HandleConfirm={handleConfirm} />
        )}
      </Modal>
    </>
  );
}
