import { Button, Col, Form, Input, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import bg from '../../assets/images/login/bg.png';
import logo from '../../assets/images/login/logoHivetech.png';

const Login = () => {
  const { t } = useTranslation();
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
              <p>{t('login.header')}</p>
            </div>
            <div className="login--right__content">
              <Form
                name="basic"
                initialValues={{ remember: true }}
                autoComplete="off"
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
                    style={{ color: 'rgba(0, 0, 0, 0.85)' }}
                  >
                    {t('login.forgot-password')}
                  </Link>
                </div>
                <Form.Item>
                  <Button htmlType="submit" type="danger">
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
