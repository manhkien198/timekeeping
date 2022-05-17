import { Button, Select } from 'antd';
import { useTranslation } from 'react-i18next';

function ButtonGroup(props) {
  const { t } = useTranslation();
  const { Option } = Select;

  return (
    <div style={{ marginBottom: 42 }}>
      <Select
        className="filter-select"
        defaultValue={t('page_header.filter')}
        style={{ width: 140 }}
      >
        <Option value="asc">ASC</Option>
        <Option value="desc">DESC</Option>
      </Select>

      <Button type="link" style={{ color: '#066F9B', fontWeight: 700 }}>
        {t('page_header.export')}
      </Button>
    </div>
  );
}

export default ButtonGroup;
