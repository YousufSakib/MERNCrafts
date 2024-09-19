import React from "react";
import { Card, Flex, Typography, Form, Input, Button, Spin, Alert } from "antd";
import { Link } from "react-router-dom";

const handleLogin = async (values) => {
  console.log(values);
};

function Login() {
  return (
    <Card className="form-container">
      <Flex>
        {/* form */}
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className="title">
            Sign In
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogan">
            Unlock you world
          </Typography.Text>
          <Form layout="vertical" onFinish={handleLogin} autoComplete="off">
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: `please input your Email name`,
                },
                {
                  type: "email",
                  message: "The input is not valid Email!",
                },
              ]}
            >
              <Input size="large" placeholder="Enter you Email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: `please input your Password`,
                },
              ]}
            >
              <Input size="large" placeholder="Enter you Password" />
            </Form.Item>
            {/* {error && (
              <Alert
                description={error}
                type="error"
                showIcon
                closable
                className="alert"
              />
            )} */}
            <Form-Item>
              <Button
                // type={`${loading ? '' : 'primary'}`}
                htmlType="submit"
                size="large"
                className="btn"
              >
                {/* {loading ? <Spin /> : "Create Account"} */}
                "Sign In"
              </Button>
            </Form-Item>
            <Form-Item>
              <Link to="/">
                <Button size="large" className="btn">
                  Create an account
                </Button>
              </Link>
            </Form-Item>
          </Form>
        </Flex>
      </Flex>
    </Card>
  );
}

export default Login;
