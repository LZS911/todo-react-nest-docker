import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ILoginForm } from '.';
import ThemeBase from '../../components/ThemeBase';
import useUserConfig from '../../customHooks/useUserConfig';
import LoginInput from './LoginInput';

const targetPath = '/dashboard';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [form] = useForm<ILoginForm>();
  const { setLoginUserInfo, setLoginState } = useUserConfig();
  const handleLogin = async () => {
    const { emailAddress } = await form.validateFields();
    setLoginUserInfo({
      username: 'Gll Ly',
      emailAddress,
      userProfile: 'Default user',
    });
    setLoginState({
      token: 'df3fd3',
      isLogin: true,
    });
    navigate(targetPath);
  };

  return (
    <div className="flex min-h-screen w-screen min-w-full flex-col bg-gradient-to-r from-pink-300 via-purple-300 to-sky-500 dark:from-slate-900 dark:to-stone-900">
      <div className="mt-6 ml-6 flex items-center ">
        <img src="/static/images/logo.svg" className="mr-3" />
        <span className="text-2xl text-white">
          {t('login.loginHeader.title')}
        </span>
      </div>
      <div className="mt-8 flex items-center justify-center ">
        <ThemeBase.Paper className="rounded-md p-6 sm:w-[280px] md:w-[300px] lg:w-[350px] ">
          <div className="my-8 text-center text-xl font-black">
            {t('login.loginTitle')}
          </div>
          <Form<ILoginForm> form={form} onFinish={handleLogin}>
            <Form.Item
              rules={[
                {
                  required: true,
                },
              ]}
              name="emailAddress"
              initialValue="demo@gamil.com"
            >
              <LoginInput
                label={t('login.loginForm.usernameLabel')}
                placeholder={t('login.loginForm.usernamePlaceholder')}
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                },
              ]}
              name="password"
              initialValue="6666"
              extra={
                <div className="mt-1 text-end">
                  <a className="text-xs text-black opacity-90 hover:!text-sky-500 dark:text-white">
                    {t('login.loginForm.forgotPassword')}
                  </a>
                </div>
              }
            >
              <LoginInput
                label={t('login.loginForm.passwordLabel')}
                placeholder={t('login.loginForm.passwordPlaceholder')}
                prefix={<LockOutlined />}
                type="password"
              />
            </Form.Item>

            <Form.Item>
              <div className="text-center">
                <button
                  type="submit"
                  className="relative w-full rounded-xl bg-gradient-to-r from-pink-300 via-purple-300 to-sky-500 py-2 text-base text-white after:water-wave-hide active:after:water-wave-show dark:from-slate-900 dark:to-stone-900"
                >
                  {t('login.loginForm.submitText')}
                </button>
              </div>
            </Form.Item>
          </Form>

          <div className="mt-10 text-center">
            <span className="text-xs text-black opacity-90 dark:text-white">
              {t('login.otherWayLogin')}
            </span>

            <div className="mt-4 mb-20 flex justify-center text-center">
              <a>
                <img src="/static/images/qq.svg" className="mr-3" />
              </a>
              <a>
                <img src="/static/images/wechat.svg" className="mr-3" />
              </a>
              <a>
                <img src="/static/images/weibo.svg" className="mr-3" />
              </a>
            </div>

            <a className="text-xs text-black opacity-90 hover:!text-sky-500 dark:text-white">
              {t('login.signUpTips')}
            </a>
          </div>
        </ThemeBase.Paper>
      </div>
    </div>
  );
};

export default Login;
