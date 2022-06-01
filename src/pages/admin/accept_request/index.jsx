import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import AcceptRequestApi from '../../../api/accept_request/AcceptRequestApi';
import ButtonGroup from '../../../components/ButtonGroup';
import CusomPageHeader from '../../../components/CusomPageHeader';
import Filter from '../../../components/Filter';
import queryString from 'query-string';
import { DEFAULT_LIMIT, DEFAULT_PAGE } from '../../../constants/common';
import { convertArrayToParamsWithDash } from '../../../utils/convertArrayToParamsWithDash';
import TableRequest from './component/TableRequest';

function AcceptRequest(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { reloadTable } = useSelector(item => item.requestAdmin);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [listParam, setListParam] = useState(() => {
    return {
      currentPage: DEFAULT_PAGE,
      limit: DEFAULT_LIMIT,
      keyword: '',
      default: '',
    };
  });

  const getAllRequest = async () => {
    try {
      const { data } = await AcceptRequestApi.getAll(listParam);
      setData(data.list);
      setLoading(true);
    } catch (error) {
      message.error(error);
    }
  };
  useEffect(() => {
    getAllRequest();
  }, [listParam, reloadTable]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [loading]);

  useEffect(() => {
    const newParams = { ...listParam };
    convertArrayToParamsWithDash(newParams);
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(newParams, {
        skipNull: true,
        skipEmptyString: true,
      }),
    });
  }, [listParam]);

  return (
    <div className="acceptRequest">
      <CusomPageHeader title={t('acceptRequestor.request')} />
      <Filter
        listParam={listParam}
        setListParam={setListParam}
        setLoading={setLoading}
      />
      <ButtonGroup
        title={t('acceptRequestor.request')}
        listParam={listParam}
        setListParam={setListParam}
        setLoading={setLoading}
      />
      <div className="table">
        <TableRequest
          data={data}
          setListParam={setListParam}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
    </div>
  );
}

export default AcceptRequest;
