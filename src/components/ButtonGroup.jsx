import { Button, Select } from 'antd';
import { useTranslation } from 'react-i18next';

function ButtonGroup({ children, title, listParam, setListParam, setLoading }) {
  const { t } = useTranslation();
  const { Option } = Select;

  const handleSortBy = value => {
    setListParam({ ...listParam, sortDirection: value });
    setLoading(true);
  };
  return (
    <div style={{ marginBottom: 42 }}>
      <Select
        className="filter-select"
        defaultValue={t('page_header.filter')}
        style={{ width: 140 }}
        onChange={handleSortBy}
      >
        <Option value="ASC">ASC</Option>
        <Option value="DESC">DESC</Option>
      </Select>
      {children ? children : ''}
      <Button type="link" style={{ color: '#066F9B', fontWeight: 700 }}>
        {t('page_header.export')}
      </Button>
      {title !== t('acceptRequestor.request') ? (
        <div
          style={{ marginTop: '20px' }}
          className="personal__statistic__total total"
        >
          <h2 className="total__title">{t('personal_statistic.total_work')}</h2>
          <p className="total__number">7.5 / 20</p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default ButtonGroup;
