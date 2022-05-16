import React from 'react';
import { PageHeader } from 'antd';

function CusomPageHeader({ title, subTitle }) {
  return (
    <PageHeader
      className="page-header-content"
      ghost={true}
      title={title}
      subTitle={subTitle}
    ></PageHeader>
  );
}

export default CusomPageHeader;
