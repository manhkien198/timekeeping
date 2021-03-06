import { message } from 'antd';
import { ID_DESC } from '../constants/common';
import i18n from '../translation/i18n';

export const exportToExcel = async (
  totalRecords,
  listParams,
  fetchApi,
  handleExportToExcel,
  nth = false,
  pageNumber = 1,
) => {
  const calculateNth = (index, filter) => {
    const orderby = filter.orderby;
    const curPage = filter.page;
    const numberPerPage = filter.limit;
    if (orderby?.includes(ID_DESC))
      return totalRecords - index - (curPage - 1) * numberPerPage;
    return (curPage - 1) * numberPerPage + index + 1;
  };

  try {
    if (!totalRecords) {
      message.error({
        content: i18n.t('general_table.emptyData'),
        duration: 1,
      });
    } else {
      message.loading({
        content: i18n.t('general_table.loadingData', {
          pageNumber,
          total: Math.ceil(totalRecords / 100),
        }),
        key: 'export-request',
        duration: 0,
      });
      const newParams = {
        ...listParams,
        page: pageNumber,
        limit: 100,
      };
      // call api with full record ( limit = totalRecords )
      const response = await fetchApi.getAll(newParams);
      const items = nth
        ? response.data.logTimeReportList.map((item, i) => ({
            ...item,
            id: calculateNth(i, newParams),
          }))
        : response.data.logTimeReportList;
      if (items && items.length > 0) {
        handleExportToExcel(items);
        pageNumber++;
        if (pageNumber <= Math.ceil(totalRecords / 100)) {
          exportToExcel(
            totalRecords,
            listParams,
            fetchApi,
            handleExportToExcel,
            pageNumber,
          );
        } else {
          message.success({
            content: i18n.t('general_table.loaded'),
            key: 'export-request',
            duration: 2,
          });
        }
      }
    }
  } catch (error) {
    message.error(i18n.t('general_table.failToFetchList'));
  }
};
