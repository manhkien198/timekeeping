import { Button, Col, Form, Input, message, Row } from 'antd';
import axios from 'axios';
import qs from 'query-string';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setToken } from '../../api/Cookie';
import bg from '../../assets/images/login/bg.png';
import logo from '../../assets/images/login/logoHivetech.png';
import jwt_decode from "jwt-decode";
import { setUsername } from './authReducer';

const Login = () => {
  const { t } = useTranslation(); 
  const navi = useNavigate();
  const dispatch= useDispatch();
  const onFinish = value => {
    const { username, password } = value;
    axios
      .post(
        process.env.REACT_APP_LOGIN,
        qs.stringify({
          username,
          password,
          client_id: 'auth-platform',
          grant_type: 'password',
        }),
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        },
      )
      .then(response => {
        setToken(response.data.access_token, 'Access_Token');
        setToken(response.data.refresh_token, 'Refresh_Token');
        const accesstokenParsed = jwt_decode(response.data.access_token);
        dispatch(setUsername(accesstokenParsed.preferred_username));
        navi('/');
      })
      .catch(e => {
        if (!e.status) {
          message.error(t('common.disconnect'));
        } else {
          message.error(t('login.unauthentication'));
        }
        navi('/login');
      });
  };
  return (
    <div className="login ">
      <Row justify="space-around" align="middle">
        <Col lg={9} xl={9} className="login--left">
          <img src={bg} alt="" />
        </Col>
        <Col sm={14} md={12} lg={10} xl={7}>
          <div className="login--right">
            <div className="login--right__header">
              <img src={logo} alt="" />
              <p style={{ fontWeight: 700 }}>{t('login.header')}</p>
            </div>
            <div className="login--right__content">
              <Form
                name="basic"
                initialValues={{ remember: true }}
                autoComplete="off"
                onFinish={onFinish}
              >
                <Form.Item
                  label={
                    <span className="field--required">
                      {t('login.username')}
                    </span>
                  }
                  style={{ marginBottom: '12px!important' }}
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: t('login.message-error.username'),
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label={
                    <span className="field--required">
                      {t('login.password')}
                    </span>
                  }
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: t('login.message-error.password'),
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <div style={{ textAlign: 'end', margin: '16px 0' }}>
                  <Link
                    to="/forgotpassword"
                    style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: 14 }}
                  >
                    {t('login.forgot-password')}
                  </Link>
                </div>
                <Form.Item>
                  <Button htmlType="submit" type="danger" className="btn-login">
                    {t('login.title')}
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Login;
