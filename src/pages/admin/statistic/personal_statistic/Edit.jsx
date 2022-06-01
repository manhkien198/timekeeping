import { Button, DatePicker, Form, Input, message, Select } from 'antd';
import { t } from 'i18next';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BodApi from '../../../../api/bodApi';
import editApi from '../../../../api/editApi';
import personalStatisticApi from '../../../../api/personalStatisticApi';
import SelectUsers from '../../../../components/SelectUsers';
import { TIME_OPTIONS } from '../../../../constants/common';
import { filterOption } from '../../../../utils/filterOption';

function Edit(props) {
  const [form] = Form.useForm();
  const [reasonTypeList, setReasonTypeList] = useState([]);
  const [userSelected, setUserSelected] = useState();
  const [bodList, setBodList] = useState([]);
  const onFinish = async value => {
    try {
      await editApi.edit(
        {
          ...value,
          date: moment(value.date).format('YYYY-MM-DD'),
        },
        userSelected,
      );
    } catch (error) {
      console.log('error :', error);
    }
  };
  const { Option } = Select;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
  };
  const navi = useNavigate();
  const fetchReasonType = async () => {
    try {
      const response = await personalStatisticApi.getReasonType();
      setReasonTypeList(response.data);
    } catch (error) {
      message.error(error.message);
    }
  };
  const fetchBodListeners = async () => {
    try {
      const resp = await BodApi.getAll();
      setBodList(resp.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchReasonType();
    fetchBodListeners();
    form.setFieldsValue({
      reasonTypeId: reasonTypeList ? reasonTypeList[0]?.id : 1,
    });
  }, []);
  useEffect(() => {
    form.setFieldsValue({
      reasonTypeId: reasonTypeList ? reasonTypeList[0]?.id : 1,
      subDate: 1,
    });
  }, [reasonTypeList]);
  const handleDateChange = async (date, dateString) => {
    try {
      const resp = await editApi.getValueForm({
        username: userSelected,
        date: dateString,
      });
      form.setFieldsValue({
        checkInTime: resp.data?.checkInTime,
        checkOutTime: resp.data?.checkOutTime,
        overTime: resp.data?.overTime,
        resonTypeId: resp.data?.resonType?.id,
        reason: resp.data?.reason,
        approver: resp.data?.approver,
        note: resp.data?.note,
      });
    } catch (error) {
      console.log('error :', error);
    }
  };
  return (
    <div className="edit-form">
      <div className="edit-user">
        <SelectUsers
          userSelected={userSelected}
          setUserSelected={setUserSelected}
        />
      </div>
      <Form
        className="form"
        {...formItemLayout}
        form={form}
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          label={t('personal_statistic.day')}
          colon={true}
          name="date"
          className="form-control"
          rules={[{ required: true, message: t('edit.date_msg') }]}
          required={true}
          requiredMark
        >
          <DatePicker
            style={{ width: '100%' }}
            onChange={handleDateChange}
            format="DD/MM/YYYY"
          />
        </Form.Item>
        <Form.Item
          label={t('sidebar.time_keeping')}
          colon={true}
          className="form-control"
        >
          <Form.Item
            style={{
              display: 'inline-block',
              width: 'calc(50% - 12px)',
              marginRight: 24,
            }}
            name="checkInTime"
            className="form-control"
          >
            <Input placeholder={t('personal_statistic.check_in')} />
          </Form.Item>
          <Form.Item
            name="checkOutTime"
            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
            className="form-control"
            rules={[
              {
                validator(rule, value, callback) {
                  if (form.getFieldValue('checkInTime') && !value) {
                    callback(t('edit.checkOutTime_msg'));
                  }
                  callback();
                },
              },
            ]}
          >
            <Input placeholder={t('personal_statistic.check_out')} />
          </Form.Item>
        </Form.Item>

        <Form.Item
          className="form-control"
          name="overTime"
          colon={true}
          label="OT"
          rules={[
            {
              validator(rule, value, callback) {
                if (form.getFieldValue('reasonTypeId') && !value) {
                  callback(t('edit.time_msg'));
                }
                callback();
              },
            },
          ]}
        >
          <Input placeholder={t('personal_statistic.enter_time')} />
        </Form.Item>

        <Form.Item
          label={t('personal_statistic.absent')}
          colon={true}
          name="reasonTypeId"
          className="form-control"
        >
          <Select
            showSearch
            optionFilterProp="children"
            filterOption={filterOption}
          >
            {reasonTypeList.map(x => (
              <Option key={x.id} value={x.id}>
                {x.type}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label={t('personal_statistic.reason')}
          colon={true}
          name="reason"
          className="form-control"
          rules={[
            {
              validator(rule, value, callback) {
                if (form.getFieldValue('reasonTypeId') && !value) {
                  callback(t('edit.reason_msg'));
                }
                callback();
              },
            },
          ]}
        >
          <Input placeholder={t('personal_statistic.enter_reason')} />
        </Form.Item>
        <Form.Item
          label={t('personal_statistic.acceptor')}
          colon={true}
          name="approver"
          className="form-control"
          rules={[
            {
              validator(rule, value, callback) {
                if (form.getFieldValue('reasonTypeId') && !value) {
                  callback(t('edit.acceptor_msg'));
                }
                callback();
              },
            },
          ]}
        >
          <Select
            style={{
              width: 300,
              color: '#066f9b',
              fontWeight: 700,
              fontSize: 30,
            }}
            showSearch
            filterOption={filterOption}
          >
            {bodList.map(x => (
              <Option key={x.username} value={x.username}>
                {x.fullName}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label={t('personal_statistic.note')}
          colon={true}
          name="note"
          className="form-control"
        >
          <Input placeholder={t('personal_statistic.enter_note')} />
        </Form.Item>
        <Form.Item className="btn-group-wrapper">
          <div className="btn-group">
            <Button type="danger" onClick={() => form.resetFields()}>
              {t('personal_statistic.reset')}
            </Button>
            <Button type="danger" htmlType="submit">
              {t('personal_statistic.update')}
            </Button>
            <Button type="primary" onClick={() => navi('/statistic/personal')}>
              {t('personal_statistic.cancel')}
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Edit;
