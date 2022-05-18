import React from 'react';
import { useTranslation } from 'react-i18next';
import ButtonGroup from '../../../components/ButtonGroup';
import CusomPageHeader from '../../../components/CusomPageHeader';
import Filter from '../../../components/Filter';
import TableRequest from './component/TableRequest';

function AcceptRequest(props) {
  const { t } = useTranslation();
  return (
    <div className="acceptRequest">
      <CusomPageHeader title={t('acceptRequestor.request')} />
      <Filter />
      <ButtonGroup />
      <div className="table">
        <TableRequest />
      </div>
    </div>
  );
}

export default AcceptRequest;
