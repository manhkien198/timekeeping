import { Button, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import Icon from './Icon';
function Filter({ listParam, setListParam, setLoading }) {
  const { t } = useTranslation();
  const { Search } = Input;
  const handleSearchForm = value => {
    setListParam({ ...listParam, keyword: value.trim() });
    setLoading(true);
  };
  return (
    <div className="filter">
      <Search
        placeholder={t('filter.search')}
        className="filter__input"
        defaultValue={listParam.keyword || ''}
        onSearch={handleSearchForm}
        enterButton={
          <Button type="link">
            <Icon />
          </Button>
        }
      />
    </div>
  );
}

export default Filter;
