import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { auth } from "../../service/auth";
import { setCookies } from "../../utils/cookies";
import { initialValuesLogin } from "../../types/interface";
import { schemaLogin } from "../../utils/validation";
import "./style.scss";

const Index = () => {
  const navigate = useNavigate();

  const handleFinish = async (values) => {
    try {
      const response = await auth.signin(values);
      if (response.status === 200) {
        setCookies("access_token", response?.data?.access_token);
        setCookies("refresh_token", response?.data?.refresh_token);
        setCookies("user_id", response?.data?.id);
        message.success("Successfully logged in");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      message.error("Error: " + error);
      console.error(error);
    }
  };
  const initialValues: initialValuesLogin = {
    email:  "",
    password:  "",
};

  return (
    <div className="w-full flex items-center justify-center">
      <div className="max-w-[710px] w-full py-10 px-20 rounded-tl-[30px] rounded-br-3xl shadow-[30px]">
        <h1 className="text-center mb-5 text-[36px] font-bold text-gray-500">
          Tizimga kirish
        </h1>
        <Form
          initialValues={initialValues}
          onFinish={handleFinish}
          className="w-full flex flex-col gap-[15px]"
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              className="w-[100%] mb-3"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
              className="w-[100%] mb-3"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-[100%]"
            >
              kirish
            </Button>
          </Form.Item>
        </Form>
        <p className="text-[20px] text-sky-500 pt-2 flex items-center justify-between">
          Ro'yxatdan o'tmaganmisiz ?{" "}
          <span
            className="hover:text-sky-700 duration-200 cursor-pointer"
            onClick={() => {
              navigate("/signup");
            }}
          >
            → Ro'yxatdan o'tish
          </span>
        </p>
      </div>
    </div>
  );
};

export default Index;
