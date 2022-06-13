export const dataRequest = [
  {
    id: 1,
    staff: 'Nhan vien 1',
    reason: 'Quen dien thoai',
    approve: true,
  },
];
export const checkOrderbyValue = (listParams, field)=>{
    let orderBy = '';
    if (listParams?.orderby) {
      const arrFromOrder = listParams.orderby.split('-');
      if (arrFromOrder[0] === field) {
        orderBy = arrFromOrder[1] === 'ASC' ? 'ascend' : 'descend';
      }
    }
  
    return orderBy;
  };