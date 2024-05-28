import { useState } from 'react';
import { Form, Input, Button } from 'antd';
// import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Container } from "@containers";
import "./style.scss"

const index = () => {
    const [form] = Form.useForm();
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = async () => {
        try {
          const values = await form.validateFields();
          // Submit the form or make an API call
          console.log('Form submitted:', values);
        } catch (error) {
          const { errorFields } = error;
          const newErrors: Record<string, string> = {};
          errorFields.forEach((field: any) => {
            newErrors[field.name[0]] = field.errors[0];
          });
          setErrors(newErrors);
        }
      };
    interface initialValues {
        email: string;
        first_name: string;
        gender: string;
        last_name: string;
        password: string;
    }
    const initialValues: initialValues = {
        email: "",
        first_name: "",
        gender: "",
        last_name: "",
        password: "",
    };
    return (
        <>
            <Container>
                <Form
                    form={form}
                    onFinish={handleSubmit}
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Username is required' }]}
                        validateStatus={errors.username ? 'error' : ''}
                        help={errors.username}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Email is required' },
                            { type: 'email', message: 'Invalid email address' },
                        ]}
                        validateStatus={errors.email ? 'error' : ''}
                        help={errors.email}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            { required: true, message: 'Password is required' },
                            { min: 6, message: 'Password must be at least 6 characters' },
                        ]}
                        validateStatus={errors.password ? 'error' : ''}
                        help={errors.password}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
                <ToastContainer />
            </Container>
        </>
    );
};

export default index;