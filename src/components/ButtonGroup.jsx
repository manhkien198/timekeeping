import { Button, Select } from 'antd';
import { useTranslation } from 'react-i18next';

function ButtonGroup({
  children,
  title,
  listParam,
  setListParam,
  setLoading,
  total,
  totalWork,
  type = 1,
}) {
  const { t } = useTranslation();
  const { Option } = Select;

  const handleSortByFullName = value => {
    setListParam({ ...listParam, sortDirection: value });
    setLoading(true);
  };
  return (
    <div style={{ marginBottom: 42 }}>
      <Select
        className="filter-select"
        defaultValue={t('page_header.filter')}
        style={{ width: 140 }}
        onChange={handleSortByFullName}
      >
        <Option value="ASC">{t('sort.approved')}</Option>
        <Option value="DESC">{t('sort.unapproved')}</Option>
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
          <p className="total__number">
            {type === 1
              ? total
              : total
              ? `${total}/${totalWork}`
              : `0/${totalWork}`}
          </p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default ButtonGroup;
