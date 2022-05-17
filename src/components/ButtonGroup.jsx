import { Button } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import DownIcon from './icons/DownIcon';

function ButtonGroup(props) {
  const { t } = useTranslation();
  return (
    <div style={{ marginBottom: 42 }}>
      <Button type="link" style={{ color: '#066F9B', fontWeight: 700 }}>
        {t('page_header.filter')} <DownIcon style={{ marginLeft: 20 }} />
      </Button>
      <Button type="link" style={{ color: '#066F9B', fontWeight: 700 }}>
        {t('page_header.export')}
      </Button>
    </div>
  );
}

export default ButtonGroup;
