import React from 'react';
import { useTranslation } from 'react-i18next';

function TotalDayWork(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();
  return (
    <div className="total">
      <h2 className="total__title">{t('personal_statistic.total_work')}</h2>
      <p className="total__number">7.5 / 20</p>
    </div>
  );
}

export default TotalDayWork;
