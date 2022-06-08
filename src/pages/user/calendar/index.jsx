import React from 'react';
import { Typography, PageHeader, DatePicker, Select } from 'antd';
import DownOutline from '../timeKeeping/icon/downOutline';
import './calender.scss';
import { useTranslation } from 'react-i18next';

const iconDown = <DownOutline />;
const { Title } = Typography;
const { Option } = Select;

function Request(props) {
  const { t } = useTranslation();
  const ask = [
    t('request.resignation'),
    t('request.overtime'),
    t('request.late'),
  ];

  return (
    <>
      <PageHeader style={{ padding: '0' }}>
        <Title style={{ padding: '0px 19px' }} level={2}>
          {t('request.request')}:
          <Title
            style={{
              display: 'inline',
              color: '#066F9B',
              marginLeft: '0.8rem',
            }}
            level={2}
          >
            <Select
              defaultValue={t('request.resignation')}
              suffixIcon={iconDown}
              style={{
                color: '#066F9B',
              }}
              bordered={false}
              size="large"
            >
              {ask.map((as, index) => (
                <Option
                  key={index}
                  style={{
                    fontSize: '30px',
                    fontWeight: '700',
                    color: '#066F9B',
                  }}
                >
                  {as}
                </Option>
              ))}
            </Select>
          </Title>
        </Title>
      </PageHeader>
    </>
  );
}

export default Request;
