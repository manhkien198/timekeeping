import { Button, Select, Table } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ButtonGroup from '../../../../components/ButtonGroup';
import CusomPageHeader from '../../../../components/CusomPageHeader';
import Filter from '../../../../components/Filter';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
function PersonalStatistic(props) {
  const { t } = useTranslation();
  const { Option } = Select;
  const navi = useNavigate();
  const columns = [
    {
      title: t('personal_statistic.day'),
      dataIndex: 'day',
    },
    {
      title: t('personal_statistic.check_in'),
      dataIndex: 'check_in',
    },
    {
      title: t('personal_statistic.check_out'),
      dataIndex: 'check_out',
    },
    {
      title: t('personal_statistic.ot'),
      dataIndex: 'ot',
    },
    {
      title: t('personal_statistic.come_late'),
      dataIndex: 'come_late',
    },
    {
      title: t('personal_statistic.leave_soon'),
      dataIndex: 'leave_soon',
    },
    {
      title: t('personal_statistic.hours'),
      dataIndex: 'hours',
    },
    {
      title: t('personal_statistic.state_owned'),
      dataIndex: 'state_owned',
    },
    {
      title: t('personal_statistic.note'),
      dataIndex: 'note',
    },
  ];
  const data = [];
  const item = {};
  function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime()),
    );
  }
  columns.forEach((column, id) => {
    item['day'] = moment(randomDate(new Date(2022, 0, 1), new Date())).format(
      'DD/MM',
    );
    item['check_in'] = moment(new Date(2022, 0, 1, 8, 30)).format('HH:mm');
    item['check_out'] = moment(new Date(2022, 0, 1, 4, 50)).format('HH:mm');
    item['ot'] = Math.round(Math.random());
    item['come_late'] = Math.round(Math.random());
    item['leave_soon'] = 12;
    item['hours'] = Math.round(Math.random());
    item['state_owned'] = Math.round(Math.random());
    item['note'] = 'Nghỉ ốm';
    data.push({ ...item });
  });
  return (
    <div className="personal__statistic">
      <CusomPageHeader
        title={
          <Select defaultValue="lucy" style={{ width: 240 }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>

            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        }
        subTitle={`${t('page_header.month')}`}
      />
      <Filter />
      <ButtonGroup
        children={
          <Button
            type="link"
            style={{ color: '#066F9B', fontWeight: 700 }}
            onClick={() => navi('/statistic/personal/edit')}
          >
            {t('personal_statistic.edit')}
          </Button>
        }
      />
      <div className="personal__statistic__total total">
        <h2 className="total__title">{t('personal_statistic.total_work')}</h2>
        <p className="total__number">7.5 / 20</p>
      </div>
      <Table dataSource={data} columns={columns} rowKey="day" />
    </div>
  );
}

export default PersonalStatistic;
