import Input from 'antd/lib/input/Input';
import React, { useState } from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
function Filter({ listParam, setListParam, setLoading }) {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const handleSearchForm = () => {
    setListParam({ ...listParam, keyword: value });
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M9.88888 18.7779C14.7981 18.7779 18.7778 14.7982 18.7778 9.88894C18.7778 4.97971 14.7981 1 9.88888 1C4.97969 1 1 4.97971 1 9.88894C1 14.7982 4.97969 18.7779 9.88888 18.7779Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.0001 20.9999L16.1667 16.1665"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </div>
  );
}

export default Filter;
