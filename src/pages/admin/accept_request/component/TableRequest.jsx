import { message, Modal, Table, Tooltip } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import SuccessRequest from '../../../../assets/images/request/Button/True.png';
import FailRequest from '../../../../assets/images/request/Button/False.png';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import AcceptRequestApi from '../../../../api/accept_request/AcceptRequestApi';
import { useDispatch } from 'react-redux';
import { setReloadTalbe } from '../reducer';
import { checkOrderbyValue } from "../constant";
const TableRequest = props => {
  const { data, loading, setLoading, listParam, setListParam } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleConfirmOk = async value => {
    try {
      const confirm = {
        isAccept: !value.accept,
      };
      const res = await AcceptRequestApi.putRequest(value.id, confirm);
      setLoading(true);
      dispatch(setReloadTalbe());
      message.success(t('acceptRequestor.successUpdate'));
    } catch (error) {
      message.error(t('acceptRequestor.failUpdate'));
    }
  };

  const handleConfirmRequest = value => {
    try {
      Modal.confirm({
        title: (
        <span className="fs-20 fw-bold">{t('acceptRequestor.titleConfirm')}</span>),
        content: ( <span className="fs-15">{t('acceptRequestor.questionConfirm')}</span>),
        icon: <ExclamationCircleOutlined />,
        onOk() {
          handleConfirmOk(value);
        },
        okType: 'danger',
        okText: (<span className="fs-15">{t('acceptRequestor.yes')}</span>),
        cancelText: (<span className="fs-15">{t('acceptRequestor.no')}</span>),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (pagination, filter, sorter) => {

    const params = {
      // page: pagination.current,
      // limit: pagination.pageSize,
      orderby: sorter.order? sorter.field :"",
      sortDirection: sorter.order? sorter.order === 'ascend' ? 'ASC' : 'DESC': ""
      // status: statusFiltered.length ? statusFiltered.join('-') : '',
    };
    setListParam(prev => ({ ...prev, ...params }));
    setLoading(true);
    dispatch(setReloadTalbe());
  };

  const column = [
    {
      title: t('time_keeping.id'),
      dataIndex: 'id',
      align: 'center',
      key: t('time_keeping.id'),
      width: 80,
      render: (id, record, index) => {
        return <span>{index + 1}</span>;
      },
    },
    {
      title: t('acceptRequestor.staff'),
      dataIndex: 'fullName',
      align: 'center',
      key: t('acceptRequestor.staff'),
      width: 150,
      render: (staff, record) => {
        return <span>{record.member.fullName}</span>;
      },
      showSorterTooltip: {
        title: t('request.toolTipStaff'),
      },
      sorter: true,
      defaultSortOrder: checkOrderbyValue(listParam, 'fullName'),
    },
    {
      title: t('acceptRequestor.date'),
      dataIndex: 'date',
      align: 'center',
      key: t('acceptRequestor.date'),
      width: 150,
      render: (date, record) => {
        return <span>{record.date}</span>;
      },
      showSorterTooltip: {
        title: t('request.toolTipDate'),
      },
      sorter: true,
      defaultSortOrder: checkOrderbyValue(listParam, 'date'),
    },
    {
      title: t('acceptRequestor.time'),
      dataIndex: 'lateAt',
      align: 'center',
      key: t('acceptRequestor.time'),
      width: 150,
      render: time => {
        return <span>{time}</span>;
      },
    },
    {
      title: t('acceptRequestor.reason'),
      dataIndex: 'reason',
      align: 'center',
      key: t('acceptRequestor.reason'),
      width: 150,
      render: reason => {
        return (
          <Tooltip title={reason}>
            <span className="reason_content">{reason}</span>
          </Tooltip>
        );
      },
    },
    {
      title: t('acceptRequestor.approve'),
      dataIndex: 'accept',
      align: 'center',
      key: t('acceptRequestor.approve'),
      width: 150,
      render: (approve, record) => {
        return (
          <div>
            {approve ? (
              <img width="22px" height="22px" src={SuccessRequest} alt="" />
            ) : (
              <img width="22px" height="22px" src={FailRequest} onClick={()=>handleConfirmRequest(record)} alt="" />
            )}
          </div>
        );
      },
    },
  
  ];
  return (
    <div>
      <Table
        rowKey={'id'}
        columns={column}
        dataSource={data}
        loading={loading}
        onChange={onChange}
      />
    </div>
  );
};

export default TableRequest;
