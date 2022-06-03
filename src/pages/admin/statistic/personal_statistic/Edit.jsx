import {
  Button,
  DatePicker,
  Form,
  Input,
  message,
  Select,
  TimePicker,
} from 'antd';
import { t } from 'i18next';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BodApi from '../../../../api/bodApi';
import editApi from '../../../../api/editApi';
import personalStatisticApi from '../../../../api/personalStatisticApi';
import SelectUsers from '../../../../components/SelectUsers';
import { filterOption } from '../../../../utils/filterOption';
import { useDispatch, useSelector } from 'react-redux';
import { setReasonTypeList } from './reducer';
function Edit() {
  const [form] = Form.useForm();
  const [userSelected, setUserSelected] = useState();
  const [bodList, setBodList] = useState([]);
  const [isOt, setIsOt] = useState(false);
  const [isSelect, setIsSelect] = useState(true);
  const dispatch = useDispatch();
  const reasonTypeList = useSelector(
    state => state.personalStatistic.reasonTypeList,
  );
  const onFinish = async value => {
    try {
      await editApi.edit(
        {
          ...value,
          date: moment(value.date).format('DD/MM/YYYY'),
          checkInTime: moment(value.time[0]).format('HH:mm:ss'),
          checkOutTime: moment(value.time[1]).format('HH:mm:ss'),
        },
        userSelected,
      );
      message.success(t('edit.edit_success'));
      navi('/statistic/personal');
    } catch (error) {
      message.error(error.message);
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
      dispatch(setReasonTypeList(response.data));
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
  }, []);
  const handleDateChange = async (date, dateString) => {
    try {
      const resp = await editApi.getValueForm({
        username: userSelected,
        date: dateString,
      });
      form.setFieldsValue({
        time: [
          moment(resp.data?.checkInTime, 'HH:mm'),
          moment(resp.data?.checkOutTime, 'HH:mm'),
        ],
        overTime: resp.data?.overTime,
        reasonTypeId: resp.data?.reasonType?.id,
        reason: resp.data?.reason,
        approver: resp.data?.approver,
        note: resp.data?.note,
      });
    } catch (error) {
      message.error(error.message);
    }
  };
  const handleOtChange = () => {
    if (form.isFieldTouched('overTime') && form.getFieldValue('overTime')) {
      setIsOt(true);
    } else {
      setIsOt(false);
    }
  };
  const handleSelectChange = () => {
    if (
      form.isFieldTouched('reasonTypeId') &&
      form.getFieldValue('reasonTypeId')
    ) {
      setIsSelect(true);
    } else {
      setIsSelect(false);
    }
  };

  return (
    <div className="edit-form">
      <div className="edit-user">
        <SelectUsers setUserSelected={setUserSelected} />
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
          name="time"
        >
          <TimePicker.RangePicker />
        </Form.Item>

        <Form.Item
          className="form-control"
          name="overTime"
          colon={true}
          label={t('general_table.ot')}
        >
          <Input
            placeholder={t('personal_statistic.enter_time')}
            onChange={handleOtChange}
            disabled={isSelect}
          />
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
            onChange={handleSelectChange}
            disabled={isOt}
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
            <Button
              type="danger"
              onClick={() => {
                form.resetFields();
                setIsSelect(false);
                setIsOt(false);
              }}
            >
              {t('personal_statistic.reset')}
            </Button>
            <Button type="primary" htmlType="submit">
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
