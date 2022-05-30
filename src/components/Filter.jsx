import Input from 'antd/lib/input/Input';
import React, { useState } from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import Icon from './Icon';
function Filter({ listParam, setListParam, setLoading }) {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const handleSearchForm = () => {
    setListParam({ ...listParam, keyword: value.trim() });
    setLoading(true);
  };
  return (
    <div className="filter">
      <Input
        placeholder={t('filter.search')}
        onChange={e => setValue(e.target.value)}
        className="filter__input"
      />
      <Button type="link" onClick={handleSearchForm}>
        <Icon />
      </Button>
    </div>
  );
}

export default Filter;
