import { Button, Select } from 'antd';
import { Excel } from 'antd-table-saveas-excel';
import { useTranslation } from 'react-i18next';
import generalStatisticApi from '../api/generalStatisticApi';
import { DEFAULT_STYLE_EXCEL } from '../constants/common';
import { exportToExcel } from '../utils/exportToExcel';

function ButtonGroup({
  children,
  title,
  listParam,
  setListParam,
  setLoading,
  total,
  isExport = true,
  items,
  totalWork,
  type = 1,
  totalRecord,
  columns,
}) {
  const { t } = useTranslation();
  const { Option } = Select;

  const cols = columns.map(x => {
    if (x.children?.length) {
      x.children.map(col => {
        if (col.dataIndex === 'total_day_off') {
          col.render = () => 12;
        } else if (col.dataIndex === 'rest') {
          col.render = (_, row) => 12 - row?.pdaysUsed;
        }
        return col;
      });
    }
    return x;
  });

  const handleExportToExcel = data => {
    const newData = data.map((x, idx) => ({
      ...x,
      rest: x.pdaysUsed ? 12 - x.pdaysUsed : 12,
      id: idx + 1,
      total_day_off: 12,
    }));

    const excel = new Excel();

    excel.setTHeadStyle(DEFAULT_STYLE_EXCEL).setTBodyStyle(DEFAULT_STYLE_EXCEL);
    excel
      .addSheet('LOL')
      .addColumns(cols)
      .addDataSource(newData)
      .saveAs('GeneralStatistic.xlsx');
  };

  const handleOk = () => {
    exportToExcel(
      totalRecord,
      listParam,
      generalStatisticApi,
      handleExportToExcel,
    );
  };

  const handleSortByFullName = value => {
    setListParam({ ...listParam, filter: value });
    setLoading(true);
  };
  return (
    <div>
      <Select
        className="filter-select"
        defaultValue={t('page_header.filter')}
        style={{ width: 240 }}
        onChange={handleSortByFullName}
      >
        {items.map(x => (
          <Option value={x.id}>{x.title}</Option>
        ))}
      </Select>
      {children ? children : ''}
      {isExport && (
        <Button
          type="link"
          style={{ color: '#066F9B', fontWeight: 700 }}
          onClick={handleOk}
        >
          {t('page_header.export')}
        </Button>
      )}
      {title !== t('acceptRequestor.request') ? (
        <div
          style={{ marginTop: '20px' }}
          className="personal__statistic__total total"
        >
          <h2 className="total__title">{t('personal_statistic.total_work')}</h2>
          <p className="total__number">
            {type === 1
              ? totalWork
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
